const TEXT = {
  it: {
    documento: "Menu · Playa Luna",
    kicker: "Banco food · Bar · Asporto",
    hero: {
      food: {
        titolo: "Menu <em>asporto</em>.",
        sottotitolo: "Cucina di mare, panini e piatti della tradizione, dal nostro banco food."
      },
      bar: {
        titolo: "Menu <em>bar</em>.",
        sottotitolo: "Caffetteria, rosticceria, bevande, birre e vini. Tutto dal nostro banco bar."
      }
    },
    doveSiamo: "Dove siamo",
    seguici: "Seguici",
    credito: "Menu asporto e bar",
    tag: "Asporto"
  },
  en: {
    documento: "Menu · Playa Luna",
    kicker: "Food counter · Bar · Takeaway",
    hero: {
      food: {
        titolo: "Takeaway <em>menu</em>.",
        sottotitolo: "Seafood, sandwiches and traditional dishes, from our food counter."
      },
      bar: {
        titolo: "<em>Bar</em> menu.",
        sottotitolo: "Coffee, hot snacks, soft drinks, beers and wines. All from our bar counter."
      }
    },
    doveSiamo: "Where we are",
    seguici: "Follow us",
    credito: "Takeaway & bar menu",
    tag: "Takeaway"
  }
};

const STORAGE_LANG = "playa-luna-lingua";
const STORAGE_MENU = "playa-luna-menu";
const PLACEHOLDER = "img/placeholder.svg";

let lang = localStorage.getItem(STORAGE_LANG) === "en" ? "en" : "it";
let menuId = localStorage.getItem(STORAGE_MENU) === "bar" ? "bar" : "food";

const nav = document.getElementById("catNav");
const menu = document.getElementById("menu");
const switchBox = document.getElementById("menuSwitch");
const heroTitle = document.getElementById("heroTitle");
const heroSub = document.getElementById("heroSub");

function menuAttivo() {
  return MENUS.find(function (m) { return m.id === menuId; }) || MENUS[0];
}

