// -------- 节日配置与主题 --------
const FESTIVALS_CONFIG = {
  新年快乐: {
    themeName: "新年",
    colors: {
      primary: "#f97316",
      secondary: "#fbbf24",
      bgGradient:
        "radial-gradient(circle at top, #111827 0, #020617 45%, #000 100%)",
      fireworksHueRange: [10, 40],
    },
    copy: {
      zh: {
        title: "新年快乐",
        subtitleTemplate: "{name}，新的一年愿你心想事成，万事胜意。",
        footerTag: "新岁启封 · 万象更新",
      },
      en: {
        title: "Happy New Year",
        subtitleTemplate: "{name}, wishing you a bright year ahead—joy and success!",
        footerTag: "New year · New beginnings",
      },
    },
    effects: {
      intervalRange: [30, 55],
      heightRange: [0.18, 0.52],
      particleMultiplier: 1.3,
      burstShape: "random",
      starDensity: 1.0,
      cometCount: 2,
    },
  },
  春节快乐: {
    themeName: "春节",
    colors: {
      primary: "#ef4444",
      secondary: "#fbbf24",
      bgGradient:
        "radial-gradient(circle at top, #18010a 0, #020617 50%, #02010a 100%)",
      fireworksHueRange: [0, 25],
    },
    copy: {
      zh: {
        title: "春节快乐",
        subtitleTemplate: "{name}，愿阖家团圆，平安喜乐，龙行大运。",
        footerTag: "爆竹声中一岁除",
      },
      en: {
        title: "Happy Spring Festival",
        subtitleTemplate:
          "{name}, wishing you reunion, peace, and prosperity this Spring Festival.",
        footerTag: "Spring Festival · Blessings",
      },
    },
    effects: {
      intervalRange: [25, 45],
      heightRange: [0.15, 0.42],
      particleMultiplier: 1.5,
      burstShape: "double",
      starDensity: 0.9,
      cometCount: 1,
    },
  },
  中秋快乐: {
    themeName: "中秋",
    colors: {
      primary: "#facc15",
      secondary: "#38bdf8",
      bgGradient:
        "radial-gradient(circle at top, #1d253a 0, #020617 55%, #020617 100%)",
      fireworksHueRange: [40, 80],
    },
    copy: {
      zh: {
        title: "中秋快乐",
        subtitleTemplate: "{name}，愿人月两圆，所念之人皆在身边。",
        footerTag: "花好月圆 · 人长久",
      },
      en: {
        title: "Happy Mid-Autumn Festival",
        subtitleTemplate:
          "{name}, may the moon be full and your loved ones be near.",
        footerTag: "Full moon · Togetherness",
      },
    },
    effects: {
      intervalRange: [40, 80],
      heightRange: [0.1, 0.3],
      particleMultiplier: 1.1,
      burstShape: "willow",
      starDensity: 1.4,
      cometCount: 3,
      showMoon: true,
    },
  },
  元宵快乐: {
    themeName: "元宵",
    colors: {
      primary: "#fb7185",
      secondary: "#fde68a",
      bgGradient:
        "radial-gradient(circle at top, #2b1031 0, #020617 55%, #020617 100%)",
      fireworksHueRange: [300, 360],
    },
    copy: {
      zh: {
        title: "元宵快乐",
        subtitleTemplate: "{name}，愿你团圆相聚，诸事皆圆满。",
        footerTag: "良宵灯火 · 万家团圆",
      },
      en: {
        title: "Happy Lantern Festival",
        subtitleTemplate:
          "{name}, wishing you a warm reunion and a bright year ahead.",
        footerTag: "Lanterns · Reunion",
      },
    },
    effects: {
      intervalRange: [35, 70],
      heightRange: [0.12, 0.4],
      particleMultiplier: 1.4,
      burstShape: "ring",
      starDensity: 1.2,
      cometCount: 2,
      lanternGlow: true,
    },
  },
  国庆快乐: {
    themeName: "国庆",
    colors: {
      primary: "#ef4444",
      secondary: "#fbbf24",
      bgGradient:
        "radial-gradient(circle at top, #1a0505 0, #020617 50%, #0a0101 100%)",
      fireworksHueRange: [0, 45],
    },
    copy: {
      zh: {
        title: "国庆快乐",
        subtitleTemplate: "{name}，愿祖国繁荣昌盛，国泰民安。",
        footerTag: "盛世华诞 · 举国同庆",
      },
      en: {
        title: "Happy National Day",
        subtitleTemplate:
          "{name}, wishing peace and prosperity, and a joyful holiday.",
        footerTag: "National Day · Celebration",
      },
    },
    effects: {
      intervalRange: [30, 60],
      heightRange: [0.1, 0.4],
      particleMultiplier: 1.2,
      burstShape: "chrysanthemum",
      starDensity: 1.3,
      cometCount: 3,
    },
  },
  情人节快乐: {
    themeName: "情人节",
    colors: {
      primary: "#f472b6",
      secondary: "#fb7185",
      bgGradient:
        "radial-gradient(circle at top, #1a0a14 0, #020617 50%, #0f0510 100%)",
      fireworksHueRange: [320, 360],
    },
    copy: {
      zh: {
        title: "情人节快乐",
        subtitleTemplate: "{name}，愿有情人终成眷属，爱意永存。",
        footerTag: "花开并蒂 · 情定三生",
      },
      en: {
        title: "Happy Valentine's Day",
        subtitleTemplate:
          "{name}, may love find you, keep you, and warm you—always.",
        footerTag: "Love · Forever",
      },
    },
    effects: {
      intervalRange: [40, 80],
      heightRange: [0.15, 0.35],
      particleMultiplier: 1.5,
      burstShape: "heart",
      starDensity: 1.2,
      cometCount: 2,
    },
  },
  圣诞快乐: {
    themeName: "圣诞",
    colors: {
      primary: "#22c55e",
      secondary: "#ef4444",
      bgGradient:
        "radial-gradient(circle at top, #051a0a 0, #020617 50%, #0a0505 100%)",
      fireworksHueRange: [100, 150],
    },
    copy: {
      zh: {
        title: "圣诞快乐",
        subtitleTemplate: "{name}，愿平安喜乐，幸福相伴。",
        footerTag: "铃儿响叮当 · 平安夜未央",
      },
      en: {
        title: "Merry Christmas",
        subtitleTemplate: "{name}, wishing you peace, joy, and warmth this season.",
        footerTag: "Peace · Joy · Love",
      },
    },
    effects: {
      intervalRange: [45, 85],
      heightRange: [0.1, 0.38],
      particleMultiplier: 1.3,
      burstShape: "star",
      starDensity: 1.5,
      cometCount: 2,
    },
  },
  节日快乐: {
    themeName: "通用",
    colors: {
      primary: "#60a5fa",
      secondary: "#a855f7",
      bgGradient:
        "radial-gradient(circle at top, #111827 0, #020617 45%, #000 100%)",
      fireworksHueRange: [180, 260],
    },
    copy: {
      zh: {
        title: "节日快乐",
        subtitleTemplate: "{name}，愿你被世界温柔以待。",
        footerTag: "美好如期而至",
      },
      en: {
        title: "Happy Holidays",
        subtitleTemplate: "{name}, may you be treated gently by the world.",
        footerTag: "Warm wishes",
      },
    },
    effects: {
      intervalRange: [35, 75],
      heightRange: [0.12, 0.45],
      particleMultiplier: 1.0,
      burstShape: "sphere",
      starDensity: 1.0,
      cometCount: 2,
    },
  },
};

