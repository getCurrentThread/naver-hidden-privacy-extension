// 바로가기 목록 (localStorage에서 관리)
let shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [
  { name: "Google", url: "https://www.google.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "Maps", url: "https://maps.google.com" },
];

function getFavicon(url) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=64`;
}

function createShortcutElement(shortcut, index) {
  const shortcutElement = document.createElement("a");
  shortcutElement.className = "shortcut";
  shortcutElement.href = shortcut.url;

  const faviconUrl = getFavicon(shortcut.url);

  shortcutElement.innerHTML = `
        <div class="shortcut-icon">
            <img src="${faviconUrl}" alt="${shortcut.name}" class="favicon">
        </div>
        <div class="shortcut-name">${shortcut.name}</div>
        <button class="delete-button" data-index="${index}"></button>
    `;
  return shortcutElement;
}

function loadShortcuts() {
  const container = document.getElementById("shortcuts");
  container.innerHTML = "";
  shortcuts.forEach((shortcut, index) => {
    container.appendChild(createShortcutElement(shortcut, index));
  });

  // "바로가기 추가" 버튼을 항상 마지막에 추가
  const addShortcutButton = document.createElement("button");
  addShortcutButton.textContent = "바로가기 추가";
  addShortcutButton.className = "add-shortcut-button";
  addShortcutButton.addEventListener("click", showAddShortcutForm);
  container.appendChild(addShortcutButton);
}

function saveShortcuts() {
  localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
}

function handleSearch(query) {
  if (query.startsWith("http://") || query.startsWith("https://") || query.includes(".")) {
    // URL로 보이는 경우 직접 이동
    if (!query.startsWith("http://") && !query.startsWith("https://")) {
      query = "http://" + query;
    }
    window.location.href = query;
  } else {
    // 그 외의 경우 Google 검색
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
  }
}

function extractDomainName(url) {
  let domain;
  try {
    domain = new URL(url).hostname;
  } catch (error) {
    console.error("Invalid URL:", error);
    domain = url;
  }
  // www. 제거 및 첫 번째 단어의 첫 글자를 대문자로 변경
  return (
    domain
      .replace(/^www\./, "")
      .split(".")[0]
      .charAt(0)
      .toUpperCase() +
    domain
      .replace(/^www\./, "")
      .split(".")[0]
      .slice(1)
  );
}

function addShortcut(url, customName = "") {
  const name = customName || extractDomainName(url);
  shortcuts.push({ name, url });
  saveShortcuts();
  loadShortcuts();
}

function deleteShortcut(index) {
  shortcuts.splice(index, 1);
  saveShortcuts();
  loadShortcuts();
}

function showAddShortcutForm() {
  const form = document.getElementById("addShortcutForm");
  form.style.display = "block";
}

function hideAddShortcutForm() {
  const form = document.getElementById("addShortcutForm");
  form.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  loadShortcuts();

  const searchBox = document.querySelector(".search-box");
  const searchButton = document.querySelector(".search-button");

  function performSearch() {
    const query = searchBox.value.trim();
    if (query) {
      handleSearch(query);
    }
  }

  searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  });

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    performSearch();
  });

  // 바로가기 추가 폼
  const addShortcutForm = document.getElementById("addShortcutForm");
  addShortcutForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const url = document.getElementById("shortcutUrl").value;
    const customName = document.getElementById("shortcutName").value;
    addShortcut(url, customName);
    this.reset();
    hideAddShortcutForm();
  });

  document.getElementById("cancelAdd").addEventListener("click", hideAddShortcutForm);

  // 바로가기 삭제
  document.getElementById("shortcuts").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-button")) {
      e.preventDefault();
      const index = parseInt(e.target.getAttribute("data-index"));
      deleteShortcut(index);
    }
  });
});
