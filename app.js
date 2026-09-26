const download = document.getElementById("download");
const hero = document.getElementById("hero-download");
let lang = localStorage.getItem("aihub-lang") === "en" ? "en" : "vi";

function applyLanguage() {
  document.documentElement.lang = lang;
  document.getElementById("lang").textContent = lang === "vi" ? "EN" : "VI";
  document.querySelectorAll("[data-vi]").forEach((node) => {
    node.textContent = node.getAttribute(lang === "vi" ? "data-vi" : "data-en");
  });
  const label = lang === "vi" ? "Tải DMG" : "Download DMG";
  if (!download.dataset.version) {
    download.textContent = label;
    hero.textContent = label;
  } else {
    download.textContent = label + " " + download.dataset.version;
    hero.textContent = label + " " + download.dataset.version;
  }
}

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "vi" ? "en" : "vi";
  localStorage.setItem("aihub-lang", lang);
  applyLanguage();
});

fetch("https://api.github.com/repos/b4chnh/ai-hub/releases/latest", {
  headers: { Accept: "application/vnd.github+json" }
}).then((response) => response.ok ? response.json() : null).then((release) => {
  if (!release) return;
  const asset = (release.assets || []).find((item) => /\.dmg$/i.test(item.name));
  const href = asset ? asset.browser_download_url : release.html_url;
  download.href = href;
  hero.href = href;
  download.dataset.version = release.tag_name || "";
  applyLanguage();
}).catch(() => {});

applyLanguage();