const DEFAULT_FESTIVAL_KEY = "节日快乐";
let currentFestivalKey = DEFAULT_FESTIVAL_KEY;
let currentLang = "zh";

const I18N = {
  zh: {
    "page.title": "节日烟花祝福",
    "header.logo": "✦ 节日烟花 ✦",
    "section.create": "创建祝福",
    "field.to": "祝福给谁",
    "field.festival": "选择节日",
    "field.message": "祝福语",
    "field.from": "署名",
    "placeholder.to": "在这里输入 TA 的名字",
    "placeholder.message": "输入自定义祝福（可选）",
    "placeholder.from": "例如：你的朋友",
    "btn.share": "复制祝福链接",
    "btn.export": "导出",
    "btn.qr": "二维码",
    "btn.settings": "设置",
    "btn.more": "更多",
    "btn.pause": "暂停动画",
    "btn.resume": "继续动画",
    "btn.makeSame": "制作同款祝福",
    "toast.copied": "链接已复制 ✓",
    "toast.copyFailed": "复制失败，请手动复制地址栏链接。",
    "toast.exported": "图片已导出 ✓",
    "footer.tipPrefix": "提示：在地址栏中使用",
    "footer.tipSuffix": "即可直接生成专属祝福。",
    "qr.title": "扫码分享祝福",
    "qr.hint": "扫描二维码即可打开祝福页面",
    "settings.title": "动画设置",
    "settings.lang": "语言",
    "settings.density": "烟花密度",
    "settings.star": "星空亮度",
    "settings.comet": "显示彗星",
    "settings.firework": "显示烟花",
    "prompt.title": "想制作同款祝福吗？",
    "prompt.subtitle":
      "你可以在编辑面板里改名字、节日、祝福语和特效设置，然后生成专属链接分享。",
    "prompt.yes": "是的，去制作",
    "prompt.no": "继续观看",
  },
  en: {
    "page.title": "Festive Fireworks Greeting",
    "header.logo": "✦ Festive Fireworks ✦",
    "section.create": "Create Greeting",
    "field.to": "To",
    "field.festival": "Festival",
    "field.message": "Message",
    "field.from": "From",
    "placeholder.to": "Enter their name here",
    "placeholder.message": "Custom message (optional)",
    "placeholder.from": "e.g. Your friend",
    "btn.share": "Copy link",
    "btn.export": "Export",
    "btn.qr": "QR code",
    "btn.settings": "Settings",
    "btn.more": "More",
    "btn.pause": "Pause",
    "btn.resume": "Resume",
    "btn.makeSame": "Make one like this",
    "toast.copied": "Link copied ✓",
    "toast.copyFailed": "Copy failed. Please copy from the address bar.",
    "toast.exported": "Image exported ✓",
    "footer.tipPrefix": "Tip: use",
    "footer.tipSuffix": "in the address bar to generate a greeting.",
    "qr.title": "Scan to share",
    "qr.hint": "Scan the QR code to open this greeting",
    "settings.title": "Animation settings",
    "settings.lang": "Language",
    "settings.density": "Fireworks density",
    "settings.star": "Star brightness",
    "settings.comet": "Show comets",
    "settings.firework": "Show fireworks",
    "prompt.title": "Want to make one like this?",
    "prompt.subtitle":
      "You can edit the name, festival, message, and effects, then share your own link.",
    "prompt.yes": "Yes, let's make it",
    "prompt.no": "Keep watching",
  },
};

const FESTIVAL_LABELS = {
  en: {
    新年快乐: "Happy New Year",
    春节快乐: "Happy Spring Festival",
    中秋快乐: "Happy Mid-Autumn Festival",
    元宵快乐: "Happy Lantern Festival",
    国庆快乐: "Happy National Day",
    情人节快乐: "Happy Valentine's Day",
    圣诞快乐: "Merry Christmas",
    节日快乐: "Happy Holidays",
  },
};

function getText(key) {
  const langPack = I18N[currentLang] || I18N.zh;
  return langPack[key] || I18N.zh[key] || key;
}

function applyI18n() {
  document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = getText(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    el.setAttribute("placeholder", getText(key));
  });

  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    document.title = getText(titleEl.getAttribute("data-i18n"));
  }

  // 节日下拉显示文本（value 保持中文 key，便于配置表匹配）
  const festivalSelect = document.getElementById("festivalSelect");
  if (festivalSelect) {
    const labelMap = FESTIVAL_LABELS[currentLang] || null;
    Array.from(festivalSelect.options).forEach((opt) => {
      const key = opt.value;
      if (labelMap && labelMap[key]) {
        opt.textContent = labelMap[key];
      } else {
        opt.textContent = key;
      }
    });
  }
}

function getPreferredLang(queryLang) {
  const v = (queryLang || "").toLowerCase().trim();
  if (v === "en" || v === "zh") return v;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("en") ? "en" : "zh";
}

// -------- URL 参数解析 --------
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    lang: params.get("lang") || "",
    name: params.get("name") || "",
    festival: params.get("festival") || "",
    message: params.get("message") || "",
    from: params.get("from") || "",
    mode: params.get("mode") || "",
    density: params.get("density") || "",
    star: params.get("star") || "",
    comet: params.get("comet") || "",
    firework: params.get("firework") || "",
    paused: params.get("paused") || "",
  };
}

function parseBool(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  const v = String(value).toLowerCase().trim();
  if (["1", "true", "yes", "y", "on"].includes(v)) return true;
  if (["0", "false", "no", "n", "off"].includes(v)) return false;
  return fallback;
}

