const privacyRules = {
  "www.naver.com": [
    {
      selector: '#account span[class*="MyView-module__nickname"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 프로필 닉네임 숨기기",
    },
    {
      selector: '#account span[class*="MyView-module__thumb_box"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 프로필 사진 숨기기",
    },
    {
      selector: '#account div[class*="MyView-module__desc_email"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 이메일 숨기기",
    },
    {
      selector: '#account span[class*="MyView-module__item_num"]',
      styles: { display: "none" },
      comments: "네이버 메인 : 아이템 카운트 숨기기",
    },
    {
      selector: 'span[class*="MyView-module__count"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 쪽지 카운트 숨기기",
    },
    {
      selector: 'span[class*="DailyBoardView-module__btn_location"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 날씨 지역 정보 숨기기",
    },
    {
      selector: 'div[class*="DailyBoardView-module__info_group"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 날씨 정보 숨기기",
    },
    {
      selector: 'div[class*="service_list_scroll"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 네이버 페이 숨기기",
    },
    {
      selector: '#widgetboard div[class*="RightSecond-module__calendar_table"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 캘린더 숨기기",
    },
    {
      selector: '#widgetboard > div[class*="module__tool_group"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 캘린더 숨기기 2",
    },
    {
      selector: '#widgetboard a[class*="RightSecond-module__link_info_list"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 캘린더 상세 정보 숨기기",
    },
    {
      selector: '#widgetboard div[class*="RightSecond-module__tool_content"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 메모 숨기기",
    },
    {
      selector: "div.service_list_scroll",
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 네이버 페이 숨기기 (추가 선택자)",
    },
    {
      selector: 'li.item[data-template-type="history"], div.recent span.kwd_txt',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 검색 히스토리 숨기기",
    },
    {
      selector: "li.item.type_date span.kwd_txt",
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 검색 연관 검색어 숨기기",
    },
    {
      selector: "#right-content-area div[class*='RightWidget-module__tool_content'] div[class*='RightWidget-module__calendar_box']",
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 캘린더 숨기기 (추가 선택자)",
    },
  ],
  "recoshopping.naver.com": [
    {
      selector: 'main div[class*="recoShoppingView_shopping_group"] ul > li',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 쇼핑 추천 숨기기",
    },
  ],
  "shopsquare.naver.com": [
    {
      selector: 'div[class*="CommerceView_commerce_area"] > div[class*="CommerceView_shopping"] ul[class*="QuickLink_menu_list"] > li[class*="QuickLink_menu_item"]',
      styles: { visibility: "hidden" },
      comments: "네이버 메인 : 쇼핑 스퀘어 숨기기",
    },
  ],
  "section.cafe.naver.com": [
    {
      selector: ".profile_info > .user",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 프로필 닉네임 숨기기",
    },
    {
      selector: ".aside .user_box div.profile_image > picture",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 사진 숨기기",
    },
    {
      selector: "#gnb_my",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 우상단 프로필 숨기기",
    },
    {
      selector: ".user_box .profile_info .note a",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 쪽지 카운트 숨기기",
    },
    {
      selector: "#mainContainer > div.section_home_content.content > div.section_home_town",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 이웃 정보 숨기기",
    },
    {
      selector: '#gnbMenu > a[href="/ca-fe/home/town"]',
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 이웃 정보 숨기기 (메뉴 항목)",
    },
    {
      selector: "#mainContainer > div.section_home_content.content > div.home_recent",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 섹션 : 최근 방문한 카페 숨기기",
    },
  ],
  "cafe.naver.com": [
    {
      selector: ".profile_info > .user",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 : 프로필 닉네임 숨기기",
    },
    {
      selector: "#gnb_my",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 : 우상단 프로필 숨기기",
    },
    {
      selector: ".user_box .profile_info .note a",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 : 쪽지 카운트 숨기기",
    },
    {
      selector: ".CommentBox .comment_list .CommentItem.CommentItem--mine",
      styles: { backgroundColor: "initial" },
      comments: "네이버 카페 : 내가 작성한 댓글 하이라이트 숨기기",
    },
    {
      selector: ".CommentBox .comment_list .CommentItem.CommentItem--mine::before",
      styles: { backgroundColor: "initial" },
      comments: "네이버 카페 : 내가 작성한 댓글 하이라이트 숨기기 (추가 스타일)",
    },
    {
      selector: "#linked-member",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 : 접속 멤버 숨기기",
    },
    {
      selector: "#member-news #member-visit-list #first-visit-page",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 : 방문 멤버 숨기기",
    },
  ],
  "search.naver.com": [
    {
      selector: "#main_pack > section.cs_weather_new",
      styles: { visibility: "hidden" },
      comments: "네이버 검색 : '날씨'를 검색했을 때에 나오는 날씨 정보에서 위치 정보를 숨김",
    },
  ],
  "weather.naver.com": [
    {
      selector: "#gnb_my",
      styles: { visibility: "hidden" },
      comments: "네이버 카페 : 우상단 프로필 숨기기",
    },
    {
      selector: "#content div.location_info_area > div.location_area",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 주간 날씨 숨기기",
    },
    {
      selector: "#content div.section_center > div.weather_area > div.weather_now",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 날씨 정보 지우기",
    },
    {
      selector: "#content div.section_center > div.weather_area div.weather_quick_area div.scroll_area div.weather_quick",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 날씨 정보 지우기",
    },
    {
      selector: "#weekly > ul",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 날씨 정보 지우기",
    },
    {
      selector: "#weekly > div.scroll_control",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 날씨 정보 지우기",
    },
    {
      selector: "#past > table",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 과거 날씨 숨기기",
    },
    {
      selector: "#hourly",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 시간당 날씨 숨기기",
    },
    {
      selector: "#_idMap.local_map",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 동네 지도 숨기기",
    },
    {
      selector: "#content > div.section_wrap > div.section_single > div.compare_area table tr > td > div",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 예보비교 - 시간별 날씨 숨기기",
    },
    {
      selector: "#content > div.section_wrap > div.section_right.no_sticky div.card.card_now",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 우측 섹션 - 동네 시간별 날씨 숨기기",
    },
    {
      selector: "#content > div.section_wrap > div.section_center > div.content_area_wrap[data-tab-name*='visualMap']",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 예보비교 - 동네 예보 관측 지도 숨기기",
    },
    {
      selector:
        "#content > div.section_wrap > div.section_right > div.card.card_dust > div.location_area > strong, \
        #content > div.section_wrap > div.section_right > div.card.card_dust > div.location_area ~ div",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 우측 섹션 - 미세 먼지 농도 숨기기",
    },
    {
      selector: "#content > div.section_wrap > div.section_right > div.card_pollution div.inner_card div.scroll_area",
      styles: { visibility: "hidden" },
      comments: "네이버 날씨 : 우측 섹션 - 오염물질 농도 숨기기",
    },
  ],
  "www.google.com": [
    {
      selector: "#fbar",
      styles: { visibility: "hidden" },
      comments: "구글 : 푸터 정보 숨기기",
    },
    {
      selector: "#gb a.gb_A.gb_Wa",
      styles: { visibility: "hidden" },
      comments: "구글 : 프로필 숨기기",
    },
  ],
  "www.dcinside.com": [
    {
      selector: "#visit_history .newvisit_box",
      styles: { visibility: "hidden" },
      comments: "디시인사이드 : 최근 방문 내역 숨기기",
    },
    {
      selector: "#visit_history_lyr div.toptab_content ul.under_listbox.vst_list",
      styles: { visibility: "hidden" },
      comments: "디시인사이드 : 최근 방문 세부 내역 숨기기",
    },
  ],
  "dhlottery.co.kr": [
    {
      selector: ".header_con > .top_menu .information li > span > strong",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 실명 정보 숨기기",
    },
    {
      selector: ".content_mypage_home .box_information .box.information .head h4 strong",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 세부 메뉴 실명 정보 숨기기",
    },
    {
      selector: "#article .box_information > .box.information > table > tbody > tr > td:nth-child(2)",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 세부 메뉴 아이디 정보 숨기기",
    },
    {
      selector: "#article .box_information > .box.money > .total_account_number > table > tbody > tr > td",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 세부 메뉴 입금 계좌번호, 계좌주명, 간편 계좌번호 숨기기",
    },
    {
      selector: ".tbl_data tr td a > .break_all",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 세부 메뉴 로또 선택번호 숨기기",
    },
    {
      selector: ".tbl_data tr td a:has(.break_all)::after",
      styles: { content: '"***********"', color: "#d43301", wordBreak: "break-all", wordWrap: "break-word", lineHeight: "1.3em" },
      comments: "동행복권 : 세부 메뉴 로또 선택번호 숨기기 (대체 텍스트)",
    },
    {
      selector: "#popup645paper > .date-info > .barcode",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 로또 구매 번호 바코드 넘버 숨기기",
    },
    {
      selector: '#boxTabContent_2 > .group_content input[name="BuyerName"]',
      styles: { color: "grey", backgroundColor: "grey" },
      comments: "동행복권 : 충전하기에 input 내용을 숨김",
    },
    {
      selector: "div.contents_wrap.contents_result_payment .tbl_data tr:nth-child(1) td:last-child",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 주문번호 숨기기",
    },
    {
      selector: "div.contents_wrap.contents_result_payment #contents table.tbl_data tr:nth-child(3) > td:last-child",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 계좌주명 숨기기",
    },
    {
      selector: "div.contents_wrap.contents_result_payment table.tbl_data tr:nth-child(4) > td:last-child > span.pay_lt",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 고정 가상계좌 숨기기",
    },
    {
      selector: "#campainVowBox div.campaign_vow_area .color_key2",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 건전구매 서약서 이름 숨기기",
    },
    {
      selector: "#campainVow_top span.hero_name",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 동행히어로 이름 숨기기",
    },
    {
      selector: "#accountDiv .tbl_data.tbl_form tr:nth-child(2) > td:last-child",
      styles: { visibility: "hidden" },
      comments: "동행복권 : 출금 예금주명 숨기기",
    },
  ],
  "www.youtube.com": [
    {
      selector: "#avatar-btn img",
      styles: { content: 'url("https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg")' },
      comments: "유튜브 : 프로필 메인 이미지 숨기기",
    },
    {
      selector: "#header ytd-active-account-header-renderer #avatar img#img.style-scope.yt-img-shadow",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 프로필 세부 이미지 숨기기",
    },
    {
      selector: "#account-name",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 닉네임 숨기기",
    },
    {
      selector: "#channel-handle",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 채널 핸들 숨기기",
    },
    {
      selector: "#manage-account",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 유튜브 관리 채널 숨기기",
    },
    {
      selector: "#overlays > ytd-thumbnail-overlay-resume-playback-renderer",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 재생 기록 숨기기",
    },
    {
      selector: "#simple-box.ytd-comments-header-renderer #author-thumbnail #img",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 댓글 작성자 프로필 이미지 숨기기",
    },
    {
      selector: "ytd-guide-section-renderer ytd-guide-collapsible-section-entry-renderer #section-items",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 듣기 목록 숨기기",
    },
    {
      selector: "#items > ytd-profile-column-user-info-renderer",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 개인 기록 항목에서 프로필 숨기기",
    },
    {
      selector: "div#items.style-scope.ytd-guide-section-renderer > ytd-guide-entry-renderer > #endpoint.ytd-guide-entry-renderer",
      styles: { visibility: "hidden" },
      comments: "유튜브 : 구독 목록 숨기기",
    },
  ],
  "music.youtube.com": [
    {
      selector: "tp-yt-paper-icon-button tp-yt-iron-icon#icon img",
      styles: { visibility: "hidden" },
      comments: "유튜브 뮤직 : 우상단 프로필 숨기기",
    },
  ],
};

