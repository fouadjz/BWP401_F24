
/* ================================
   كائن الترجمات باللغتين (إنجليزية / عربية)
================================ */
const translations = {
  en: {
    title_home: "City Events Guide",
    title_events: "Events - City Events Guide",
    title_event: "Event Details - City Events Guide",
    title_about: "About - City Events Guide",
    title_contact: "Contact - City Events Guide",
    brand: "City Events",
    rights: "© 2025 City Events — All rights reserved.",
    nav_home: "Home",
    nav_events: "Events",
    nav_about: "About",
    nav_contact: "Contact",
    featured: "Featured This Week",
    categories: "Categories",
    latest: "Latest Events",
    all: "All Categories",
    about_title: "About City Events",
    about_text: "City Events is a simple guide made for the course. It helps local people find activities, cultural events, sports and more.",
    team: "Team",
    role_prof1: "Home Page Programming",
    role_prof2: "Events Page Programming & Event Details Page",
    role_prof3: "About Page Programming & Contact Page",
    contact_title: "Contact Us",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    send: "Send"
  },
  ar: {
    title_home: "دليل فعاليات المدينة",
    title_events: "الفعاليات - دليل فعاليات المدينة",
    title_event: "تفاصيل الفعالية - دليل فعاليات المدينة",
    title_about: "حول الدليل",
    title_contact: "اتصل بنا",
    brand: "دليل الفعاليات",
    rights: "© 2025 دليل فعاليات المدينة — كل الحقوق محفوظة.",
    nav_home: "الرئيسية",
    nav_events: "الفعاليات",
    nav_about: "عن الدليل",
    nav_contact: "اتصل بنا",
    featured: "الفعاليات البارزة هذا الأسبوع",
    categories: "التصنيفات",
    latest: "أحدث الفعاليات",
    all: "جميع التصنيفات",
    about_title: "عن دليل الفعاليات",
    about_text: "دليل فعاليات المدينة هو مشروع تعليمي يساعد المجتمع في العثور على الفعاليات المحلية.",
    team: "الفريق",
    role_prof1: "برمجة صفحة الرئيسية",
    role_prof2: "برمجة صفحة الفعاليات و صفحة تفاصيل الفعالية",
    role_prof3: "برمجة صفحة حول و صفحة اتصل بنا",
    contact_title: "تواصل معنا",
    label_name: "الاسم",
    label_email: "البريد",
    label_message: "الرسالة",
    send: "إرسال"
  }
};

/* ================================
   قائمة الفعاليات مع بياناتها
================================ */
const events = [
  {
    "id": 1,
    "title_en": "Riyadh Season – Boulevard City",
    "title_ar": "موسم الرياض – بوليفارد سيتي ",
    "date": "2025-10-10",
    "category": "Festival",
    "place": "Boulevard City, Riyadh",
    "img": "assets/img/riyadh_season.jpg",
    "description_en": "Riyadh Season is a months-long entertainment festival featuring concerts, shows, sporting events and family attractions across multiple zones in the city.",
    "description_ar": "موسم الرياض مهرجان ترفيهي يستمر لعدة أشهر ويضم حفلات، عروضًا، فعاليات رياضية وأنشطة عائلية في عدة مناطق بالمدينة."
  },
  {
    "id": 2,
    "title_en": "Noor Riyadh – Light Art Festival",
    "title_ar": "نور الرياض – مهرجان فنون الإضاءة",
    "date": "2025-11-28",
    "category": "Art & Culture",
    "place": "Downtown Riyadh / Multiple Venues",
    "img": "assets/img/noor_riyadh.jpg",
    "description_en": "Noor Riyadh is a large-scale light art festival that turns Riyadh into an open-air gallery with immersive light installations and public artworks.",
    "description_ar": "نور الرياض مهرجان ضخم لأعمال وفنون الإضاءة يحوّل الرياض إلى معرض مفتوح مع تركيبات ضوئية وتجارب فنية عامة."
  },
  {
    "id": 3,
    "title_en": "SOUNDSTORM – MDLBEAST Music Festival",
    "title_ar": "ساوندستورم – مهرجان MDLBEAST الموسيقي",
    "date": "2025-12-12",
    "category": "Music",
    "place": "Banban, Riyadh",
    "img": "assets/img/soundstorm.webp",
    "description_en": "SOUNDSTORM is a major 3-day music festival in Riyadh featuring international and regional artists across multiple stages.",
    "description_ar": "ساوندستورم مهرجان موسيقي ضخم يستمر ثلاثة أيام ويستضيف فنانين محليين وعالميين على مسارح متعددة."
  },
  {
    "id": 4,
    "title_en": "Riyadh International Marathon",
    "title_ar": "ماراثون الرياض الدولي",
    "date": "2025-02-08",
    "category": "Sports",
    "place": "King Saud University / Riyadh",
    "img": "assets/img/riyadh_marathon.webp",
    "description_en": "The Riyadh Marathon is an annual road race with marathon, half-marathon and shorter distances, promoted as a World Athletics Elite Label Road Race.",
    "description_ar": "ماراثون الرياض سباق طرق سنوي يشمل الماراثون والنصف ماراثون ومسافات أقصر، وهو مُصنّف كسباق طريق متميز من قبل الاتحاد الدولي لألعاب القوى."
  },
  {
    "id": 5,
    "title_en": "Riyadh Comedy Festival (Boulevard City)",
    "title_ar": "مهرجان الكوميديا في الرياض (بوليفارد سيتي)",
    "date": "2025-09-26",
    "category": "Comedy",
    "place": "Boulevard City, Riyadh",
    "img": "assets/img/riyadh_comedy.jpg",
    "description_en": "A large comedy festival featuring international and regional stand-up acts held as part of Riyadh Season programming.",
    "description_ar": "مهرجان كوميديا كبير يضم عروض ستاند أب من فنانين محليين وعالميين كجزء من فعاليات موسم الرياض."
  }
];
/* ================================
   اللغة الحالية من LocalStorage أو الافتراضية إنجليزية
================================ */
let currentLang = localStorage.getItem('lang') || 'en';