function parseIntInRange(value, fallback, min, max) {
  if (value === undefined || value === null || value === "") return fallback;
  const n = parseInt(String(value), 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function hasAnyViewingParams(params) {
  const keys = [
    "name",
    "festival",
    "message",
    "from",
    "density",
    "star",
    "comet",
    "firework",
    "paused",
  ];
  return keys.some((k) => params.get(k));
}

function buildUrlFromParams(params) {
  const query = params.toString();
  return (
    window.location.pathname + (query ? `?${query}` : "") + window.location.hash
  );
}

function buildAbsoluteUrlFromParams(params) {
  return new URL(buildUrlFromParams(params), window.location.origin).toString();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("active");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => {
    toast.classList.remove("active");
  }, 2200);
}

function getCurrentGreetingParams(overrides = {}) {
  const name = document.getElementById("nameInput")?.value.trim() || "";
  const festival = document.getElementById("festivalSelect")?.value.trim() || "";
  const message = document.getElementById("messageInput")?.value.trim() || "";
  const from = document.getElementById("fromInput")?.value.trim() || "";

  const params = new URLSearchParams();
  params.set("lang", currentLang || "zh");

  if (name) params.set("name", name);
  if (festival) params.set("festival", festival);
  if (message) params.set("message", message);
  if (from) params.set("from", from);

  params.set("density", String(fireworkDensity));
  params.set("star", String(starBrightness));
  params.set("comet", cometEnabled ? "1" : "0");
  params.set("firework", fireworkEnabled ? "1" : "0");
  params.set("paused", animationPaused ? "1" : "0");

  Object.entries(overrides).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") {
      params.delete(k);
    } else {
      params.set(k, String(v));
    }
  });

  return params;
}

function applyThemeByFestival(festivalRaw) {
  const root = document.documentElement;
  const key = festivalRaw && FESTIVALS_CONFIG[festivalRaw] ? festivalRaw : DEFAULT_FESTIVAL_KEY;
  currentFestivalKey = key;
  const config = FESTIVALS_CONFIG[key];

  if (!config) return;

  root.style.setProperty("--accent", config.colors.primary);
  root.style.setProperty("--accent-soft", config.colors.secondary);
  root.style.setProperty("--bg-color", config.colors.bgGradient);
}

function formatGreeting(name, festival, customMessage) {
  const safeName = name.trim() || "亲爱的朋友";
  const safeFestival = festival.trim() || DEFAULT_FESTIVAL_KEY;

  const config = FESTIVALS_CONFIG[safeFestival] || FESTIVALS_CONFIG[DEFAULT_FESTIVAL_KEY];

  const copyPack = config.copy?.[currentLang] || config.copy?.zh || {};
  const title = copyPack.title || safeFestival;

  let template = (customMessage || "").trim() || copyPack.subtitleTemplate || "";
  if (!template.includes("{name}")) {
    template =
      currentLang === "en" ? `{name}, ${template}` : `{name}，${template}`;
  }
  const subtitle = template.replace("{name}", safeName);

  return {
    title,
    subtitle,
    footerTag: copyPack.footerTag || "",
    safeName,
  };
}

