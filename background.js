let isPrivacyEnabled = false; // true에서 false로 변경
let isProcessing = false;

function log(message) {
  // console.log(`[Privacy Extension] ${message}`);
}

function updateIcon() {
  const iconName = isPrivacyEnabled ? "icon_on" : "icon_off";
  chrome.action.setIcon({
    path: {
      16: `icons/${iconName}_16.png`,
      48: `icons/${iconName}_48.png`,
      128: `icons/${iconName}_128.png`,
    },
  });
  log(`Icon updated: ${iconName}`);
}

async function loadStateAndUpdateIcon() {
  try {
    const data = await chrome.storage.local.get("toggle");
    isPrivacyEnabled = data.toggle === true; // == true에서 === true로 변경하여 더 엄격한 비교를 수행
    updateIcon();
    log(`Loaded state: ${isPrivacyEnabled ? "on" : "off"}`);
  } catch (error) {
    log(`Error loading state: ${error}`);
    isPrivacyEnabled = false; // true에서 false로 변경
    updateIcon();
  }
}

async function saveHistory() {
  log("Saving history...");
  let allHistory = [];
  const chunkSize = 1000;
  let startTime = 0;
  let totalItems = 0;

  try {
    while (true) {
      const chunk = await chrome.history.search({
        text: "",
        startTime: startTime,
        maxResults: chunkSize,
      });

      if (chunk.length === 0) break;

      allHistory = allHistory.concat(chunk);
      startTime = chunk[chunk.length - 1].lastVisitTime + 1;
      totalItems += chunk.length;
      log(`Fetched ${totalItems} history items so far...`);
    }

    const historyChunks = [];
    for (let i = 0; i < allHistory.length; i += chunkSize) {
      historyChunks.push(allHistory.slice(i, i + chunkSize));
    }

    // 새로운 키로 데이터 저장
    const timestamp = Date.now();
    for (let i = 0; i < historyChunks.length; i++) {
      await chrome.storage.local.set({ [`savedHistory_${timestamp}_${i}`]: historyChunks[i] });
      log(`Saved history chunk ${i + 1}/${historyChunks.length}`);
    }

    await chrome.storage.local.set({
      latestHistorySave: timestamp,
      historyChunkCount: historyChunks.length,
    });
    log(`History saving completed. Total chunks: ${historyChunks.length}`);
  } catch (error) {
    log(`Error saving history: ${error.message}`);
  }
}

async function clearHistory() {
  log("Clearing history...");
  try {
    await chrome.history.deleteAll();
    log("History cleared successfully");
  } catch (error) {
    log(`Error clearing history: ${error.message}`);
  }
}

async function restoreHistory() {
  log("Restoring history...");
  try {
    const { latestHistorySave, historyChunkCount } = await chrome.storage.local.get(["latestHistorySave", "historyChunkCount"]);

    if (latestHistorySave && historyChunkCount) {
      for (let i = 0; i < historyChunkCount; i++) {
        const { [`savedHistory_${latestHistorySave}_${i}`]: chunk } = await chrome.storage.local.get(`savedHistory_${latestHistorySave}_${i}`);
        if (chunk) {
          for (const item of chunk) {
            await chrome.history.addUrl({ url: item.url });
          }
          log(`Restored history chunk ${i + 1}/${historyChunkCount}`);
        } else {
          log(`Warning: Missing history chunk ${i + 1}`);
        }
      }
      log("History restoration completed");
    } else {
      log("No saved history found to restore");
    }
  } catch (error) {
    log(`Error restoring history: ${error.message}`);
  }
}
// 파비콘 URL을 생성하는 함수
function getFaviconUrl(url) {
  return `chrome://favicon/size/16@2x/${url}`;
}

async function saveBookmarks() {
  log("Saving bookmarks...");
  try {
    const bookmarks = await chrome.bookmarks.getTree();
    const timestamp = Date.now();
    await chrome.storage.local.set({
      [`savedBookmarks_${timestamp}`]: bookmarks,
      latestBookmarkSave: timestamp,
    });
    log("Bookmarks saved successfully");
  } catch (error) {
    log(`Error saving bookmarks: ${error.message}`);
  }
}

async function clearBookmarks() {
  log("Clearing bookmarks...");
  try {
    const bookmarks = await chrome.bookmarks.getTree();
    for (const root of bookmarks) {
      if (root.children) {
        for (const child of root.children) {
          await removeBookmarksRecursively(child);
        }
      }
    }
    log("Bookmarks cleared successfully");
  } catch (error) {
    log(`Error clearing bookmarks: ${error.message}`);
  }
}

async function clearExistingBookmarks() {
  const existingBookmarks = await chrome.bookmarks.getTree();
  for (const root of existingBookmarks) {
    if (root.children) {
      for (const child of root.children) {
        if (child.id !== "1" && child.id !== "2") {
          // 북마크 바와 기타 북마크 폴더는 유지
          await chrome.bookmarks.removeTree(child.id);
        }
      }
    }
  }
}