class PrivacyManager {
  constructor() {
    this.isPrivacyEnabled = true;
    this.elementStates = new WeakMap();
  }

  createBlurOverlay(element, rule) {
    if (element.querySelector(".privacy-blur-overlay")) {
      return;
    }

    const overlay = document.createElement("div");
    overlay.classList.add("privacy-blur-overlay");

    const originalPosition = window.getComputedStyle(element).position;
    if (originalPosition === "static") {
      element.style.position = "relative";
    }

    element.appendChild(overlay);

    this.addOverlayEventListeners(overlay, element, rule);
  }

  addOverlayEventListeners(overlay, element, rule) {
    let pressTimer;
    let isPressed = false;

    const startPressTimer = () => {
      isPressed = true;
      pressTimer = setTimeout(() => {
        if (isPressed) {
          this.removePrivacyFromElement(element, rule);
          this.elementStates.set(element, "revealed");
        }
      }, 2000);
    };

    const stopPressTimer = () => {
      clearTimeout(pressTimer);
      isPressed = false;
    };

    overlay.addEventListener("mousedown", (e) => {
      if (e.button === 0) startPressTimer();
    });

    overlay.addEventListener("mouseup", stopPressTimer);
    overlay.addEventListener("mouseleave", stopPressTimer);
  }