function prezzo(valore) {
  const n = valore.toLocaleString(lang === "it" ? "it-IT" : "en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return lang === "it" ? n + " €" : "€" + n;
}

function idSezione(cat) {
  return "cat-" + cat.id;
}

function cardProdotto(prodotto) {
  const card = document.createElement("article");
  card.className = "card";

  const media = document.createElement("div");
  media.className = "card-media";

  const img = document.createElement("img");
  img.src = prodotto.foto || PLACEHOLDER;
  img.alt = prodotto.nome[lang];
  img.loading = "lazy";
  img.addEventListener("error", function () {
    if (!img.dataset.fallback) {
      img.dataset.fallback = "1";
      img.src = PLACEHOLDER;
    }
  });
  media.appendChild(img);

  const tag = document.createElement("span");
  tag.className = "card-tag";
  tag.textContent = TEXT[lang].tag;
  media.appendChild(tag);

  const body = document.createElement("div");
  body.className = "card-body";

  const top = document.createElement("div");
  top.className = "card-top";

  const nome = document.createElement("h3");
  nome.className = "card-name";
  nome.textContent = prodotto.nome[lang];
  top.appendChild(nome);

  if (prodotto.prezzo !== null && prodotto.prezzo !== undefined) {
    const prezzoEl = document.createElement("p");
    prezzoEl.className = "card-price";
    prezzoEl.textContent = prezzo(prodotto.prezzo);
    top.appendChild(prezzoEl);
  }

  body.appendChild(top);

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = prodotto.descrizione[lang];
  body.appendChild(desc);

  if (prodotto.opzioni) {
    const opzioni = document.createElement("div");
    opzioni.className = "card-options";
    prodotto.opzioni.forEach(function (opzione) {
      const riga = document.createElement("div");
      riga.className = "option-row";

      const label = document.createElement("span");
      label.textContent = opzione.label[lang];

      const valore = document.createElement("span");
      valore.className = "option-price";
      valore.textContent = prezzo(opzione.prezzo);

      riga.appendChild(label);
      riga.appendChild(valore);
      opzioni.appendChild(riga);
    });
    body.appendChild(opzioni);
  }

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function rigaCompatta(prodotto) {
  const riga = document.createElement("div");
  riga.className = "lista-riga";

  const testo = document.createElement("div");
  testo.className = "lista-testo";

  const nome = document.createElement("span");
  nome.className = "lista-nome";
  nome.textContent = prodotto.nome[lang];
  testo.appendChild(nome);

  if (prodotto.descrizione) {
    const desc = document.createElement("span");
    desc.className = "lista-desc";
    desc.textContent = prodotto.descrizione[lang];
    testo.appendChild(desc);
  }

  const leader = document.createElement("span");
  leader.className = "lista-leader";
  leader.setAttribute("aria-hidden", "true");

  const prezzoEl = document.createElement("span");
  prezzoEl.className = "lista-prezzo";
  prezzoEl.textContent = prezzo(prodotto.prezzo);

  riga.appendChild(testo);
  riga.appendChild(leader);
  riga.appendChild(prezzoEl);
  return riga;
}

function listaCompatta(cat) {
  const lista = document.createElement("div");
  lista.className = "lista";

  let gruppoCorrente = null;
  cat.prodotti.forEach(function (prodotto) {
    if (prodotto.gruppo) {
      const chiave = prodotto.gruppo.it;
      if (chiave !== gruppoCorrente) {
        gruppoCorrente = chiave;
        const titoloGruppo = document.createElement("p");
        titoloGruppo.className = "lista-gruppo";
        titoloGruppo.textContent = prodotto.gruppo[lang];
        lista.appendChild(titoloGruppo);
      }
    }
    lista.appendChild(rigaCompatta(prodotto));
  });

  return lista;
}

function renderTabs() {
  switchBox.innerHTML = "";
  MENUS.forEach(function (m) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-switch-btn";
    btn.setAttribute("role", "tab");
    btn.textContent = m.tab[lang];
    btn.classList.toggle("is-active", m.id === menuId);
    btn.setAttribute("aria-selected", m.id === menuId ? "true" : "false");
    btn.addEventListener("click", function () {
      if (m.id === menuId) {
        return;
      }
      menuId = m.id;
      localStorage.setItem(STORAGE_MENU, menuId);
      renderTabs();
      aggiornaHero();
      renderMenu();
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    switchBox.appendChild(btn);
  });
}

function aggiornaHero() {
  const hero = TEXT[lang].hero[menuId];
  heroTitle.innerHTML = hero.titolo;
  heroSub.textContent = hero.sottotitolo;
}

function renderMenu() {
  const attivo = menuAttivo();
  nav.innerHTML = "";
  menu.innerHTML = "";

  attivo.categorie.forEach(function (cat) {
    const ancora = idSezione(cat);

    const link = document.createElement("a");
    link.className = "cat-link";
    link.href = "#" + ancora;
    link.textContent = cat.nome[lang];
    link.addEventListener("click", function () {
      setActive(ancora);
    });
    nav.appendChild(link);

    const section = document.createElement("section");
    section.className = "cat-section";
    section.id = ancora;

    const head = document.createElement("div");
    head.className = "cat-head";

    const titolo = document.createElement("h2");
    titolo.className = "cat-title";
    titolo.textContent = cat.nome[lang];

    head.appendChild(titolo);
    section.appendChild(head);

    if (attivo.stile === "lista") {
      section.appendChild(listaCompatta(cat));
    } else {
      const lista = document.createElement("div");
      lista.className = "products";
      cat.prodotti.forEach(function (prodotto) {
        lista.appendChild(cardProdotto(prodotto));
      });
      section.appendChild(lista);
    }

    menu.appendChild(section);
  });

  observeSections();
}

function setActive(id) {
  nav.querySelectorAll(".cat-link").forEach(function (link) {
    const active = link.getAttribute("href") === "#" + id;
    link.classList.toggle("is-active", active);
    if (active) {
      link.scrollIntoView({ inline: "center", block: "nearest" });
    }
  });
}

let observer = null;

function aggiornaOffsetNav() {
  const barra = nav.closest(".cat-nav");
  const altezza = Math.round(barra.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--nav-h", altezza + "px");
  return altezza;
}

function observeSections() {
  if (observer) {
    observer.disconnect();
  }
  const navH = aggiornaOffsetNav();
  observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-" + (navH + 70) + "px 0px -60% 0px", threshold: 0 }
  );
  document.querySelectorAll(".cat-section").forEach(function (section) {
    observer.observe(section);
  });
}

window.addEventListener("resize", observeSections);

function applicaLingua() {
  document.documentElement.lang = lang;
  document.title = TEXT[lang].documento;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const chiave = el.getAttribute("data-i18n");
    if (TEXT[lang][chiave]) {
      el.textContent = TEXT[lang][chiave];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  document.getElementById("mapLink").href = PL.mappa;
  document.getElementById("igLink").href = PL.instagram;
  document.getElementById("fbLink").href = PL.facebook;
}

document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.dataset.lang === lang) {
      return;
    }
    const scrollY = window.scrollY;
    lang = btn.dataset.lang;
    localStorage.setItem(STORAGE_LANG, lang);
    applicaLingua();
    renderTabs();
    aggiornaHero();
    renderMenu();
    window.scrollTo({ top: scrollY, behavior: "instant" });
  });
});

applicaLingua();
renderTabs();
aggiornaHero();
renderMenu();
