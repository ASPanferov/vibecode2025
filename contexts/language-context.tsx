"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'ru' | 'en' | 'uz'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.about': 'О форуме',
    'nav.program': 'Программа',
    'nav.speakers': 'Спикеры',
    'nav.topics': 'Темы',
    'nav.partners': 'Партнеры',
    'header.participate': 'Регистрация',

    // Hero Content
    'hero.title': 'AngelConnect AI Forum 2025',
    'hero.location_year': 'Ташкент',
    'hero.subtitle': 'Внедрение искусственного интеллекта в бизнес: от теории к практике',
    'hero.description': 'Первый практический форум для предпринимателей, стартаперов и IT-специалистов о реальном применении AI в бизнес-процессах',
    'hero.date': '26 ноября 2025, среда',
    'hero.time': '11:00 - 15:00',
    'hero.location': 'Ташкент, Узбекистан',
    'hero.speakers': '5 экспертов-практиков',
    'hero.participants': '200 участников',
    'hero.register': 'Регистрация',
    'hero.learn_more': 'Узнать больше',
    'hero.sponsor': 'Стать спонсором',

    // About Section
    'about.title': 'Почему AngelConnect AI Forum?',
    'about.description': 'В 2025 году искусственный интеллект перестал быть технологией будущего — это инструмент настоящего. Но большинство предпринимателей не знают, с чего начать внедрение AI в свой бизнес.',
    'about.mission': 'AngelConnect AI Forum — это не конференция с теоретическими докладами. Это практическая площадка, где эксперты делятся реальными кейсами, работающими инструментами и конкретными шагами по автоматизации бизнес-процессов с помощью AI.',
    'about.what_you_get': 'Что вы получите:',
    'about.benefit1': 'Конкретные решения и инструменты для внедрения AI',
    'about.benefit2': 'Реальные кейсы автоматизации бизнес-процессов',
    'about.benefit3': 'Пошаговые стратегии быстрой интеграции AI',
    'about.benefit4': 'Измеримые результаты и ROI от внедрения',
    'about.benefit5': 'Networking с предпринимателями и экспертами',
    'about.benefit6': 'Доступ к сообществу практиков AI',
    'about.for_who': 'Для кого этот форум',
    'about.entrepreneurs': 'Предпринимателям и владельцам бизнеса',
    'about.entrepreneurs_desc': 'Узнайте, как AI может сократить операционные расходы, автоматизировать рутинные процессы и увеличить прибыль',
    'about.startups': 'Стартаперам',
    'about.startups_desc': 'Научитесь использовать AI для создания конкурентных преимуществ, ускорения разработки продукта и масштабирования бизнеса',
    'about.it_specialists': 'IT-специалистам и разработчикам',
    'about.it_specialists_desc': 'Откройте для себя современные AI-инструменты, фреймворки и практики внедрения машинного обучения',
    'about.managers': 'Менеджерам и руководителям',
    'about.managers_desc': 'Поймите, как трансформировать работу вашей команды с помощью AI и повысить эффективность процессов',

    // Program Section
    'program.title': 'Программа форума',
    'program.subtitle': 'Насыщенная программа без воды — только практика и конкретные решения',
    'program.preliminary': 'Предварительное расписание',
    'program.registration': 'Регистрация и welcome-кофе',
    'program.registration_desc': 'Networking, знакомство с участниками',
    'program.opening': 'Открытие форума',
    'program.opening_desc': 'Приветственное слово организаторов',
    'program.speaker': 'Спикер',
    'program.case': 'Практический кейс',
    'program.coffee_break': 'Кофе-брейк',
    'program.networking': 'Networking',
    'program.lunch': 'Обед',
    'program.lunch_desc': 'Networking, общение со спикерами',
    'program.panel': 'Панельная дискуссия и Q&A',
    'program.panel_desc': 'Спикеры отвечают на вопросы аудитории',
    'program.afterparty': 'Networking & After-party',
    'program.afterparty_desc': 'Свободное общение, обмен контактами',

    // Speakers Section
    'speakers.title': 'Эксперты-практики, которые уже внедрили AI',
    'speakers.subtitle': 'Наши спикеры — это не теоретики, а практики, которые лично автоматизировали бизнес-процессы, запустили AI-продукты и получили измеримые результаты',
    'speakers.topic': 'Тема выступления',
    'speakers.about': 'О чем расскажет',
    'speakers.experience': 'Опыт',
    'speakers.coming_soon': 'Детальная программа будет опубликована ближе к дате мероприятия',

    // Topics Section
    'topics.title': 'О чем будем говорить',
    'topics.investments': 'AI и инвестиции',
    'topics.investments_1': 'Привлечение венчурного капитала в AI-стартапы',
    'topics.investments_2': 'ROI и окупаемость AI-проектов для инвесторов',
    'topics.investments_3': 'Тренды инвестирования в искусственный интеллект',
    'topics.humanai': 'AI: Угроза или помощник?',
    'topics.humanai_1': 'Взгляд HR-специалистов: какие должности трансформируются',
    'topics.humanai_2': 'Мнение психологов: влияние AI на рабочие процессы и людей',
    'topics.humanai_3': 'Научное сообщество: реальные возможности и ограничения AI',
    'topics.tools': 'Практические инструменты',
    'topics.tools_1': 'Готовые AI-решения для малого и среднего бизнеса',
    'topics.tools_2': 'No-code и low-code платформы для быстрого внедрения',
    'topics.tools_3': 'Интеграция AI с существующими системами (CRM, ERP)',
    'topics.future': 'Будущее профессий',
    'topics.future_1': 'Какие профессии AI заменит, а какие усилит',
    'topics.future_2': 'Новые специальности, которые создаст AI',
    'topics.future_3': 'Как подготовить команду к работе с искусственным интеллектом',

    // Partners Section
    'partners.title': 'Партнеры форума',
    'partners.subtitle': 'Форум проходит при поддержке ведущих организаций AI и стартап-экосистемы',
    'partners.become': 'Станьте партнером форума',
    'partners.become_desc': 'AngelConnect AI Forum — это уникальная возможность представить ваш бренд целевой аудитории предпринимателей, стартаперов и IT-специалистов',
    'partners.benefits': 'Преимущества партнерства',
    'partners.benefit1': 'Прямой доступ к 200+ квалифицированным участникам',
    'partners.benefit2': 'Упоминание во всех рекламных материалах',
    'partners.benefit3': 'Возможность установить брендированный стенд',
    'partners.benefit4': 'Слот для выступления (для генеральных партнеров)',
    'partners.benefit5': 'Доступ к базе участников',
    'partners.benefit6': 'Размещение логотипа на сайте и в презентациях',
    'partners.contact': 'Связаться с организаторами',

    // Contacts Section
    'contacts.title': 'Контакты',
    'contacts.organizer': 'Организатор',
    'contacts.participation': 'По вопросам участия',
    'contacts.partnership': 'По вопросам партнерства',
    'contacts.follow': 'Следите за обновлениями',
  },

  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.program': 'Program',
    'nav.speakers': 'Speakers',
    'nav.topics': 'Topics',
    'nav.partners': 'Partners',
    'header.participate': 'Register',

    // Hero Content
    'hero.title': 'AngelConnect AI Forum 2025',
    'hero.location_year': 'Tashkent',
    'hero.subtitle': 'AI Implementation in Business: From Theory to Practice',
    'hero.description': 'The first practical forum for entrepreneurs, startups and IT specialists about real AI application in business processes',
    'hero.date': 'November 26, 2025, Wednesday',
    'hero.time': '11:00 - 15:00',
    'hero.location': 'Tashkent, Uzbekistan',
    'hero.speakers': '5 Expert Practitioners',
    'hero.participants': '200 Participants',
    'hero.register': 'Register',
    'hero.learn_more': 'Learn More',
    'hero.sponsor': 'Become a Sponsor',

    // About Section
    'about.title': 'Why AngelConnect AI Forum?',
    'about.description': 'In 2025, artificial intelligence is no longer a future technology—it\'s a tool of the present. But most entrepreneurs don\'t know where to start implementing AI in their business.',
    'about.mission': 'AngelConnect AI Forum is not a conference with theoretical presentations. It\'s a practical platform where experts share real cases, working tools, and concrete steps for automating business processes with AI.',
    'about.what_you_get': 'What you\'ll get:',
    'about.benefit1': 'Concrete solutions and tools for AI implementation',
    'about.benefit2': 'Real cases of business process automation',
    'about.benefit3': 'Step-by-step strategies for rapid AI integration',
    'about.benefit4': 'Measurable results and ROI from implementation',
    'about.benefit5': 'Networking with entrepreneurs and experts',
    'about.benefit6': 'Access to AI practitioners community',
    'about.for_who': 'Who is this forum for',
    'about.entrepreneurs': 'Entrepreneurs and Business Owners',
    'about.entrepreneurs_desc': 'Learn how AI can reduce operational costs, automate routine processes, and increase profits',
    'about.startups': 'Startup Founders',
    'about.startups_desc': 'Learn to use AI to create competitive advantages, accelerate product development, and scale your business',
    'about.it_specialists': 'IT Specialists and Developers',
    'about.it_specialists_desc': 'Discover modern AI tools, frameworks, and practices for implementing machine learning',
    'about.managers': 'Managers and Team Leaders',
    'about.managers_desc': 'Understand how to transform your team\'s work with AI and improve process efficiency',

    // Program Section
    'program.title': 'Forum Program',
    'program.subtitle': 'Intensive program without fluff — only practice and concrete solutions',
    'program.preliminary': 'Preliminary Schedule',
    'program.registration': 'Registration and welcome coffee',
    'program.registration_desc': 'Networking, meeting participants',
    'program.opening': 'Forum Opening',
    'program.opening_desc': 'Welcome speech from organizers',
    'program.speaker': 'Speaker',
    'program.case': 'Practical case',
    'program.coffee_break': 'Coffee Break',
    'program.networking': 'Networking',
    'program.lunch': 'Lunch',
    'program.lunch_desc': 'Networking, chatting with speakers',
    'program.panel': 'Panel Discussion & Q&A',
    'program.panel_desc': 'Speakers answer audience questions',
    'program.afterparty': 'Networking & After-party',
    'program.afterparty_desc': 'Free networking, exchanging contacts',

    // Speakers Section
    'speakers.title': 'Expert Practitioners Who Have Already Implemented AI',
    'speakers.subtitle': 'Our speakers are not theorists, but practitioners who have personally automated business processes, launched AI products, and achieved measurable results',
    'speakers.topic': 'Topic',
    'speakers.about': 'What they\'ll cover',
    'speakers.experience': 'Experience',
    'speakers.coming_soon': 'Detailed program will be published closer to the event date',

    // Topics Section
    'topics.title': 'What We\'ll Discuss',
    'topics.investments': 'AI and Investments',
    'topics.investments_1': 'Attracting venture capital for AI startups',
    'topics.investments_2': 'ROI and payback for AI projects from investor perspective',
    'topics.investments_3': 'Investment trends in artificial intelligence',
    'topics.humanai': 'AI: Threat or Assistant?',
    'topics.humanai_1': 'HR perspective: which positions will transform',
    'topics.humanai_2': 'Psychologists\' view: AI impact on work processes and people',
    'topics.humanai_3': 'Scientific community: real capabilities and limitations of AI',
    'topics.tools': 'Practical Tools',
    'topics.tools_1': 'Ready-made AI solutions for small and medium business',
    'topics.tools_2': 'No-code and low-code platforms for quick implementation',
    'topics.tools_3': 'Integrating AI with existing systems (CRM, ERP)',
    'topics.future': 'The Future of Professions',
    'topics.future_1': 'Which professions AI will replace and which it will enhance',
    'topics.future_2': 'New specialties that AI will create',
    'topics.future_3': 'How to prepare your team for working with artificial intelligence',

    // Partners Section
    'partners.title': 'Forum Partners',
    'partners.subtitle': 'The forum is supported by leading AI organizations and startup ecosystem',
    'partners.become': 'Become a Forum Partner',
    'partners.become_desc': 'AngelConnect AI Forum is a unique opportunity to present your brand to a target audience of entrepreneurs, startups, and IT specialists',
    'partners.benefits': 'Partnership Benefits',
    'partners.benefit1': 'Direct access to 200+ qualified participants',
    'partners.benefit2': 'Mention in all promotional materials',
    'partners.benefit3': 'Opportunity to set up a branded booth',
    'partners.benefit4': 'Speaking slot (for general partners)',
    'partners.benefit5': 'Access to participant database',
    'partners.benefit6': 'Logo placement on website and presentations',
    'partners.contact': 'Contact Organizers',

    // Contacts Section
    'contacts.title': 'Contacts',
    'contacts.organizer': 'Organizer',
    'contacts.participation': 'For participation inquiries',
    'contacts.partnership': 'For partnership inquiries',
    'contacts.follow': 'Stay updated',
  },

  uz: {
    // Header
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Forum haqida',
    'nav.program': 'Dastur',
    'nav.speakers': 'Spikerlar',
    'nav.topics': 'Mavzular',
    'nav.partners': 'Hamkorlar',
    'header.participate': 'Ro\'yxatdan o\'tish',

    // Hero Content
    'hero.title': 'AngelConnect AI Forum 2025',
    'hero.location_year': 'Toshkent',
    'hero.subtitle': 'Sun\'iy intellektni biznesga joriy qilish: nazariyadan amaliyotga',
    'hero.description': 'Tadbirkorlar, startapchilar va IT mutaxassislari uchun biznes jarayonlarida AIni haqiqiy qo\'llash bo\'yicha birinchi amaliy forum',
    'hero.date': '26 noyabr 2025, chorshanba',
    'hero.time': '11:00 - 15:00',
    'hero.location': 'Toshkent, O\'zbekiston',
    'hero.speakers': '5 ekspert-amaliyotchi',
    'hero.participants': '200 ishtirokchi',
    'hero.register': 'Ro\'yxatdan o\'tish',
    'hero.learn_more': 'Batafsil',
    'hero.sponsor': 'Homiy bo\'lish',

    // About Section
    'about.title': 'Nega AngelConnect AI Forum?',
    'about.description': '2025 yilda sun\'iy intellekt endi kelajak texnologiyasi emas — bu hozirgi vaqt vositasi. Ammo ko\'pchilik tadbirkorlar o\'z biznesiga AIni qayerdan boshlashni bilmaydi.',
    'about.mission': 'AngelConnect AI Forum — bu nazariy ma\'ruzalar bilan konferensiya emas. Bu ekspertlar haqiqiy keyslar, ishlaydigan vositalar va AI yordamida biznes jarayonlarini avtomatlashtirish bo\'yicha aniq qadamlar bilan bo\'lishadigan amaliy maydon.',
    'about.what_you_get': 'Siz nimaga ega bo\'lasiz:',
    'about.benefit1': 'AIni joriy qilish uchun aniq yechimlar va vositalar',
    'about.benefit2': 'Biznes jarayonlarini avtomatlashtirishning haqiqiy keyslari',
    'about.benefit3': 'AIni tez integratsiya qilish bo\'yicha bosqichma-bosqich strategiyalar',
    'about.benefit4': 'Joriy qilishdan o\'lchanadigan natijalar va ROI',
    'about.benefit5': 'Tadbirkorlar va ekspertlar bilan tarmoqsozlik',
    'about.benefit6': 'AI amaliyotchilari jamiyatiga kirish',
    'about.for_who': 'Bu forum kimlar uchun',
    'about.entrepreneurs': 'Tadbirkorlar va biznes egalari',
    'about.entrepreneurs_desc': 'AI operatsion xarajatlarni qanday qisqartirishi, oddiy jarayonlarni avtomatlashtirishi va foydani oshirishi mumkinligini bilib oling',
    'about.startups': 'Startap asoschilari',
    'about.startups_desc': 'Raqobat ustunliklarini yaratish, mahsulot ishlab chiqishni tezlashtirish va biznesni kengaytirish uchun AIdan foydalanishni o\'rganing',
    'about.it_specialists': 'IT mutaxassislari va dasturchilar',
    'about.it_specialists_desc': 'Zamonaviy AI vositalari, freymvorklar va mashinaviy o\'rganishni joriy qilish amaliyotlarini kashf eting',
    'about.managers': 'Menejerlar va rahbarlar',
    'about.managers_desc': 'AI yordamida jamoangiz ishini qanday o\'zgartirish va jarayonlar samaradorligini oshirishni tushuning',

    // Program Section
    'program.title': 'Forum dasturi',
    'program.subtitle': 'To\'yingan dastur suvsiz — faqat amaliyot va aniq yechimlar',
    'program.preliminary': 'Dastlabki jadval',
    'program.registration': 'Ro\'yxatdan o\'tish va welcome-kofe',
    'program.registration_desc': 'Tarmoqsozlik, ishtirokchilar bilan tanishuv',
    'program.opening': 'Forumni ochish',
    'program.opening_desc': 'Tashkilotchilarning xush kelibsiz so\'zi',
    'program.speaker': 'Spiker',
    'program.case': 'Amaliy keys',
    'program.coffee_break': 'Kofe-breyk',
    'program.networking': 'Tarmoqsozlik',
    'program.lunch': 'Tushlik',
    'program.lunch_desc': 'Tarmoqsozlik, spikerlar bilan suhbat',
    'program.panel': 'Panel muhokamasi va Q&A',
    'program.panel_desc': 'Spikerlar tomoshabinlar savollariga javob beradi',
    'program.afterparty': 'Tarmoqsozlik va After-party',
    'program.afterparty_desc': 'Erkin muloqot, kontaktlar almashish',

    // Speakers Section
    'speakers.title': 'AIni allaqachon joriy qilgan ekspert-amaliyotchilar',
    'speakers.subtitle': 'Bizning spikerlarimiz nazariyotchilar emas, balki shaxsan biznes jarayonlarini avtomatlashtirib, AI mahsulotlarini ishga tushirgan va o\'lchanadigan natijalarga erishgan amaliyotchilardir',
    'speakers.topic': 'Mavzu',
    'speakers.about': 'Nima haqida gapiradi',
    'speakers.experience': 'Tajriba',
    'speakers.coming_soon': 'Batafsil dastur tadbir sanasiga yaqinroq e\'lon qilinadi',

    // Topics Section
    'topics.title': 'Nima haqida gaplashamiz',
    'topics.investments': 'AI va investitsiyalar',
    'topics.investments_1': 'AI startaplarga venchur kapitalini jalb qilish',
    'topics.investments_2': 'Investorlar uchun AI loyihalarining ROI va to\'lovi',
    'topics.investments_3': 'Sun\'iy intellektga investitsiya qilish trendlari',
    'topics.humanai': 'AI: Tahdid yoki yordamchi?',
    'topics.humanai_1': 'HR mutaxassislarining nuqtai nazari: qaysi lavozimlar o\'zgaradi',
    'topics.humanai_2': 'Psixologlarning fikri: AIning ish jarayonlari va odamlarga ta\'siri',
    'topics.humanai_3': 'Ilmiy jamiyat: AIning haqiqiy imkoniyatlari va cheklovlari',
    'topics.tools': 'Amaliy vositalar',
    'topics.tools_1': 'Kichik va o\'rta biznes uchun tayyor AI yechimlari',
    'topics.tools_2': 'Tez joriy qilish uchun no-code va low-code platformalar',
    'topics.tools_3': 'Mavjud tizimlar bilan AIni integratsiya qilish (CRM, ERP)',
    'topics.future': 'Kasblarning kelajagi',
    'topics.future_1': 'AI qaysi kasblarni almashtiradi va qaysilarini kuchaytiradi',
    'topics.future_2': 'AI yaratadigan yangi mutaxassisliklar',
    'topics.future_3': 'Jamoangizni sun\'iy intellekt bilan ishlashga qanday tayyorlash kerak',

    // Partners Section
    'partners.title': 'Forum hamkorlari',
    'partners.subtitle': 'Forum yetakchi AI tashkilotlari va startap ekotizimi tomonidan qo\'llab-quvvatlanadi',
    'partners.become': 'Forum hamkori bo\'ling',
    'partners.become_desc': 'AngelConnect AI Forum — bu brendingizni tadbirkorlar, startaplar va IT mutaxassislari maqsadli auditoriyasiga taqdim etishning noyob imkoniyati',
    'partners.benefits': 'Hamkorlikning afzalliklari',
    'partners.benefit1': '200+ malakali ishtirokchilarga to\'g\'ridan-to\'g\'ri kirish',
    'partners.benefit2': 'Barcha reklama materiallarida eslatib o\'tish',
    'partners.benefit3': 'Brendlangan stend o\'rnatish imkoniyati',
    'partners.benefit4': 'Chiqish uchun slot (umumiy hamkorlar uchun)',
    'partners.benefit5': 'Ishtirokchilar bazasiga kirish',
    'partners.benefit6': 'Veb-sayt va taqdimotlarda logotipni joylashtirish',
    'partners.contact': 'Tashkilotchilar bilan bog\'lanish',

    // Contacts Section
    'contacts.title': 'Kontaktlar',
    'contacts.organizer': 'Tashkilotchi',
    'contacts.participation': 'Ishtirok etish bo\'yicha savollar uchun',
    'contacts.partnership': 'Hamkorlik bo\'yicha savollar uchun',
    'contacts.follow': 'Yangilanishlarni kuzatib boring',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
