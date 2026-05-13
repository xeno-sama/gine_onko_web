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
      'nav.open-ios': 'iOS App',
      'nav.open-web': 'WEB',

      /* --- hero --- */
      'hero.title': 'Cervical cancer monitoring,',
      'hero.accent': 'clearer and more structured',
      'hero.subtitle': 'Keep treatment, blood tests, and imaging organized in one focused system. See trends clearly. Bring structured reports to your next physician visit.',
      'hero.cta-ios': 'Open on iPhone / iPad',
      'hero.cta-web': 'Open Web Version',
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
      'cta.ios': 'Download iOS App',
      'cta.web': 'Open Web Version',

      /* --- footer --- */
      'footer.tagline': 'Focused cervical cancer monitoring',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.contact': 'Contact',
      'footer.deletion': 'Delete Account',
      'footer.copy': '© 2026 Cervi Tracker. All rights reserved.',

      /* --- policy: deletion --- */
      'policy.deletion.title': 'Delete Your Account',
      'policy.deletion.intro': 'We respect your right to control your personal data. You can delete your Cervi Tracker account and all associated data at any time using one of the methods described below.',
      'policy.deletion.opt1.title': 'Option 1: Delete from the App',
      'policy.deletion.opt1.p1': 'The fastest way to delete your account is directly within the Cervi Tracker app:',
      'policy.deletion.opt1.l1': 'Open the app and navigate to <strong>Hub</strong>',
      'policy.deletion.opt1.l2': 'Tap on <strong>Profile</strong>',
      'policy.deletion.opt1.l3': 'Tap <strong>Delete Account</strong>',
      'policy.deletion.opt1.l4': 'Confirm deletion when prompted',
      'policy.deletion.opt1.p2': 'Your account and all associated data will be permanently removed immediately.',
      'policy.deletion.img.alt': 'Cervi Tracker App — Delete Account option in Settings',
      'policy.deletion.opt2.title': 'Option 2: Request via Email',
      'policy.deletion.opt2.p1': 'If you are unable to delete your account through the app, you can request deletion by emailing us. Please include the email address associated with your Cervi Tracker account.',
      'policy.deletion.opt2.p2': 'We will process your request and confirm deletion within <strong>48 hours</strong>.',
      'policy.deletion.what.title': 'What Data Is Deleted?',
      'policy.deletion.what.p1': 'Upon account deletion, the following data is permanently removed:',
      'policy.deletion.what.l1': 'Your user profile and authentication credentials',
      'policy.deletion.what.l2': 'All personal health data and entered medical records',
      'policy.deletion.what.l3': 'Treatment timelines, imaging studies, and blood test results',
      'policy.deletion.what.l4': 'All app preferences and settings',
      'policy.deletion.what.p2': '<strong>This action is irreversible.</strong> Once your account is deleted, it cannot be recovered.',

      /* --- policy: privacy --- */
      'policy.privacy.title': 'Privacy Policy',
      'policy.privacy.updated': 'Last updated: 2026-04-06',
      'policy.privacy.1.title': '1. Introduction',
      'policy.privacy.1.p': 'Thank you for using Cervi Tracker. We respect your privacy and are committed to protecting any personal data you share with us. This policy explains what data we collect, how we use it, and your rights regarding your information.',
      'policy.privacy.2.title': '2. Data We Collect',
      'policy.privacy.2.p': 'Cervi Tracker collects only the information necessary to provide its core tracking functionality:',
      'policy.privacy.2.l1': '<strong>Account data:</strong> Your email address, used for authentication via Supabase.',
      'policy.privacy.2.l2': '<strong>Medical tracking data:</strong> Information you enter into the app — including treatment events, blood test results, imaging study measurements, and clinical profile details (cancer type, stage, histology). This data is entered by you and stored to provide the tracking and reporting features of the app.',
      'policy.privacy.2.l3': '<strong>Settings data:</strong> App preferences such as theme mode and language, stored locally on your device.',
      'policy.privacy.2.p2': 'We do not collect location data, biometric data, or any information beyond what you explicitly enter into the app.',
      'policy.privacy.3.title': '3. How We Use Your Data',
      'policy.privacy.3.p': 'Your data is used solely to provide the features of Cervi Tracker:',
      'policy.privacy.3.l1': 'To display your treatment timeline, blood trends, imaging dynamics, and cycle-based overview.',
      'policy.privacy.3.l2': 'To generate local PDF reports that you can share with your physician.',
      'policy.privacy.3.l3': 'We <strong>do not</strong> sell, rent, or share your personal or medical data with third parties.',
      'policy.privacy.3.l4': 'We <strong>do not</strong> use your data for advertising or profiling purposes.',
      'policy.privacy.4.title': '4. Data Storage and Security',
      'policy.privacy.4.p1': 'Your tracking data is stored securely using <strong>Supabase</strong>, a cloud backend provider with industry-standard security practices. PDF reports are generated locally on your device and are not transmitted to our servers.',
      'policy.privacy.4.p2': 'We take appropriate technical measures to protect your data, but no method of electronic storage is 100% secure. We encourage you to use a strong password and keep your account credentials private.',
      'policy.privacy.5.title': '5. Medical Data Disclaimer',
      'policy.privacy.5.p': 'Cervi Tracker is a personal tracking tool, not a medical device or clinical system. The data you enter is used only to display your personal tracking history. <strong>We do not analyze, interpret, or act on your medical data in any way.</strong> All clinical interpretation remains the sole responsibility of qualified healthcare professionals.',
      'policy.privacy.6.title': '6. Data Deletion',
      'policy.privacy.6.p': 'You have full control over your data. You may delete your account and all associated information at any time from within the app (Settings → Delete Account). Upon deletion, your personal profile and all associated tracking records are permanently removed from our servers.',
      'policy.privacy.7.title': '7. Children\'s Privacy',
      'policy.privacy.7.p': 'Cervi Tracker is intended for adult users managing their own health tracking. We do not knowingly collect data from children under the age specified by applicable local laws.',
      'policy.privacy.8.title': '8. Changes to This Policy',
      'policy.privacy.8.p': 'We may update this Privacy Policy from time to time. Continued use of the app after changes are published constitutes acceptance of the updated policy. We will update the "Last updated" date at the top of this page.',
      'policy.privacy.9.title': '9. Contact Us',
      'policy.privacy.9.p': 'If you have any questions about this Privacy Policy or how your data is handled, please contact us at: <a href="mailto:astrodiary.dar@gmail.com"><strong>astrodiary.dar@gmail.com</strong></a>',

      /* --- policy: terms --- */
      'policy.terms.title': 'Terms of Use',
      'policy.terms.1.title': '1. Acceptance of Terms',
      'policy.terms.1.p': 'By accessing or using the Cervi Tracker web application and this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the application or this site.',
      'policy.terms.2.title': '2. License to Use',
      'policy.terms.2.p': 'You are granted a limited, non-exclusive, revocable license to use Cervi Tracker for personal, non-commercial tracking purposes only. This license does not include the right to copy, modify, distribute, or reverse-engineer any part of the application.',
      'policy.terms.3.title': '3. Medical Disclaimer — Important',
      'policy.terms.3.box': '<strong>Cervi Tracker is a personal monitoring and tracking tool. It is not a medical device, diagnostic system, or clinical decision support tool.</strong>',
      'policy.terms.3.p': 'The content, tracking data, and reports generated by Cervi Tracker are for personal informational and organizational purposes only. They must not be interpreted as medical advice, diagnosis, or treatment recommendations.',
      'policy.terms.3.l1': 'Cervi Tracker does not analyze, interpret, or evaluate your medical condition.',
      'policy.terms.3.l2': 'All clinical decisions must be made by qualified healthcare professionals.',
      'policy.terms.3.l3': 'Reports generated by the app are intended to help you organize and communicate your tracking history to your physician — not to replace professional medical judgment.',
      'policy.terms.3.l4': 'The app makes no warranties regarding the completeness, accuracy, or suitability of data entered by the user.',
      'policy.terms.4.title': '4. User Responsibilities',
      'policy.terms.4.p': 'You are responsible for:',
      'policy.terms.4.l1': 'The accuracy and completeness of the data you enter into the app.',
      'policy.terms.4.l2': 'Keeping your account credentials secure and confidential.',
      'policy.terms.4.l3': 'Using the app in compliance with applicable local laws and regulations.',
      'policy.terms.4.l4': 'Not using the app as a substitute for professional medical care.',
      'policy.terms.5.title': '5. Intellectual Property',
      'policy.terms.5.p': 'All app logic, design, source code, and written content within Cervi Tracker are the intellectual property of <strong>Ruslan Dzhansakov</strong>. No part of the application may be copied, redistributed, or commercially exploited without prior written consent.',
      'policy.terms.6.title': '6. Availability and Changes',
      'policy.terms.6.p': 'We reserve the right to modify, suspend, or discontinue the application at any time without prior notice. We may also update these Terms from time to time. Continued use of the app after changes are published constitutes your acceptance of the updated Terms.',
      'policy.terms.7.title': '7. Limitation of Liability',
      'policy.terms.7.p': 'Cervi Tracker is provided on an "as is" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied. We are not liable for any loss or damage arising from your use of the application, reliance on its content, or inability to access the service.',
      'policy.terms.8.title': '8. Contact Information',
      'policy.terms.8.p1': 'Service: <strong>Cervi Tracker</strong>',
      'policy.terms.8.p2': 'Developer: <strong>Ruslan Dzhansakov</strong>',
      'policy.terms.8.p3': 'For questions about these Terms, please contact us at: <a href="mailto:astrodiary.dar@gmail.com"><strong>astrodiary.dar@gmail.com</strong></a>',

      /* --- policy: support --- */
      'policy.support.title': 'Support',
      'policy.support.p1': 'Have a question about Cervi Tracker? We\'re happy to help. Reach out directly by email — we aim to respond within a few business days.',
      'policy.support.h2': 'Common Questions',
      'policy.support.q1': 'How do I start using Cervi Tracker?',
      'policy.support.a1': 'Open Cervi Tracker on the App Store for iPhone and iPad, or use the <a href="https://xeno-sama.github.io/gine_onko_tracker/" target="_blank" rel="noopener">web app</a> on other devices. Then create an account with your email and complete the brief onboarding to set up your profile.',
      'policy.support.q2': 'Is my medical data private?',
      'policy.support.a2': 'Yes. Your data is stored securely and is never shared with third parties. PDF reports are generated locally on your device. See our <a href="privacy.html">Privacy Policy</a> for full details.',
      'policy.support.q3': 'How do I generate a physician report?',
      'policy.support.a3': 'Navigate to the Hub tab in the app. You\'ll find three report options: General Summary, Blood Tests Report, and Tumor Dynamics. Tap the one you want to preview and print it directly from the app.',
      'policy.support.q4': 'Can Cervi Tracker give me medical advice?',
      'policy.support.a4': 'No. Cervi Tracker is a personal monitoring and tracking tool only. It does not provide medical advice, diagnoses, or treatment recommendations. All clinical decisions must be made with a qualified healthcare professional. See our <a href="terms.html">Terms of Use</a> for more information.',
      'policy.support.q5': 'How do I delete my account?',
      'policy.support.a5': 'You can delete your account and all associated data from within the app under Settings → Delete Account. This action is permanent and cannot be undone.',
      'policy.support.q6': 'Something isn\'t working or I found a bug',
      'policy.support.a6': 'Please email us at <a href="mailto:astrodiary.dar@gmail.com">astrodiary.dar@gmail.com</a> with a brief description of the issue. We appreciate your feedback and will look into it as soon as possible.',

    },

    ru: {
      /* --- meta --- */
      'page.title': 'Cervi Tracker — мониторинг шейки матки',

      /* --- header --- */
      'nav.features': 'Возможности',
      'nav.how': 'Как работает',
      'nav.reports': 'Отчёты',
      'nav.about': 'О приложении',
      'nav.open-ios': 'iOS App',
      'nav.open-web': 'WEB',

      /* --- hero --- */
      'hero.title': 'Мониторинг рака шейки матки —',
      'hero.accent': 'чётко и структурированно',
      'hero.subtitle': 'Лечение, анализы крови и визуализация — всё в одной системе. Следите за динамикой. Приходите к врачу подготовленными.',
      'hero.cta-ios': 'Открыть на iPhone / iPad',
      'hero.cta-web': 'Открыть веб-версию',
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
      'cta.ios': 'Скачать iOS-приложение',
      'cta.web': 'Открыть веб-версию',

      /* --- footer --- */
      'footer.tagline': 'Мониторинг рака шейки матки',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      'footer.contact': 'Контакты',
      'footer.deletion': 'Удалить аккаунт',
      'footer.copy': '© 2026 Cervi Tracker. Все права защищены.',

      /* --- policy: deletion --- */
      'policy.deletion.title': 'Удалить аккаунт',
      'policy.deletion.intro': 'Мы уважаем ваше право контролировать свои данные. Вы можете удалить свой аккаунт Cervi Tracker и все связанные с ним данные в любое время одним из описанных ниже способов.',
      'policy.deletion.opt1.title': 'Вариант 1: Удалить из приложения',
      'policy.deletion.opt1.p1': 'Самый быстрый способ удалить аккаунт — сделать это прямо в приложении:',
      'policy.deletion.opt1.l1': 'Откройте приложение и перейдите во вкладку <strong>Хаб</strong>',
      'policy.deletion.opt1.l2': 'Нажмите <strong>Профиль</strong>',
      'policy.deletion.opt1.l3': 'Выберите <strong>Удалить аккаунт</strong>',
      'policy.deletion.opt1.l4': 'Подтвердите удаление',
      'policy.deletion.opt1.p2': 'Ваш аккаунт и все связанные данные будут немедленно и навсегда удалены.',
      'policy.deletion.img.alt': 'Cervi Tracker — Опция удаления аккаунта в настройках',
      'policy.deletion.opt2.title': 'Вариант 2: Запрос по email',
      'policy.deletion.opt2.p1': 'Если вы не можете удалить аккаунт через приложение, вы можете сделать это, написав нам. Пожалуйста, укажите email-адрес, привязанный к вашему аккаунту.',
      'policy.deletion.opt2.p2': 'Мы обработаем ваш запрос и подтвердим удаление в течение <strong>48 часов</strong>.',
      'policy.deletion.what.title': 'Какие данные удаляются?',
      'policy.deletion.what.p1': 'При удалении аккаунта следующие данные удаляются навсегда:',
      'policy.deletion.what.l1': 'Ваш профиль и данные для входа',
      'policy.deletion.what.l2': 'Все личные данные о здоровье и медицинские записи',
      'policy.deletion.what.l3': 'Хронология лечения, снимки и анализы крови',
      'policy.deletion.what.l4': 'Все настройки приложения',
      'policy.deletion.what.p2': '<strong>Это действие необратимо.</strong> После удаления аккаунт невозможно восстановить.',

      /* --- policy: privacy --- */
      'policy.privacy.title': 'Политика конфиденциальности',
      'policy.privacy.updated': 'Последнее обновление: 2026-04-06',
      'policy.privacy.1.title': '1. Введение',
      'policy.privacy.1.p': 'Спасибо, что используете Cervi Tracker. Мы уважаем вашу конфиденциальность и обязуемся защищать ваши данные. Эта политика объясняет, какие данные мы собираем, как мы их используем и ваши права.',
      'policy.privacy.2.title': '2. Какие данные мы собираем',
      'policy.privacy.2.p': 'Cervi Tracker собирает только информацию, необходимую для работы приложения:',
      'policy.privacy.2.l1': '<strong>Данные аккаунта:</strong> Ваш email-адрес, используемый для авторизации через Supabase.',
      'policy.privacy.2.l2': '<strong>Медицинские данные:</strong> Информация, которую вы сами вносите (лечение, анализы, снимки, профиль). Она хранится для обеспечения работы функций отслеживания и отчётов.',
      'policy.privacy.2.l3': '<strong>Настройки:</strong> Тема, язык приложения — хранятся локально на вашем устройстве.',
      'policy.privacy.2.p2': 'Мы не собираем геолокацию, биометрию или любые другие данные, кроме тех, что вы явно вводите в приложение.',
      'policy.privacy.3.title': '3. Как мы используем данные',
      'policy.privacy.3.p': 'Ваши данные используются исключительно для предоставления функций Cervi Tracker:',
      'policy.privacy.3.l1': 'Для отображения хронологии лечения, трендов крови и динамики снимков.',
      'policy.privacy.3.l2': 'Для создания локальных PDF-отчётов для вашего врача.',
      'policy.privacy.3.l3': 'Мы <strong>не</strong> продаём, не сдаём в аренду и не передаём ваши медицинские данные третьим лицам.',
      'policy.privacy.3.l4': 'Мы <strong>не</strong> используем ваши данные для рекламы или профилирования.',
      'policy.privacy.4.title': '4. Хранение и безопасность данных',
      'policy.privacy.4.p1': 'Ваши данные надёжно хранятся в <strong>Supabase</strong> (облачный провайдер со стандартными практиками безопасности). PDF-отчёты генерируются локально и не передаются на сервер.',
      'policy.privacy.4.p2': 'Мы принимаем все необходимые технические меры для защиты данных, но ни один метод не гарантирует 100% безопасность. Мы рекомендуем использовать надёжный пароль.',
      'policy.privacy.5.title': '5. Отказ от медицинской ответственности',
      'policy.privacy.5.p': 'Cervi Tracker — это личный дневник, а не медицинская или диагностическая система. <strong>Мы не анализируем и не интерпретируем ваши данные.</strong> Все клинические решения принимает только квалифицированный врач.',
      'policy.privacy.6.title': '6. Удаление данных',
      'policy.privacy.6.p': 'У вас есть полный контроль над вашими данными. Вы можете удалить аккаунт и всю связанную информацию прямо из приложения (Settings → Delete Account). При удалении все ваши записи навсегда стираются с серверов.',
      'policy.privacy.7.title': '7. Конфиденциальность детей',
      'policy.privacy.7.p': 'Cervi Tracker предназначен для совершеннолетних пользователей. Мы осознанно не собираем данные детей.',
      'policy.privacy.8.title': '8. Изменения политики',
      'policy.privacy.8.p': 'Мы можем обновлять эту Политику. Продолжение использования приложения означает согласие с изменениями.',
      'policy.privacy.9.title': '9. Контакты',
      'policy.privacy.9.p': 'Если у вас есть вопросы по поводу этой Политики, свяжитесь с нами: <a href="mailto:astrodiary.dar@gmail.com"><strong>astrodiary.dar@gmail.com</strong></a>',

      /* --- policy: terms --- */
      'policy.terms.title': 'Условия использования',
      'policy.terms.1.title': '1. Принятие условий',
      'policy.terms.1.p': 'Используя Cervi Tracker, вы соглашаетесь с этими Условиями использования. Если вы не согласны, пожалуйста, не используйте это приложение и сайт.',
      'policy.terms.2.title': '2. Лицензия',
      'policy.terms.2.p': 'Вам предоставляется ограниченная, неисключительная лицензия на использование Cervi Tracker только для личных, некоммерческих целей. Вы не имеете права копировать, видоизменять или декомпилировать приложение.',
      'policy.terms.3.title': '3. Медицинский отказ от ответственности',
      'policy.terms.3.box': '<strong>Cervi Tracker — это личный инструмент мониторинга. Это не медицинское устройство, не диагностическая система и не инструмент принятия клинических решений.</strong>',
      'policy.terms.3.p': 'Контент, данные и отчёты приложения носят исключительно информационный характер. Их нельзя рассматривать как медицинский совет или диагноз.',
      'policy.terms.3.l1': 'Cervi Tracker не анализирует и не оценивает ваше состояние здоровья.',
      'policy.terms.3.l2': 'Все клинические решения должны приниматься квалифицированным врачом.',
      'policy.terms.3.l3': 'Отчёты приложения призваны лишь помочь вам организовать историю лечения, но не заменяют профессиональное врачебное суждение.',
      'policy.terms.3.l4': 'Приложение не даёт гарантий относительно точности или полноты введенных пользователем данных.',
      'policy.terms.4.title': '4. Обязанности пользователя',
      'policy.terms.4.p': 'Вы несёте ответственность за:',
      'policy.terms.4.l1': 'Точность и полноту данных, которые вы вводите в систему.',
      'policy.terms.4.l2': 'Сохранность данных для авторизации.',
      'policy.terms.4.l3': 'Использование приложения в соответствии с местным законодательством.',
      'policy.terms.4.l4': 'Неиспользование приложения в качестве замены профессиональной медицинской помощи.',
      'policy.terms.5.title': '5. Интеллектуальная собственность',
      'policy.terms.5.p': 'Вся логика, дизайн, код и тексты Cervi Tracker являются интеллектуальной собственностью <strong>Руслана Джансакова</strong>.',
      'policy.terms.6.title': '6. Доступность сервиса',
      'policy.terms.6.p': 'Мы оставляем за собой право изменять, приостанавливать или прекращать работу сервиса в любое время. Мы также можем обновлять эти Условия.',
      'policy.terms.7.title': '7. Ограничение ответственности',
      'policy.terms.7.p': 'Cervi Tracker предоставляется "как есть". В максимальной степени, разрешённой законом, мы отказываемся от всех гарантий. Мы не несём ответственности за любой ущерб, возникший в результате использования приложения.',
      'policy.terms.8.title': '8. Контактная информация',
      'policy.terms.8.p1': 'Сервис: <strong>Cervi Tracker</strong>',
      'policy.terms.8.p2': 'Разработчик: <strong>Руслан Джансаков</strong>',
      'policy.terms.8.p3': 'Если у вас есть вопросы по поводу Условий, свяжитесь с нами: <a href="mailto:astrodiary.dar@gmail.com"><strong>astrodiary.dar@gmail.com</strong></a>',

      /* --- policy: support --- */
      'policy.support.title': 'Поддержка',
      'policy.support.p1': 'У вас есть вопросы о Cervi Tracker? Мы будем рады помочь. Напишите нам на email — мы стараемся отвечать в течение пары рабочих дней.',
      'policy.support.h2': 'Частые вопросы',
      'policy.support.q1': 'Как начать использовать Cervi Tracker?',
      'policy.support.a1': 'Откройте Cervi Tracker в App Store на iPhone или iPad, а на других устройствах используйте <a href="https://xeno-sama.github.io/gine_onko_tracker/" target="_blank" rel="noopener">веб-приложение</a>. Затем создайте аккаунт по email и пройдите короткий онбординг.',
      'policy.support.q2': 'Мои медицинские данные приватны?',
      'policy.support.a2': 'Да. Ваши данные надёжно хранятся и не передаются третьим лицам. PDF-отчёты создаются локально. Подробнее в <a href="privacy.html">Политике конфиденциальности</a>.',
      'policy.support.q3': 'Как создать отчёт для врача?',
      'policy.support.a3': 'Перейдите на вкладку Hub в приложении. Там вы найдёте три вида отчётов: Общая сводка, Анализы крови и Динамика опухоли. Нажмите на нужный для предпросмотра и печати.',
      'policy.support.q4': 'Может ли Cervi Tracker давать медицинские советы?',
      'policy.support.a4': 'Нет. Cervi Tracker — это только инструмент мониторинга. Он не даёт медицинских советов и не ставит диагнозов. Подробнее в <a href="terms.html">Условиях использования</a>.',
      'policy.support.q5': 'Как удалить мой аккаунт?',
      'policy.support.a5': 'Вы можете удалить аккаунт из приложения в разделе Settings → Delete Account. Это действие необратимо.',
      'policy.support.q6': 'Что-то не работает или я нашёл баг',
      'policy.support.a6': 'Пожалуйста, напишите нам на <a href="mailto:astrodiary.dar@gmail.com">astrodiary.dar@gmail.com</a> с кратким описанием проблемы. Мы будем благодарны и постараемся исправить всё как можно скорее.',

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