/* ================================
   ضبط اتجاه الصفحة حسب اللغة
================================ */
function setDirByLang(lang) {
  const html = document.documentElement;
  if (lang === 'ar') { html.setAttribute('dir', 'rtl'); html.setAttribute('lang', 'ar'); }
  else { html.setAttribute('dir', 'ltr'); html.setAttribute('lang', 'en'); }
}

/* ================================
   ترجمة النصوص في الصفحة حسب اللغة
================================ */
function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = translations[currentLang][key];
    if (txt) el.innerText = txt;
  });
  document.title = translations[currentLang]['title_home'] || document.title;
}

/* ================================
   إنشاء بطاقة فعالية واحدة
================================ */
function createEventCard(ev) {
  const title = currentLang === 'ar' ? ev.title_ar : ev.title_en;
  const desc = currentLang === 'ar' ? ev.description_ar : ev.description_en;
  return `<div class="col-md-4 mb-4">
    <div class="card h-100">
      <img src="${ev.img}" class="card-img-top" alt="${title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="text-muted small">${ev.date} — ${ev.place}</p>
        <p class="card-text">${desc}</p>
        <div class="mt-auto"><a href="event.html?id=${ev.id}" class="btn btn-sm btn-primary">${currentLang === 'ar' ? 'التفاصيل' : 'Details'}</a></div>
      </div>
    </div>
  </div>`;
}

/* ================================
   تفعيل أزرار التصنيفات (فلترة الفعاليات)
================================ */
function attachCategoryButtons() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCat = btn.getAttribute('data-cat');
      const filtered = selectedCat === 'all' ? events : events.filter(e => e.category === selectedCat);
      document.getElementById('latest-grid').innerHTML = filtered.map(createEventCard).join('');
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ================================
   عرض الصفحة الرئيسية (العروض + التصنيفات + الفعاليات)
