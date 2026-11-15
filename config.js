
"use strict";

// ==========================================
// PLANTILLA COMERCIAL - MENÚ QR
// CONFIGURACIÓN DEL RESTAURANTE
// ==========================================

// Función auxiliar para traducciones.
// Si falta una traducción, usamos español.
const traducir = (es, otros = {}) => ({
  es,
  ...otros
});

// ==========================================
// 1. DATOS DEL RESTAURANTE
// ==========================================

window.RESTAURANT_CONFIG = {

  restaurant: {
    name: "Bistro Mediterráneo",

    description: traducir(
      "Sabores frescos del Mediterráneo",
      {
        ca: "Sabors frescos del Mediterrani",
        en: "Fresh Mediterranean flavors",
        it: "Sapori freschi del Mediterraneo",
        fr: "Saveurs fraîches de la Méditerranée",
        pt: "Sabores frescos do Mediterrâneo",
        de: "Frische mediterrane Aromen",
        ru: "Свежие вкусы Средиземноморья"
      }
    ),

    address: "Tarragona, España",

    // Dejar vacío si no tenemos logo.
    logo: "",

    // Enlaces de ejemplo desactivados.
    // Usar URLs reales con https://
    whatsapp: "",
    instagram: "",
    reviews: ""
  },

  // ========================================
  // 2. MONEDA E IDIOMAS
  // ========================================

  currency: "EUR",

  // El primer idioma será el predeterminado.
  languages: [
    "ca",
    "es",
    "en",
    "it",
    "fr",
    "pt",
    "de",
    "ru"
  ],

  // ========================================
  // 3. CATEGORÍAS
  // ========================================

  categories: [
    {
      id: "entrantes",
      name: traducir("Entrantes", {
        ca: "Entrants",
        en: "Starters",
        it: "Antipasti",
        fr: "Entrées",
        pt: "Entradas",
        de: "Vorspeisen",
        ru: "Закуски"
      })
    },
    {
      id: "principales",
      name: traducir("Platos principales", {
        ca: "Plats principals",
        en: "Main courses",
        it: "Piatti principali",
        fr: "Plats principaux",
        pt: "Pratos principais",
        de: "Hauptgerichte",
        ru: "Основные блюда"
      })
    },
    {
      id: "postres",
      name: traducir("Postres", {
        ca: "Postres",
        en: "Desserts",
        it: "Dolci",
        fr: "Desserts",
        pt: "Sobremesas",
        de: "Desserts",
        ru: "Десерты"
      })
    },
    {
      id: "bebidas",
      name: traducir("Bebidas", {
        ca: "Begudes",
        en: "Drinks",
        it: "Bevande",
        fr: "Boissons",
        pt: "Bebidas",
        de: "Getränke",
        ru: "Напитки"
      })
    }
  ],

  // ========================================
  // 4. PRODUCTOS
  // ========================================

  products: [

    // ---------- ENTRANTES ----------

    {
      id: "bruschetta",
      category: "entrantes",

      name: traducir("Bruschetta", {
        ca: "Bruschetta",
        en: "Bruschetta",
        it: "Bruschetta",
        fr: "Bruschetta",
        pt: "Bruschetta",
        de: "Bruschetta",
        ru: "Брускетта"
      }),

      description: traducir(
        "Pan tostado con tomate fresco y albahaca",
        {
          ca: "Pa torrat amb tomàquet fresc i alfàbrega",
          en: "Toasted bread with fresh tomato and basil",
          it: "Pane tostato con pomodoro fresco e basilico",
          fr: "Pain grillé avec tomate fraîche et basilic",
          pt: "Pão torrado com tomate fresco e manjericão",
          de: "Geröstetes Brot mit frischen Tomaten und Basilikum",
          ru: "Поджаренный хлеб со свежими помидорами и базиликом"
        }
      ),

      ingredients: traducir("Pan, tomate, albahaca, aceite de oliva"),

      price: 6.50,
      image: "images/bruschetta.jpg",
      available: true
    },

    {
      id: "patatas-bravas",
      category: "entrantes",

      name: traducir("Patatas bravas", {
        ca: "Patates braves",
        en: "Patatas bravas",
        it: "Patatas bravas",
        fr: "Patatas bravas",
        pt: "Batatas bravas",
        de: "Patatas bravas",
        ru: "Картофель бравас"
      }),

      description: traducir(
        "Patatas crujientes con salsa brava",
        {
          ca: "Patates cruixents amb salsa brava",
          en: "Crispy potatoes with spicy brava sauce",
          it: "Patate croccanti con salsa brava",
          fr: "Pommes de terre croustillantes avec sauce brava",
          pt: "Batatas crocantes com molho brava",
          de: "Knusprige Kartoffeln mit Brava-Sauce",
          ru: "Хрустящий картофель с острым соусом"
        }
      ),

      ingredients: traducir("Patatas, salsa brava"),

      price: 5.90,
      image: "images/patatas.jpg",
      available: true
    },

    {
      id: "ensalada",
      category: "entrantes",

      name: traducir("Ensalada mediterránea", {
        ca: "Amanida mediterrània",
        en: "Mediterranean salad",
        it: "Insalata mediterranea",
        fr: "Salade méditerranéenne",
        pt: "Salada mediterrânea",
        de: "Mediterraner Salat",
        ru: "Средиземноморский салат"
      }),

      description: traducir(
        "Ensalada fresca con queso feta y aceitunas",
        {
          ca: "Amanida fresca amb formatge feta i olives",
          en: "Fresh salad with feta cheese and olives",
          it: "Insalata fresca con feta e olive",
          fr: "Salade fraîche avec feta et olives",
          pt: "Salada fresca com queijo feta e azeitonas",
          de: "Frischer Salat mit Feta und Oliven",
          ru: "Свежий салат с сыром фета и оливками"
        }
      ),

      ingredients: traducir(
        "Lechuga, tomate, feta, aceitunas"
      ),

      price: 8.50,
      image: "images/ensalada.jpg",
      available: true
    },

    // ---------- PLATOS PRINCIPALES ----------

    {
      id: "pizza",
      category: "principales",

      name: traducir("Pizza Margherita", {
        ca: "Pizza Margherita",
        en: "Margherita pizza",
        it: "Pizza Margherita",
        fr: "Pizza Margherita",
        pt: "Pizza Margherita",
        de: "Pizza Margherita",
        ru: "Пицца Маргарита"
      }),

      description: traducir(
        "Pizza clásica con mozzarella y albahaca",
        {
          ca: "Pizza clàssica amb mozzarella i alfàbrega",
          en: "Classic pizza with mozzarella and basil",
          it: "Pizza classica con mozzarella e basilico",
          fr: "Pizza classique avec mozzarella et basilic",
          pt: "Pizza clássica com mozzarella e manjericão",
          de: "Klassische Pizza mit Mozzarella und Basilikum",
          ru: "Классическая пицца с моцареллой и базиликом"
        }
      ),

      ingredients: traducir(
        "Masa, tomate, mozzarella, albahaca"
      ),

      price: 11.90,
      image: "images/pizza.jpg",
      available: true
    },

    {
      id: "pasta",
      category: "principales",

      name: traducir("Pasta carbonara", {
        ca: "Pasta carbonara",
        en: "Carbonara pasta",
        it: "Pasta alla carbonara",
        fr: "Pâtes carbonara",
        pt: "Massa carbonara",
        de: "Pasta Carbonara",
        ru: "Паста карбонара"
      }),

      description: traducir(
        "Pasta cremosa con guanciale y pecorino",
        {
          ca: "Pasta cremosa amb guanciale i pecorino",
          en: "Creamy pasta with guanciale and pecorino",
          it: "Pasta cremosa con guanciale e pecorino",
          fr: "Pâtes crémeuses au guanciale et pecorino",
          pt: "Massa cremosa com guanciale e pecorino",
          de: "Cremige Pasta mit Guanciale und Pecorino",
          ru: "Паста с гуанчале и сыром пекорино"
        }
      ),

      ingredients: traducir(
        "Pasta, huevo, guanciale, pecorino"
      ),

      price: 13.50,
      image: "images/pasta.jpg",
      available: true
    },

    {
      id: "pollo",
      category: "principales",

      name: traducir("Pollo a la plancha", {
        ca: "Pollastre a la planxa",
        en: "Grilled chicken",
        it: "Pollo alla griglia",
        fr: "Poulet grillé",
        pt: "Frango grelhado",
        de: "Gegrilltes Hähnchen",
        ru: "Курица на гриле"
      }),

      description: traducir(
        "Pechuga de pollo con verduras asadas",
        {
          ca: "Pit de pollastre amb verdures rostides",
          en: "Chicken breast with roasted vegetables",
          it: "Petto di pollo con verdure arrosto",
          fr: "Blanc de poulet avec légumes rôtis",
          pt: "Peito de frango com legumes assados",
          de: "Hähnchenbrust mit Ofengemüse",
          ru: "Куриная грудка с запечёнными овощами"
        }
      ),

      ingredients: traducir(
        "Pollo, verduras, aceite de oliva"
      ),

      price: 14.90,
      image: "images/pollo.jpg",
      available: true
    },

    // ---------- POSTRES ----------

    {
      id: "tiramisu",
      category: "postres",

      name: traducir("Tiramisú", {
        ca: "Tiramisú",
        en: "Tiramisu",
        it: "Tiramisù",
        fr: "Tiramisu",
        pt: "Tiramisù",
        de: "Tiramisu",
        ru: "Тирамису"
      }),

      description: traducir(
        "Postre italiano con café y mascarpone",
        {
          ca: "Postres italià amb cafè i mascarpone",
          en: "Italian dessert with coffee and mascarpone",
          it: "Dolce italiano con caffè e mascarpone",
          fr: "Dessert italien au café et mascarpone",
          pt: "Sobremesa italiana com café e mascarpone",
          de: "Italienisches Dessert mit Kaffee und Mascarpone",
          ru: "Итальянский десерт с кофе и маскарпоне"
        }
      ),

      ingredients: traducir(
        "Mascarpone, café, huevo, bizcochos"
      ),

      price: 5.90,
      image: "images/tiramisu.jpg",
      available: true
    },

    {
      id: "cheesecake",
      category: "postres",

      name: traducir("Tarta de queso", {
        ca: "Pastís de formatge",
        en: "Cheesecake",
        it: "Cheesecake",
        fr: "Gâteau au fromage",
        pt: "Cheesecake",
        de: "Käsekuchen",
        ru: "Чизкейк"
      }),

      description: traducir(
        "Tarta cremosa de queso",
        {
          ca: "Pastís cremós de formatge",
          en: "Creamy cheesecake",
          it: "Torta cremosa al formaggio",
          fr: "Gâteau au fromage crémeux",
          pt: "Bolo cremoso de queijo",
          de: "Cremiger Käsekuchen",
          ru: "Нежный сливочный чизкейк"
        }
      ),

      ingredients: traducir(
        "Queso crema, huevo, azúcar"
      ),

      price: 5.50,
      image: "images/cheesecake.jpg",
      available: true
    },

    {
      id: "helado",
      category: "postres",

      name: traducir("Helado artesanal", {
        ca: "Gelat artesanal",
        en: "Artisan ice cream",
        it: "Gelato artigianale",
        fr: "Glace artisanale",
        pt: "Gelado artesanal",
        de: "Hausgemachtes Eis",
        ru: "Домашнее мороженое"
      }),

      description: traducir(
        "Dos bolas de helado a elección",
        {
          ca: "Dues boles de gelat a escollir",
          en: "Two scoops of ice cream of your choice",
          it: "Due palline di gelato a scelta",
          fr: "Deux boules de glace au choix",
          pt: "Duas bolas de gelado à escolha",
          de: "Zwei Kugeln Eis nach Wahl",
          ru: "Два шарика мороженого на выбор"
        }
      ),

      ingredients: traducir(
        "Consultar sabores disponibles"
      ),

      price: 4.50,
      image: "images/helado.jpg",
      available: true
    },

    // ---------- BEBIDAS ----------

    {
      id: "agua",
      category: "bebidas",

      name: traducir("Agua mineral", {
        ca: "Aigua mineral",
        en: "Mineral water",
        it: "Acqua minerale",
        fr: "Eau minérale",
        pt: "Água mineral",
        de: "Mineralwasser",
        ru: "Минеральная вода"
      }),

      description: traducir("Botella de 500 ml", {
        ca: "Ampolla de 500 ml",
        en: "500 ml bottle",
        it: "Bottiglia da 500 ml",
        fr: "Bouteille de 500 ml",
        pt: "Garrafa de 500 ml",
        de: "500-ml-Flasche",
        ru: "Бутылка 500 мл"
      }),

      ingredients: traducir("Agua mineral"),

      price: 2.00,
      image: "images/agua.jpg",
      available: true
    },

    {
      id: "cafe",
      category: "bebidas",

      name: traducir("Café espresso", {
        ca: "Cafè espresso",
        en: "Espresso coffee",
        it: "Caffè espresso",
        fr: "Café expresso",
        pt: "Café expresso",
        de: "Espresso",
        ru: "Эспрессо"
      }),

      description: traducir("Café espresso italiano", {
        ca: "Cafè espresso italià",
        en: "Italian espresso coffee",
        it: "Caffè espresso italiano",
        fr: "Café expresso italien",
        pt: "Café expresso italiano",
        de: "Italienischer Espresso",
        ru: "Итальянский эспрессо"
      }),

      ingredients: traducir("Café"),

      price: 1.80,
      image: "images/cafe.jpg",
      available: true
    },

    {
      id: "limonada",
      category: "bebidas",

      name: traducir("Limonada casera", {
        ca: "Llimonada casolana",
        en: "Homemade lemonade",
        it: "Limonata fatta in casa",
        fr: "Citronnade maison",
        pt: "Limonada caseira",
        de: "Hausgemachte Limonade",
        ru: "Домашний лимонад"
      }),

      description: traducir(
        "Limonada natural con hielo",
        {
          ca: "Llimonada natural amb gel",
          en: "Fresh lemonade with ice",
          it: "Limonata naturale con ghiaccio",
          fr: "Citronnade fraîche avec glaçons",
          pt: "Limonada natural com gelo",
          de: "Frische Limonade mit Eis",
          ru: "Свежий лимонад со льдом"
        }
      ),

      ingredients: traducir(
        "Limón, agua, azúcar"
      ),

      price: 3.90,
      image: "images/limonada.jpg",
      available: true
    }
  ],

  // ========================================
  // 5. NOVEDADES
  // ========================================

  news: [
    {
      title: traducir(
        "¡Bienvenidos a Bistro Mediterráneo!",
        {
          ca: "Benvinguts a Bistro Mediterráneo!",
          en: "Welcome to Bistro Mediterráneo!",
          it: "Benvenuti al Bistro Mediterráneo!",
          fr: "Bienvenue au Bistro Mediterráneo!",
          pt: "Bem-vindos ao Bistro Mediterráneo!",
          de: "Willkommen im Bistro Mediterráneo!",
          ru: "Добро пожаловать в Bistro Mediterráneo!"
        }
      ),

      description: traducir(
        "Descubrí nuestros platos y especialidades.",
        {
          ca: "Descobreix els nostres plats i especialitats.",
          en: "Discover our dishes and specialties.",
          it: "Scopri i nostri piatti e le nostre specialità.",
          fr: "Découvrez nos plats et spécialités.",
          pt: "Descubra os nossos pratos e especialidades.",
          de: "Entdecken Sie unsere Gerichte und Spezialitäten.",
          ru: "Откройте для себя наши блюда и фирменные предложения."
        }
      )
    }
  ]
};
