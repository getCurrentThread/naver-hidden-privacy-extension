let isPrivacyEnabled = true;

function updateIcon() {
  const iconName = isPrivacyEnabled ? "icon_on" : "icon_off";
  chrome.action.setIcon({
    path: {
      16: `icons/${iconName}_16.png`,
      48: `icons/${iconName}_48.png`,
      128: `icons/${iconName}_128.png`,
    },
  });
}

function loadStateAndUpdateIcon() {
  chrome.storage.local.get("toggle", (data) => {
    isPrivacyEnabled = data.toggle !== false;
    updateIcon();
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ toggle: true }, () => {
    loadStateAndUpdateIcon();
  });
});

chrome.runtime.onStartup.addListener(() => {
  loadStateAndUpdateIcon();
});

chrome.action.onClicked.addListener(() => {
  isPrivacyEnabled = !isPrivacyEnabled;
  chrome.storage.local.set({ toggle: isPrivacyEnabled }, () => {
    updateIcon();
  });
});

// 새 탭이 열릴 때 실행되는 리스너 추가
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl === "chrome://newtab/") {
    chrome.storage.local.get("toggle", (data) => {
      if (data.toggle === false) {
        chrome.tabs.update(tab.id, { url: "chrome://new-tab-page" });
      }
    });
  }
});

loadStateAndUpdateIcon();
