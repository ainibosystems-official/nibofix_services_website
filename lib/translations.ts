export type FaqItem = {
  q: string;
  a: string;
};

export type FaqTranslation = {
  title: string;
  subtitle: string;
  items: FaqItem[];
};

export type LanguageTranslations = {
  faq: FaqTranslation;
  // add others gradually when needed:
  // prices: PricesTranslation;
  // footer: FooterTranslation;
};

export type PricesTranslations = {
  title: string;
  subtitle: string;

  totalLabel: string;
  vatLabel: string;
  note: string;

  discountLabel: string;
  discountInfo: string;

  discountsNotice: string;
  learnMore: string;

  cards: {
    repair: { title: string };
    cleaning: { title: string };
  };

  services: Record<string, string>;
  units: Record<"m2" | "pcs" | "lm", string>;
  groups?: Record<string, string>;

  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    consent: string;
    send: string;
    success: string;
    error: string;
  };
};

export const translations = {
  en: {
    nav: {
      services: "Services",
      prices: "Prices",
      contact: "Contact",
      about: "About Us",
      faq: "FAQ",
    },

    hero: {
      title: "Home Care in Burgas",
      subtitle: "Professional Repair, Finishing & Cleaning Services in Burgas & the Region",
      cta: "Get a Free Estimate",
      learn: "Learn More",
      note: "Response within 24 hours • No obligation",
    },

    servicesStrip: [
      "Painting",
      "Flooring",
      "Furniture Assembly",
      "Deep Cleaning",
    ],

    servicesGrid: {
      painting: {
        title: "Painting & Apartment Refresh",
        description:
          "Professional interior painting services including surface preparation, crack filling, and clean finishing. Ideal for new apartments, rentals, and pre-sale refresh.",
      },

      flooring: {
        title: "Flooring Installation",
        description:
          "Installation of laminate and vinyl flooring with precise alignment, correct spacing, and skirting installation. Suitable for new apartments and renovation projects.",
      },

      furniture: {
        title: "Furniture Assembly & Mounting",
        description:
          "Professional assembly of beds, wardrobes, desks, cabinets, and kitchen units. We also provide safe wall mounting for shelves, TVs, and accessories.",
      },

      deepCleaning: {
        title: "Deep Apartment Cleaning",
        description:
          "Comprehensive deep cleaning for apartments before moving in or after renovation. We remove construction dust, dirt, and residues from all surfaces, kitchens, and bathrooms.",
      },

      upholstery: {
        title: "Upholstery, Sofa & Mattress Cleaning",
        description:
          "Deep extraction cleaning of sofas, armchairs, mattresses, and carpets. We remove dirt, odors, and allergens to improve hygiene and comfort.",
      },

      windows: {
        title: "Window & Balcony Cleaning",
        description:
          "Professional interior window and balcony cleaning with a streak-free finish. We clean glass, frames, rails, and balcony areas.",
      },
    },

    why: {
      title: "Why Choose Us?",
      points: [
        "Experienced & Reliable Service",
        "Professional Equipment & Techniques",
        "Clean Results, Guaranteed Quality",
      ],
    },

    contact: {
      title: "Contact Us",
      subtitle: "Get in touch for a free consultation or personalized quote",
      boxTitle: "Let’s talk about your project",
      boxText:
        "Whether you need renovation, refresh, or professional on-site cleaning — we are ready to help.",
      callTitle: "Free consultation",
      callText:
        "Tell us what you need and we’ll respond as soon as possible.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      cta: "Call us now",
    },

    aboutSection: {
      title: "About NiBoFix",
      subtitle: "Reliable home services you can trust",
      paragraphs: [
        "NiBoFix was created with a simple idea — home services should be reliable, clear, and stress-free. We work with homeowners, landlords, and families who want their space maintained or refreshed without unnecessary complications.",
        "Whether it’s a small repair, professional cleaning, or a full interior refresh, our focus is always on doing the job properly, with attention to detail and respect for your home.",
        "We believe good service starts with honest communication. That’s why we offer clear pricing, realistic timelines, and practical solutions — no surprises, no rushed work, and no unnecessary extras.",
        "Based in the Burgas region, NiBoFix works directly on-site using professional tools and proven methods to deliver consistent, dependable results you can rely on.",
      ],
    },

    prices: {
      title: "Transparent Pricing",
      subtitle: "Get an instant price estimate for repair and cleaning services.",

      totalLabel: "Total",
      vatLabel: "incl. VAT",

      note: "Final pricing depends on size, condition, and scope of work. This calculator is for informational purposes only.",

      discountsNotice: "Discounts may apply when combining different types of services.",
      learnMore: "Learn more",
      /* =========================
         DISCOUNTS
      ========================= */
      discountLabel: "–{percent}% discount applied",

      discountInfo:
        "By buying min. {min} {unit} of {service} you get {percent}% discount.",

      appliedDiscount: "applied discount",

      /* =========================
         CARDS
      ========================= */
      cards: {
        repair: {
          title: "Renovation & Repair",
        },

        cleaning: {
          title: "Cleaning Services",
        },
      },

      /* =========================
         SERVICE LABELS
      ========================= */
      services: {
        /* ---- PAINTING ---- */
        painting_one_no_material: "Painting – one color (without materials)",
        painting_one_with_material: "Painting – one color (with materials)",
        painting_multi_no_material: "Painting – two or more colors (without materials)",
        painting_multi_with_material: "Painting – two or more colors (with materials)",

        /* ---- PREPARATION ---- */
        prep_priming_no_material: "Priming (without materials)",
        prep_priming_with_material: "Priming (with materials)",
        prep_wallpaper_removal: "Wallpaper removal",
        prep_old_paint_removal: "Old paint removal",
        prep_extra_plastering: "Additional plastering",

        /* ---- FLOORING ---- */
        floor_laminate: "Laminate flooring installation",
        floor_carpet: "Carpet installation",
        floor_pvc: "PVC / vinyl flooring installation",

        floor_old_removal: "Old flooring removal",
        floor_leveling: "Floor leveling",
        floor_underlay: "Laminate underlay installation",
        floor_skirting: "Skirting board installation",
        floor_transition_strip: "Transition strip installation",

        /* ---- FURNITURE ASSEMBLY ---- */
        assembly_bed: "Bed",
        assembly_nightstand: "Nightstand",
        assembly_dresser: "Dresser / Chest",
        assembly_desk: "Desk",
        assembly_table: "Table",
        assembly_chair: "Chair",

        assembly_wardrobe_small: "Small wardrobe (up to 2 doors)",
        assembly_wardrobe_medium: "Medium wardrobe (3–4 doors)",
        assembly_wardrobe_large: "Large wardrobe (5+ doors)",

        assembly_kitchen_cabinet: "Kitchen cabinet (upper or lower)",
        assembly_kitchen_set: "Complete kitchen (up to 6 cabinets)",
        assembly_kitchen_extra_cabinet: "Additional kitchen cabinet",

        assembly_wall_mount: "Wall mounting",
        assembly_old_furniture_removal: "Old furniture removal",
        assembly_carry_out: "Carry out (same property)",


        /* ---- UPHOLSTERED FURNITURE ---- */
        sofa_2_seats: "2-seat sofa cleaning",
        sofa_3_seats: "3-seat sofa cleaning",
        sofa_corner_small: "Corner sofa cleaning (small)",
        sofa_corner_large: "Corner sofa cleaning (large)",
        armchair: "Armchair cleaning",
        pouf: "Pouf / ottoman cleaning",

        /* ---- MATTRESSES ---- */
        mattress_single_one_side: "Single mattress cleaning (one side)",
        mattress_single_two_side: "Single mattress cleaning (two sides)",
        mattress_double_one_side: "Double mattress cleaning (one side)",
        mattress_double_two_side: "Double mattress cleaning (two sides)",

        /* ---- CARPETS ---- */
        carpet_cleaning: "Carpet / rug cleaning (on site)",

        /* ---- WINDOWS & BALCONIES ---- */
        window_single: "Single-sash window cleaning",
        window_double: "Double-sash window cleaning",
        window_french: "French window / showcase cleaning",
        balcony_door: "Balcony door cleaning",

        balcony: "Balcony cleaning",
        balcony_large: "Large balcony / loggia cleaning",

        /* ---- APARTMENT CLEANING ---- */
        apartment_cleaning: "Apartment deep cleaning",

        /* ---- MODIFIERS (later as checkboxes) ---- */
        modifier_heavy_dirt: "Heavy dirt / stains",
        modifier_pet_hair: "Pet hair",
        modifier_disinfection: "Disinfection",
      },

      serviceDescriptions: {
        apartment_cleaning: "Comprehensive cleaning suitable for apartments before moving in, after tenants, or after renovation. More information in the FAQ section.",
      },

      groups: {

        featured: "Main service",

        painting: "Painting",
        flooring: "Flooring",
        assembly: "Furniture Assembly",

        furniture_cleaning: "Furniture Washing",
        windows_balcony: "Windows & Balcony Cleaning",
        apartment_cleaning: "Apartment Cleaning",
      },


      /* =========================
         UNITS
      ========================= */
      units: {
        m2: "m²",
        pcs: "pcs",
        lm: "lm",
      },
      form: {
        name: "Name (optional)",
        email: "Email (optional)",
        phone: "Phone (optional)",
        message: "Message (optional)",
        consent:
          "I agree my data will be used to contact me regarding this request.",
        send: "Send request",
        success: "Your request was sent successfully. We will contact you soon.",
        error: "Something went wrong. Please try again later.",
        close: "Close",
      },

    },

    footer: {
      description:
        "Professional repair, renovation, and deep-cleaning services. Reliable work, transparent pricing, and clean results you can trust.",
      area: "Burgas & surrounding areas",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      seeAlso: "See also",
      staycare: "NiBoDom",
      poweredBy: "Powered & developed by",
      ainibo: "AiNiBo Systems",
      exchangeRateNote: "BGN prices are calculated at a fixed exchange rate of 1 EUR = 1.95583 BGN.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Clear answers to the most common questions about our services",
      items: [
        {
          q: "Do you offer discounts? And what are the conditions?",
          a: "Yes. We offer conditional discounts that are activated by ordering specific services. A service can receive a discount only when the required triggering services and quantities are present in the same order. Discounts never apply to the same service that activates them.\n\n---\n\nPAINTING SERVICES → PREPARATION SERVICES (10% DISCOUNT)\nTrigger services:\n- Single-color wall or ceiling painting (with or without materials)\n- Multi-color wall or ceiling painting (with or without materials)\nConditions:\n- Minimum total painted area: 10 m²\nDiscounted services:\n- Priming (with or without materials)\n- Wallpaper removal\n- Old paint removal\n- Extra plastering\n\n---\n\nFLOORING INSTALLATION → FLOORING ADD-ON SERVICES (10% DISCOUNT)\nTrigger services:\n- Laminate flooring installation\n- Carpet flooring installation\n- PVC flooring installation\nConditions:\n- Minimum total flooring area: 10 m²\nDiscounted services:\n- Old floor removal\n- Floor leveling\n- Underlay installation\n- Skirting boards\n- Transition strips\n\n---\n\nBED ASSEMBLY → SMALL FURNITURE ASSEMBLY (10% DISCOUNT)\nTrigger service:\n- Bed assembly\nConditions:\n- Minimum quantity: 1 bed\nDiscounted services:\n- Nightstand assembly\n- Dresser assembly\n- Desk assembly\n\n---\n\nTABLE ASSEMBLY → CHAIR ASSEMBLY (10% DISCOUNT)\nTrigger service:\n- Table assembly\nConditions:\n- Minimum quantity: 1 table\nDiscounted services:\n- Chair assembly\n\n---\n\nKITCHEN SET ASSEMBLY → KITCHEN ADD-ON SERVICES (10% DISCOUNT)\nTrigger service:\n- Kitchen set assembly\nConditions:\n- Minimum quantity: 1 kitchen set\nDiscounted services:\n- Kitchen cabinet assembly\n- Extra kitchen cabinet assembly\n- Wall mounting\n\n---\n\nANY FURNITURE ASSEMBLY → REMOVAL & CARRY-OUT SERVICES (10% DISCOUNT)\nTrigger services:\n- Any furniture assembly service\nConditions:\n- Minimum quantity: 1 assembled item\nDiscounted services:\n- Old furniture removal\n- Furniture carry-out\n\n---\n\nPAINTING, PREPARATION OR FLOORING → SOFA & MATTRESS CLEANING (10% DISCOUNT)\nTrigger services:\n- Painting services\n- Preparation services\n- Flooring installation\n- Old floor removal\nConditions:\n- Minimum total area: 10 m²\nDiscounted services:\n- Sofa cleaning (2-seater, 3-seater, corner)\n- Mattress cleaning (single or double, one- or two-sided)\n\n---\n\nSOFA CLEANING → ARMCHAIR & POUF CLEANING (20% DISCOUNT)\nTrigger services:\n- Any sofa cleaning service\nConditions:\n- Minimum quantity: 1 sofa\nDiscounted services:\n- Armchair cleaning\n- Pouf cleaning\n\n---\n\nOTHER SERVICES → CARPET CLEANING (10% DISCOUNT)\nTrigger services (any of the following in the same order):\n- Area-based services with total area at least 10 m² (painting, preparation, flooring, old floor removal), OR\n- Item-based services with at least 1 item (furniture assembly, removal, sofa cleaning, mattress cleaning)\nDiscounted service:\n- Carpet cleaning\n\n---\n\nOTHER SERVICES → WINDOW & BALCONY CLEANING (10% DISCOUNT)\nTrigger services (any of the following in the same order):\n- Area-based services with total area at least 10 m², OR\n- Item-based services with at least 1 item\nDiscounted services:\n- Window cleaning (single, double, French)\n- Balcony doors\n- Balconies (standard and large)\n\n---\n\nSERVICES EXCLUDED FROM ALL DISCOUNTS:\n- Heavy dirt modifier\n- Pet hair modifier\n- Disinfection\n\n---\n\nNote: Multiple discounts may apply within the same order when conditions are met for different services. Discounts do not stack on the same service."
        },

        {
          q: "Do you offer free inspections?",
          a: "Yes. We provide a free on-site inspection to assess the scope of work and confirm the final price."
        },
        {
          q: "Are the prices on the website final?",
          a: "No. The calculator provides an indicative estimate. The final price is confirmed after inspection and agreement."
        },
        {
          q: "What is included in the listed prices?",
          a: "The listed prices include labor only, unless stated otherwise. Materials are discussed separately based on your preferences."
        },
        {
          q: "How quickly can you start?",
          a: "In most cases, we can start within a few days after a free on-site inspection and confirmation of details."
        },
        {
          q: "Do you work with rental and Airbnb properties?",
          a: "Yes. We regularly work with rental and Airbnb properties, including refresh, repairs, deep cleaning, and preparation between tenants."
        },
        {
          q: "Is deep cleaning done on-site?",
          a: "Yes. All deep cleaning is done on-site using professional equipment. Furniture is not removed from the property."
        },
        {
          q: "Can I request an offer online?",
          a: "Yes. You can use our calculator to select services and send an offer request directly through the website."
        },
        {
          q: "Do I need to provide both email and phone?",
          a: "No. You can leave either email or phone — whichever you prefer — so we can contact you regarding your request."
        },
        {
          q: "What does basic cleaning include?",
          a: "Basic cleaning is a comprehensive cleaning of the entire property, calculated per square meter (m² of the total area). It is suitable before moving in, after tenants, or after renovation, when there is accumulated dust and general dirt. The service includes cleaning of all rooms and surfaces in the apartment – floors, doors, door frames, skirting boards, switches and sockets, kitchen area (external surfaces), windows and balconies, as well as removal of construction and household dust. Basic cleaning does not include upholstery cleaning, mattress and carpet washing, or deep sanitary treatment in cases of heavy contamination – these services are selected separately."
        },
        {
          q: "Do you work on weekends?",
          a: "Weekend work is possible depending on availability and project type. This is discussed during the inspection."
        },
        {
          q: "In which areas do you operate?",
          a: "We primarily operate in Burgas and the surrounding region. For other locations, please contact us."
        }
      ]
    },
  },

  bg: {
    nav: {
      services: "Услуги",
      prices: "Цени",
      contact: "Контакт",
      about: "За Нас",
      faq: "Въпроси",
    },

    hero: {
      title: "Грижа за дома в Бургас",
      subtitle: "Професионални ремонти, довършителни и почистващи услуги в Бургас и региона",
      cta: "Безплатна Оферта",
      learn: "Научи повече",
      note: "Отговор до 24 часа • Без ангажимент",
    },

    servicesStrip: [
      "Боядисване",
      "Подови настилки",
      "Монтаж на мебели",
      "Почистване",
    ],

    servicesGrid: {
      painting: {
        title: "Боядисване и освежаване на апартаменти",
        description:
          "Професионално вътрешно боядисване с подготовка на повърхности, запълване на пукнатини и чисто завършване. Подходящо за нови жилища, наеми и освежаване преди продажба.",
      },

      flooring: {
        title: "Полагане на подови настилки",
        description:
          "Монтаж на ламиниран и винилов под с прецизно подравняване, правилни разстояния и монтаж на первази. Подходящо за нови апартаменти и реновации.",
      },

      furniture: {
        title: "Сглобяване и монтаж на мебели",
        description:
          "Професионално сглобяване на легла, гардероби, бюра, шкафове и кухненски модули. Предлагаме и сигурен стенен монтаж на рафтове и телевизори.",
      },

      deepCleaning: {
        title: "Основно почистване на апартаменти",
        description:
          "Цялостно основно почистване на апартаменти преди нанасяне или след ремонт. Премахваме строителен прах, замърсявания и остатъци от всички повърхности, кухни и бани.",
      },

      upholstery: {
        title: "Пране на мека мебел и матраци",
        description:
          "Дълбоко екстракторно почистване на дивани, фотьойли, матраци и килими. Премахваме замърсявания, миризми и алергени за по-добра хигиена и комфорт.",
      },

      windows: {
        title: "Почистване на прозорци и балкони",
        description:
          "Професионално почистване на вътрешни прозорци и балкони със завършек без ивици. Почистваме стъкла, рамки, релси и балконски площи.",
      },
    },

    why: {
      title: "Защо да изберете нас?",
      points: [
        "Опит и надеждност",
        "Професионално оборудване",
        "Гарантирано качество",
      ],
    },
    contact: {
      title: "Свържете се с нас",
      subtitle: "Безплатна консултация и индивидуална оферта",
      boxTitle: "Нека обсъдим вашия проект",
      boxText:
        "Независимо дали се нуждаете от ремонт, освежаване или професионално почистване на място — ние сме насреща.",
      callTitle: "Безплатна консултация",
      callText:
        "Опишете от какво имате нужда и ще се свържем с вас възможно най-скоро.",
      phoneLabel: "Телефон",
      emailLabel: "Имейл",
      cta: "Обадете ни се",
    },

    aboutSection: {
      title: "За NiBoFix",
      subtitle: "Надеждни услуги за вашия дом",
      paragraphs: [
        "NiBoFix е създадена с една проста идея — услугите за дома трябва да бъдат надеждни, ясни и без излишен стрес. Работим със собственици на жилища, наемодатели и семейства, които искат домът им да бъде поддържан или освежен по правилния начин.",
        "Независимо дали става дума за дребен ремонт, професионално почистване или цялостно освежаване на интериора, нашият фокус винаги е върху качественото изпълнение и вниманието към детайла.",
        "Вярваме, че добрата услуга започва с честна комуникация. Затова предлагаме ясни цени, реалистични срокове и практични решения — без изненади, без претупана работа и без излишни допълнителни услуги.",
        "NiBoFix работи на територията на Бургас и региона, директно на място при клиента, използвайки професионално оборудване и доказани методи за надеждни и постоянни резултати.",
      ],
    },
    prices: {
      title: "Прозрачни цени",
      subtitle: "Онлайн калкулатор за бърза и прозрачна ценова оценка.",

      totalLabel: "Общо",
      vatLabel: "с ДДС",


      note: "Крайната цена зависи от обема, състоянието и спецификата на обекта. Калкулаторът е с информативна цел.",

      discountsNotice: "Възможни са отстъпки при комбиниране на различни видове услуги.",
      learnMore: "Вижте условията",

      appliedDiscount: "приложена отстъпка",

      /* =========================
         ОТСТЪПКИ
      ========================= */
      discountLabel: "–{percent}% приложена отстъпка",

      discountInfo:
        "При минимум {min} {unit} {service} получавате {percent}% отстъпка.",

      /* =========================
         КАРТИ
      ========================= */
      cards: {
        repair: {
          title: "Ремонтни дейности",
        },

        cleaning: {
          title: "Почистващи услуги",
        },
      },

      /* =========================
         УСЛУГИ
      ========================= */
      services: {
        /* ---- БОЯДИСВАНЕ ---- */
        painting_one_no_material: "Боядисване – един цвят (без материали)",
        painting_one_with_material: "Боядисване – един цвят (с материали)",
        painting_multi_no_material: "Боядисване – два или повече цвята (без материали)",
        painting_multi_with_material: "Боядисване – два или повече цвята (с материали)",

        /* ---- ПОДГОТОВКА ---- */
        prep_priming_no_material: "Грундиране (без материал)",
        prep_priming_with_material: "Грундиране (с материал)",
        prep_wallpaper_removal: "Изстъргване на тапети",
        prep_old_paint_removal: "Сваляне на стара боя",
        prep_extra_plastering: "Допълнително шпакловане",

        /* ---- ПОДОВИ НАСТИЛКИ ---- */
        floor_laminate: "Полагане на ламиниран паркет",
        floor_carpet: "Полагане на мокет",
        floor_pvc: "Полагане на балатум / PVC",

        floor_old_removal: "Демонтаж на стара настилка",
        floor_leveling: "Изравняване на основа",
        floor_underlay: "Подложка под ламинат",
        floor_skirting: "Монтаж на первази",
        floor_transition_strip: "Преходни лайсни",

        /* ---- Мебели ---- */
        assembly_bed: "Легло",
        assembly_nightstand: "Нощно шкафче",
        assembly_dresser: "Комод / скрин",
        assembly_desk: "Бюро",
        assembly_table: "Маса",
        assembly_chair: "Стол",

        assembly_wardrobe_small: "Малък гардероб (до 2 врати)",
        assembly_wardrobe_medium: "Среден гардероб (3–4 врати)",
        assembly_wardrobe_large: "Голям гардероб (5+ врати)",

        assembly_kitchen_cabinet: "Кухненски шкаф (долен или горен)",
        assembly_kitchen_set: "Цяла кухня (до 6 шкафа)",
        assembly_kitchen_extra_cabinet: "Допълнителен кухненски шкаф",

        assembly_wall_mount: "Монтаж към стена",
        assembly_old_furniture_removal: "Демонтаж на стара мебел",
        assembly_carry_out: "Изнасяне (в същия имот)",

        /* ---- МЕКА МЕБЕЛ ---- */
        sofa_2_seats: "Пране на диван – 2 места",
        sofa_3_seats: "Пране на диван – 3 места",
        sofa_corner_small: "Пране на ъглов диван (малък)",
        sofa_corner_large: "Пране на ъглов диван (голям)",
        armchair: "Пране на фотьойл",
        pouf: "Пране на табуретка / пуф",

        /* ---- МАТРАЦИ ---- */
        mattress_single_one_side: "Пране на единичен матрак (едностранно)",
        mattress_single_two_side: "Пране на единичен матрак (двустранно)",
        mattress_double_one_side: "Пране на двоен матрак (едностранно)",
        mattress_double_two_side: "Пране на двоен матрак (двустранно)",

        /* ---- КИЛИМИ ---- */
        carpet_cleaning: "Пране на килими / мокети (на място)",

        /* ---- ПРОЗОРЦИ И БАЛКОНИ ---- */
        window_single: "Почистване на прозорец (еднокрилен)",
        window_double: "Почистване на прозорец (двукрилен)",
        window_french: "Почистване на френски прозорец / витрина",
        balcony_door: "Почистване на балконска врата",

        balcony: "Почистване на балкон",
        balcony_large: "Почистване на голям балкон / лоджия",

        /* ---- АПАРТАМЕНТИ ---- */
        apartment_cleaning: "Основно почистване на апартамент",

        /* ---- ДОПЪЛНИТЕЛНИ ОПЦИИ ---- */
        modifier_heavy_dirt: "Силно замърсяване / петна",
        modifier_pet_hair: "Косми от домашни любимци",
        modifier_disinfection: "Дезинфекция",
      },

      serviceDescriptions: {
        apartment_cleaning: "Цялостно почистване, подходящо за апартаменти преди нанасяне, след наематели или след ремонт. Повече информация в секция „Въпроси“.",
      },

      groups: {

        featured: "Основна услуга",

        painting: "Боядисване",
        flooring: "Подови настилки",
        assembly: "Сглобяване на мебели",

        furniture_cleaning: "Пране на мека мебел",
        windows_balcony: "Прозорци и балкони",
        apartment_cleaning: "Основно почистване",
      },

      /* =========================
         ЕДИНИЦИ
      ========================= */
      units: {
        m2: "м²",
        pcs: "бр.",
        lm: "л.м",
      },

      form: {
        name: "Име (по избор)",
        email: "Имейл (по избор)",
        phone: "Телефон (по избор)",
        message: "Съобщение (по избор)",
        consent:
          "Съгласявам се личните ми данни да бъдат използвани за връзка с мен относно тази заявка.",
        send: "Изпрати запитване",
        success: "Запитването беше изпратено успешно. Ще се свържем с Вас.",
        error: "Възникна грешка. Моля, опитайте отново.",
        close: "Затвори",
      },
    },

    footer: {
      description:
        "Професионални ремонтни, реновационни и почистващи услуги. Надеждна работа, прозрачни цени и гарантирано качество.",
      area: "Бургас и региона",
      rights: "Всички права запазени.",
      privacy: "Политика за поверителност",
      terms: "Общи условия",
      seeAlso: "Виж също",
      staycare: "NiBoDom",
      poweredBy: "Разработено и поддържано от",
      ainibo: "AiNiBo Systems",
      exchangeRateNote: "Цените в лева са изчислени по фиксиран курс 1 EUR = 1.95583 BGN.",
    },
    faq: {
      title: "Често задавани въпроси",
      subtitle: "Ясни отговори на най-често задаваните въпроси за нашите услуги",
      items: [
        {
          q: "Предлагате ли отстъпки? И при какви условия?",
          a: "Да. Предлагаме условни отстъпки, които се активират при поръчване на определени услуги. Услуга може да получи отстъпка само когато в същата поръчка присъстват необходимите активиращи услуги и количества. Отстъпките никога не се прилагат върху услугата, която ги активира.\n\n---\n\nБОЯДИСВАНЕ → ПОДГОТВИТЕЛНИ УСЛУГИ (10% ОТСТЪПКА)\nАктивиращи услуги:\n- Едноцветно боядисване на стени или тавани (с или без материали)\n- Многоцветно боядисване на стени или тавани (с или без материали)\nУсловия:\n- Минимална обща боядисвана площ: 10 м²\nУслуги с отстъпка:\n- Грундиране (с или без материали)\n- Премахване на тапети\n- Премахване на стара боя\n- Допълнително шпакловане\n\n---\n\nПОЛАГАНЕ НА НАСТИЛКИ → ДОПЪЛНИТЕЛНИ УСЛУГИ ЗА НАСТИЛКИ (10% ОТСТЪПКА)\nАктивиращи услуги:\n- Полагане на ламинат\n- Полагане на мокет\n- Полагане на PVC настилка\nУсловия:\n- Минимална обща площ на настилките: 10 м²\nУслуги с отстъпка:\n- Премахване на стара настилка\n- Нивелиране на под\n- Полагане на подложка\n- Монтаж на первази\n- Преходни лайсни\n\n---\n\nСГЛОБЯВАНЕ НА ЛЕГЛО → СГЛОБЯВАНЕ НА МАЛКИ МЕБЕЛИ (10% ОТСТЪПКА)\nАктивираща услуга:\n- Сглобяване на легло\nУсловия:\n- Минимум 1 легло\nУслуги с отстъпка:\n- Сглобяване на нощно шкафче\n- Сглобяване на скрин\n- Сглобяване на бюро\n\n---\n\nСГЛОБЯВАНЕ НА МАСА → СГЛОБЯВАНЕ НА СТОЛОВЕ (10% ОТСТЪПКА)\nАктивираща услуга:\n- Сглобяване на маса\nУсловия:\n- Минимум 1 маса\nУслуги с отстъпка:\n- Сглобяване на стол\n\n---\n\nСГЛОБЯВАНЕ НА КУХНЕНСКИ КОМПЛЕКТ → КУХНЕНСКИ ДОПЪЛНИТЕЛНИ УСЛУГИ (10% ОТСТЪПКА)\nАктивираща услуга:\n- Сглобяване на кухненски комплект\nУсловия:\n- Минимум 1 кухненски комплект\nУслуги с отстъпка:\n- Сглобяване на кухненски шкаф\n- Сглобяване на допълнителен кухненски шкаф\n- Монтаж на стенни елементи\n\n---\n\nВСЯКАКВО СГЛОБЯВАНЕ НА МЕБЕЛИ → ИЗНАСЯНЕ И ИЗВОЗВАНЕ (10% ОТСТЪПКА)\nАктивиращи услуги:\n- Която и да е услуга за сглобяване на мебели\nУсловия:\n- Минимум 1 сглобен артикул\nУслуги с отстъпка:\n- Изнасяне на стари мебели\n- Извозване на мебели\n\n---\n\nБОЯДИСВАНЕ, ПОДГОТОВКА ИЛИ НАСТИЛКИ → ПОЧИСТВАНЕ НА ДИВАНИ И МАТРАЦИ (10% ОТСТЪПКА)\nАктивиращи услуги:\n- Боядисване\n- Подготвителни услуги\n- Полагане на настилки\n- Премахване на стара настилка\nУсловия:\n- Минимална обща площ: 10 м²\nУслуги с отстъпка:\n- Почистване на дивани (двуместни, триместни, ъглови)\n- Почистване на матраци (единични и двойни, едностранни или двустранни)\n\n---\n\nПОЧИСТВАНЕ НА ДИВАНИ → ПОЧИСТВАНЕ НА ФОТЬОЙЛИ И ТАБУРЕТКИ (20% ОТСТЪПКА)\nАктивиращи услуги:\n- Която и да е услуга за почистване на дивани\nУсловия:\n- Минимум 1 диван\nУслуги с отстъпка:\n- Почистване на фотьойл\n- Почистване на табуретка\n\n---\n\nДРУГИ УСЛУГИ → ПОЧИСТВАНЕ НА КИЛИМИ (10% ОТСТЪПКА)\nАктивиращи услуги (едно от следните в същата поръчка):\n- Услуги по площ с обща площ минимум 10 м² (боядисване, подготовка, настилки, премахване на стара настилка), ИЛИ\n- Услуги по брой с минимум 1 брой (сглобяване на мебели, изнасяне, почистване на дивани, почистване на матраци)\nУслуга с отстъпка:\n- Почистване на килими\n\n---\n\nДРУГИ УСЛУГИ → ПОЧИСТВАНЕ НА ПРОЗОРЦИ И БАЛКОНИ (10% ОТСТЪПКА)\nАктивиращи услуги (едно от следните в същата поръчка):\n- Услуги по площ с обща площ минимум 10 м², ИЛИ\n- Услуги по брой с минимум 1 брой\nУслуги с отстъпка:\n- Почистване на прозорци (единични, двойни, френски)\n- Балконски врати\n- Балкони (стандартни и големи)\n\n---\n\nУСЛУГИ БЕЗ ОТСТЪПКИ:\n- Надбавка за силно замърсяване\n- Надбавка за косми от домашни любимци\n- Дезинфекция\n\n---\n\nЗабележка: В рамките на една поръчка могат да се приложат няколко отстъпки, когато условията са изпълнени за различни услуги. Отстъпките не се натрупват върху една и съща услуга."
        },
        {
          q: "Предлагате ли безплатен оглед?",
          a: "Да. Предлагаме безплатен оглед на място за оценка на обема работа и потвърждение на крайната цена."
        },
        {
          q: "Крайните ли са цените в сайта?",
          a: "Не. Калкулаторът предоставя ориентировъчна цена. Крайната оферта се потвърждава след оглед."
        },
        {
          q: "Какво е включено в посочените цени?",
          a: "Посочените цени включват само труд, освен ако не е указано друго. Материалите се договарят отделно."
        },
        {
          q: "Колко бързо можете да започнете?",
          a: "В повечето случаи можем да започнем в рамките на няколко дни след безплатен оглед и уточняване на детайлите."
        },
        {
          q: "Работите ли с имоти под наем и Airbnb?",
          a: "Да. Работим редовно с имоти под наем и Airbnb – освежаване, ремонти и дълбоко почистване между наематели."
        },
        {
          q: "Дълбокото почистване извършва ли се на място?",
          a: "Да. Всички услуги по дълбоко почистване се извършват на място с професионална техника. Мебелите не се изнасят."
        },
        {
          q: "Мога ли да изпратя запитване онлайн?",
          a: "Да. Можете да използвате калкулатора, да изберете услуги и да изпратите запитване директно през сайта."
        },
        {
          q: "Трябва ли да оставя и имейл, и телефон?",
          a: "Не. Достатъчно е да оставите имейл или телефон – според предпочитанията ви."
        },
        {
          q: "Какво включва основното почистване?",
          a: "Основното почистване е цялостно почистване на жилището, изчислявано на квадратен метър (м² от цялата площ). Подходящо е преди нанасяне, след наематели или след ремонт, когато има натрупан прах и замърсявания. Услугата включва почистване на всички помещения и повърхности в апартамента – подове, врати, каси, первази, ключове и контакти, кухненска зона (външно), прозорци и балкони, както и отстраняване на строителен и битов прах. Основното почистване не включва пране на мека мебел, матраци и килими, както и дълбока санитарна обработка при тежки замърсявания – тези услуги се избират отделно."
        },
        {
          q: "Работите ли през уикенда?",
          a: "Работа през уикенда е възможна според натовареността и вида на проекта. Уточнява се при оглед."
        },
        {
          q: "В кои райони работите?",
          a: "Основно работим в Бургас и региона. За други населени места – свържете се с нас."
        }
      ]
    },
  },

  ua: {
    nav: {
      services: "Послуги",
      prices: "Ціни",
      contact: "Контакт",
      about: "Про Нас",
      faq: "Поширені запитання",
    },

    hero: {
      title: "Догляд за житлом у Бургасі",
      subtitle: "Професійні ремонтні, оздоблювальні та клінінгові послуги у Бургасі та регіоні",
      cta: "Безкоштовна оцінка",
      learn: "Дізнатися більше",
      note: "Відповідь протягом 24 годин • Без зобов’язань",
    },

    servicesStrip: [
      "Фарбування",
      "Підлогові покриття",
      "Збірка меблів",
      "Прибирання",
    ],

    servicesGrid: {
      painting: {
        title: "Фарбування та оновлення квартир",
        description:
          "Професійне внутрішнє фарбування з підготовкою поверхонь, заповненням тріщин та чистим завершенням. Підходить для нових квартир, оренди та підготовки до продажу.",
      },

      flooring: {
        title: "Укладання підлогових покриттів",
        description:
          "Укладання ламінованих та вінілових підлог із точним вирівнюванням, правильними зазорами та монтажем плінтусів. Підходить для нових квартир і ремонтів.",
      },

      furniture: {
        title: "Збірка та монтаж меблів",
        description:
          "Професійна збірка ліжок, шаф, столів, тумб та кухонних модулів. Також пропонуємо безпечний настінний монтаж полиць і телевізорів.",
      },

      deepCleaning: {
        title: "Глибоке прибирання квартир",
        description:
          "Комплексне глибоке прибирання квартир перед заселенням або після ремонту. Видаляємо будівельний пил, бруд та залишки з усіх поверхонь, кухонь і ванних кімнат.",
      },

      upholstery: {
        title: "Чистка м’яких меблів та матраців",
        description:
          "Глибоке екстракційне очищення диванів, крісел, матраців і килимів. Видаляємо бруд, запахи та алергени для кращої гігієни та комфорту.",
      },

      windows: {
        title: "Миття вікон та балконів",
        description:
          "Професійне миття внутрішніх вікон і балконів без розводів. Очищаємо скло, рами, напрямні та балконні зони.",
      },
    },

    why: {
      title: "Чому обирають нас?",
      points: [
        "Досвід та надійність",
        "Професійне обладнання",
        "Гарантія якості",
      ],
    },
    contact: {
      title: "Зв’яжіться з нами",
      subtitle: "Безкоштовна консультація та індивідуальна оцінка",
      boxTitle: "Обговорімо ваш проєкт",
      boxText:
        "Ремонт, оновлення або професійне прибирання на місці — ми готові допомогти.",
      callTitle: "Безкоштовна консультація",
      callText:
        "Опишіть ваші потреби, і ми зв’яжемося з вами найближчим часом.",
      phoneLabel: "Телефон",
      emailLabel: "Електронна пошта",
      cta: "Зателефонуйте нам",
    },

    aboutSection: {
      title: "Про NiBoFix",
      subtitle: "Надійні послуги для вашого дому",
      paragraphs: [
        "NiBoFix створено з простою ідеєю — домашні послуги мають бути надійними, зрозумілими та без зайвого стресу. Ми працюємо з власниками житла, орендодавцями та сім’ями, які хочуть підтримувати або оновлювати свій простір без ускладнень.",
        "Незалежно від того, чи це невеликий ремонт, професійне прибирання або повне оновлення інтер’єру, ми завжди зосереджені на якісному виконанні та увазі до деталей.",
        "Ми віримо, що якісна послуга починається з чесної комунікації. Саме тому ми пропонуємо прозорі ціни, реалістичні терміни та практичні рішення — без несподіванок, поспіху чи нав’язування зайвих послуг.",
        "NiBoFix працює в регіоні Бургас і виконує всі роботи безпосередньо на об’єкті, використовуючи професійні інструменти та перевірені методи для стабільного та надійного результату.",
      ],
    },
    prices: {
      title: "Прозорі ціни",
      subtitle: "Отримайте попередній розрахунок вартості послуг онлайн",

      totalLabel: "Загальна сума",
      vatLabel: "з ПДВ",

      note: "Кінцева ціна залежить від обсягу, стану та складності робіт. Калькулятор має інформаційний характер.",

      discountsNotice: "Знижки можливі при поєднанні різних видів послуг.",
      learnMore: "Дізнатися більше",

      appliedDiscount: "застосована знижка",

      /* =========================
         ЗНИЖКИ
      ========================= */
      discountLabel: "–{percent}% знижка застосована",

      discountInfo:
        "При замовленні мінімум {min} {unit} послуги {service} ви отримуєте {percent}% знижки.",

      /* =========================
         КАРТКИ
      ========================= */
      cards: {
        repair: {
          title: "Ремонтні роботи",
        },

        cleaning: {
          title: "Послуги прибирання",
        },
      },

      /* =========================
         ПОСЛУГИ
      ========================= */
      services: {
        /* ---- ФАРБУВАННЯ ---- */
        painting_one_no_material: "Фарбування – один колір (без матеріалів)",
        painting_one_with_material: "Фарбування – один колір (з матеріалами)",
        painting_multi_no_material: "Фарбування – два або більше кольорів (без матеріалів)",
        painting_multi_with_material: "Фарбування – два або більше кольорів (з матеріалами)",

        /* ---- ПІДГОТОВКА ---- */
        prep_priming_no_material: "Ґрунтування (без матеріалів)",
        prep_priming_with_material: "Ґрунтування (з матеріалами)",
        prep_wallpaper_removal: "Зняття шпалер",
        prep_old_paint_removal: "Видалення старої фарби",
        prep_extra_plastering: "Додаткове шпаклювання",

        /* ---- ПІДЛОГОВІ ПОКРИТТЯ ---- */
        floor_laminate: "Укладання ламінату",
        floor_carpet: "Укладання ковроліну",
        floor_pvc: "Укладання PVC / вінілового покриття",

        floor_old_removal: "Демонтаж старого покриття",
        floor_leveling: "Вирівнювання основи",
        floor_underlay: "Підкладка під ламінат",
        floor_skirting: "Монтаж плінтусів",
        floor_transition_strip: "Перехідні планки",

        /* ---- Мебелi ---- */
        assembly_bed: "Ліжко",
        assembly_nightstand: "Тумбочка",
        assembly_dresser: "Комод",
        assembly_desk: "Письмовий стіл",
        assembly_table: "Стіл",
        assembly_chair: "Стілець",

        assembly_wardrobe_small: "Маленька шафа (до 2 дверей)",
        assembly_wardrobe_medium: "Середня шафа (3–4 двері)",
        assembly_wardrobe_large: "Велика шафа (5+ дверей)",

        assembly_kitchen_cabinet: "Кухонна шафа (верхня або нижня)",
        assembly_kitchen_set: "Кухня (до 6 шаф)",
        assembly_kitchen_extra_cabinet: "Додаткова кухонна шафа",

        assembly_wall_mount: "Кріплення до стіни",
        assembly_old_furniture_removal: "Демонтаж старих меблів",
        assembly_carry_out: "Винесення (в межах об’єкта)",

        /* ---- М’ЯКІ МЕБЛІ ---- */
        sofa_2_seats: "Чищення дивана – 2 місця",
        sofa_3_seats: "Чищення дивана – 3 місця",
        sofa_corner_small: "Чищення кутового дивана (малий)",
        sofa_corner_large: "Чищення кутового дивана (великий)",
        armchair: "Чищення крісла",
        pouf: "Чищення пуфа",

        /* ---- МАТРАЦИ ---- */
        mattress_single_one_side: "Чищення односпального матраца (одна сторона)",
        mattress_single_two_side: "Чищення односпального матраца (дві сторони)",
        mattress_double_one_side: "Чищення двоспального матраца (одна сторона)",
        mattress_double_two_side: "Чищення двоспального матраца (дві сторони)",

        /* ---- КИЛИМИ ---- */
        carpet_cleaning: "Чищення килимів / ковроліну (на місці)",

        /* ---- ВІКНА ТА БАЛКОНИ ---- */
        window_single: "Миття одностулкового вікна",
        window_double: "Миття двостулкового вікна",
        window_french: "Миття французького вікна / вітрини",
        balcony_door: "Миття балконних дверей",

        balcony: "Миття балкона",
        balcony_large: "Миття великого балкона / лоджії",

        /* ---- КВАРТИРИ ---- */
        apartment_cleaning: "Генеральне прибирання квартири",

        /* ---- ДОДАТКОВІ ОПЦІЇ ---- */
        modifier_heavy_dirt: "Сильні забруднення / плями",
        modifier_pet_hair: "Шерсть домашніх тварин",
        modifier_disinfection: "Дезінфекція",
      },

      serviceDescriptions: {
        apartment_cleaning: "Комплексне прибирання, підходить для квартир перед заселенням, після орендарів або після ремонту. Детальніше дивіться в розділі «Питання».",
      },

      groups: {

        featured: "Основна послуга",

        painting: "Фарбування",
        flooring: "Підлогові покриття",
        assembly: "Збірка меблів",

        furniture_cleaning: "Чистка м’яких меблів",
        windows_balcony: "Вікна та балкони",
        apartment_cleaning: "Генеральне прибирання",
      },

      /* =========================
         ОДИНИЦІ
      ========================= */
      units: {
        m2: "м²",
        pcs: "шт.",
        lm: "п.м",
      },
      form: {
        name: "Ім’я (необов’язково)",
        email: "Email (необов’язково)",
        phone: "Телефон (необов’язково)",
        message: "Повідомлення (необов’язково)",
        consent:
          "Я погоджуюсь, що мої дані можуть бути використані для зв’язку зі мною щодо цього запиту.",
        send: "Надіслати запит",
        success: "Запит успішно надіслано. Ми зв’яжемося з вами.",
        error: "Сталася помилка. Будь ласка, спробуйте ще раз.",
        close: "Закрити",
      },
    },

    footer: {
      description:
        "Професійні ремонтні, оновлювальні та клінінгові послуги. Надійна робота, прозорі ціни та гарантована якість.",
      area: "Бургас та прилеглі райони",
      rights: "Усі права захищені.",
      privacy: "Політика конфіденційності",
      terms: "Умови користування",
      seeAlso: "Дивіться також",
      staycare: "NiBoDom",
      poweredBy: "Розроблено та підтримується",
      ainibo: "AiNiBo Systems",
      exchangeRateNote: "Ціни в болгарських левах розраховані за фіксованим курсом 1 EUR = 1.95583 BGN.",
    },
    faq: {
      title: "Поширені запитання",
      subtitle: "Чіткі відповіді на найпоширеніші запитання про наші послуги",
      items: [
        {
          q: "Чи пропонуєте ви знижки? І за яких умов?",
          a: "Так. Ми пропонуємо умовні знижки, які активуються при замовленні певних послуг. Послуга може отримати знижку лише тоді, коли в тому самому замовленні присутні необхідні активуючі послуги та кількості. Знижки ніколи не застосовуються до тієї ж послуги, яка їх активує.\n\n---\n\nФАРБУВАННЯ → ПІДГОТОВЧІ ПОСЛУГИ (ЗНИЖКА 10%)\nАктивуючі послуги:\n- Одноколірне фарбування стін або стелі (з матеріалами або без)\n- Багатоколірне фарбування стін або стелі (з матеріалами або без)\nУмови:\n- Мінімальна загальна площа фарбування: 10 м²\nПослуги зі знижкою:\n- Ґрунтування (з матеріалами або без)\n- Зняття шпалер\n- Видалення старої фарби\n- Додаткове шпаклювання\n\n---\n\nУКЛАДАННЯ ПІДЛОГИ → ДОДАТКОВІ ПОСЛУГИ ДЛЯ ПІДЛОГИ (ЗНИЖКА 10%)\nАктивуючі послуги:\n- Укладання ламінату\n- Укладання килимового покриття\n- Укладання PVC покриття\nУмови:\n- Мінімальна загальна площа підлоги: 10 м²\nПослуги зі знижкою:\n- Демонтаж старої підлоги\n- Вирівнювання підлоги\n- Укладання підкладки\n- Монтаж плінтусів\n- Перехідні планки\n\n---\n\nЗБИРАННЯ ЛІЖКА → ЗБИРАННЯ МАЛИХ МЕБЛІВ (ЗНИЖКА 10%)\nАктивуюча послуга:\n- Збирання ліжка\nУмови:\n- Мінімум 1 ліжко\nПослуги зі знижкою:\n- Збирання тумбочки\n- Збирання комода\n- Збирання письмового столу\n\n---\n\nЗБИРАННЯ СТОЛУ → ЗБИРАННЯ СТІЛЬЦІВ (ЗНИЖКА 10%)\nАктивуюча послуга:\n- Збирання столу\nУмови:\n- Мінімум 1 стіл\nПослуги зі знижкою:\n- Збирання стільця\n\n---\n\nЗБИРАННЯ КУХОННОГО ГАРНІТУРУ → ДОДАТКОВІ КУХОННІ ПОСЛУГИ (ЗНИЖКА 10%)\nАктивуюча послуга:\n- Збирання кухонного гарнітуру\nУмови:\n- Мінімум 1 кухонний гарнітур\nПослуги зі знижкою:\n- Збирання кухонної шафки\n- Збирання додаткової кухонної шафки\n- Монтаж настінних елементів\n\n---\n\nБУДЬ-ЯКЕ ЗБИРАННЯ МЕБЛІВ → ВИНЕСЕННЯ ТА ВИВЕЗЕННЯ (ЗНИЖКА 10%)\nАктивуючі послуги:\n- Будь-яка послуга зі збирання меблів\nУмови:\n- Мінімум 1 зібраний предмет\nПослуги зі знижкою:\n- Винесення старих меблів\n- Вивезення меблів\n\n---\n\nФАРБУВАННЯ, ПІДГОТОВКА АБО ПІДЛОГА → ЧИЩЕННЯ ДИВАНІВ І МАТРАЦІВ (ЗНИЖКА 10%)\nАктивуючі послуги:\n- Фарбування\n- Підготовчі роботи\n- Укладання підлоги\n- Демонтаж старої підлоги\nУмови:\n- Мінімальна загальна площа: 10 м²\nПослуги зі знижкою:\n- Чищення диванів (2-місні, 3-місні, кутові)\n- Чищення матраців (одинарні та подвійні, з одного або двох боків)\n\n---\n\nЧИЩЕННЯ ДИВАНІВ → ЧИЩЕННЯ КРІСЕЛ І ПУФІВ (ЗНИЖКА 20%)\nАктивуючі послуги:\n- Будь-яка послуга з чищення диванів\nУмови:\n- Мінімум 1 диван\nПослуги зі знижкою:\n- Чищення крісла\n- Чищення пуфа\n\n---\n\nІНШІ ПОСЛУГИ → ЧИЩЕННЯ КИЛИМІВ (ЗНИЖКА 10%)\nАктивуючі послуги (одне з наступного в тому самому замовленні):\n- Послуги за площею з загальною площею не менше 10 м² (фарбування, підготовка, підлога, демонтаж підлоги), АБО\n- Послуги за кількістю з мінімум 1 одиницею (збирання меблів, винесення, чищення диванів, чищення матраців)\nПослуга зі знижкою:\n- Чищення килимів\n\n---\n\nІНШІ ПОСЛУГИ → ЧИЩЕННЯ ВІКОН І БАЛКОНІВ (ЗНИЖКА 10%)\nАктивуючі послуги (одне з наступного в тому самому замовленні):\n- Послуги за площею з загальною площею не менше 10 м², АБО\n- Послуги за кількістю з мінімум 1 одиницею\nПослуги зі знижкою:\n- Чищення вікон (одинарні, подвійні, французькі)\n- Балконні двері\n- Балкони (стандартні та великі)\n\n---\n\nПОСЛУГИ БЕЗ ЗНИЖОК:\n- Надбавка за сильне забруднення\n- Надбавка за шерсть домашніх тварин\n- Дезінфекція\n\n---\n\nПримітка: В межах одного замовлення може застосовуватися кілька знижок, якщо виконані умови для різних послуг. Знижки не підсумовуються для однієї й тієї ж послуги."
        },
        {
          q: "Чи пропонуєте ви безкоштовний огляд?",
          a: "Так. Ми проводимо безкоштовний огляд на місці для оцінки обсягу робіт та підтвердження остаточної ціни."
        },
        {
          q: "Чи є ціни на сайті остаточними?",
          a: "Ні. Калькулятор надає орієнтовну вартість. Остаточна ціна підтверджується після огляду."
        },
        {
          q: "Що включено у вказані ціни?",
          a: "Вказані ціни включають лише роботу, якщо не зазначено інше. Матеріали обговорюються окремо."
        },
        {
          q: "Як швидко ви можете розпочати?",
          a: "У більшості випадків ми можемо розпочати протягом кількох днів після безкоштовного огляду та узгодження деталей."
        },
        {
          q: "Чи працюєте ви з орендованими квартирами та Airbnb?",
          a: "Так. Ми регулярно працюємо з орендованими об’єктами та Airbnb – оновлення, ремонти та глибоке прибирання між орендарями."
        },
        {
          q: "Чи проводиться глибоке прибирання на місці?",
          a: "Так. Усі послуги глибокого прибирання виконуються на місці з професійним обладнанням. Меблі не вивозяться."
        },
        {
          q: "Чи можу я надіслати запит онлайн?",
          a: "Так. Ви можете скористатися калькулятором, обрати послуги та надіслати запит безпосередньо через сайт."
        },
        {
          q: "Чи потрібно залишати і телефон, і email?",
          a: "Ні. Ви можете залишити телефон або email — як вам зручніше."
        },
        {
          q: "Що включає базове прибирання?",
          a: "Базове прибирання — це комплексне прибирання всього житла, яке розраховується за квадратний метр (м² від загальної площі). Воно підходить перед заселенням, після орендарів або після ремонту, коли є накопичений пил та забруднення. Послуга включає прибирання всіх приміщень і поверхонь у квартирі — підлоги, двері, дверні рами, плінтуси, вимикачі та розетки, кухонну зону (зовнішні поверхні), вікна та балкони, а також видалення будівельного й побутового пилу. Базове прибирання не включає прання м’яких меблів, матраців і килимів, а також глибоку санітарну обробку у випадках сильних забруднень — ці послуги обираються окремо."
        },
        {
          q: "Чи працюєте ви у вихідні?",
          a: "Робота у вихідні можлива залежно від завантаженості та типу проєкту. Це узгоджується під час огляду."
        },
        {
          q: "У яких районах ви працюєте?",
          a: "Ми переважно працюємо в Бургасі та прилеглих районах. Для інших локацій — зв’яжіться з нами."
        }
      ]
    },
  },
} as const;