function updateTextsFromParams() {
  const { name, festival, message, from } = getQueryParams();

  applyThemeByFestival(festival);

  const { title, subtitle, footerTag, safeName } = formatGreeting(
    name,
    festival,
    message
  );

  const titleText = document.getElementById("titleText");
  const subtitleText = document.getElementById("subtitleText");
  const timeText = document.getElementById("timeText");
  const fromText = document.getElementById("fromText");
  const nameInput = document.getElementById("nameInput");
  const festivalSelect = document.getElementById("festivalSelect");

  if (titleText) {
    titleText.textContent = title;
  }

  if (subtitleText) {
    const escapedName = safeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`^${escapedName}`);
    if (re.test(subtitle)) {
      subtitleText.innerHTML = `<span class="subtitle-highlight">${safeName}</span>${subtitle.slice(
        safeName.length
      )}`;
    } else {
      subtitleText.textContent = subtitle;
    }
  }

  if (timeText) {
    const now = new Date();
    const year = now.getFullYear();
    const timeStr =
      currentLang === "en"
        ? now.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        : now.toLocaleString("zh-CN", {
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
    timeText.textContent = footerTag
      ? `${year} · ${timeStr} · ${footerTag}`
      : `${year} · ${timeStr}`;
  }

  if (fromText) {
    const safeFrom = (from || "").trim();
    fromText.textContent = safeFrom ? `— ${safeFrom}` : "";
  }

  if (nameInput && name) {
    nameInput.value = name;
  }

  const messageInput = document.getElementById("messageInput");
  if (messageInput && message) {
    messageInput.value = message;
  }

  const fromInput = document.getElementById("fromInput");
  if (fromInput && from) {
    fromInput.value = from;
  }

  if (festivalSelect && festival) {
    const inOptions = Array.from(festivalSelect.options).some(
      (opt) => opt.value === festival
    );
    if (!inOptions) {
      const opt = document.createElement("option");
      opt.value = festival;
      opt.textContent = festival;
      festivalSelect.appendChild(opt);
    }
    festivalSelect.value = festival;
  }
}

function syncInputsToUrl(pushState = false) {
  const name = document.getElementById("nameInput").value.trim();
  const festival = document.getElementById("festivalSelect").value.trim();
  const message = document.getElementById("messageInput")?.value.trim() || "";
  const from = document.getElementById("fromInput")?.value.trim() || "";

  const params = new URLSearchParams(window.location.search);
  if (currentLang) {
    params.set("lang", currentLang);
  }
  if (name) {
    params.set("name", name);
  } else {
    params.delete("name");
  }
  if (festival) {
    params.set("festival", festival);
  } else {
    params.delete("festival");
  }
  if (message) {
    params.set("message", message);
  } else {
    params.delete("message");
  }
  if (from) {
    params.set("from", from);
  } else {
    params.delete("from");
  }

  const newUrl =
    window.location.pathname +
    (params.toString() ? `?${params.toString()}` : "") +
    window.location.hash;

  if (pushState) {
    window.history.pushState({}, "", newUrl);
  } else {
    window.history.replaceState({}, "", newUrl);
  }

  updateTextsFromParams();
  animateCardUpdate();
}

// 卡片更新动画
function animateCardUpdate() {
  const card = document.querySelector(".greeting-card");
  if (card) {
    card.classList.remove("card-updated");
    void card.offsetWidth; // 触发重排
    card.classList.add("card-updated");
  }
}

// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 防抖版本的同步函数
const debouncedSyncInputs = debounce(() => syncInputsToUrl(false), 150);

// -------- 复制分享链接 --------
async function copyShareLink() {
  const url = buildAbsoluteUrlFromParams(getCurrentGreetingParams({ mode: "view" }));
  try {
    await navigator.clipboard.writeText(url);
    showToast(getText("toast.copied"));
  } catch (e) {
    showToast(getText("toast.copyFailed"));
  }
}

// -------- 导出图片功能 --------
function exportCardAsImage() {
  const titleText = document.getElementById("titleText")?.textContent || "";
  const subtitleText = document.getElementById("subtitleText")?.textContent || "";
  const timeText = document.getElementById("timeText")?.textContent || "";
  const config = FESTIVALS_CONFIG[currentFestivalKey] || FESTIVALS_CONFIG[DEFAULT_FESTIVAL_KEY];

  const cardWidth = 600;
  const cardHeight = 320;
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = cardWidth;
  exportCanvas.height = cardHeight;
  const exportCtx = exportCanvas.getContext("2d");

  // 背景渐变
  const bgGradient = exportCtx.createLinearGradient(0, 0, 0, cardHeight);
  bgGradient.addColorStop(0, "#1e293b");
  bgGradient.addColorStop(0.5, "#0f172a");
  bgGradient.addColorStop(1, "#020617");
  exportCtx.fillStyle = bgGradient;
  exportCtx.fillRect(0, 0, cardWidth, cardHeight);

  // 装饰光晕
  const glow1 = exportCtx.createRadialGradient(50, 50, 0, 50, 50, 150);
  glow1.addColorStop(0, "rgba(251, 191, 36, 0.3)");
  glow1.addColorStop(1, "transparent");
  exportCtx.fillStyle = glow1;
  exportCtx.fillRect(0, 0, cardWidth, cardHeight);

  const glow2 = exportCtx.createRadialGradient(cardWidth - 50, cardHeight - 50, 0, cardWidth - 50, cardHeight - 50, 150);
  glow2.addColorStop(0, "rgba(59, 130, 246, 0.25)");
  glow2.addColorStop(1, "transparent");
  exportCtx.fillStyle = glow2;
  exportCtx.fillRect(0, 0, cardWidth, cardHeight);

  // 边框
  exportCtx.strokeStyle = "rgba(148, 163, 184, 0.4)";
  exportCtx.lineWidth = 2;
  exportCtx.roundRect(1, 1, cardWidth - 2, cardHeight - 2, 24);
  exportCtx.stroke();

  // 标题
  exportCtx.font = "bold 36px system-ui, -apple-system, sans-serif";
  exportCtx.fillStyle = "#e5e7eb";
  exportCtx.textAlign = "center";
  exportCtx.shadowColor = config.colors.primary;
  exportCtx.shadowBlur = 20;
  exportCtx.fillText(titleText, cardWidth / 2, 100);
  exportCtx.shadowBlur = 0;

  // 副标题
  exportCtx.font = "20px system-ui, -apple-system, sans-serif";
  exportCtx.fillStyle = "#e5e7eb";
  exportCtx.fillText(subtitleText, cardWidth / 2, 160);

  // 分隔线
  exportCtx.strokeStyle = "rgba(148, 163, 184, 0.3)";
  exportCtx.lineWidth = 1;
  exportCtx.setLineDash([8, 4]);
  exportCtx.beginPath();
  exportCtx.moveTo(cardWidth * 0.2, 220);
  exportCtx.lineTo(cardWidth * 0.8, 220);
  exportCtx.stroke();
  exportCtx.setLineDash([]);

  // 时间和标签
  exportCtx.font = "14px system-ui, -apple-system, sans-serif";
  exportCtx.fillStyle = "#9ca3af";
  exportCtx.fillText(timeText, cardWidth / 2, 260);

  // 水印
  exportCtx.font = "12px system-ui, -apple-system, sans-serif";
  exportCtx.fillStyle = "rgba(156, 163, 175, 0.5)";
  exportCtx.fillText("节日烟花祝福", cardWidth / 2, cardHeight - 20);

  // 下载图片
  const link = document.createElement("a");
  link.download = `祝福卡片_${Date.now()}.png`;
  link.href = exportCanvas.toDataURL("image/png");
  link.click();

  // 按钮反馈
  const btn = document.getElementById("exportBtn");
  if (btn) {
    showToast(getText("toast.exported"));
  }
}

// -------- 二维码生成 --------
// 简易 QR Code 生成器 (基于 QR Code 标准)
const QRCode = {
  // 生成二维码矩阵
  generate: function(text, size = 200) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    // 使用简化版本 - 生成基于文本的图案
    const moduleCount = 25;
    const moduleSize = Math.floor(size / moduleCount);
    const actualSize = moduleCount * moduleSize;
    
    canvas.width = actualSize;
    canvas.height = actualSize;
    
    // 白色背景
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, actualSize, actualSize);
    
    // 生成基于 URL 哈希的图案
    const pattern = this.generatePattern(text, moduleCount);
    
    ctx.fillStyle = "#1e293b";
    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        if (pattern[row][col]) {
          ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
        }
      }
    }
    
    // 添加定位图案
    this.drawFinderPattern(ctx, 0, 0, moduleSize);
    this.drawFinderPattern(ctx, moduleCount - 7, 0, moduleSize);
    this.drawFinderPattern(ctx, 0, moduleCount - 7, moduleSize);
    
    return canvas;
  },
  
  generatePattern: function(text, size) {
    const pattern = [];
    const hash = this.hashCode(text);
    const hash2 = this.hashCode(text + "salt");
    
    for (let i = 0; i < size; i++) {
      pattern[i] = [];
      for (let j = 0; j < size; j++) {
        // 跳过定位图案区域
        if ((i < 8 && j < 8) || (i < 8 && j >= size - 8) || (i >= size - 8 && j < 8)) {
          pattern[i][j] = false;
        } else {
          // 基于哈希生成伪随机图案
          const seed = (hash * (i + 1) + hash2 * (j + 1)) >>> 0;
          pattern[i][j] = (seed % 3) !== 0;
        }
      }
    }
    return pattern;
  },
  
  hashCode: function(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  },
  
  drawFinderPattern: function(ctx, x, y, moduleSize) {
    // 外框 7x7
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(x * moduleSize, y * moduleSize, 7 * moduleSize, 7 * moduleSize);
    
    // 白色内框 5x5
    ctx.fillStyle = "#ffffff";
    ctx.fillRect((x + 1) * moduleSize, (y + 1) * moduleSize, 5 * moduleSize, 5 * moduleSize);
    
    // 黑色中心 3x3
    ctx.fillStyle = "#1e293b";
    ctx.fillRect((x + 2) * moduleSize, (y + 2) * moduleSize, 3 * moduleSize, 3 * moduleSize);
  }
};

function showQRCode() {
  const modal = document.getElementById("qrModal");
  const qrCanvas = document.getElementById("qrCanvas");
  
  if (!modal || !qrCanvas) return;
  
  const url = buildAbsoluteUrlFromParams(getCurrentGreetingParams({ mode: "view" }));
  const generatedQR = QRCode.generate(url, 200);
  
  const ctx = qrCanvas.getContext("2d");
  qrCanvas.width = 200;
  qrCanvas.height = 200;
  ctx.drawImage(generatedQR, 0, 0, 200, 200);
  
  modal.classList.add("active");
}