================================ */
function renderIndex() {
  const carousel = document.getElementById('carousel-inner');
  carousel.innerHTML = events.map((ev, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${ev.img}" class="d-block w-100" style="height:300px;object-fit:cover" alt="">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
        <h5>${currentLang === 'ar' ? ev.title_ar : ev.title_en}</h5>
        <p>${currentLang === 'ar' ? ev.description_ar : ev.description_en}</p>
      </div>
    </div>
  `).join('');

  const cats = Array.from(new Set(events.map(e => e.category)));
  const translatedCats = cats.map(c => currentLang === 'ar' ? translateCategory(c) : c);

  document.getElementById('category-badges').innerHTML = `
    <button class="btn btn-outline-secondary btn-sm me-2 mb-2 cat-btn active" data-cat="all">${translations[currentLang]['all']}</button>
    ${cats.map((c, i) => `<button class="btn btn-outline-secondary btn-sm me-2 mb-2 cat-btn" data-cat="${c}">${translatedCats[i]}</button>`).join('')}
  `;

  document.getElementById('latest-grid').innerHTML = events.map(createEventCard).join('');

  attachCategoryButtons();
}


/* ================================
   ترجمة أسماء التصنيفات
================================ */
function translateCategory(cat) {
  const mapping = {
    'Festival': 'مهرجان',
    'Art & Culture': 'الفنون والثقافة',
    'Music': 'موسيقى',
    'Sports': 'رياضة',
    'Comedy': 'كوميديا'
  };
  return currentLang === 'ar' ? (mapping[cat] || cat) : cat;
}

/* ================================
   عرض صفحة الفعاليات (بحث + تصفية)
================================ */
function renderEventsPage() {
  const filterCat = document.getElementById('filter-category');
  const filterDate = document.getElementById('filter-date');
  const searchInput = document.getElementById('search-input');
  const list = document.getElementById('events-list');

  const cats = Array.from(new Set(events.map(e => e.category)));
  const translatedCats = cats.map(c => currentLang === 'ar' ? translateCategory(c) : c);

  filterCat.innerHTML = `<option value="all">${translations[currentLang]['all']}</option>` +
    cats.map((c, i) => `<option value="${c}">${translatedCats[i]}</option>`).join('');

  function refresh() {
    const catVal = filterCat.value;
    const dateVal = filterDate.value;
    const searchVal = searchInput.value.toLowerCase();

    const filtered = events.filter(e => {
      const matchesCat = catVal === 'all' || e.category === catVal;
      const matchesSearch = (currentLang === 'ar' ? e.title_ar : e.title_en).toLowerCase().includes(searchVal);
      const matchesDate = !dateVal || e.date === dateVal;
      return matchesCat && matchesSearch && matchesDate;
    });

    if (filtered.length > 0)
      list.innerHTML = filtered.map(createEventCard).join('');
    else
      list.innerHTML = `<div class="col-12 text-center text-muted mt-3">${currentLang === 'ar' ? 'لا توجد فعاليات لهذا التاريخ' : 'No events found for this date.'}</div>`;
  }

  searchInput.addEventListener('input', refresh);
  filterCat.addEventListener('change', refresh);
  filterDate.addEventListener('change', refresh);

  refresh();
}

/* ================================
   صفحة تفاصيل الفعالية
================================ */
function renderEventDetails() {
  const params = new URLSearchParams(location.search);
  const id = Number(params.get('id')) || events[0].id;
  const ev = events.find(e => e.id === id) || events[0];
  const title = currentLang === 'ar' ? ev.title_ar : ev.title_en;
  const desc = currentLang === 'ar' ? ev.description_ar : ev.description_en;

  document.getElementById('event-details').innerHTML = `
    <div class="card">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${ev.img}" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h2>${title}</h2>
            <p class="text-muted">${ev.date} — ${ev.place}</p>
            <p>${desc}</p>
            <div class="mb-2">
              <button id="share-btn" class="btn btn-outline-primary btn-sm">${currentLang === 'ar' ? 'شارك' : 'Share'}</button>
              <button id="calendar-btn" class="btn btn-primary btn-sm">${currentLang === 'ar' ? 'أضف للتقويم' : 'Add to Calendar'}</button>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('share-btn').addEventListener('click', () => {
    const shareData = { title, text: desc, url: window.location.href };
    if (navigator.share) navigator.share(shareData).catch(err => console.log('Error sharing:', err));
    else { navigator.clipboard.writeText(window.location.href); alert(currentLang === 'ar' ? 'تم نسخ الرابط' : 'Link copied to clipboard'); }
  });

  document.getElementById('calendar-btn').addEventListener('click', () => {
    const start = new Date(ev.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(new Date(ev.date).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(desc)}&location=${encodeURIComponent(ev.place)}`;
    window.open(url, '_blank');
  });
}

/* ================================
   نموذج صفحة اتصل بنا
================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertPlace = document.getElementById('alert-placeholder');

  function showAlert(message, type = 'success') {
    alertPlace.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    setTimeout(() => { const bsAlert = bootstrap.Alert.getOrCreateInstance(alertPlace.querySelector('.alert')); bsAlert.close(); }, 3000);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();

    if (!name || !email || !message) { showAlert(currentLang === 'ar' ? 'الرجاء ملئ كل الحقول' : 'Please fill all fields.', 'danger'); return; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { showAlert(currentLang === 'ar' ? 'الرجاء إدخال بريد صحيح' : 'Please provide a valid email.', 'danger'); return; }
    showAlert(currentLang === 'ar' ? 'تم إرسال الرسالة بنجاح' : 'Message sent successfully.', 'success');
    form.reset();
  });
}

function attachLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      localStorage.setItem('lang', currentLang);
      applyLanguageToPage();
    });
  });
}

/* ================================
   تطبيق اللغة المختارة على الصفحة الحالية
================================ */
function applyLanguageToPage() {
  setDirByLang(currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
  });
  const page = window.__PAGE__;
  if (page === 'index') renderIndex();
  if (page === 'events') renderEventsPage();
  if (page === 'event') renderEventDetails();
  const tKey = page === 'index' ? 'title_home' : page === 'events' ? 'title_events' : page === 'event' ? 'title_event' : page === 'about' ? 'title_about' : page === 'contact' ? 'title_contact' : 'title_home';
  if (translations[currentLang][tKey]) document.title = translations[currentLang][tKey];
}

/* ================================
   تهيئة الصفحة عند التحميل
================================ */
function initPage(pageName) {
  window.__PAGE__ = pageName;
  attachLangButtons();
  applyLanguageToPage();
  if (pageName === 'contact') { initContactForm(); }
}

setDirByLang(currentLang);

/* ================================
   وضع الداكن (Dark Mode)
================================ */
function initDarkMode() {
  const darkToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // التحقق من الوضع المحفوظ مسبقاً
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    updateDarkButton(true);
  }

  // عند الضغط على الزر
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateDarkButton(isDark);
    });
  }
}

function updateDarkButton(isDark) {
  const btn = document.getElementById('darkModeToggle');
  if (!btn) return;
  btn.textContent = isDark ? '☀️' : '🌙';
}
document.addEventListener('DOMContentLoaded', initDarkMode);
