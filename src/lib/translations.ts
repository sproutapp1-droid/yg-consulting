export type Locale = "en" | "zh-CN" | "zh-TW";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh-CN", label: "简体" },
  { code: "zh-TW", label: "繁體" },
];

const translations = {
  en: {
    // Nav
    navAbout: "About",
    navServices: "Services",
    navTrackRecord: "Track Record",
    navHowItWorks: "How It Works",
    navCta: "Get in Touch",

    // Hero
    heroBadge: "20+ Years in Asia-Pacific Retail",
    heroHeadline: "Build & Grow Your Brand Across Asia Pacific",
    heroSubheadline:
      "From flagship store openings to full P&L management — strategic retail consulting for luxury and lifestyle brands entering or expanding in China, Hong Kong, and the wider APAC region.",
    heroPrimaryCta: "Get in Touch",
    heroSecondaryCta: "See Services",
    heroStat1Value: "20+",
    heroStat1Label: "years experience",
    heroStat2Value: "11",
    heroStat2Label: "stores in 3 years",
    heroStat3Value: "13",
    heroStat3Label: "countries",

    // Trust Bar
    trustHeadline: "Trusted by leading global brands",

    // Problem–Solution
    comparisonHeadline: "Why brands choose specialist APAC consulting",
    comparisonProblemTitle: "The Typical Approach",
    comparisonSolutionTitle: "Working with YG Consulting",
    problem1Title: "Generic market entry plans",
    problem1Desc: "Cookie-cutter strategies that ignore local nuance",
    solution1Title: "Tailored APAC strategy",
    solution1Desc:
      "Custom market entry roadmaps built on 20+ years of on-the-ground experience in China, HK, SEA, Korea, Japan, and Australia",
    problem2Title: "Disconnected from landlords",
    problem2Desc: "Relying on third-party brokers with no direct relationships",
    solution2Title: "Direct landlord relationships",
    solution2Desc:
      "Personally established networks with key mall operators and landlords across APAC, enabling faster leasing and better terms",
    problem3Title: "Weak local execution",
    problem3Desc: "HQ-driven plans that fall apart at store level",
    solution3Title: "End-to-end execution",
    solution3Desc:
      "From lease negotiation to VM installation, staff hiring to launch-day operations — managed directly",
    problem4Title: "Siloed expertise",
    problem4Desc: "Separate consultants for merchandising, marketing, training",
    solution4Title: "Full-spectrum retail leadership",
    solution4Desc:
      "Merchandising, VM, marketing, training, CRM, and P&L under one experienced operator",

    // About
    aboutHeadline: "Two decades building brands across Asia Pacific",
    aboutBody:
      "Yvonne Gan has held senior leadership roles at some of the world's most prestigious fashion houses — from Regional Executive Director at Salvatore Ferragamo to President of Giuseppe Zanotti Asia Pacific, and VP Commercial at Canada Goose. With a career spanning buying, merchandising, marketing, VM, and full P&L management, she brings a rare breadth of operational expertise to every engagement.",
    aboutEducation: "B.A. Business, York University, Ontario",
    aboutLanguages: "Fluent in English, Cantonese, Mandarin | Basic French, Shanghainese",
    credential1Role: "VP Commercial & Wholesale",
    credential1Company: "Canada Goose APAC",
    credential2Role: "President",
    credential2Company: "Giuseppe Zanotti Asia Pacific",
    credential3Role: "Regional Executive Director",
    credential3Company: "Ferragamo APAC",
    credential4Role: "CEO, The Balancing",
    credential4Company: "Bailian Group (Shanghai)",

    // Services
    servicesHeadline: "How I help brands succeed in APAC",
    service1Title: "Market Entry & Expansion",
    service1Desc:
      "Strategic planning for entering new APAC markets — from feasibility to first store opening. Site selection, landlord negotiation, and lease management.",
    service2Title: "Brand Building & Positioning",
    service2Desc:
      "Elevate brand perception through targeted marketing, PR, celebrity alignment, and integrated campaigns tailored to Asian consumers.",
    service3Title: "Merchandising & Product Strategy",
    service3Desc:
      "OTB planning, assortment curation, pricing strategy, and capsule collection development for APAC markets. Exclusive product creation.",
    service4Title: "Visual Merchandising & Creative",
    service4Desc:
      "Window concept development, VM execution, ad campaign direction, and in-store experience design that resonates locally.",
    service5Title: "Team Building & Retail Operations",
    service5Desc:
      "Recruit, train, and develop retail teams. Build organizational structure from zero. KPI frameworks, commission schemes, and operational excellence.",
    service6Title: "Wholesale & Distribution",
    service6Desc:
      "Identify and manage franchise partners, wholesale accounts, and distributors. Negotiate terms and build sustainable channel networks across the region.",

    // Track Record
    trackRecordHeadline: "Proven results across Asia Pacific",
    stat1Label: "Years of APAC experience",
    stat2Label: "Countries managed",
    stat3Label: "Stores opened & operated",
    stat4Label: "Luxury brands led at C-suite / VP level",

    // How It Works
    howItWorksHeadline: "A straightforward engagement process",
    step1Title: "Discovery Call",
    step1Desc:
      "We discuss your brand's goals, current APAC presence, and challenges. I assess fit and outline potential approaches.",
    step2Title: "Strategic Proposal",
    step2Desc:
      "I deliver a tailored roadmap — covering market analysis, operational plan, timeline, and investment. Clear scope, no hidden fees.",
    step3Title: "Execution & Growth",
    step3Desc:
      "Hands-on implementation. From landlord meetings and store openings to team building and ongoing performance management.",

    // CTA
    ctaHeadline: "Ready to grow your brand in Asia Pacific?",
    ctaSubtext: "Let's start with a conversation about your goals.",
    ctaButton: "Get in Touch",

    // Contact Form
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formCompany: "Company / Brand",
    formCompanyPlaceholder: "Your company or brand name",
    formMessage: "Message",
    formMessagePlaceholder: "Tell me about your brand and how I can help...",
    formSubmit: "Send Message",
    formSending: "Sending...",
    formOrEmail: "or email directly:",
    formSuccessTitle: "Message sent!",
    formSuccessMsg: "Thank you for reaching out. I'll get back to you within 1–2 business days.",
    formError: "Something went wrong. Please try again or email directly.",

    // Announcement Bar
    announce1: "Expanding Save The Duck across Asia Pacific as GM",
    announce2: "Led commercial strategy across 6 APAC markets for Canada Goose",
    announce3: "Full P&L as President, Giuseppe Zanotti Asia Pacific",
    announce4: "Built multi-brand retail platform with 200+ luxury brands in Shanghai",
    announce5: "Directed merchandising & marketing across 100+ stores in 13 countries at Ferragamo",

    // Experience Page
    experiencePageTitle: "Recent Experience",
    experiencePageSubtitle: "Selected highlights from over two decades of building and scaling luxury brands across Asia Pacific",
    viewExperience: "View Experience",
    backToHome: "Back to Home",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "Italian sustainable outerwear — €72M revenue, present in 40 countries, 18 monobrand stores",
    exp1Role: "General Manager, Asia Pacific / Consultant",
    exp1Period: "March 2024 – Present",
    exp1Desc: "Developing and expanding wholesale/franchisee business across Asia Pacific, identifying and onboarding the right distributors to operate in various markets. Overseeing 2 direct operated stores in Hong Kong, including warehousing, logistics, and full P&L. Supporting product development with the design team in Italy, and developing marketing strategies including digital, advertising, communications, and creative conception.",
    exp1Highlight1: "Expanded wholesale & franchisee network across APAC",
    exp1Highlight2: "Full P&L responsibility for Hong Kong operations",
    exp1Highlight3: "Strategic product development with Italy HQ",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "Canadian luxury outerwear — CAD $1.3B annual revenue, 74 stores globally",
    exp2Role: "Vice President, Commercial & Wholesale, Asia Pacific",
    exp2Period: "July 2022 – August 2023",
    exp2Desc: "Prepared long-term and short-term strategies for the region with full P&L responsibility. Managed retail business in Hong Kong, Taiwan, Macau, Australia, Korea, and Japan. Opened 2 stores in Macau and 2 in Australia within one year. Took over operational functions and logistics from Imaginex (previous Greater China JV partner), reclaiming landlord relationships from third-party operators. Built a full retail operations team including Area Retail Manager, Training Director, and VM Manager.",
    exp2Highlight1: "Managed retail across 6 APAC markets",
    exp2Highlight2: "Led store real estate portfolio & landlord relationships",
    exp2Highlight3: "Drove selling, NPS, conversion & luxury performance metrics",
    exp2Highlight4: "Took over operations from JV partner and built full retail team from scratch",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "Italian luxury footwear — present in 75+ countries, 100+ boutiques, 600K+ pairs annually",
    exp3Role: "President, Asia Pacific (including China)",
    exp3Period: "March 2021 – June 2022",
    exp3Desc: "Full responsibility for the Group's strategy execution in Asia Pacific including China, with complete P&L ownership. Personally responsible for all Asia store negotiations, lease agreements, and new openings. Developed and implemented growth roadmap with emphasis on retail network expansion. Led retail operations, merchandising, visual, communication, PR, and wholesale teams. Oversaw franchise and wholesale partner management across the region.",
    exp3Highlight1: "Full P&L and strategy ownership for Asia Pacific",
    exp3Highlight2: "Led retail network expansion planning",
    exp3Highlight3: "Managed franchise & wholesale partner ecosystem",
    exp3Highlight4: "Directly negotiated all Asia store leases and openings",

    exp4Company: "Shanghai Bailian Group",
    exp4CompanyContext: "China's largest state-owned retail enterprise — ¥42B revenue, 45,000+ staff, 3M+ sqm retail space",
    exp4Role: "Deputy General Manager — CEO, The Balancing / GM Strategy Brands / GM Distribution",
    exp4Period: "April 2018 – March 2021",
    exp4Desc: "Triple role at China's largest state-owned retail enterprise. As CEO of The Balancing, managed 3 multi-brand stores with 200+ international luxury brands including Jil Sander, Martin Margiela, Victoria Beckham, and Stella McCartney — full responsibility for store openings, expansion, and brand development. As GM Strategy Brands, handled 60+ luxury brands across 25 department stores, 18 shopping malls, and 8 outlets. As GM Distribution, oversaw DAKS, Wedgwood, Royal Doulton, and FRED brands with capsule collections and exclusive product development for the China market.",
    exp4Highlight1: "Managed 200+ luxury brands across 3 multi-brand stores",
    exp4Highlight2: "Oversaw 60+ brands across 51 retail locations",
    exp4Highlight3: "Built team of 100+ staff and launched e-commerce platforms",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "Italian luxury fashion house — €1B annual revenue, 367 stores worldwide",
    exp5Role: "Regional Executive Director, Marketing & Merchandising — Asia Pacific",
    exp5Period: "July 2007 – August 2017",
    exp5Desc: "Oversaw 13 countries including 100+ domestic stores, 6 wholesale accounts, 75 travel retail stores/corners, and direct e-commerce channels. Involved in store location selection and landlord negotiation for China stores. The company bought back shares from Imaginex (Greater China JV) and Li & Fung (SEA — Korea, Singapore, Malaysia, Thailand), and the team was expanded significantly during this transition. Set company marketing and communication strategies, managed regional advertising, A&P budget, CRM, VIP events, boutique openings, and large-scale fashion shows. Led the Retail Excellence Project for all Asia Pacific markets. Developed capsule collections and exclusive products for Asia, directed VM execution, creative windows, and ad campaigns.",
    exp5Highlight1: "13 countries, 100+ stores, 75 travel retail locations",
    exp5Highlight2: "10-year tenure spanning merchandising to executive leadership",
    exp5Highlight3: "Led Retail Excellence Project across all APAC markets",
    exp5Highlight4: "Managed JV buyback transitions and built expanded regional team",

    exp6Company: "Christian Dior Far East",
    exp6Role: "Regional Merchandising Director — Asia Pacific (including China)",
    exp6Period: "November 2004 – October 2006",
    exp6Desc: "In charge of all merchandising functions for 58 stores in 12 countries. Managed visual merchandising, pricing, OTB planning, and €124M annual regional turnover across women's RTW, handbags, shoes, small leather goods, accessories, fine jewelry, Baby Dior, and Dior Homme.",
    exp6Highlight1: "58 stores across 12 countries",
    exp6Highlight2: "€124M annual regional turnover",
    exp6Highlight3: "Strategic planning including 3-year budget/sales forecast",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "Regional Merchandising Manager",
    exp7Period: "January 1998 – November 2004",
    exp7Desc: "Managed buying and merchandising for YSL Rive Gauche and Gucci across Asia Pacific including Hong Kong, China, Taiwan, Korea, Singapore, Malaysia, Thailand, Indonesia, and Australia. Responsible for sales budgeting, OTB projections, brand awareness development, and store network expansion.",
    exp7Highlight1: "Built brand presence across 9 APAC markets",
    exp7Highlight2: "Sales budgeting & purchase planning for regional locations",
    exp7Highlight3: "Expanded store network for both YSL and Gucci",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "Retail & Brand Strategy for Asia Pacific",
    footerNavTitle: "Navigation",
    footerContactTitle: "Contact",
    footerLocation: "Hong Kong / Shanghai",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. All rights reserved.`,
  },

  "zh-CN": {
    // Nav
    navAbout: "关于我们",
    navServices: "服务项目",
    navTrackRecord: "业绩记录",
    navHowItWorks: "合作流程",
    navCta: "联系我们",

    // Hero
    heroBadge: "20+年亚太零售经验",
    heroHeadline: "助力品牌拓展亚太市场",
    heroSubheadline:
      "从旗舰店开业到全面损益管理——为进入或扩展中国、香港及亚太地区的奢侈品和生活方式品牌提供战略零售咨询服务。",
    heroPrimaryCta: "联系我们",
    heroSecondaryCta: "查看服务",
    heroStat1Value: "20+",
    heroStat1Label: "年经验",
    heroStat2Value: "11",
    heroStat2Label: "家门店 / 3年内",
    heroStat3Value: "13",
    heroStat3Label: "个国家",

    // Trust Bar
    trustHeadline: "深受全球领先品牌信赖",

    // Problem–Solution
    comparisonHeadline: "为什么品牌选择亚太专业顾问",
    comparisonProblemTitle: "传统方式",
    comparisonSolutionTitle: "与YG Consulting合作",
    problem1Title: "通用的市场进入方案",
    problem1Desc: "忽视本地差异的千篇一律策略",
    solution1Title: "量身定制的亚太战略",
    solution1Desc:
      "基于20多年在中国、香港、东南亚、韩国、日本和澳大利亚的实地经验，打造定制市场进入路线图",
    problem2Title: "与业主脱节",
    problem2Desc: "依赖没有直接关系的第三方中介",
    solution2Title: "直接的业主关系",
    solution2Desc:
      "与亚太地区主要商场运营商和业主建立的个人网络，实现更快的租赁和更优条件",
    problem3Title: "本地执行薄弱",
    problem3Desc: "总部驱动的计划在门店层面无法落地",
    solution3Title: "端到端执行",
    solution3Desc:
      "从租赁谈判到视觉陈列安装，从员工招聘到开业运营——全程直接管理",
    problem4Title: "专业领域割裂",
    problem4Desc: "商品、营销、培训由不同顾问分别负责",
    solution4Title: "全方位零售领导力",
    solution4Desc:
      "商品策划、视觉陈列、营销推广、团队培训、客户关系管理及损益管理，由一位资深运营者统一把控",

    // About
    aboutHeadline: "二十年亚太品牌建设经验",
    aboutBody:
      "颜小姐曾在多家全球顶级时装品牌担任高级管理职位——从Salvatore Ferragamo亚太区执行总监到Giuseppe Zanotti亚太区总裁，再到Canada Goose商务副总裁。她的职业生涯涵盖采购、商品策划、市场营销、视觉陈列及全面损益管理，为每一次合作带来罕见的全方位运营专业知识。",
    aboutEducation: "商学学士，约克大学，安大略省",
    aboutLanguages: "流利的英语、粤语、普通话 | 基础法语、上海话",
    credential1Role: "商务及批发副总裁",
    credential1Company: "Canada Goose 亚太区",
    credential2Role: "总裁",
    credential2Company: "Giuseppe Zanotti 亚太区",
    credential3Role: "区域执行总监",
    credential3Company: "Ferragamo 亚太区",
    credential4Role: "CEO, The Balancing",
    credential4Company: "百联集团（上海）",

    // Services
    servicesHeadline: "我如何帮助品牌在亚太取得成功",
    service1Title: "市场进入与拓展",
    service1Desc:
      "新亚太市场的战略规划——从可行性研究到首家门店开业。选址、业主谈判和租赁管理。",
    service2Title: "品牌建设与定位",
    service2Desc:
      "通过针对性营销、公关、名人合作和为亚洲消费者量身定制的整合营销活动提升品牌认知。",
    service3Title: "商品策划与产品战略",
    service3Desc:
      "OTB计划、品类规划、定价策略和亚太市场胶囊系列开发。独家产品创作。",
    service4Title: "视觉陈列与创意",
    service4Desc:
      "橱窗概念开发、视觉陈列执行、广告创意指导，以及能引起本地共鸣的店内体验设计。",
    service5Title: "团队建设与零售运营",
    service5Desc:
      "招募、培训和发展零售团队。从零搭建组织架构。KPI体系、佣金方案和卓越运营。",
    service6Title: "批发与分销",
    service6Desc:
      "识别和管理特许经营合作伙伴、批发客户和分销商。协商条款，在整个地区建立可持续的渠道网络。",

    // Track Record
    trackRecordHeadline: "亚太地区的卓越成果",
    stat1Label: "年亚太经验",
    stat2Label: "个国家",
    stat3Label: "家门店开设与运营",
    stat4Label: "个奢侈品牌高管经历",

    // How It Works
    howItWorksHeadline: "简明的合作流程",
    step1Title: "初步沟通",
    step1Desc:
      "我们讨论您的品牌目标、当前亚太业务状况和面临的挑战。我评估合作契合度并提出潜在方案。",
    step2Title: "战略提案",
    step2Desc:
      "我将提供量身定制的路线图——涵盖市场分析、运营计划、时间表和投资方案。范围明确，无隐藏费用。",
    step3Title: "执行与增长",
    step3Desc:
      "亲身实施。从业主会议和门店开业到团队建设和持续绩效管理。",

    // CTA
    ctaHeadline: "准备好在亚太拓展您的品牌了吗？",
    ctaSubtext: "让我们从一次关于您目标的对话开始。",
    ctaButton: "联系我们",

    // Contact Form
    formName: "姓名",
    formNamePlaceholder: "您的姓名",
    formEmail: "电子邮箱",
    formEmailPlaceholder: "your@email.com",
    formCompany: "公司 / 品牌",
    formCompanyPlaceholder: "您的公司或品牌名称",
    formMessage: "留言",
    formMessagePlaceholder: "请介绍您的品牌以及我可以如何帮助您...",
    formSubmit: "发送消息",
    formSending: "发送中...",
    formOrEmail: "或直接发邮件：",
    formSuccessTitle: "消息已发送！",
    formSuccessMsg: "感谢您的来信。我将在1-2个工作日内回复您。",
    formError: "发送失败，请重试或直接发邮件。",

    // Announcement Bar
    announce1: "担任总经理，拓展Save The Duck亚太业务",
    announce2: "主导Canada Goose六大亚太市场商业战略",
    announce3: "作为总裁全面管理Giuseppe Zanotti亚太损益",
    announce4: "在上海打造拥有200+奢侈品牌的多品牌零售平台",
    announce5: "在Ferragamo领导13个国家100+门店的商品策划与营销",

    // Experience Page
    experiencePageTitle: "近期经历",
    experiencePageSubtitle: "在亚太地区建设和扩展奢侈品牌的职业履历",
    viewExperience: "查看经历",
    backToHome: "返回首页",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "意大利可持续外套品牌 — 营收€7200万，覆盖40个国家，18家品牌专卖店",
    exp1Role: "亚太区总经理 / 顾问",
    exp1Period: "2024年3月 – 至今",
    exp1Desc: "开发和拓展亚太地区批发/加盟业务，寻找并引入合适的分销商在各市场运营。管理香港2家直营店，包括仓储物流及完整损益表。与意大利设计团队合作支持产品开发，制定数字营销、广告、传播和创意策略。",
    exp1Highlight1: "拓展亚太批发与加盟网络",
    exp1Highlight2: "香港运营的全面损益责任",
    exp1Highlight3: "与意大利总部的战略产品开发",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "加拿大奢侈外套品牌 — 年营收13亿加元，全球74家门店",
    exp2Role: "亚太区商务及批发副总裁",
    exp2Period: "2022年7月 – 2023年8月",
    exp2Desc: "制定区域长短期战略，承担完整损益责任。管理香港、台湾、澳门、澳大利亚、韩国和日本的零售业务。一年内在澳门开设2家门店、澳大利亚开设2家门店。从Imaginex（前大中华合资伙伴）手中接管运营职能和物流，从第三方收回业主关系。组建完整零售运营团队，包括区域零售经理、培训总监和视觉陈列经理。",
    exp2Highlight1: "管理6个亚太市场的零售业务",
    exp2Highlight2: "领导门店房地产组合与业主关系",
    exp2Highlight3: "推动销售、NPS、转化率等奢侈品绩效指标",
    exp2Highlight4: "从合资伙伴接管运营并从零组建完整零售团队",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "意大利奢侈鞋履品牌 — 覆盖75+国家，100+精品店，年产60万+双",
    exp3Role: "亚太区总裁（含中国）",
    exp3Period: "2021年3月 – 2022年6月",
    exp3Desc: "全面负责集团在亚太（含中国）的战略执行和区域损益。亲自负责所有亚洲门店的谈判、租赁协议和新店开业。制定并实施增长路线图，重点推进零售网络扩张。领导零售运营、商品策划、视觉陈列、传播公关和批发团队。管理区域加盟与批发合作伙伴。",
    exp3Highlight1: "亚太区完整损益和战略所有权",
    exp3Highlight2: "领导零售网络扩张规划",
    exp3Highlight3: "管理加盟与批发合作伙伴生态系统",
    exp3Highlight4: "亲自谈判所有亚洲门店租赁与开业事宜",

    exp4Company: "上海百联集团",
    exp4CompanyContext: "中国最大国有零售企业 — 营收420亿元，4.5万+员工，零售面积300万+平方米",
    exp4Role: "副总经理 — CEO, The Balancing / 战略品牌总经理 / 分销品牌总经理",
    exp4Period: "2018年4月 – 2021年3月",
    exp4Desc: "在中国最大国有零售企业担任三重角色。作为The Balancing CEO，管理3家多品牌店，代理200+国际奢侈品牌，全面负责新店开设、业务扩展和品牌发展。作为战略品牌总经理，管理25家百货、18家购物中心和8家奥特莱斯的60+品牌。作为分销品牌总经理，管理DAKS、Wedgwood、Royal Doulton和FRED品牌，开发限定系列和中国市场独家产品。",
    exp4Highlight1: "管理3家多品牌店的200+奢侈品牌",
    exp4Highlight2: "监管51个零售网点的60+品牌",
    exp4Highlight3: "组建100+人团队并上线电商平台",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "意大利奢侈时装品牌 — 年营收€10亿，全球367家门店",
    exp5Role: "亚太区营销与商品策划执行总监",
    exp5Period: "2007年7月 – 2017年8月",
    exp5Desc: "管辖13个国家，包括100+直营店、6个批发客户、75个旅游零售店/专柜及电商渠道。参与中国门店选址和业主谈判。公司从Imaginex（大中华合资方）和利丰（东南亚——韩国、新加坡、马来西亚、泰国）回购股权期间，大幅扩建团队。制定公司营销传播战略，管理区域广告、A&P预算、CRM、VIP活动、精品店开业和大型时装秀。领导亚太所有市场的零售卓越项目。开发亚洲专属限定系列和独家产品，指导视觉陈列执行、创意橱窗和广告活动。",
    exp5Highlight1: "13个国家，100+门店，75个旅游零售网点",
    exp5Highlight2: "10年任期，从商品策划到高管领导",
    exp5Highlight3: "领导亚太所有市场的零售卓越项目",
    exp5Highlight4: "管理合资回购过渡期并扩建区域团队",

    exp6Company: "Christian Dior Far East",
    exp6Role: "亚太区商品策划总监（含中国）",
    exp6Period: "2004年11月 – 2006年10月",
    exp6Desc: "负责12个国家58家门店的全部商品策划职能。管理视觉陈列、定价、OTB计划，以及女装成衣、手袋、鞋履、小皮具、配饰、高级珠宝、Baby Dior和Dior Homme共1.24亿欧元的年度区域营收。",
    exp6Highlight1: "12个国家58家门店",
    exp6Highlight2: "年度区域营收1.24亿欧元",
    exp6Highlight3: "战略规划包括3年预算/销售预测",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "区域商品策划经理",
    exp7Period: "1998年1月 – 2004年11月",
    exp7Desc: "管理YSL Rive Gauche和Gucci在亚太地区的采购和商品策划，覆盖香港、中国、台湾、韩国、新加坡、马来西亚、泰国、印度尼西亚和澳大利亚。负责销售预算、OTB规划、品牌知名度建设和门店网络扩张。",
    exp7Highlight1: "在9个亚太市场建立品牌影响力",
    exp7Highlight2: "区域销售预算与采购计划",
    exp7Highlight3: "为YSL和Gucci扩展门店网络",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "亚太零售与品牌战略",
    footerNavTitle: "导航",
    footerContactTitle: "联系方式",
    footerLocation: "香港 / 上海",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. 版权所有。`,
  },

  "zh-TW": {
    // Nav
    navAbout: "關於我們",
    navServices: "服務項目",
    navTrackRecord: "業績紀錄",
    navHowItWorks: "合作流程",
    navCta: "聯繫我們",

    // Hero
    heroBadge: "20+年亞太零售經驗",
    heroHeadline: "助力品牌拓展亞太市場",
    heroSubheadline:
      "從旗艦店開業到全面損益管理——為進入或擴展中國、香港及亞太地區的奢侈品和生活方式品牌提供戰略零售諮詢服務。",
    heroPrimaryCta: "聯繫我們",
    heroSecondaryCta: "查看服務",
    heroStat1Value: "20+",
    heroStat1Label: "年經驗",
    heroStat2Value: "11",
    heroStat2Label: "家門店 / 3年內",
    heroStat3Value: "13",
    heroStat3Label: "個國家",

    // Trust Bar
    trustHeadline: "深受全球領先品牌信賴",

    // Problem–Solution
    comparisonHeadline: "為什麼品牌選擇亞太專業顧問",
    comparisonProblemTitle: "傳統方式",
    comparisonSolutionTitle: "與YG Consulting合作",
    problem1Title: "通用的市場進入方案",
    problem1Desc: "忽視本地差異的千篇一律策略",
    solution1Title: "量身定制的亞太戰略",
    solution1Desc:
      "基於20多年在中國、香港、東南亞、韓國、日本和澳大利亞的實地經驗，打造定制市場進入路線圖",
    problem2Title: "與業主脫節",
    problem2Desc: "依賴沒有直接關係的第三方中介",
    solution2Title: "直接的業主關係",
    solution2Desc:
      "與亞太地區主要商場營運商和業主建立的個人網絡，實現更快的租賃和更優條件",
    problem3Title: "本地執行薄弱",
    problem3Desc: "總部驅動的計劃在門店層面無法落地",
    solution3Title: "端到端執行",
    solution3Desc:
      "從租賃談判到視覺陳列安裝，從員工招聘到開業營運——全程直接管理",
    problem4Title: "專業領域割裂",
    problem4Desc: "商品、營銷、培訓由不同顧問分別負責",
    solution4Title: "全方位零售領導力",
    solution4Desc:
      "商品策劃、視覺陳列、營銷推廣、團隊培訓、客戶關係管理及損益管理，由一位資深營運者統一把控",

    // About
    aboutHeadline: "二十年亞太品牌建設經驗",
    aboutBody:
      "顏小姐曾在多家全球頂級時裝品牌擔任高級管理職位——從Salvatore Ferragamo亞太區執行總監到Giuseppe Zanotti亞太區總裁，再到Canada Goose商務副總裁。她的職業生涯涵蓋採購、商品策劃、市場營銷、視覺陳列及全面損益管理，為每一次合作帶來罕見的全方位營運專業知識。",
    aboutEducation: "商學學士，約克大學，安大略省",
    aboutLanguages: "流利的英語、粵語、普通話 | 基礎法語、上海話",
    credential1Role: "商務及批發副總裁",
    credential1Company: "Canada Goose 亞太區",
    credential2Role: "總裁",
    credential2Company: "Giuseppe Zanotti 亞太區",
    credential3Role: "區域執行總監",
    credential3Company: "Ferragamo 亞太區",
    credential4Role: "CEO, The Balancing",
    credential4Company: "百聯集團（上海）",

    // Services
    servicesHeadline: "我如何幫助品牌在亞太取得成功",
    service1Title: "市場進入與拓展",
    service1Desc:
      "新亞太市場的戰略規劃——從可行性研究到首家門店開業。選址、業主談判和租賃管理。",
    service2Title: "品牌建設與定位",
    service2Desc:
      "通過針對性營銷、公關、名人合作和為亞洲消費者量身定制的整合營銷活動提升品牌認知。",
    service3Title: "商品策劃與產品戰略",
    service3Desc:
      "OTB計劃、品類規劃、定價策略和亞太市場膠囊系列開發。獨家產品創作。",
    service4Title: "視覺陳列與創意",
    service4Desc:
      "櫥窗概念開發、視覺陳列執行、廣告創意指導，以及能引起本地共鳴的店內體驗設計。",
    service5Title: "團隊建設與零售營運",
    service5Desc:
      "招募、培訓和發展零售團隊。從零搭建組織架構。KPI體系、佣金方案和卓越營運。",
    service6Title: "批發與分銷",
    service6Desc:
      "識別和管理特許經營合作夥伴、批發客戶和分銷商。協商條款，在整個地區建立可持續的渠道網絡。",

    // Track Record
    trackRecordHeadline: "亞太地區的卓越成果",
    stat1Label: "年亞太經驗",
    stat2Label: "個國家",
    stat3Label: "家門店開設與營運",
    stat4Label: "個奢侈品牌高管經歷",

    // How It Works
    howItWorksHeadline: "簡明的合作流程",
    step1Title: "初步溝通",
    step1Desc:
      "我們討論您的品牌目標、當前亞太業務狀況和面臨的挑戰。我評估合作契合度並提出潛在方案。",
    step2Title: "戰略提案",
    step2Desc:
      "我將提供量身定制的路線圖——涵蓋市場分析、營運計劃、時間表和投資方案。範圍明確，無隱藏費用。",
    step3Title: "執行與增長",
    step3Desc:
      "親身實施。從業主會議和門店開業到團隊建設和持續績效管理。",

    // CTA
    ctaHeadline: "準備好在亞太拓展您的品牌了嗎？",
    ctaSubtext: "讓我們從一次關於您目標的對話開始。",
    ctaButton: "聯繫我們",

    // Contact Form
    formName: "姓名",
    formNamePlaceholder: "您的姓名",
    formEmail: "電子郵箱",
    formEmailPlaceholder: "your@email.com",
    formCompany: "公司 / 品牌",
    formCompanyPlaceholder: "您的公司或品牌名稱",
    formMessage: "留言",
    formMessagePlaceholder: "請介紹您的品牌以及我可以如何幫助您...",
    formSubmit: "發送訊息",
    formSending: "發送中...",
    formOrEmail: "或直接發郵件：",
    formSuccessTitle: "訊息已發送！",
    formSuccessMsg: "感謝您的來信。我將在1-2個工作日內回覆您。",
    formError: "發送失敗，請重試或直接發郵件。",

    // Announcement Bar
    announce1: "擔任總經理，拓展Save The Duck亞太業務",
    announce2: "主導Canada Goose六大亞太市場商業戰略",
    announce3: "作為總裁全面管理Giuseppe Zanotti亞太損益",
    announce4: "在上海打造擁有200+奢侈品牌的多品牌零售平台",
    announce5: "在Ferragamo領導13個國家100+門店的商品策劃與營銷",

    // Experience Page
    experiencePageTitle: "近期經歷",
    experiencePageSubtitle: "在亞太地區建設和擴展奢侈品牌的職業履歷",
    viewExperience: "查看經歷",
    backToHome: "返回首頁",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "意大利可持續外套品牌 — 營收€7200萬，覆蓋40個國家，18家品牌專賣店",
    exp1Role: "亞太區總經理 / 顧問",
    exp1Period: "2024年3月 – 至今",
    exp1Desc: "開發和拓展亞太地區批發/加盟業務，尋找並引入合適的分銷商在各市場營運。管理香港2家直營店，包括倉儲物流及完整損益表。與意大利設計團隊合作支持產品開發，制定數字營銷、廣告、傳播和創意策略。",
    exp1Highlight1: "拓展亞太批發與加盟網絡",
    exp1Highlight2: "香港營運的全面損益責任",
    exp1Highlight3: "與意大利總部的戰略產品開發",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "加拿大奢華外套品牌 — 年營收13億加元，全球74家門店",
    exp2Role: "亞太區商務及批發副總裁",
    exp2Period: "2022年7月 – 2023年8月",
    exp2Desc: "制定區域長短期戰略，承擔完整損益責任。管理香港、台灣、澳門、澳大利亞、韓國和日本的零售業務。一年內在澳門開設2家門店、澳大利亞開設2家門店。從Imaginex（前大中華合資夥伴）手中接管營運職能和物流，從第三方收回業主關係。組建完整零售營運團隊，包括區域零售經理、培訓總監和視覺陳列經理。",
    exp2Highlight1: "管理6個亞太市場的零售業務",
    exp2Highlight2: "領導門店房地產組合與業主關係",
    exp2Highlight3: "推動銷售、NPS、轉化率等奢侈品績效指標",
    exp2Highlight4: "從合資夥伴接管營運並從零組建完整零售團隊",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "意大利奢華鞋履品牌 — 覆蓋75+國家，100+精品店，年產60萬+雙",
    exp3Role: "亞太區總裁（含中國）",
    exp3Period: "2021年3月 – 2022年6月",
    exp3Desc: "全面負責集團在亞太（含中國）的戰略執行和區域損益。親自負責所有亞洲門店的談判、租賃協議和新店開業。制定並實施增長路線圖，重點推進零售網絡擴張。領導零售營運、商品策劃、視覺陳列、傳播公關和批發團隊。管理區域加盟與批發合作夥伴。",
    exp3Highlight1: "亞太區完整損益和戰略所有權",
    exp3Highlight2: "領導零售網絡擴張規劃",
    exp3Highlight3: "管理加盟與批發合作夥伴生態系統",
    exp3Highlight4: "親自談判所有亞洲門店租賃與開業事宜",

    exp4Company: "上海百聯集團",
    exp4CompanyContext: "中國最大國有零售企業 — 營收420億元，4.5萬+員工，零售面積300萬+平方米",
    exp4Role: "副總經理 — CEO, The Balancing / 戰略品牌總經理 / 分銷品牌總經理",
    exp4Period: "2018年4月 – 2021年3月",
    exp4Desc: "在中國最大國有零售企業擔任三重角色。作為The Balancing CEO，管理3家多品牌店，代理200+國際奢侈品牌，全面負責新店開設、業務擴展和品牌發展。作為戰略品牌總經理，管理25家百貨、18家購物中心和8家奧特萊斯的60+品牌。作為分銷品牌總經理，管理DAKS、Wedgwood、Royal Doulton和FRED品牌，開發限定系列和中國市場獨家產品。",
    exp4Highlight1: "管理3家多品牌店的200+奢侈品牌",
    exp4Highlight2: "監管51個零售網點的60+品牌",
    exp4Highlight3: "組建100+人團隊並上線電商平台",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "意大利奢華時裝品牌 — 年營收€10億，全球367家門店",
    exp5Role: "亞太區營銷與商品策劃執行總監",
    exp5Period: "2007年7月 – 2017年8月",
    exp5Desc: "管轄13個國家，包括100+直營店、6個批發客戶、75個旅遊零售店/專櫃及電商渠道。參與中國門店選址和業主談判。公司從Imaginex（大中華合資方）和利豐（東南亞——韓國、新加坡、馬來西亞、泰國）回購股權期間，大幅擴建團隊。制定公司營銷傳播戰略，管理區域廣告、A&P預算、CRM、VIP活動、精品店開業和大型時裝秀。領導亞太所有市場的零售卓越項目。開發亞洲專屬限定系列和獨家產品，指導視覺陳列執行、創意櫥窗和廣告活動。",
    exp5Highlight1: "13個國家，100+門店，75個旅遊零售網點",
    exp5Highlight2: "10年任期，從商品策劃到高管領導",
    exp5Highlight3: "領導亞太所有市場的零售卓越項目",
    exp5Highlight4: "管理合資回購過渡期並擴建區域團隊",

    exp6Company: "Christian Dior Far East",
    exp6Role: "亞太區商品策劃總監（含中國）",
    exp6Period: "2004年11月 – 2006年10月",
    exp6Desc: "負責12個國家58家門店的全部商品策劃職能。管理視覺陳列、定價、OTB計劃，以及女裝成衣、手袋、鞋履、小皮具、配飾、高級珠寶、Baby Dior和Dior Homme共1.24億歐元的年度區域營收。",
    exp6Highlight1: "12個國家58家門店",
    exp6Highlight2: "年度區域營收1.24億歐元",
    exp6Highlight3: "戰略規劃包括3年預算/銷售預測",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "區域商品策劃經理",
    exp7Period: "1998年1月 – 2004年11月",
    exp7Desc: "管理YSL Rive Gauche和Gucci在亞太地區的採購和商品策劃，覆蓋香港、中國、台灣、韓國、新加坡、馬來西亞、泰國、印度尼西亞和澳大利亞。負責銷售預算、OTB規劃、品牌知名度建設和門店網絡擴張。",
    exp7Highlight1: "在9個亞太市場建立品牌影響力",
    exp7Highlight2: "區域銷售預算與採購計劃",
    exp7Highlight3: "為YSL和Gucci擴展門店網絡",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "亞太零售與品牌戰略",
    footerNavTitle: "導航",
    footerContactTitle: "聯繫方式",
    footerLocation: "香港 / 上海",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. 版權所有。`,
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getTranslations(locale: Locale) {
  return translations[locale];
}