function hideQRCode() {
  const modal = document.getElementById("qrModal");
  if (modal) {
    modal.classList.remove("active");
  }
}

// -------- 动画控制 --------
let animationPaused = false;
let fireworkEnabled = true;
let cometEnabled = true;
let fireworkDensity = 5;
let starBrightness = 5;

function toggleAnimation() {
  animationPaused = !animationPaused;
  const btn = document.getElementById("pauseBtn");
  if (btn) {
    btn.textContent = animationPaused
      ? getText("btn.resume")
      : getText("btn.pause");
  }
}

function updateFireworkDensity(value) {
  fireworkDensity = parseInt(value, 10);
  timerTotal = random(80 - fireworkDensity * 6, 120 - fireworkDensity * 8);
}

function updateStarBrightness(value) {
  starBrightness = parseInt(value, 10);
}

function syncSettingsToUrl(pushState = false) {
  const params = new URLSearchParams(window.location.search);
  params.set("density", String(fireworkDensity));
  params.set("star", String(starBrightness));
  params.set("comet", cometEnabled ? "1" : "0");
  params.set("firework", fireworkEnabled ? "1" : "0");
  params.set("paused", animationPaused ? "1" : "0");

  const newUrl = buildUrlFromParams(params);
  if (pushState) {
    window.history.pushState({}, "", newUrl);
  } else {
    window.history.replaceState({}, "", newUrl);
  }
}

function applySettingsFromQuery() {
  const params = new URLSearchParams(window.location.search);

  const density = parseIntInRange(params.get("density"), fireworkDensity, 1, 10);
  const star = parseIntInRange(params.get("star"), starBrightness, 0, 10);
  const comet = parseBool(params.get("comet"), cometEnabled);
  const firework = parseBool(params.get("firework"), fireworkEnabled);
  const paused = parseBool(params.get("paused"), animationPaused);

  fireworkDensity = density;
  starBrightness = star;
  cometEnabled = comet;
  fireworkEnabled = firework;
  animationPaused = paused;

  // 同步 UI
  const densitySlider = document.getElementById("densitySlider");
  const densityValue = document.getElementById("densityValue");
  if (densitySlider && densityValue) {
    densitySlider.value = String(density);
    densityValue.textContent = String(density);
  }
  const starSlider = document.getElementById("starSlider");
  const starValue = document.getElementById("starValue");
  if (starSlider && starValue) {
    starSlider.value = String(star);
    starValue.textContent = String(star);
  }
  const cometToggleEl = document.getElementById("cometToggle");
  if (cometToggleEl) {
    cometToggleEl.checked = cometEnabled;
  }
  const fireworkToggleEl = document.getElementById("fireworkToggle");
  if (fireworkToggleEl) {
    fireworkToggleEl.checked = fireworkEnabled;
  }
  const pauseBtn = document.getElementById("pauseBtn");
  if (pauseBtn) {
    pauseBtn.textContent = animationPaused
      ? getText("btn.resume")
      : getText("btn.pause");
  }
}

function showSettings() {
  const modal = document.getElementById("settingsModal");
  if (modal) {
    modal.classList.add("active");
  }
}

function hideSettings() {
  const modal = document.getElementById("settingsModal");
  if (modal) {
    modal.classList.remove("active");
  }
}
let canvas = null;
let ctx = null;

let width = window.innerWidth;
let height = window.innerHeight;

const fireworks = [];
const particles = [];
const stars = [];
const comets = [];

class Star {
  constructor() {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * width;
    this.y = Math.random() * height * 0.7;
    this.radius = Math.random() * 1.2 + 0.2;
    this.alpha = initial ? Math.random() * 0.8 + 0.2 : 0;
    this.fadeSpeed = Math.random() * 0.015 + 0.005;
    this.twinklePhase = Math.random() * Math.PI * 2;
  }

  update() {
    this.twinklePhase += this.fadeSpeed * 2;
    this.alpha = 0.2 + 0.6 * (0.5 + 0.5 * Math.sin(this.twinklePhase));
  }