async function removeBookmarksRecursively(node) {
  if (node.children) {
    for (const child of node.children) {
      await removeBookmarksRecursively(child);
    }
  }
  if (node.url) {
    await chrome.bookmarks.remove(node.id);
  } else if (node.id !== "0" && node.id !== "1" && node.id !== "2") {
    // 루트 폴더(0: 루트, 1: 북마크 바, 2: 기타 북마크)를 제외하고 삭제
    await chrome.bookmarks.removeTree(node.id);
  }
}

async function restoreBookmarksRecursively(node, parentId = undefined) {
  if (node.id === "0") {
    // 루트 노드
    for (const child of node.children) {
      await restoreBookmarksRecursively(child);
    }
  } else if (node.id === "1" || node.id === "2") {
    // 북마크 바 또는 기타 북마크
    for (const child of node.children || []) {
      await restoreBookmarksRecursively(child, node.id);
    }
  } else {
    let newNode;
    if (node.url) {
      newNode = await chrome.bookmarks.create({
        parentId: parentId,
        title: node.title,
        url: node.url,
      });
      // 파비콘 URL 생성 및 적용
      const faviconUrl = getFaviconUrl(node.url);
      await updateBookmarkFavicon(newNode.id, faviconUrl);
    } else {
      newNode = await chrome.bookmarks.create({
        parentId: parentId,
        title: node.title,
      });
    }
    for (const child of node.children || []) {
      await restoreBookmarksRecursively(child, newNode.id);
    }
  }
}

// 북마크의 파비콘을 업데이트하는 함수
async function updateBookmarkFavicon(bookmarkId, faviconUrl) {
  try {
    // Chrome API를 사용하여 북마크의 파비콘을 업데이트합니다.
    // 현재 Chrome 확장 API에는 이 기능이 직접적으로 제공되지 않으므로,
    // 대신 북마크 트리를 새로 고치는 이벤트를 발생시킵니다.
    await chrome.bookmarks.get(bookmarkId);
    chrome.bookmarks.onChanged.dispatch(bookmarkId);
  } catch (error) {
    console.error(`Error updating favicon for bookmark ${bookmarkId}:`, error);
  }
}

async function restoreBookmarks() {
  log("Restoring bookmarks...");
  try {
    const { latestBookmarkSave } = await chrome.storage.local.get("latestBookmarkSave");
    if (latestBookmarkSave) {
      const { [`savedBookmarks_${latestBookmarkSave}`]: savedBookmarks } = await chrome.storage.local.get(`savedBookmarks_${latestBookmarkSave}`);
      if (savedBookmarks && savedBookmarks.length > 0) {
        await clearExistingBookmarks();
        for (const root of savedBookmarks) {
          await restoreBookmarksRecursively(root);
        }
        log("Bookmarks restored successfully");
      } else {
        log("No saved bookmarks found to restore");
      }
    } else {
      log("No saved bookmark data found");
    }
  } catch (error) {
    log(`Error restoring bookmarks: ${error.message}`);
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ toggle: false }, () => {
    // true에서 false로 변경
    loadStateAndUpdateIcon();
  });
  log("Extension installed");
});

chrome.runtime.onStartup.addListener(() => {
  loadStateAndUpdateIcon();
  log("Extension started");
});

chrome.action.onClicked.addListener(async () => {
  if (isProcessing) {
    log("Toggle action ignored: still processing previous action");
    return;
  }

  isProcessing = true;
  isPrivacyEnabled = !isPrivacyEnabled;
  await chrome.storage.local.set({ toggle: isPrivacyEnabled });

  log(`Privacy mode toggled: ${isPrivacyEnabled ? "on" : "off"}`);

  try {
    if (isPrivacyEnabled) {
      await saveHistory();
      await clearHistory();
      await saveBookmarks();
      await clearBookmarks();
    } else {
      await restoreHistory();
      await restoreBookmarks();
    }
  } catch (error) {
    log(`Error during toggle operation: ${error.message}`);
    // 오류 발생 시 이전 상태로 롤백
    isPrivacyEnabled = !isPrivacyEnabled;
    await chrome.storage.local.set({ toggle: isPrivacyEnabled });
    log(`Rolled back to previous state due to error: ${isPrivacyEnabled ? "on" : "off"}`);
  } finally {
    isProcessing = false;
    updateIcon();
  }
});

chrome.webNavigation.onCommitted.addListener(async (details) => {
  if (details.frameId === 0) {
    await loadStateAndUpdateIcon(); // 상태를 매번 새로 로드
    if (!isPrivacyEnabled) {
      chrome.history.deleteUrl({ url: details.url });
      log(`Deleted history entry for URL: ${details.url}`);
    }
  }
});

// 초기 상태 로드 및 아이콘 업데이트
loadStateAndUpdateIcon();
log("Background script initialized");

// 스토리지 변경 감지
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "local" && "toggle" in changes) {
    isPrivacyEnabled = changes.toggle.newValue == true;
    updateIcon();
    log(`Privacy mode updated from storage: ${isPrivacyEnabled ? "on" : "off"}`);
  }
});

chrome.tabs.onCreated.addListener(async (tab) => {
  const { toggle } = await chrome.storage.local.get("toggle");
  if (toggle && tab.pendingUrl === "chrome://newtab/") {
    chrome.tabs.update(tab.id, { url: "default_newtab.html" });
  }
});