  applyPrivacyToElement(element, rule) {
    const state = this.elementStates.get(element);
    if (this.isPrivacyEnabled && state !== "revealed") {
      Object.assign(element.style, rule.styles);
      if (rule.styles.visibility === "hidden") {
        this.createBlurOverlay(element, rule);
      }
      this.elementStates.set(element, "hidden");
      element.classList.add("privacy-protected");
    } else if (!this.isPrivacyEnabled || state === "revealed") {
      this.removePrivacyFromElement(element, rule);
    }
  }

  removePrivacyFromElement(element, rule) {
    Object.keys(rule.styles).forEach((style) => {
      // 명시적으로 visibility 속성이 있는 값이 있으면 "visible"을 부여하도록 처리
      element.style[style] = style.includes("visibility") ? "visible" : "";
    });
    element.querySelector(".privacy-blur-overlay")?.remove();
    element.classList.remove("privacy-protected");
    this.elementStates.set(element, "visible");
  }

  applyPrivacyToNewElements(elements, rule) {
    elements.forEach((element) => {
      if (!this.elementStates.has(element)) {
        this.applyPrivacyToElement(element, rule);
      }
    });
  }

  applyPrivacyToAllElements() {
    const currentDomain = window.location.hostname;
    console.log("currentDomain:", currentDomain);
    const rules = privacyRules[currentDomain] || [];

    rules.forEach((rule) => {
      const elements = document.querySelectorAll(rule.selector);
      elements.forEach((element) => {
        if (this.isPrivacyEnabled) {
          this.applyPrivacyToElement(element, rule);
        } else {
          this.removePrivacyFromElement(element, rule);
        }
      });
    });
  }

