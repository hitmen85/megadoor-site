// ================================
// Translations dictionary (RO + RU)
// ================================
const translations = {
  ro: {
    brandTitle: "Uși de interior și exterior",
    navHome: "Acasă",
    navExterior: "Uși exterior",
    navInterior: "Uși interior",
    navPVC: "Termopane / PVC",
    navDiscount: "Uși Reducere",
    navContact: "Contacte",

    homeTitle: "MegaDoor.md – Uși de interior și exterior",
    homeSubtitle:
      "Platformă pentru prezentarea și vânzarea ușilor de interior, exterior și a sistemelor PVC / termopan.",
    homeCta: "Cere o ofertă gratuită",
    homeBullet1: "Consultanță gratuită și măsurări la domiciliu*",
    homeBullet2: "Montaj profesionist și garanție",
    homeBullet3: "Modele moderne pentru apartamente și case",

    extTitle: "Uși exterior",
    extText:
      "Uși metalice și termoizolate, ideale pentru case, apartamente și spații comerciale.",
    extCard1Title: "Uși de intrare blindate",
    extCard1Text:
      "Protecție sporită, multiple puncte de închidere, finisaje moderne și clasice.",
    extCard2Title: "Uși pentru case",
    extCard2Text:
      "Rezistente la intemperii, cu paneluri decorative și sticlă securizată.",

    intTitle: "Uși interior",
    intText:
      "Uși pentru camere, bucătării, băi și birouri. Gamă variată de culori și dimensiuni.",
    intCard1Title: "Uși laminate / furnir",
    intCard1Text: "Aspect natural, rezistență bună și întreținere ușoară.",
    intCard2Title: "Uși din sticlă",
    intCard2Text:
      "Potrivite pentru spații moderne și birouri, lasă lumina să circule.",

    pvcTitle: "Termopane / PVC",
    pvcText:
      "Ferestre și uși PVC cu geam termopan, profil de calitate și feronerie durabilă.",
    pvcBullet1: "Profil 5-7 camere",
    pvcBullet2: "Sticlă termopan cu protecție termică și fonică",
    pvcBullet3: "Montaj profesionist și reglaj post-instalare",

    saleTitle: "Uși Reducere",
    saleText:
      "Modele de uși la preț promoțional, stoc limitat. Ideal pentru renovări rapide.",
    saleBadge: "-20% până la -40%",
    saleNote:
      "Pentru detalii actualizate despre promoții, contactează-ne telefonic sau prin formular.",

    contactTitle: "Contacte",
    contactText:
      "Scrie-ne sau sună-ne pentru oferte personalizate, măsurări și consultanță.",
    contactPhoneTitle: "Telefon",
    contactEmailTitle: "Email",
    contactAddressTitle: "Adresă",
    contactAddress: "Chișinău, str. Exemplu 10 (showroom MegaDoor)",

    formName: "Nume",
    formPhone: "Telefon",
    formMessage: "Mesaj",
    formSubmit: "Trimite"
  },

  ru: {
    brandTitle: "Межкомнатные и входные двери",
    navHome: "Главная",
    navExterior: "Входные двери",
    navInterior: "Межкомнатные двери",
    navPVC: "Окна / ПВХ",
    navDiscount: "Двери со скидкой",
    navContact: "Контакты",

    homeTitle: "MegaDoor.md – Межкомнатные и входные двери",
    homeSubtitle:
      "Платформа для презентации и продажи межкомнатных, входных дверей и ПВХ систем.",
    homeCta: "Запросить бесплатное предложение",
    homeBullet1: "Бесплатная консультация и замер*",
    homeBullet2: "Профессиональный монтаж и гарантия",
    homeBullet3: "Современные модели для квартир и домов",

    extTitle: "Входные двери",
    extText:
      "Металлические и утепленные двери для квартир, домов и коммерческих помещений.",
    extCard1Title: "Бронированные двери",
    extCard1Text:
      "Повышенная защита, несколько точек запирания, современные и классические отделки.",
    extCard2Title: "Двери для частных домов",
    extCard2Text:
      "Устойчивы к погодным условиям, декоративные панели, закаленное стекло.",

    intTitle: "Межкомнатные двери",
    intText:
      "Двери для комнат, кухонь, ванных и офисов. Большой выбор цветов и отделок.",
    intCard1Title: "Ламинированные / шпон",
    intCard1Text: "Натуральный вид, высокая прочность и легкий уход.",
    intCard2Title: "Стеклянные двери",
    intCard2Text:
      "Идеальны для современных офисов и помещений, пропускают много света.",

    pvcTitle: "Окна / ПВХ",
    pvcText:
      "ПВХ-окна и двери с тепло- и шумоизоляционными стеклопакетами.",
    pvcBullet1: "Профиль 5–7 камер",
    pvcBullet2: "Тепло- и шумоизоляционный стеклопакет",
    pvcBullet3: "Профессиональный монтаж и настройка",

    saleTitle: "Двери со скидкой",
    saleText:
      "Акционные модели дверей, ограниченное количество. Отлично для ремонта.",
    saleBadge: "-20% до -40%",
    saleNote:
      "За актуальной информацией обращайтесь по телефону или через форму.",

    contactTitle: "Контакты",
    contactText:
      "Пишите или звоните для персонального предложения и консультации.",
    contactPhoneTitle: "Телефон",
    contactEmailTitle: "Email",
    contactAddressTitle: "Адрес",
    contactAddress: "Кишинёв, ул. Примерная 10 (шоурум MegaDoor)",

    formName: "Имя",
    formPhone: "Телефон",
    formMessage: "Сообщение",
    formSubmit: "Отправить"
  }
};

// ============================
// Apply selected language
// ============================
function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Set <html lang="xx">
  document.documentElement.lang = lang;

  // Replace all elements with data-i18n keys
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Highlight the active language button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// ============================
// Init on page load
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // Set footer year dynamically
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Default language is Romanian
  setLanguage("ro");

  // Add click listeners for language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
});
