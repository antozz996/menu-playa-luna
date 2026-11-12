const PL = {
  indirizzo: "Via Marina di Varcaturo, 42 · Giugliano in Campania (NA)",
  mappa: "https://www.google.com/maps/search/?api=1&query=Playa+Luna+Via+Marina+di+Varcaturo+42",
  instagram: "https://www.instagram.com/lidoplayaluna/",
  facebook: "https://www.facebook.com/Complesso.Playa.Luna/"
};

const MENUS = [
  {
    id: "food",
    tab: { it: "Food · Asporto", en: "Food · Takeaway" },
    stile: "card",
    categorie: [
      {
        id: "antipasti",
        nome: { it: "Antipasti", en: "Starters" },
        prodotti: [
          {
            nome: { it: "Polpo all'insalata", en: "Octopus Salad" },
            descrizione: {
              it: "Polpo tenero servito su un letto di insalata fresca, con olio EVO e limone.",
              en: "Tender octopus on a bed of fresh salad, with EVO oil and lemon."
            },
            prezzo: 13.0,
            foto: "img/polpo-all-insalata.jpg"
          },
          {
            nome: { it: "Gambero in tempura + salsa (5 pezzi)", en: "Tempura Prawns + Sauce (5 pcs)" },
            descrizione: {
              it: "Cinque gamberi in leggera tempura croccante, serviti con la nostra salsa della casa.",
              en: "Five prawns in light crispy tempura, served with our house sauce."
            },
            prezzo: 15.0,
            foto: "img/gambero-in-tempura.jpg"
          },
          {
            nome: { it: "Caprese di bufala", en: "Buffalo Mozzarella Caprese" },
            descrizione: {
              it: "Mozzarella di bufala campana, pomodoro fresco e basilico, con olio EVO.",
              en: "Campanian buffalo mozzarella, fresh tomato and basil, with EVO oil."
            },
            prezzo: 8.0,
            foto: "img/caprese-di-bufala.jpg"
          },
          {
            nome: { it: "Fiori di zucca (3 pezzi · 150 g)", en: "Courgette Flowers (3 pcs · 150 g)" },
            descrizione: {
              it: "Tre fiori di zucca croccanti fuori e delicati dentro. Porzione totale 150 g.",
              en: "Three courgette flowers, crispy outside and delicate inside. Total portion 150 g."
            },
            prezzo: 7.0,
            foto: "img/fiori-di-zucca.jpg"
          },
          {
            nome: { it: "Parmigiana 2.0 al forno", en: "Oven-baked Parmigiana 2.0" },
            descrizione: {
              it: "La nostra rivisitazione della parmigiana di melanzane, gratinata al forno.",
              en: "Our take on aubergine parmigiana, oven-baked au gratin."
            },
            prezzo: 5.0,
            foto: "img/parmigiana.jpg"
          }
        ]
      },
      {
        id: "primi",
        nome: { it: "Primi Piatti", en: "First Courses" },
        prodotti: [
          {
            nome: { it: "Pasta e fagioli paesana", en: "Country-style Pasta and Beans" },
            descrizione: {
              it: "Il classico della tradizione contadina: cremoso, saporito, come una volta.",
              en: "The classic country recipe: creamy and hearty, just like it used to be."
            },
            prezzo: 8.0,
            foto: "img/pasta-e-fagioli.jpg"
          },
          {
            nome: { it: "Pasta e piselli", en: "Pasta and Peas" },
            descrizione: {
              it: "Pasta con piselli freschi e un tocco di tradizione napoletana.",
              en: "Pasta with fresh peas and a touch of Neapolitan tradition."
            },
            prezzo: 8.0,
            foto: "img/pasta-e-piselli.jpg"
          },
          {
            nome: { it: "Raviolo ripieno", en: "Stuffed Ravioli" },
            descrizione: {
              it: "Ravioli ripieni fatti in casa, disponibili in versione Terra o versione Mare.",
              en: "Homemade stuffed ravioli, available in a Land or Sea version."
            },
            prezzo: null,
            opzioni: [
              { label: { it: "Versione Terra", en: "Land version" }, prezzo: 8.0 },
              { label: { it: "Versione Mare", en: "Sea version" }, prezzo: 12.0 }
            ],
            foto: "img/raviolo.jpg"
          },
          {
            nome: { it: "Gnocco alla Nerano", en: "Nerano-style Gnocco" },
            descrizione: {
              it: "Gnocco di patate e zucchine con provolone del Monaco, omaggio alla costiera.",
              en: "Potato and courgette gnocco with Provolone del Monaco, a tribute to the coast."
            },
            prezzo: 8.0,
            foto: "img/gnocco-alla-nerano.jpg"
          }
        ]
      },
      {
        id: "secondi",
        nome: { it: "Secondi Piatti", en: "Main Courses" },
        prodotti: [
          {
            nome: { it: "Calamaro e gambero alla griglia", en: "Grilled Squid and Prawns" },
            descrizione: {
              it: "Calamaro e gambero grigliati al momento, con un filo d'olio e limone.",
              en: "Freshly grilled squid and prawns, with a drizzle of oil and lemon."
            },
            prezzo: 16.0,
            foto: "img/calamaro-gambero-griglia.jpg"
          },
          {
            nome: { it: "Frittura di gamberi e calamari", en: "Fried Prawns and Squid" },
            descrizione: {
              it: "Frittura dorata e croccante di gamberi e calamari freschi.",
              en: "Golden, crispy fry of fresh prawns and squid."
            },
            prezzo: 15.0,
            foto: "img/frittura-gamberi-calamari.jpg"
          }
        ]
      },
      {
        id: "panini",
        nome: { it: "Panini", en: "Sandwiches" },
        prodotti: [
          {
            nome: { it: "Crudo, cotto e mozzarella", en: "Cured Ham, Cooked Ham and Mozzarella" },
            descrizione: {
              it: "Prosciutto crudo, prosciutto cotto e mozzarella.",
              en: "Cured ham, cooked ham and mozzarella."
            },
            prezzo: 6.0,
            foto: "img/panino-crudo-cotto.jpg"
          },
          {
            nome: { it: "Cotoletta, würstel e patatine", en: "Cutlet, Frankfurter and Fries" },
            descrizione: {
              it: "Cotoletta croccante, würstel e patatine fritte.",
              en: "Crispy cutlet, frankfurter and fries."
            },
            prezzo: 7.0,
            foto: "img/panino-cotoletta-wurstel.jpg"
          },
          {
            nome: { it: "Tonno e pomodoro", en: "Tuna and Tomato" },
            descrizione: {
              it: "Tonno di qualità e pomodoro fresco.",
              en: "Quality tuna and fresh tomato."
            },
            prezzo: 6.0,
            foto: "img/panino-tonno-pomodoro.jpg"
          },
          {
            nome: { it: "Tonno, pomodoro e mozzarella", en: "Tuna, Tomato and Mozzarella" },
            descrizione: {
              it: "Tonno, pomodoro fresco e mozzarella filante.",
              en: "Tuna, fresh tomato and melting mozzarella."
            },
            prezzo: 8.0,
            foto: "img/panino-tonno-pomodoro-mozzarella.jpg"
          },
          {
            nome: { it: "Panino da comporre", en: "Build-your-own Sandwich" },
            descrizione: {
              it: "Componilo come vuoi: hamburger, salsiccia, scamorza, insalata, patatine e pomodori.",
              en: "Build it your way: burger, sausage, scamorza, salad, fries and tomatoes."
            },
            prezzo: 11.0,
            foto: "img/panino-da-comporre.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "bar",
    tab: { it: "Bar", en: "Bar" },
    stile: "lista",
    categorie: [
      {
        id: "colazione",
        nome: { it: "Colazione", en: "Breakfast" },
        prodotti: [
          { nome: { it: "Caffè", en: "Espresso" }, prezzo: 1.2 },
          { nome: { it: "Caffè deca", en: "Decaf espresso" }, prezzo: 1.5 },
          { nome: { it: "Ginseng", en: "Ginseng coffee" }, prezzo: 1.5 },
          { nome: { it: "Orzo", en: "Barley coffee" }, prezzo: 1.5 },
          { nome: { it: "Latte bianco", en: "Warm milk" }, prezzo: 1.5 },
          { nome: { it: "Cornetto crema di limone", en: "Lemon cream croissant" }, prezzo: 1.5 },
          { nome: { it: "Cornetto al cioccolato", en: "Chocolate croissant" }, prezzo: 1.5 },
          { nome: { it: "Cornetto vuoto", en: "Plain croissant" }, prezzo: 1.5 },
          { nome: { it: "Crema caffè", en: "Coffee cream" }, prezzo: 2.0 },
          { nome: { it: "Cappuccino", en: "Cappuccino" }, prezzo: 2.0 },
          { nome: { it: "Tisana", en: "Herbal tea" }, prezzo: 3.0 },
          { nome: { it: "Crostata Nutella", en: "Nutella tart" }, prezzo: 4.0 },
          { nome: { it: "Sbriciolata Nutella", en: "Nutella crumble" }, prezzo: 4.0 },
          { nome: { it: "Crostata alla frutta", en: "Fruit tart" }, prezzo: 4.0 }
        ]
      },
      {
        id: "rosticceria",
        nome: { it: "Rosticceria", en: "Hot Snacks" },
        prodotti: [
          { nome: { it: "Margherita", en: "Margherita pizza" }, prezzo: 2.0 },
          { nome: { it: "Marinara", en: "Marinara pizza" }, prezzo: 2.0 },
          { nome: { it: "Mimosa", en: "Mimosa pizza" }, prezzo: 2.0 },
          { nome: { it: "Parigina", en: "Parigina" }, prezzo: 2.0 },
          { nome: { it: "Crocchè", en: "Potato croquettes" }, prezzo: 2.0 },
          { nome: { it: "Supplì", en: "Rice croquette" }, prezzo: 2.0 },
          { nome: { it: "Pizza con scarole", en: "Escarole pizza" }, prezzo: 2.5 },
          { nome: { it: "Hot dog", en: "Hot dog" }, prezzo: 2.5 },
          { nome: { it: "Frittatina", en: "Neapolitan frittatina" }, prezzo: 2.5 },
          { nome: { it: "Panino napoletano", en: "Neapolitan sandwich" }, prezzo: 2.5 },
          { nome: { it: "Frittata di pasta", en: "Pasta omelette" }, prezzo: 4.0 },
          { nome: { it: "Focaccia", en: "Focaccia" }, prezzo: 4.0 }
        ]
      },
      {
        id: "bevande",
        nome: { it: "Bevande & Analcolici", en: "Drinks & Soft Drinks" },
        prodotti: [
          { nome: { it: "Acqua 0,5 l", en: "Still water 0.5 l" }, prezzo: 1.0 },
          { nome: { it: "Acqua 1 l", en: "Still water 1 l" }, prezzo: 2.0 },
          { nome: { it: "Coca Cola", en: "Coca Cola" }, prezzo: 2.5 },
          { nome: { it: "Coca Zero", en: "Coca Zero" }, prezzo: 2.5 },
          { nome: { it: "Fanta", en: "Fanta" }, prezzo: 2.5 },
          { nome: { it: "Sprite", en: "Sprite" }, prezzo: 2.5 },
          { nome: { it: "Lemon Soda", en: "Lemon Soda" }, prezzo: 2.5 },
          { nome: { it: "Succhi vari gusti", en: "Juices, various flavours" }, prezzo: 2.5 },
          { nome: { it: "Bitter rosso", en: "Red bitter" }, prezzo: 2.5 },
          { nome: { it: "Bitter bianco", en: "White bitter" }, prezzo: 2.5 },
          { nome: { it: "Crodino", en: "Crodino" }, prezzo: 2.5 },
          { nome: { it: "Thè pesca", en: "Peach tea" }, prezzo: 3.0 },
          { nome: { it: "Thè limone", en: "Lemon tea" }, prezzo: 3.0 },
          { nome: { it: "San Pellegrino rosso", en: "San Pellegrino rosso" }, prezzo: 3.0 },
          { nome: { it: "San Pellegrino bianco", en: "San Pellegrino bianco" }, prezzo: 3.0 },
          { nome: { it: "Tassoni", en: "Tassoni" }, prezzo: 3.0 },
          { nome: { it: "Schweppes limone", en: "Schweppes lemon" }, prezzo: 3.0 },
          { nome: { it: "Schweppes tonica", en: "Schweppes tonic" }, prezzo: 3.0 },
          { nome: { it: "Schweppes arancia", en: "Schweppes orange" }, prezzo: 3.0 },
          { nome: { it: "Red Bull", en: "Red Bull" }, prezzo: 4.0 },
          { nome: { it: "Crodino rosso", en: "Crodino rosso" }, prezzo: 4.0 }
        ]
      },
      {
        id: "birre",
        nome: { it: "Birre & Alcolici", en: "Beers & Cocktails" },
        prodotti: [
          { nome: { it: "Tennent's", en: "Tennent's" }, prezzo: 4.0 },
          { nome: { it: "Heineken", en: "Heineken" }, prezzo: 4.0 },
          { nome: { it: "Nastro Azzurro", en: "Nastro Azzurro" }, prezzo: 4.0 },
          { nome: { it: "Corona", en: "Corona" }, prezzo: 4.0 },
          { nome: { it: "Calice prosecco", en: "Glass of prosecco" }, prezzo: 5.0 },
          { nome: { it: "Calice vino", en: "Glass of wine" }, prezzo: 5.0 },
          { nome: { it: "Drink basic", en: "Basic cocktail" }, prezzo: 8.0 },
          { nome: { it: "Drink premium", en: "Premium cocktail" }, prezzo: 12.0 }
        ]
      },
      {
        id: "vini",
        nome: { it: "Carta dei Vini", en: "Wine List" },
        prodotti: [
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Falanghina Casa Ambra", en: "Falanghina Casa Ambra" }, prezzo: 30.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Ca' dei Frati · Lugana", en: "Ca' dei Frati · Lugana" }, prezzo: 40.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Müller Thurgau S.M. Appen", en: "Müller Thurgau S.M. Appen" }, prezzo: 40.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Gewürztraminer S.M.", en: "Gewürztraminer S.M." }, prezzo: 40.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Chardonnay · Jermann", en: "Chardonnay · Jermann" }, prezzo: 40.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Fiorduva · Marisa Cuomo", en: "Fiorduva · Marisa Cuomo" }, prezzo: 40.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Fiano Ferrara", en: "Fiano Ferrara" }, prezzo: 50.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Greco", en: "Greco" }, prezzo: 50.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Furore Bianco · Marisa Cuomo", en: "Furore Bianco · Marisa Cuomo" }, prezzo: 60.0 },
          { gruppo: { it: "Vino Bianco", en: "White Wine" }, nome: { it: "Les Selection de Tracy", en: "Les Selection de Tracy" }, prezzo: 60.0 },
          { gruppo: { it: "Vino Rosé", en: "Rosé Wine" }, nome: { it: "M Rosé Minuty", en: "M Rosé Minuty" }, prezzo: 45.0 },
          { gruppo: { it: "Vino Rosso", en: "Red Wine" }, nome: { it: "Primitivo Lirica", en: "Primitivo Lirica" }, prezzo: 30.0 },
          { gruppo: { it: "Vino Rosso", en: "Red Wine" }, nome: { it: "Guarasi Falerno", en: "Guarasi Falerno" }, prezzo: 35.0 }
        ]
      }
    ]
  }
];