  observeDOMChanges() {
    const observer = new MutationObserver(() => {
      const currentDomain = window.location.hostname;
      const rules = privacyRules[currentDomain] || [];

      rules.forEach((rule) => {
        const newElements = document.querySelectorAll(rule.selector);
        this.applyPrivacyToNewElements(newElements, rule);
      });

      if (this.isPrivacyEnabled) {
        this.disableAutocomplete();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });
  }

  handleStorageChange(changes) {
    if ("toggle" in changes) {
      this.isPrivacyEnabled = changes.toggle.newValue !== false;
      this.applyPrivacyToAllElements();
      if (this.isPrivacyEnabled) {
        this.disableAutocomplete();
      }
    }
  }

  disableAutocomplete() {
    const inputElements = document.querySelectorAll("input, textarea");
    inputElements.forEach((element) => {
      element.setAttribute("autocomplete", "off");
      element.setAttribute("autocapitalize", "off");
      element.setAttribute("autocorrect", "off");
      element.setAttribute("spellcheck", "false");
    });
  }

  initializePrivacy() {
    chrome.storage.local.get("toggle", (data) => {
      this.isPrivacyEnabled = data.toggle !== false;
      this.applyPrivacyToAllElements();
      if (this.isPrivacyEnabled) {
        this.disableAutocomplete();
      }
    });

    // 스토리지 변경 감지 리스너 추가
    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.handleStorageChange(changes);
    });
  }
}

// Initialize privacy settings and set up observer
const initializePrivacyManager = () => {
  const privacyManager = new PrivacyManager();
  privacyManager.initializePrivacy();
  privacyManager.observeDOMChanges();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePrivacyManager);
} else {
  initializePrivacyManager();
}