  draw() {
    const brightScale = Math.min(2, Math.max(0, starBrightness / 5));
    const effectiveAlpha = Math.min(1, this.alpha * brightScale);
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(248, 250, 252, ${effectiveAlpha})`;
    ctx.shadowColor = "rgba(248, 250, 252, 0.9)";
    ctx.shadowBlur = 4 + 8 * brightScale;
    ctx.fill();
    ctx.restore();
  }
}

class Comet {
  constructor() {
    this.reset();
  }

  reset() {
    const fromLeft = Math.random() > 0.5;
    this.x = fromLeft ? -50 : width + 50;
    this.y = random(height * 0.1, height * 0.5);
    const angle = fromLeft
      ? random(-Math.PI * 0.15, Math.PI * 0.2)
      : random(Math.PI * 0.8, Math.PI * 1.15);
    this.vx = Math.cos(angle) * random(4, 6) * (fromLeft ? 1 : -1);
    this.vy = Math.sin(angle) * random(0.5, 1.5);
    this.length = random(80, 140);
    this.alpha = random(0.4, 0.8);
    this.life = random(160, 260);
    const config = FESTIVALS_CONFIG[currentFestivalKey];
    const range = config?.colors?.fireworksHueRange || [10, 260];
    this.hue = random(range[0], range[1]);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= 1;
    this.alpha *= 0.995;

    if (
      this.life <= 0 ||
      this.x < -200 ||
      this.x > width + 200 ||
      this.y < -100
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    const tailX = this.x - this.vx * (this.length / 10);
    const tailY = this.y - this.vy * (this.length / 10);
    const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
    gradient.addColorStop(
      0,
      `hsla(${this.hue}, 100%, 80%, ${this.alpha})`
    );
    gradient.addColorStop(
      1,
      `hsla(${this.hue}, 100%, 50%, 0)`
    );

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(tailX, tailY);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();
  }
}

class Firework {
  constructor(sx, sy, tx, ty, color) {
    this.x = sx;
    this.y = sy;
    this.sx = sx;
    this.sy = sy;
    this.tx = tx;
    this.ty = ty;
    this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
    this.distanceTraveled = 0;
    this.coordinates = [];
    this.coordinateCount = 3;
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    this.angle = Math.atan2(ty - sy, tx - sx);
    this.speed = 4;
    this.acceleration = 1.03;
    this.brightness = random(50, 80);
    this.targetRadius = 2.5;
    this.color = color;
  }

  update(index) {
    this.coordinates.pop();
    this.coordinates.unshift([this.x, this.y]);

    if (this.targetRadius < 6) {
      this.targetRadius += 0.35;
    } else {
      this.targetRadius = 2.5;
    }

    this.speed *= this.acceleration;

    const vx = Math.cos(this.angle) * this.speed;
    const vy = Math.sin(this.angle) * this.speed;
    this.distanceTraveled = calculateDistance(
      this.sx,
      this.sy,
      this.x + vx,
      this.y + vy
    );

    if (this.distanceTraveled >= this.distanceToTarget) {
      createParticles(this.tx, this.ty, this.color);
      fireworks.splice(index, 1);
    } else {
      this.x += vx;
      this.y += vy;
    }
  }

  draw() {
    ctx.beginPath();
    const lastCoordinate = this.coordinates[this.coordinates.length - 1];
    ctx.moveTo(lastCoordinate[0], lastCoordinate[1]);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = `hsl(${this.color}, 100%, ${this.brightness}%)`;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
    ctx.strokeStyle = `hsla(${this.color}, 100%, 60%, 0.5)`;
    ctx.stroke();
  }
}

class Particle {
  constructor(x, y, color, options = {}) {
    this.x = x;
    this.y = y;
    this.coordinates = [];
    this.coordinateCount = 5;
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    this.angle =
      typeof options.angle === "number"
        ? options.angle
        : random(0, Math.PI * 2);
    const speedBase = random(1, 9);
    this.speed =
      typeof options.speed === "number"
        ? options.speed
        : speedBase * (options.speedScale || 1);
    this.friction = options.friction || 0.96;
    this.gravity =
      typeof options.gravity === "number" ? options.gravity : 0.9;
    this.hue = color;
    this.brightness = random(50, 80);
    this.alpha = 1;
    this.decay = options.decay || random(0.012, 0.03);
  }

  update(index) {
    this.coordinates.pop();
    this.coordinates.unshift([this.x, this.y]);

    this.speed *= this.friction;

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;

    this.alpha -= this.decay;
    if (this.alpha <= this.decay) {
      particles.splice(index, 1);
    }
  }

  draw() {
    ctx.beginPath();
    const lastCoordinate = this.coordinates[this.coordinates.length - 1];
    ctx.moveTo(lastCoordinate[0], lastCoordinate[1]);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
    ctx.stroke();
  }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function calculateDistance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function createParticles(x, y, color) {
  const config = FESTIVALS_CONFIG[currentFestivalKey];
  const effects = config?.effects || {};
  const base = 48;
  let count = Math.floor(base * (effects.particleMultiplier || 1));
  let shape = effects.burstShape || "sphere";

  // 随机模式：从多种形状中随机选择
  if (shape === "random") {
    const shapes = ["sphere", "ring", "double", "willow", "chrysanthemum", "star"];
    shape = shapes[Math.floor(Math.random() * shapes.length)];
  }

  // 心形绽放
  if (shape === "heart") {
    createHeartParticles(x, y, color, count);
    return;
  }

  // 环形绽放
  if (shape === "ring") {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      particles.push(
        new Particle(x, y, color, {
          angle,
          speed: 7,
          gravity: 0.15,
          friction: 0.97,
          decay: random(0.012, 0.022),
        })
      );
    }
    return;
  }

  // 双层绽放
  if (shape === "double") {
    for (let i = 0; i < count; i++) {
      const angle = random(0, Math.PI * 2);
      const speed =
        i % 2 === 0 ? random(5, 9) : random(2.5, 5.5);
      particles.push(
        new Particle(x, y, color, {
          angle,
          speed,
          gravity: 0.9,
          friction: 0.96,
        })
      );
    }
    return;
  }

  // 垂柳形
  if (shape === "willow") {
    for (let i = 0; i < count; i++) {
      const angle = random(-Math.PI, 0);
      particles.push(
        new Particle(x, y, color, {
          angle,
          speed: random(3, 6),
          gravity: 1.05,
          friction: 0.94,
          decay: random(0.008, 0.016),
        })
      );
    }
    return;
  }

  // 菊花形
  if (shape === "chrysanthemum") {
    const arms = 12;
    const particlesPerArm = Math.floor(count / arms);
    for (let arm = 0; arm < arms; arm++) {
      const baseAngle = (Math.PI * 2 * arm) / arms;
      for (let i = 0; i < particlesPerArm; i++) {
        const angle = baseAngle + random(-0.15, 0.15);
        const speed = 3 + (i / particlesPerArm) * 5;
        particles.push(
          new Particle(x, y, color, {
            angle,
            speed,
            gravity: 0.7,
            friction: 0.95,
            decay: random(0.01, 0.018),
          })
        );
      }
    }
    return;
  }

  // 星形绽放
  if (shape === "star") {
    const points = 5;
    const particlesPerPoint = Math.floor(count / points);
    for (let point = 0; point < points; point++) {
      const baseAngle = (Math.PI * 2 * point) / points - Math.PI / 2;
      // 外尖端
      for (let i = 0; i < particlesPerPoint * 0.6; i++) {
        const angle = baseAngle + random(-0.1, 0.1);
        particles.push(
          new Particle(x, y, color, {
            angle,
            speed: random(6, 9),
            gravity: 0.6,
            friction: 0.96,
          })
        );
      }
      // 内凹部分
      const innerAngle = baseAngle + Math.PI / points;
      for (let i = 0; i < particlesPerPoint * 0.4; i++) {
        const angle = innerAngle + random(-0.1, 0.1);
        particles.push(
          new Particle(x, y, color, {
            angle,
            speed: random(3, 5),
            gravity: 0.6,
            friction: 0.96,
          })
        );
      }
    }
    return;
  }

  // 默认球状
  while (count--) {
    particles.push(new Particle(x, y, color));
  }
}

// 心形粒子生成
function createHeartParticles(x, y, color, count) {
  // 心形参数方程
  // x = 16 * sin³(t)
  // y = 13 * cos(t) - 5 * cos(2t) - 2 * cos(3t) - cos(4t)
  const scale = 0.5;
  
  for (let i = 0; i < count; i++) {
    const t = (Math.PI * 2 * i) / count;
    
    // 心形坐标（归一化）
    const heartX = 16 * Math.pow(Math.sin(t), 3);
    const heartY = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    
    // 转换为角度和速度
    const angle = Math.atan2(heartY, heartX);
    const dist = Math.sqrt(heartX * heartX + heartY * heartY);
    const speed = (dist / 18) * 6 + random(0, 2);
    
    particles.push(
      new Particle(x, y, color, {
        angle,
        speed,
        gravity: 0.4,
        friction: 0.97,
        decay: random(0.008, 0.015),
      })
    );
  }
  
  // 添加中心爆发
  for (let i = 0; i < count * 0.3; i++) {
    particles.push(
      new Particle(x, y, color, {
        angle: random(0, Math.PI * 2),
        speed: random(1, 3),
        gravity: 0.3,
        friction: 0.98,
        decay: random(0.012, 0.02),
      })
    );
  }
}

let timer = 0;
let timerTotal = 50;

function loop() {
  if (!ctx || !canvas) return;

  requestAnimationFrame(loop);

  if (animationPaused) return;

  // 轻柔清除，保留拖尾
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(5, 10, 25, 0.55)";
  ctx.fillRect(0, 0, width, height);

  // 背景星空
  ctx.globalCompositeOperation = "source-over";
  stars.forEach((star) => {
    star.update();
    star.draw();
  });

  // 彗星
  if (cometEnabled) {
    comets.forEach((comet) => {
      comet.update();
      comet.draw();
    });
  }

  // 烟花与粒子
  ctx.globalCompositeOperation = "lighter";

  if (fireworkEnabled) {
    fireworks.forEach((firework, index) => {
      firework.draw();
      firework.update(index);
    });
  }

  particles.forEach((particle, index) => {
    particle.draw();
    particle.update(index);
  });

  if (fireworkEnabled && timer >= timerTotal) {
    const startX = width / 2;
    const startY = height;
    const targetX = random(width * 0.15, width * 0.85);
    const config = FESTIVALS_CONFIG[currentFestivalKey];
    const range = config?.colors?.fireworksHueRange || [10, 260];
    const effects = config?.effects || {};
    const heightRange = effects.heightRange || [0.12, 0.45];

    const targetY = random(height * heightRange[0], height * heightRange[1]);
    const hue = random(range[0], range[1]);

    fireworks.push(new Firework(startX, startY, targetX, targetY, hue));
    timer = 0;
    const intervalRange = effects.intervalRange || [35, 75];
    const densityOffset = fireworkDensity * 4;
    timerTotal = random(intervalRange[0] - densityOffset, intervalRange[1] - densityOffset);
  } else {
    timer++;
  }
}

function initFireworks() {
  canvas = document.getElementById("fireworks");
  if (!canvas) return;
  ctx = canvas.getContext("2d");
  if (!ctx) return;

  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // 初始化背景星星
  stars.length = 0;
  const config = FESTIVALS_CONFIG[currentFestivalKey];
  const effects = config?.effects || {};
  const starDensity = effects.starDensity || 1;
  const starCount = Math.min(
    160,
    Math.floor(((width * height) / 12000) * starDensity)
  );
  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }

  // 初始化几条彗星
  comets.length = 0;
  const cometCount = effects.cometCount || 2;
  for (let i = 0; i < cometCount; i++) {
    comets.push(new Comet());
  }

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;

    // 重建星空布局以适应尺寸
    stars.length = 0;
    const starCountResize = Math.min(
      160,
      Math.floor(((width * height) / 12000) * starDensity)
    );
    for (let i = 0; i < starCountResize; i++) {
      stars.push(new Star());
    }
  });

  // 点击/触摸触发烟花
  function launchFireworkAt(x, y) {
    if (!fireworkEnabled) return;
    const config = FESTIVALS_CONFIG[currentFestivalKey];
    const range = config?.colors?.fireworksHueRange || [10, 260];
    const hue = random(range[0], range[1]);
    fireworks.push(new Firework(width / 2, height, x, y, hue));
  }

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    launchFireworkAt(x, y);
  });

  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    for (let touch of e.touches) {
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      launchFireworkAt(x, y);
    }
  }, { passive: false });

  loop();
}

// -------- 事件绑定与初始化 --------
window.addEventListener("DOMContentLoaded", () => {
  // 语言（URL 参数优先，其次浏览器语言）
  {
    const { lang } = getQueryParams();
    currentLang = getPreferredLang(lang);
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = currentLang;
      langSelect.addEventListener("change", (e) => {
        currentLang = e.target.value === "en" ? "en" : "zh";
        const params = new URLSearchParams(window.location.search);
        params.set("lang", currentLang);
        window.history.replaceState({}, "", buildUrlFromParams(params));
        applyI18n();
        updateTextsFromParams();
      });
    }
    applyI18n();
  }

  // 读取 URL 中的动画设置（更多参数）
  applySettingsFromQuery();

  updateTextsFromParams();

  // 顶部“更多”菜单
  (function initMoreMenu() {
    const btn = document.getElementById("moreBtn");
    const panel = document.getElementById("morePanel");
    if (!btn || !panel) return;

    function open() {
      panel.classList.add("active");
      panel.setAttribute("aria-hidden", "false");
    }
    function close() {
      panel.classList.remove("active");
      panel.setAttribute("aria-hidden", "true");
    }
    function toggle() {
      if (panel.classList.contains("active")) close();
      else open();
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });
    panel.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    document.addEventListener("click", close);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  })();

  const nameInput = document.getElementById("nameInput");
  const festivalSelect = document.getElementById("festivalSelect");
  const shareBtn = document.getElementById("shareBtn");

  if (nameInput) {
    nameInput.addEventListener("input", debouncedSyncInputs);
  }
  if (festivalSelect) {
    festivalSelect.addEventListener("change", () => syncInputsToUrl(false));
  }
  const messageInput = document.getElementById("messageInput");
  if (messageInput) {
    messageInput.addEventListener("input", debouncedSyncInputs);
  }
  const fromInput = document.getElementById("fromInput");
  if (fromInput) {
    fromInput.addEventListener("input", debouncedSyncInputs);
  }
  if (shareBtn) {
    shareBtn.addEventListener("click", copyShareLink);
  }
  const exportBtn = document.getElementById("exportBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportCardAsImage);
  }
  const qrBtn = document.getElementById("qrBtn");
  if (qrBtn) {
    qrBtn.addEventListener("click", showQRCode);
  }
  const qrModalClose = document.getElementById("qrModalClose");
  if (qrModalClose) {
    qrModalClose.addEventListener("click", hideQRCode);
  }
  const qrModal = document.getElementById("qrModal");
  if (qrModal) {
    qrModal.addEventListener("click", (e) => {
      if (e.target === qrModal) {
        hideQRCode();
      }
    });
  }

  // 设置面板事件
  const settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", showSettings);
  }
  const settingsModalClose = document.getElementById("settingsModalClose");
  if (settingsModalClose) {
    settingsModalClose.addEventListener("click", hideSettings);
  }
  const settingsModal = document.getElementById("settingsModal");
  if (settingsModal) {
    settingsModal.addEventListener("click", (e) => {
      if (e.target === settingsModal) {
        hideSettings();
      }
    });
  }

  const densitySlider = document.getElementById("densitySlider");
  const densityValue = document.getElementById("densityValue");
  if (densitySlider && densityValue) {
    densitySlider.addEventListener("input", (e) => {
      densityValue.textContent = e.target.value;
      updateFireworkDensity(e.target.value);
      syncSettingsToUrl(false);
    });
  }

  const starSlider = document.getElementById("starSlider");
  const starValue = document.getElementById("starValue");
  if (starSlider && starValue) {
    starSlider.addEventListener("input", (e) => {
      starValue.textContent = e.target.value;
      updateStarBrightness(e.target.value);
      syncSettingsToUrl(false);
    });
  }

  const cometToggle = document.getElementById("cometToggle");
  if (cometToggle) {
    cometToggle.addEventListener("change", (e) => {
      cometEnabled = e.target.checked;
      syncSettingsToUrl(false);
    });
  }

  const fireworkToggle = document.getElementById("fireworkToggle");
  if (fireworkToggle) {
    fireworkToggle.addEventListener("change", (e) => {
      fireworkEnabled = e.target.checked;
      syncSettingsToUrl(false);
    });
  }

  const pauseBtn = document.getElementById("pauseBtn");
  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      toggleAnimation();
      syncSettingsToUrl(false);
    });
  }

  // 观看模式：带参数打开默认隐藏面板，30s 后提示制作同款
  (function initViewOnlyMode() {
    const params = new URLSearchParams(window.location.search);
    const mode = (params.get("mode") || "").toLowerCase().trim();
    const isEdit = mode === "edit";
    const shouldViewOnly = !isEdit && hasAnyViewingParams(params);

    const makeSameBtn = document.getElementById("makeSameBtn");
    const promptModal = document.getElementById("viewPromptModal");
    const promptYesBtn = document.getElementById("promptYesBtn");
    const promptNoBtn = document.getElementById("promptNoBtn");

    function goToEdit() {
      const p = new URLSearchParams(window.location.search);
      p.set("mode", "edit");
      window.location.href = buildUrlFromParams(p);
    }

    function openPrompt() {
      if (!promptModal) return;
      promptModal.classList.add("active");
      promptModal.setAttribute("aria-hidden", "false");
    }

    function closePrompt() {
      if (!promptModal) return;
      promptModal.classList.remove("active");
      promptModal.setAttribute("aria-hidden", "true");
    }

    if (shouldViewOnly) {
      document.body.classList.add("view-only");

      if (makeSameBtn) {
        makeSameBtn.addEventListener("click", goToEdit);
      }

      // 30s 后弹提示
      window.setTimeout(() => {
        openPrompt();
      }, 30_000);

      if (promptYesBtn) {
        promptYesBtn.addEventListener("click", goToEdit);
      }
      if (promptNoBtn) {
        promptNoBtn.addEventListener("click", closePrompt);
      }
      if (promptModal) {
        promptModal.addEventListener("click", (e) => {
          if (e.target === promptModal) closePrompt();
        });
      }
    } else {
      document.body.classList.remove("view-only");
      if (makeSameBtn) {
        makeSameBtn.style.display = "none";
      }
    }
  })();

  // 移动端事件初始化
  (function initMobileEvents() {
    const editDrawer = document.getElementById("editDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const mobileEditBtn = document.getElementById("mobileEditBtn");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const mobileShareBtn = document.getElementById("mobileShareBtn");
    const mobileMoreBtn = document.getElementById("mobileMoreBtn");
    const mobileMorePanel = document.getElementById("mobileMorePanel");
    const mobileExportBtn = document.getElementById("mobileExportBtn");
    const mobileQrBtn = document.getElementById("mobileQrBtn");
    const mobileSettingsBtn = document.getElementById("mobileSettingsBtn");

    // 移动端输入元素
    const nameInputMobile = document.getElementById("nameInputMobile");
    const festivalSelectMobile = document.getElementById("festivalSelectMobile");
    const messageInputMobile = document.getElementById("messageInputMobile");
    const fromInputMobile = document.getElementById("fromInputMobile");

    function openDrawer() {
      if (!editDrawer || !drawerOverlay) return;
      editDrawer.classList.add("active");
      drawerOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      
      // 同步 PC 端输入到移动端
      if (nameInputMobile && nameInput) nameInputMobile.value = nameInput.value;
      if (festivalSelectMobile && festivalSelect) festivalSelectMobile.value = festivalSelect.value;
      if (messageInputMobile && messageInput) messageInputMobile.value = messageInput.value;
      if (fromInputMobile && fromInput) fromInputMobile.value = fromInput.value;
    }

    function closeDrawer() {
      if (!editDrawer || !drawerOverlay) return;
      editDrawer.classList.remove("active");
      drawerOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    function toggleMobileMore() {
      if (!mobileMorePanel) return;
      mobileMorePanel.classList.toggle("active");
    }

    if (mobileEditBtn) {
      mobileEditBtn.addEventListener("click", openDrawer);
    }
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener("click", closeDrawer);
    }
    if (drawerOverlay) {
      drawerOverlay.addEventListener("click", closeDrawer);
    }
    if (mobileShareBtn) {
      mobileShareBtn.addEventListener("click", copyShareLink);
    }
    if (mobileMoreBtn) {
      mobileMoreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileMore();
      });
    }
    if (mobileExportBtn) {
      mobileExportBtn.addEventListener("click", () => {
        exportCardAsImage();
        if (mobileMorePanel) mobileMorePanel.classList.remove("active");
      });
    }
    if (mobileQrBtn) {
      mobileQrBtn.addEventListener("click", () => {
        showQRCode();
        if (mobileMorePanel) mobileMorePanel.classList.remove("active");
      });
    }
    if (mobileSettingsBtn) {
      mobileSettingsBtn.addEventListener("click", () => {
        showSettings();
        if (mobileMorePanel) mobileMorePanel.classList.remove("active");
      });
    }

    // 移动端输入同步到 PC 端
    if (nameInputMobile) {
      nameInputMobile.addEventListener("input", (e) => {
        if (nameInput) nameInput.value = e.target.value;
        debouncedSyncInputs();
      });
    }
    if (festivalSelectMobile) {
      festivalSelectMobile.addEventListener("change", (e) => {
        if (festivalSelect) festivalSelect.value = e.target.value;
        syncInputsToUrl(false);
      });
    }
    if (messageInputMobile) {
      messageInputMobile.addEventListener("input", (e) => {
        if (messageInput) messageInput.value = e.target.value;
        debouncedSyncInputs();
      });
    }
    if (fromInputMobile) {
      fromInputMobile.addEventListener("input", (e) => {
        if (fromInput) fromInput.value = e.target.value;
        debouncedSyncInputs();
      });
    }

    // 点击外部关闭更多菜单
    document.addEventListener("click", (e) => {
      if (mobileMorePanel && !mobileMorePanel.contains(e.target) && e.target !== mobileMoreBtn) {
        mobileMorePanel.classList.remove("active");
      }
    });
  })();

  initFireworks();
});
