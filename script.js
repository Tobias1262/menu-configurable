
"use strict";

// ======================================
// 1. ESTADO DEL MENÚ
// ======================================

const config = window.RESTAURANT_CONFIG;

if (!config) {
  throw new Error(
    "Falta config.js o RESTAURANT_CONFIG"
  );
}

const state = {
  language: "es",
  category: "all",
  search: ""
};

// ======================================
// 2. FUNCIONES AUXILIARES
// ======================================

function getTranslation(value) {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  return (
    value[state.language] ??
    value.es ??
    Object.values(value)[0] ??
    ""
  );
}

function getElement(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const element = getElement(id);

  if (element) {
    element.textContent = value ?? "";
  }
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function formatPrice(price) {
  const amount = Number(price);

  if (!Number.isFinite(amount)) {
    return "";
  }

  return new Intl.NumberFormat(
    state.language,
    {
      style: "currency",
      currency: config.currency || "EUR"
    }
  ).format(amount);
}

function getUiText(key) {
  const translations = {
    es: {
      language: "Idioma",
      search: "Buscar un producto...",
      menu: "Nuestro menú",
      news: "Novedades",
      all: "Todos",
      empty: "No encontramos productos.",
      reviews: "Dejanos una reseña"
    },

    ca: {
      language: "Idioma",
      search: "Cerca un producte...",
      menu: "La nostra carta",
      news: "Novetats",
      all: "Tots",
      empty: "No hem trobat productes.",
      reviews: "Deixa'ns una ressenya"
    },

    en: {
      language: "Language",
      search: "Search for a product...",
      menu: "Our menu",
      news: "What's new",
      all: "All",
      empty: "No products found.",
      reviews: "Leave us a review"
    },

    it: {
      language: "Lingua",
      search: "Cerca un prodotto...",
      menu: "Il nostro menù",
      news: "Novità",
      all: "Tutti",
      empty: "Nessun prodotto trovato.",
      reviews: "Lasciaci una recensione"
    },

    fr: {
      language: "Langue",
      search: "Rechercher un produit...",
      menu: "Notre carte",
      news: "Nouveautés",
      all: "Tous",
      empty: "Aucun produit trouvé.",
      reviews: "Laissez-nous un avis"
    },

    pt: {
      language: "Idioma",
      search: "Pesquisar um produto...",
      menu: "O nosso menu",
      news: "Novidades",
      all: "Todos",
      empty: "Nenhum produto encontrado.",
      reviews: "Deixe uma avaliação"
    },

    de: {
      language: "Sprache",
      search: "Produkt suchen...",
      menu: "Unsere Speisekarte",
      news: "Neuigkeiten",
      all: "Alle",
      empty: "Keine Produkte gefunden.",
      reviews: "Bewertung hinterlassen"
    },

    ru: {
      language: "Язык",
      search: "Поиск блюда...",
      menu: "Наше меню",
      news: "Новинки",
      all: "Все",
      empty: "Ничего не найдено.",
      reviews: "Оставить отзыв"
    }
  };

  const dictionary =
    translations[state.language] ||
    translations.es;

  return dictionary[key] || translations.es[key];
}

// ======================================
// 3. CONFIGURACIÓN DEL RESTAURANTE
// ======================================

function renderRestaurant() {
  const restaurant = config.restaurant || {};

  const name = restaurant.name || "Restaurante";

  setText("restaurant-name", name);
  setText("footer-restaurant-name", name);

  setText(
    "restaurant-description",
    getTranslation(restaurant.description)
  );

  setText(
    "restaurant-address",
    restaurant.address || ""
  );

  document.title = `${name} | Menú Digital`;

  const logo = getElement("restaurant-logo");

  if (logo && restaurant.logo) {
    logo.src = restaurant.logo;
    logo.alt = `Logo de ${name}`;
    logo.hidden = false;

    logo.onerror = () => {
      logo.hidden = true;
    };
  }

  const links = [
    ["whatsapp-link", restaurant.whatsapp],
    ["instagram-link", restaurant.instagram],
    ["reviews-link", restaurant.reviews]
  ];

  links.forEach(([id, url]) => {
    const link = getElement(id);

    if (!link) return;

    if (typeof url === "string" &&
        /^https:\/\//i.test(url)) {
      link.href = url;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  });
}

// ======================================
// 4. SELECTOR DE IDIOMAS
// ======================================

function renderLanguages() {
  const select = getElement("language-select");

  if (!select) return;

  select.replaceChildren();

  const languageNames = {
    ca: "Català",
    es: "Español",
    en: "English",
    it: "Italiano",
    fr: "Français",
    pt: "Português",
    de: "Deutsch",
    ru: "Русский"
  };

  const languages = config.languages || ["es"];

  languages.forEach(language => {
    const option = document.createElement("option");

    option.value = language;
    option.textContent =
      languageNames[language] || language;

    select.appendChild(option);
  });

  select.value = state.language;

  select.addEventListener("change", event => {
    state.language = event.target.value;

    try {
      localStorage.setItem(
        "menu_qr_language",
        state.language
      );
    } catch (error) {
      console.warn("No se pudo guardar el idioma");
    }

    renderAll();
  });
}

// ======================================
// 5. CATEGORÍAS DINÁMICAS
// ======================================

function renderCategories() {
  const container =
    getElement("categories-container");

  if (!container) return;

  container.replaceChildren();

  const categories = [
    {
      id: "all",
      name: getUiText("all")
    },
    ...(config.categories || [])
  ];

  categories.forEach(category => {
    const button = createElement(
      "button",
      "category-button",
      category.id === "all"
        ? getUiText("all")
        : getTranslation(category.name)
    );

    button.type = "button";

    if (state.category === category.id) {
      button.classList.add("active");
    }

    button.setAttribute(
      "aria-pressed",
      String(state.category === category.id)
    );

    button.addEventListener("click", () => {
      state.category = category.id;

      renderCategories();
      renderProducts();
    });

    container.appendChild(button);
  });
}

// ======================================
// 6. FILTRAR PRODUCTOS
// ======================================

function getFilteredProducts() {
  const products = config.products || [];

  const query = state.search
    .trim()
    .toLocaleLowerCase();

  return products.filter(product => {
    if (product.available === false) {
      return false;
    }

    const matchesCategory =
      state.category === "all" ||
      product.category === state.category;

    const searchableText = [
      getTranslation(product.name),
      getTranslation(product.description),
      getTranslation(product.ingredients)
    ]
      .join(" ")
      .toLocaleLowerCase();

    const matchesSearch =
      !query || searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });
}

// ======================================
// 7. CREAR TARJETA DE PRODUCTO
// ======================================

function createProductCard(product) {
  const card = createElement(
    "article",
    "product-card"
  );

  if (product.image) {
    const image = createElement(
      "img",
      "product-image"
    );

    image.src = product.image;
    image.alt = getTranslation(product.name);
    image.loading = "lazy";

    image.onerror = () => {
      image.remove();
    };

    card.appendChild(image);
  }

  const content = createElement(
    "div",
    "product-content"
  );

  const title = createElement(
    "h3",
    "product-name",
    getTranslation(product.name)
  );

  content.appendChild(title);

  const description =
    getTranslation(product.description);

  if (description) {
    content.appendChild(
      createElement(
        "p",
        "product-description",
        description
      )
    );
  }

  const ingredients =
    getTranslation(product.ingredients);

  if (ingredients) {
    content.appendChild(
      createElement(
        "p",
        "product-ingredients",
        ingredients
      )
    );
  }

  const price = createElement(
    "strong",
    "product-price",
    formatPrice(product.price)
  );

  content.appendChild(price);
  card.appendChild(content);

  return card;
}

// ======================================
// 8. MOSTRAR PRODUCTOS
// ======================================

function renderProducts() {
  const container =
    getElement("products-container");

  const emptyMessage =
    getElement("empty-message");

  if (!container) return;

  container.replaceChildren();

  const products = getFilteredProducts();

  products.forEach(product => {
    container.appendChild(
      createProductCard(product)
    );
  });

  if (emptyMessage) {
    emptyMessage.hidden = products.length > 0;
  }
}

// ======================================
// 9. NOVEDADES
// ======================================

function renderNews() {
  const section = getElement("news-section");
  const container = getElement("news-container");

  if (!section || !container) return;

  container.replaceChildren();

  const news = config.news || [];

  section.hidden = news.length === 0;

  news.forEach(item => {
    const card = createElement(
      "article",
      "news-card"
    );

    const title = createElement(
      "h3",
      "news-item-title",
      getTranslation(item.title)
    );

    card.appendChild(title);

    const description =
      getTranslation(item.description);

    if (description) {
      card.appendChild(
        createElement(
          "p",
          "news-description",
          description
        )
      );
    }

    container.appendChild(card);
  });
}

// ======================================
// 10. TRADUCIR INTERFAZ
// ======================================

function renderInterface() {
  document.documentElement.lang = state.language;

  setText(
    "menu-title",
    getUiText("menu")
  );

  setText(
    "news-title",
    getUiText("news")
  );

  setText(
    "empty-message",
    getUiText("empty")
  );

  setText(
    "reviews-link",
    getUiText("reviews")
  );

  const search = getElement("search-input");

  if (search) {
    search.placeholder = getUiText("search");
  }

  const languageLabel =
    document.querySelector(
      'label[for="language-select"]'
    );

  if (languageLabel) {
    languageLabel.textContent =
      getUiText("language");
  }

  setText(
    "restaurant-description",
    getTranslation(
      config.restaurant?.description
    )
  );
}

// ======================================
// 11. ACTUALIZAR TODO EL MENÚ
// ======================================

function renderAll() {
  renderInterface();
  renderCategories();
  renderProducts();
  renderNews();
}

// ======================================
// 12. INICIAR APLICACIÓN
// ======================================

function init() {
  const languages = config.languages || ["es"];

  let savedLanguage = null;

  try {
    savedLanguage =
      localStorage.getItem("menu_qr_language");
  } catch (error) {
    console.warn("Almacenamiento no disponible");
  }

  state.language =
    languages.includes(savedLanguage)
      ? savedLanguage
      : languages[0];

  renderRestaurant();
  renderLanguages();
  renderAll();

  const search = getElement("search-input");

  if (search) {
    search.addEventListener("input", event => {
      state.search = event.target.value;
      renderProducts();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    init
  );
} else {
  init();
}
