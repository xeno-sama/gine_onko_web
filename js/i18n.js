/* ============================================
   CERVI TRACKER — i18n (EN / RU)
   Auto-detects browser language.
   Falls back to EN. Stores choice in localStorage.
   ============================================ */

(function () {
  'use strict';

  var STORAGE_KEY = 'cervi_lang';

  var translations = {
    en: {
      /* --- meta --- */
      'page.title': 'Cervi Tracker — Cervical Cancer Monitoring',

      /* --- header --- */
      'nav.features': 'Features',
      'nav.how': 'How it works',
      'nav.reports': 'Reports',
      'nav.about': 'About',
      'nav.open-app': 'Open App',

      /* --- hero --- */
      'hero.title': 'Cervical cancer monitoring,',
      'hero.accent': 'clearer and more structured',
      'hero.subtitle': 'Keep treatment, blood tests, and imaging organized in one focused system. See trends clearly. Bring structured reports to your next physician visit.',
      'hero.cta-primary': 'Open App',
      'hero.cta-secondary': 'Learn more',

      /* --- problem --- */
      'problem.heading': "Tracking treatment shouldn't be this hard",
      'problem.subheading': 'For many patients going through cervical cancer treatment, staying on top of everything can feel overwhelming.',
      'problem.1.title': 'Scattered records',
      'problem.1.body': 'Test results live in phone photos, hospital portals, paper printouts, and messaging apps. Finding what you need takes time.',
      'problem.2.title': 'Hard to see trends',
      'problem.2.body': 'When blood tests, imaging results, and treatment events live in separate places, understanding progress over time is genuinely difficult.',
      'problem.3.title': 'Difficult follow-up visits',
      'problem.3.body': 'Explaining months of treatment history to a physician in a short appointment, from memory or scattered notes, rarely goes well.',
      'problem.4.title': 'Disconnected data',
      'problem.4.body': 'Blood markers, imaging studies, and treatments are often recorded independently — making it hard to see how they relate to each other.',

      /* --- solution --- */
      'solution.heading': 'One focused system for your treatment course',
      'solution.subheading': "Cervi Tracker organizes your treatment journey in one place — so you can see what's happening, notice trends, and prepare for conversations with your physician.",
      'solution.1.title': 'Track consistently',
      'solution.1.body': 'Blood tests, imaging studies, and treatment events — all in one structured timeline. No more switching between apps and folders.',
      'solution.2.title': 'See trends clearly',
      'solution.2.body': 'Zoned blood charts, imaging volumes over time, cycle-based comparisons. The app is built to help you notice changes as they happen.',
      'solution.3.title': 'Communicate better',
      'solution.3.body': 'Generate structured reports that summarize treatment history, blood trends, and imaging dynamics — ready for your next physician visit.',

      /* --- features --- */
      'features.heading': 'Five screens, one clear picture',
      'features.subheading': 'Each area of the app is designed around a specific part of the treatment monitoring workflow.',
      'features.overview.label': 'Overview',
      'features.overview.title': 'Your treatment status at a glance',
      'features.overview.body': 'The Overview screen brings together what matters most: your current treatment cycle, the outcome of the last completed cycle, and the latest imaging trend. It\'s the signal-first center of the app — designed to answer "how is it going?" without making you dig through data.',
      'features.blood.label': 'Blood',
      'features.blood.title': 'Key biomarkers, tracked over time',
      'features.blood.body': 'Log blood test results and see how key markers trend across treatment cycles. The zoned chart shows at a glance which values are within range, elevated, or low — so you can have more informed conversations with your care team.',
      'features.imaging.label': 'Imaging',
      'features.imaging.title': 'Tumor dynamics, visible at a glance',
      'features.imaging.body': 'Track ultrasound, MRI, and CT results in one unified timeline. The imaging screen charts tumor volume over time and shows how each study compares to the last — making it easier to understand the direction of change.',
      'features.treatment.label': 'Treatment',
      'features.treatment.title': 'Your treatment course, structured and readable',
      'features.treatment.body': 'Every doctor visit, chemotherapy session, radiotherapy, surgery, and supportive procedure is recorded in a structured timeline. Events are linked to treatment cycles, so the full course of treatment stays clear and organized.',
      'features.reports.label': 'Reports',
      'features.reports.title': 'Structured summaries, ready when you need them',
      'features.reports.body': 'The Hub gives you access to printable physician reports: a general summary with treatment timeline, a blood test report, and tumor dynamics charts. Generate them before your next visit and bring a clear, organized picture to the conversation.',

      /* --- signal --- */
      'signal.heading': 'Built around what matters right now',
      'signal.intro': "The Overview screen doesn't try to show everything at once. It focuses on three questions:",
      'signal.1.title': 'Current active cycle',
      'signal.1.body': 'Which treatment cycle is running and when it started',
      'signal.2.title': 'Cycle outcome',
      'signal.2.body': 'How the last completed cycle compared to the one before it — across imaging, blood, and treatment',
      'signal.3.title': 'Latest imaging trend',
      'signal.3.body': 'The most recent direction of the primary tumor metric — increasing, decreasing, or stable',

      /* --- connected --- */
      'connected.heading': 'Blood, imaging, and treatment — connected by time',
      'connected.subheading': 'Most health apps treat records as isolated entries. Cervi Tracker organizes them around treatment cycles and timelines, so you can see how blood results, imaging findings, and treatment events relate to each other over the course of your care.',

      /* --- reports --- */
      'reports.heading': 'Clearer conversations with your physician',
      'reports.intro': "One of the hardest parts of follow-up care is explaining what's happened since the last visit. Cervi Tracker helps by generating structured, printable reports that organize your treatment journey clearly.",
      'reports.1.title': 'General summary',
      'reports.1.body': 'Treatment timeline, blood parameters, and imaging results — organized by cycle',
      'reports.2.title': 'Blood tests report',
      'reports.2.body': 'A compact table of up to 12 cycles of key biomarkers with reference ranges',
      'reports.3.title': 'Tumor dynamics',
      'reports.3.body': 'Volume or size trend chart with detailed per-study measurements and percentage changes',
      'reports.note': 'Reports are generated locally on your device — your data stays with you.',

      /* --- why --- */
      'why.heading': 'Purpose-built, not generic',
      'why.subheading': "Cervi Tracker is not a general symptom diary or a generic health journal. It's designed specifically around the cervical cancer monitoring workflow — because a focused tool is more useful than a flexible one.",
      'why.1.title': 'Cervical-first logic',
      'why.1.body': 'Imaging metrics, tumor size tracking, and signal evaluation are tailored for cervical cancer specifically.',
      'why.2.title': 'Cycle-based structure',
      'why.2.body': 'Data is organized around treatment cycles — the natural rhythm of cervical cancer care — not arbitrary dates.',
      'why.3.title': 'Treatment-aware tracking',
      'why.3.body': 'New cycles start from treatment decisions, not random entries. The app understands your treatment course structure.',
      'why.4.title': 'Reports that match the workflow',
      'why.4.body': 'Physician summaries are structured around cycles, imaging dynamics, and blood trends — the things doctors actually look at.',

      /* --- trust --- */
      'trust.heading': 'Important to know',
      'trust.1': 'Cervi Tracker is a monitoring and tracking tool. It does not provide medical advice, diagnoses, or treatment recommendations.',
      'trust.2': 'Treatment decisions must always be made in consultation with qualified clinicians. This app supports tracking and structured review, not clinical judgment.',
      'trust.3': 'Your data is private. Reports are generated locally on your device. The app does not share your medical information with third parties.',

      /* --- cta --- */
      'cta.heading': 'Start organizing your treatment course',
      'cta.sub': 'Free to use. No credit card required.',
      'cta.btn': 'Open Cervi Tracker',

      /* --- footer --- */
      'footer.tagline': 'Focused cervical cancer monitoring',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.contact': 'Contact',
      'footer.copy': '© 2026 Cervi Tracker. All rights reserved.',
    },

    ru: {
      /* --- meta --- */
      'page.title': 'Cervi Tracker — мониторинг шейки матки',

      /* --- header --- */
      'nav.features': 'Возможности',
      'nav.how': 'Как работает',
      'nav.reports': 'Отчёты',
      'nav.about': 'О приложении',
      'nav.open-app': 'Открыть',

      /* --- hero --- */
      'hero.title': 'Мониторинг рака шейки матки —',
      'hero.accent': 'чётко и структурированно',
      'hero.subtitle': 'Лечение, анализы крови и визуализация — всё в одной системе. Следите за динамикой. Приходите к врачу подготовленными.',
      'hero.cta-primary': 'Открыть приложение',
      'hero.cta-secondary': 'Подробнее',

      /* --- problem --- */
      'problem.heading': 'Отслеживать лечение не должно быть так сложно',
      'problem.subheading': 'Многим пациентам, проходящим лечение рака шейки матки, трудно уследить за всем происходящим.',
      'problem.1.title': 'Данные разбросаны',
      'problem.1.body': 'Результаты анализов хранятся в фото на телефоне, порталах больниц, бумажных распечатках и мессенджерах. Найти нужное — целая задача.',
      'problem.2.title': 'Тренды не видны',
      'problem.2.body': 'Когда анализы крови, результаты УЗИ и события лечения хранятся в разных местах, понять общую динамику по-настоящему сложно.',
      'problem.3.title': 'Трудные визиты к врачу',
      'problem.3.body': 'Объяснить врачу за короткий приём несколько месяцев истории лечения — по памяти или по разрозненным заметкам — редко получается хорошо.',
      'problem.4.title': 'Несвязанные данные',
      'problem.4.body': 'Показатели крови, снимки и события лечения часто записываются отдельно — и трудно увидеть, как они связаны друг с другом.',

      /* --- solution --- */
      'solution.heading': 'Одна система для всего курса лечения',
      'solution.subheading': 'Cervi Tracker собирает весь путь лечения в одном месте — чтобы вы видели происходящее, замечали изменения и были готовы к разговору с врачом.',
      'solution.1.title': 'Регулярный учёт',
      'solution.1.body': 'Анализы крови, снимки и события лечения — в одной структурированной ленте. Никаких переключений между приложениями и папками.',
      'solution.2.title': 'Чёткая динамика',
      'solution.2.body': 'Зонированные графики крови, объём опухоли во времени, сравнение по циклам. Приложение помогает замечать изменения по мере их появления.',
      'solution.3.title': 'Понятный диалог с врачом',
      'solution.3.body': 'Формируйте структурированные отчёты с историей лечения, трендами крови и динамикой снимков — готовые для следующего визита.',

      /* --- features --- */
      'features.heading': 'Пять экранов — одна полная картина',
      'features.subheading': 'Каждый раздел приложения создан для конкретной части процесса мониторинга лечения.',
      'features.overview.label': 'Обзор',
      'features.overview.title': 'Статус лечения — с первого взгляда',
      'features.overview.body': 'Экран обзора объединяет главное: текущий цикл лечения, итог последнего завершённого цикла и последний тренд снимков. Это сигнал-ориентированный центр приложения — чтобы понять «как идут дела?» без лишнего погружения в данные.',
      'features.blood.label': 'Кровь',
      'features.blood.title': 'Ключевые биомаркеры в динамике',
      'features.blood.body': 'Вносите результаты анализов и наблюдайте, как ключевые показатели меняются по циклам. Зонированный график сразу показывает — норма, повышено или понижено.',
      'features.imaging.label': 'Снимки',
      'features.imaging.title': 'Динамика опухоли — на одном графике',
      'features.imaging.body': 'Отслеживайте результаты УЗИ, МРТ и КТ в едином хронологическом списке. Экран строит график объёма опухоли и показывает, как каждое исследование отличается от предыдущего.',
      'features.treatment.label': 'Лечение',
      'features.treatment.title': 'Курс лечения — структурированно и понятно',
      'features.treatment.body': 'Каждый визит к врачу, курс химиотерапии, лучевая терапия, операция и поддерживающая процедура фиксируются в структурированной ленте, привязанной к циклам лечения.',
      'features.reports.label': 'Отчёты',
      'features.reports.title': 'Структурированные сводки — когда они нужны',
      'features.reports.body': 'В разделе Hub вы найдёте печатные отчёты: общую сводку с хронологией лечения, отчёт по анализам крови и график динамики опухоли. Подготовьтесь к визиту заранее.',

      /* --- signal --- */
      'signal.heading': 'Построено вокруг того, что важно сейчас',
      'signal.intro': 'Экран обзора не пытается показать всё сразу. Он сфокусирован на трёх вопросах:',
      'signal.1.title': 'Текущий активный цикл',
      'signal.1.body': 'Какой цикл лечения идёт сейчас и когда он начался',
      'signal.2.title': 'Итог цикла',
      'signal.2.body': 'Как прошёл последний завершённый цикл по сравнению с предыдущим — по снимкам, крови и лечению',
      'signal.3.title': 'Последний тренд снимков',
      'signal.3.body': 'Последнее направление изменения первичного показателя опухоли — рост, снижение или стабильность',

      /* --- connected --- */
      'connected.heading': 'Кровь, снимки и лечение — связаны во времени',
      'connected.subheading': 'Большинство приложений хранят записи как изолированные события. Cervi Tracker организует их вокруг циклов лечения — чтобы вы видели, как анализы, снимки и терапия связаны друг с другом на протяжении всего курса.',

      /* --- reports --- */
      'reports.heading': 'Понятный диалог с вашим врачом',
      'reports.intro': 'Один из самых сложных моментов в наблюдении — объяснить врачу, что происходило с момента последнего визита. Cervi Tracker помогает: создаёт структурированные печатные отчёты, организующие вашу историю лечения.',
      'reports.1.title': 'Общая сводка',
      'reports.1.body': 'Хронология лечения, показатели крови и результаты снимков — сгруппированные по циклам',
      'reports.2.title': 'Отчёт по анализам крови',
      'reports.2.body': 'Компактная таблица до 12 циклов с ключевыми биомаркерами и референсными значениями',
      'reports.3.title': 'Динамика опухоли',
      'reports.3.body': 'График объёма или размера с детальными измерениями по каждому исследованию и процентными изменениями',
      'reports.note': 'Отчёты формируются локально на вашем устройстве — ваши данные остаются с вами.',

      /* --- why --- */
      'why.heading': 'Создано для конкретной задачи',
      'why.subheading': 'Cervi Tracker — не универсальный дневник симптомов. Он спроектирован специально под задачи мониторинга рака шейки матки, потому что специализированный инструмент работает лучше универсального.',
      'why.1.title': 'Логика для рака шейки матки',
      'why.1.body': 'Метрики снимков, отслеживание размера опухоли и оценка сигнала адаптированы именно для рака шейки матки.',
      'why.2.title': 'Структура по циклам',
      'why.2.body': 'Данные организованы вокруг циклов лечения — естественного ритма ведения рака шейки матки — а не произвольных дат.',
      'why.3.title': 'Лечение-ориентированный учёт',
      'why.3.body': 'Новые циклы начинаются с принятия решений по лечению, а не со случайных записей. Приложение понимает структуру вашего курса.',
      'why.4.title': 'Отчёты под задачу врача',
      'why.4.body': 'Медицинские сводки структурированы вокруг циклов, динамики снимков и трендов крови — именно того, на что смотрит врач.',

      /* --- trust --- */
      'trust.heading': 'Важно знать',
      'trust.1': 'Cervi Tracker — инструмент для мониторинга и учёта. Он не даёт медицинских советов, не ставит диагнозов и не рекомендует лечение.',
      'trust.2': 'Решения о лечении должны приниматься только совместно с квалифицированными врачами. Это приложение помогает вести записи и структурировать данные, но не заменяет врачебное суждение.',
      'trust.3': 'Ваши данные приватны. Отчёты формируются локально на устройстве. Приложение не передаёт медицинскую информацию третьим лицам.',

      /* --- cta --- */
      'cta.heading': 'Начните вести структурированный учёт лечения',
      'cta.sub': 'Бесплатно. Без банковской карты.',
      'cta.btn': 'Открыть Cervi Tracker',

      /* --- footer --- */
      'footer.tagline': 'Мониторинг рака шейки матки',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      'footer.contact': 'Контакты',
      'footer.copy': '© 2026 Cervi Tracker. Все права защищены.',
    }
  };

  /* ---- Detect language ---- */
  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ru' || stored === 'en') return stored;

    var langs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < langs.length; i++) {
      if (langs[i].toLowerCase().startsWith('ru')) return 'ru';
    }
    return 'en';
  }

  /* ---- Apply translations ---- */
  function applyLang(lang) {
    var t = translations[lang] || translations.en;

    /* page title */
    document.title = t['page.title'];

    /* html lang attr */
    document.documentElement.lang = lang;

    /* all data-i18n elements */
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    /* data-i18n-html (allows inner HTML, e.g. for the hero title with <br>) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    htmlEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* toggle button state */
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.querySelectorAll('.lang-opt').forEach(function (opt) {
        opt.classList.toggle('active', opt.dataset.lang === lang);
      });
    }
  }

  /* ---- Language toggle button ---- */
  function initToggle() {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function (e) {
      var opt = e.target.closest('.lang-opt');
      if (!opt) return;
      var lang = opt.dataset.lang;
      if (!lang) return;
      localStorage.setItem(STORAGE_KEY, lang);
      applyLang(lang);
    });
  }

  /* ---- Init ---- */
  var currentLang = detectLang();
  document.addEventListener('DOMContentLoaded', function () {
    initToggle();
    applyLang(currentLang);
  });

  /* expose for manual use */
  window.cerviI18n = { apply: applyLang, detect: detectLang };
})();
