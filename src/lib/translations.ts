export type Locale = "en" | "zh-CN" | "zh-TW" | "it" | "ko" | "fr" | "ja" | "es";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh-CN", label: "简体" },
  { code: "zh-TW", label: "繁體" },
  { code: "it", label: "IT" },
  { code: "ko", label: "한국어" },
  { code: "fr", label: "FR" },
  { code: "ja", label: "日本語" },
  { code: "es", label: "ES" },
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
    heroBadge: "25+ Years in Asia-Pacific Retail",
    heroHeadline: "Build & Grow Your Brand Across Asia Pacific",
    heroSubheadline:
      "From flagship store openings to full P&L management — strategic retail consulting for luxury and lifestyle brands entering or expanding in China, Hong Kong, and the wider APAC region.",
    heroPrimaryCta: "Get in Touch",
    heroSecondaryCta: "See Services",
    heroStat1Value: "25+",
    heroStat1Label: "years experience",
    heroStat2Value: "100+",
    heroStat2Label: "stores opened",
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
      "Custom market entry roadmaps built on 25+ years of on-the-ground experience in China, HK, SEA, Korea, Japan, and Australia",
    problem2Title: "Disconnected from landlords",
    problem2Desc: "Relying on third-party brokers with no direct relationships",
    solution2Title: "Direct landlord relationships",
    solution2Desc:
      "Personally established networks with key mall operators and landlords across APAC, enabling faster leasing and better terms",
    problem3Title: "Weak local execution",
    problem3Desc: "HQ-driven plans that fall apart at store level",
    solution3Title: "End-to-end execution",
    solution3Desc:
      "From lease negotiation to VM installation, marketing, staff hiring to launch-day operations — managed directly",
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
    heroBadge: "25+年亚太零售经验",
    heroHeadline: "助力品牌拓展亚太市场",
    heroSubheadline:
      "从旗舰店开业到全面损益管理——为进入或扩展中国、香港及亚太地区的奢侈品和生活方式品牌提供战略零售咨询服务。",
    heroPrimaryCta: "联系我们",
    heroSecondaryCta: "查看服务",
    heroStat1Value: "25+",
    heroStat1Label: "年经验",
    heroStat2Value: "100+",
    heroStat2Label: "家门店已开设",
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
      "从租赁谈判到视觉陈列安装、营销推广，从员工招聘到开业运营——全程直接管理",
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
    heroBadge: "25+年亞太零售經驗",
    heroHeadline: "助力品牌拓展亞太市場",
    heroSubheadline:
      "從旗艦店開業到全面損益管理——為進入或擴展中國、香港及亞太地區的奢侈品和生活方式品牌提供戰略零售諮詢服務。",
    heroPrimaryCta: "聯繫我們",
    heroSecondaryCta: "查看服務",
    heroStat1Value: "25+",
    heroStat1Label: "年經驗",
    heroStat2Value: "100+",
    heroStat2Label: "家門店已開設",
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
      "從租賃談判到視覺陳列安裝、營銷推廣，從員工招聘到開業營運——全程直接管理",
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
  it: {
    // Nav
    navAbout: "Chi siamo",
    navServices: "Servizi",
    navTrackRecord: "Risultati",
    navHowItWorks: "Come funziona",
    navCta: "Contattaci",

    // Hero
    heroBadge: "Oltre 25 anni nel retail Asia-Pacifico",
    heroHeadline: "Costruisci e fai crescere il tuo brand in Asia Pacifico",
    heroSubheadline:
      "Dall'apertura di flagship store alla gestione completa del P&L — consulenza strategica retail per brand di lusso e lifestyle che entrano o si espandono in Cina, Hong Kong e nella regione APAC.",
    heroPrimaryCta: "Contattaci",
    heroSecondaryCta: "Vedi i servizi",
    heroStat1Value: "25+",
    heroStat1Label: "anni di esperienza",
    heroStat2Value: "100+",
    heroStat2Label: "negozi aperti",
    heroStat3Value: "13",
    heroStat3Label: "paesi",

    // Trust Bar
    trustHeadline: "Scelti dai principali brand globali",

    // Problem–Solution
    comparisonHeadline: "Perché i brand scelgono una consulenza APAC specializzata",
    comparisonProblemTitle: "L'approccio tradizionale",
    comparisonSolutionTitle: "Lavorare con YG Consulting",
    problem1Title: "Piani di ingresso generici",
    problem1Desc: "Strategie standardizzate che ignorano le sfumature locali",
    solution1Title: "Strategia APAC su misura",
    solution1Desc:
      "Roadmap personalizzate basate su oltre 25 anni di esperienza sul campo in Cina, HK, Sud-est asiatico, Corea, Giappone e Australia",
    problem2Title: "Disconnessi dai proprietari",
    problem2Desc: "Dipendenza da intermediari terzi senza relazioni dirette",
    solution2Title: "Relazioni dirette con i proprietari",
    solution2Desc:
      "Reti personali con i principali operatori di centri commerciali e proprietari in APAC, per locazioni più rapide e condizioni migliori",
    problem3Title: "Esecuzione locale debole",
    problem3Desc: "Piani dalla sede centrale che falliscono a livello di negozio",
    solution3Title: "Esecuzione end-to-end",
    solution3Desc:
      "Dalla negoziazione del contratto di locazione all'installazione VM, marketing, assunzione del personale fino alle operazioni di apertura — gestito direttamente",
    problem4Title: "Competenze frammentate",
    problem4Desc: "Consulenti separati per merchandising, marketing, formazione",
    solution4Title: "Leadership retail a 360°",
    solution4Desc:
      "Merchandising, VM, marketing, formazione, CRM e P&L sotto un unico operatore esperto",

    // About
    aboutHeadline: "Due decenni di costruzione di brand in Asia Pacifico",
    aboutBody:
      "Yvonne Gan ha ricoperto ruoli dirigenziali senior nelle più prestigiose maison di moda al mondo — da Direttrice Esecutiva Regionale di Salvatore Ferragamo a Presidente di Giuseppe Zanotti Asia Pacifico e VP Commerciale di Canada Goose. Con una carriera che abbraccia buying, merchandising, marketing, VM e gestione completa del P&L, porta una rara ampiezza di competenze operative ad ogni incarico.",
    aboutEducation: "Laurea in Business, York University, Ontario",
    aboutLanguages: "Fluente in inglese, cantonese, mandarino | Francese e shanghainese di base",
    credential1Role: "VP Commerciale e Wholesale",
    credential1Company: "Canada Goose APAC",
    credential2Role: "Presidente",
    credential2Company: "Giuseppe Zanotti Asia Pacifico",
    credential3Role: "Direttrice Esecutiva Regionale",
    credential3Company: "Ferragamo APAC",
    credential4Role: "CEO, The Balancing",
    credential4Company: "Bailian Group (Shanghai)",

    // Services
    servicesHeadline: "Come aiuto i brand ad avere successo in APAC",
    service1Title: "Ingresso e espansione nel mercato",
    service1Desc:
      "Pianificazione strategica per l'ingresso in nuovi mercati APAC — dalla fattibilità all'apertura del primo negozio. Selezione del sito, negoziazione con i proprietari e gestione del contratto.",
    service2Title: "Brand building e posizionamento",
    service2Desc:
      "Elevare la percezione del brand attraverso marketing mirato, PR, collaborazioni con celebrità e campagne integrate per i consumatori asiatici.",
    service3Title: "Merchandising e strategia prodotto",
    service3Desc:
      "Pianificazione OTB, curatela dell'assortimento, strategia di prezzo e sviluppo di capsule collection per i mercati APAC. Creazione di prodotti esclusivi.",
    service4Title: "Visual merchandising e creatività",
    service4Desc:
      "Sviluppo concept vetrine, esecuzione VM, direzione campagne pubblicitarie e design dell'esperienza in-store che risuona localmente.",
    service5Title: "Team building e operazioni retail",
    service5Desc:
      "Reclutamento, formazione e sviluppo dei team retail. Costruzione della struttura organizzativa da zero. Framework KPI, schemi di commissione ed eccellenza operativa.",
    service6Title: "Wholesale e distribuzione",
    service6Desc:
      "Identificazione e gestione di partner in franchising, account wholesale e distributori. Negoziazione dei termini e costruzione di reti di canali sostenibili nella regione.",

    // Track Record
    trackRecordHeadline: "Risultati comprovati in Asia Pacifico",
    stat1Label: "Anni di esperienza APAC",
    stat2Label: "Paesi gestiti",
    stat3Label: "Negozi aperti e gestiti",
    stat4Label: "Brand di lusso guidati a livello C-suite / VP",

    // How It Works
    howItWorksHeadline: "Un processo di collaborazione semplice",
    step1Title: "Chiamata conoscitiva",
    step1Desc:
      "Discutiamo gli obiettivi del vostro brand, la presenza attuale in APAC e le sfide. Valuto la compatibilità e delineo potenziali approcci.",
    step2Title: "Proposta strategica",
    step2Desc:
      "Fornisco una roadmap su misura — analisi di mercato, piano operativo, timeline e investimento. Ambito chiaro, nessun costo nascosto.",
    step3Title: "Esecuzione e crescita",
    step3Desc:
      "Implementazione pratica. Dagli incontri con i proprietari e aperture di negozi alla costruzione del team e gestione continua delle performance.",

    // CTA
    ctaHeadline: "Pronti a far crescere il vostro brand in Asia Pacifico?",
    ctaSubtext: "Iniziamo con una conversazione sui vostri obiettivi.",
    ctaButton: "Contattaci",

    // Contact Form
    formName: "Nome",
    formNamePlaceholder: "Il tuo nome",
    formEmail: "Email",
    formEmailPlaceholder: "tua@email.com",
    formCompany: "Azienda / Brand",
    formCompanyPlaceholder: "Nome della tua azienda o brand",
    formMessage: "Messaggio",
    formMessagePlaceholder: "Parlami del tuo brand e di come posso aiutarti...",
    formSubmit: "Invia messaggio",
    formSending: "Invio in corso...",
    formOrEmail: "oppure scrivi direttamente a:",
    formSuccessTitle: "Messaggio inviato!",
    formSuccessMsg: "Grazie per averci contattato. Risponderò entro 1-2 giorni lavorativi.",
    formError: "Qualcosa è andato storto. Riprova o invia un'email direttamente.",

    // Announcement Bar
    announce1: "Espansione di Save The Duck in Asia Pacifico come GM",
    announce2: "Guidata la strategia commerciale in 6 mercati APAC per Canada Goose",
    announce3: "P&L completo come Presidente, Giuseppe Zanotti Asia Pacifico",
    announce4: "Costruita piattaforma retail multi-brand con 200+ brand di lusso a Shanghai",
    announce5: "Diretto merchandising e marketing in 100+ negozi in 13 paesi per Ferragamo",

    // Experience Page
    experiencePageTitle: "Esperienza recente",
    experiencePageSubtitle: "Highlights selezionati da oltre due decenni di costruzione e sviluppo di brand di lusso in Asia Pacifico",
    viewExperience: "Vedi esperienza",
    backToHome: "Torna alla home",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "Outerwear sostenibile italiano — €72M di ricavi, presente in 40 paesi, 18 negozi monomarca",
    exp1Role: "General Manager, Asia Pacifico / Consulente",
    exp1Period: "Marzo 2024 – Presente",
    exp1Desc: "Sviluppo ed espansione del business wholesale/franchising in Asia Pacifico, identificazione e onboarding dei distributori giusti per operare nei vari mercati. Supervisione di 2 negozi diretti a Hong Kong, inclusi magazzino, logistica e P&L completo. Supporto allo sviluppo prodotto con il team design in Italia e sviluppo strategie di marketing digitale, pubblicità, comunicazione e concezione creativa.",
    exp1Highlight1: "Espansione rete wholesale e franchising in APAC",
    exp1Highlight2: "Responsabilità P&L completa per le operazioni di Hong Kong",
    exp1Highlight3: "Sviluppo prodotto strategico con HQ Italia",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "Outerwear di lusso canadese — CAD $1,3B ricavi annuali, 74 negozi nel mondo",
    exp2Role: "Vice Presidente, Commerciale & Wholesale, Asia Pacifico",
    exp2Period: "Luglio 2022 – Agosto 2023",
    exp2Desc: "Preparazione di strategie a lungo e breve termine per la regione con piena responsabilità P&L. Gestione del business retail a Hong Kong, Taiwan, Macao, Australia, Corea e Giappone. Apertura di 2 negozi a Macao e 2 in Australia in un anno. Presa in carico delle funzioni operative e logistiche da Imaginex (precedente partner JV Greater China), recuperando le relazioni con i proprietari da operatori terzi. Costruzione di un team completo di operazioni retail.",
    exp2Highlight1: "Gestione retail in 6 mercati APAC",
    exp2Highlight2: "Leadership del portfolio immobiliare e relazioni con i proprietari",
    exp2Highlight3: "Guida delle metriche di vendita, NPS, conversione e performance luxury",
    exp2Highlight4: "Presa in carico operazioni da partner JV e costruzione team retail da zero",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "Calzature di lusso italiane — presente in 75+ paesi, 100+ boutique, 600K+ paia annuali",
    exp3Role: "Presidente, Asia Pacifico (inclusa Cina)",
    exp3Period: "Marzo 2021 – Giugno 2022",
    exp3Desc: "Piena responsabilità per l'esecuzione della strategia del Gruppo in Asia Pacifico inclusa la Cina, con completa ownership del P&L. Responsabile personale di tutte le negoziazioni, contratti di locazione e nuove aperture dei negozi in Asia. Sviluppo e implementazione della roadmap di crescita con enfasi sull'espansione della rete retail.",
    exp3Highlight1: "P&L completo e ownership strategica per Asia Pacifico",
    exp3Highlight2: "Leadership nella pianificazione dell'espansione retail",
    exp3Highlight3: "Gestione ecosistema partner franchising e wholesale",
    exp3Highlight4: "Negoziazione diretta di tutti i contratti e aperture negozi in Asia",

    exp4Company: "Shanghai Bailian Group",
    exp4CompanyContext: "La più grande impresa retail statale cinese — ¥42B ricavi, 45.000+ dipendenti, 3M+ mq di spazio retail",
    exp4Role: "Vice Direttore Generale — CEO, The Balancing / GM Brand Strategici / GM Distribuzione",
    exp4Period: "Aprile 2018 – Marzo 2021",
    exp4Desc: "Triplo ruolo nella più grande impresa retail statale cinese. Come CEO di The Balancing, gestione di 3 negozi multi-brand con 200+ brand di lusso internazionali. Come GM Brand Strategici, gestione di 60+ brand di lusso in 25 grandi magazzini, 18 centri commerciali e 8 outlet. Come GM Distribuzione, supervisione di DAKS, Wedgwood, Royal Doulton e FRED.",
    exp4Highlight1: "Gestione 200+ brand di lusso in 3 negozi multi-brand",
    exp4Highlight2: "Supervisione 60+ brand in 51 punti vendita",
    exp4Highlight3: "Costruzione team di 100+ persone e lancio piattaforme e-commerce",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "Maison di moda di lusso italiana — €1B ricavi annuali, 367 negozi nel mondo",
    exp5Role: "Direttrice Esecutiva Regionale, Marketing & Merchandising — Asia Pacifico",
    exp5Period: "Luglio 2007 – Agosto 2017",
    exp5Desc: "Supervisione di 13 paesi inclusi 100+ negozi diretti, 6 account wholesale, 75 negozi/corner travel retail e canali e-commerce diretti. Coinvolgimento nella selezione location e negoziazione con proprietari per i negozi in Cina. Definizione delle strategie di marketing e comunicazione aziendali, gestione pubblicità regionale, budget A&P, CRM, eventi VIP, aperture boutique e sfilate di moda su larga scala.",
    exp5Highlight1: "13 paesi, 100+ negozi, 75 location travel retail",
    exp5Highlight2: "10 anni di mandato, dal merchandising alla leadership esecutiva",
    exp5Highlight3: "Leadership del Progetto Eccellenza Retail in tutti i mercati APAC",
    exp5Highlight4: "Gestione transizioni buyback JV e costruzione team regionale espanso",

    exp6Company: "Christian Dior Far East",
    exp6Role: "Direttrice Merchandising Regionale — Asia Pacifico (inclusa Cina)",
    exp6Period: "Novembre 2004 – Ottobre 2006",
    exp6Desc: "Responsabile di tutte le funzioni merchandising per 58 negozi in 12 paesi. Gestione visual merchandising, pricing, pianificazione OTB e €124M di fatturato regionale annuo.",
    exp6Highlight1: "58 negozi in 12 paesi",
    exp6Highlight2: "€124M fatturato regionale annuo",
    exp6Highlight3: "Pianificazione strategica incluso budget/previsioni vendite triennali",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "Regional Merchandising Manager",
    exp7Period: "Gennaio 1998 – Novembre 2004",
    exp7Desc: "Gestione buying e merchandising per YSL Rive Gauche e Gucci in Asia Pacifico. Responsabile budgeting vendite, proiezioni OTB, sviluppo brand awareness ed espansione rete negozi.",
    exp7Highlight1: "Costruzione presenza brand in 9 mercati APAC",
    exp7Highlight2: "Budgeting vendite e pianificazione acquisti per le location regionali",
    exp7Highlight3: "Espansione rete negozi per YSL e Gucci",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "Retail & Strategia Brand per Asia Pacifico",
    footerNavTitle: "Navigazione",
    footerContactTitle: "Contatti",
    footerLocation: "Hong Kong / Shanghai",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. Tutti i diritti riservati.`,
  },

  ko: {
    // Nav
    navAbout: "소개",
    navServices: "서비스",
    navTrackRecord: "실적",
    navHowItWorks: "진행 방식",
    navCta: "문의하기",

    // Hero
    heroBadge: "25년 이상의 아시아태평양 리테일 경험",
    heroHeadline: "아시아 태평양에서 브랜드를 구축하고 성장시키세요",
    heroSubheadline:
      "플래그십 매장 오픈부터 전체 P&L 관리까지 — 중국, 홍콩 및 아시아태평양 지역에 진출하거나 확장하는 럭셔리 및 라이프스타일 브랜드를 위한 전략적 리테일 컨설팅.",
    heroPrimaryCta: "문의하기",
    heroSecondaryCta: "서비스 보기",
    heroStat1Value: "25+",
    heroStat1Label: "년 경력",
    heroStat2Value: "100+",
    heroStat2Label: "개 매장 오픈",
    heroStat3Value: "13",
    heroStat3Label: "개국",

    // Trust Bar
    trustHeadline: "글로벌 선도 브랜드들의 신뢰",

    // Problem–Solution
    comparisonHeadline: "브랜드들이 APAC 전문 컨설팅을 선택하는 이유",
    comparisonProblemTitle: "기존 방식",
    comparisonSolutionTitle: "YG Consulting과 함께",
    problem1Title: "일반적인 시장 진입 계획",
    problem1Desc: "현지 특성을 무시한 획일적인 전략",
    solution1Title: "맞춤형 APAC 전략",
    solution1Desc:
      "중국, 홍콩, 동남아, 한국, 일본, 호주에서의 25년 이상 현지 경험을 바탕으로 한 맞춤형 시장 진입 로드맵",
    problem2Title: "임대인과의 단절",
    problem2Desc: "직접적인 관계 없는 제3자 중개인에 의존",
    solution2Title: "직접적인 임대인 관계",
    solution2Desc:
      "APAC 전역의 주요 몰 운영사 및 임대인과 직접 구축한 네트워크로 더 빠른 임대와 더 나은 조건 확보",
    problem3Title: "현지 실행력 부족",
    problem3Desc: "본사 주도 계획이 매장 수준에서 무너짐",
    solution3Title: "엔드투엔드 실행",
    solution3Desc:
      "임대 협상부터 VM 설치, 마케팅, 직원 채용, 오픈 운영까지 — 직접 관리",
    problem4Title: "분리된 전문성",
    problem4Desc: "머천다이징, 마케팅, 교육을 별도 컨설턴트가 담당",
    solution4Title: "풀스펙트럼 리테일 리더십",
    solution4Desc:
      "머천다이징, VM, 마케팅, 교육, CRM, P&L을 한 명의 경험 많은 운영자가 통합 관리",

    // About
    aboutHeadline: "아시아 태평양에서 20년간 브랜드 구축",
    aboutBody:
      "Yvonne Gan은 세계에서 가장 유명한 패션 하우스에서 수석 리더십 직책을 역임했습니다 — Salvatore Ferragamo 아태지역 총괄 이사부터 Giuseppe Zanotti 아태 사장, Canada Goose 상업 부사장까지. 바잉, 머천다이징, 마케팅, VM 및 전체 P&L 관리에 걸친 경력으로 모든 프로젝트에 드문 폭의 운영 전문성을 제공합니다.",
    aboutEducation: "경영학 학사, York University, 온타리오",
    aboutLanguages: "영어, 광둥어, 만다린 유창 | 프랑스어, 상하이어 기초",
    credential1Role: "상업 및 도매 부사장",
    credential1Company: "Canada Goose APAC",
    credential2Role: "사장",
    credential2Company: "Giuseppe Zanotti 아시아태평양",
    credential3Role: "지역 총괄 이사",
    credential3Company: "Ferragamo APAC",
    credential4Role: "CEO, The Balancing",
    credential4Company: "Bailian Group (상하이)",

    // Services
    servicesHeadline: "APAC에서 브랜드 성공을 돕는 방법",
    service1Title: "시장 진입 및 확장",
    service1Desc:
      "새로운 APAC 시장 진입을 위한 전략 기획 — 타당성 검토부터 첫 매장 오픈까지. 입지 선정, 임대인 협상, 임대 관리.",
    service2Title: "브랜드 빌딩 및 포지셔닝",
    service2Desc:
      "타겟 마케팅, PR, 셀럽 제휴, 아시아 소비자 맞춤 통합 캠페인을 통한 브랜드 인지도 향상.",
    service3Title: "머천다이징 및 제품 전략",
    service3Desc:
      "OTB 계획, 어소트먼트 큐레이션, 가격 전략, APAC 시장 캡슐 컬렉션 개발. 독점 제품 제작.",
    service4Title: "비주얼 머천다이징 및 크리에이티브",
    service4Desc:
      "윈도우 컨셉 개발, VM 실행, 광고 캠페인 디렉션, 현지에 공감되는 매장 내 경험 디자인.",
    service5Title: "팀 빌딩 및 리테일 운영",
    service5Desc:
      "리테일 팀 채용, 교육, 육성. 조직 구조 제로베이스 구축. KPI 프레임워크, 커미션 체계, 운영 탁월성.",
    service6Title: "도매 및 유통",
    service6Desc:
      "프랜차이즈 파트너, 도매 거래처, 유통업체 발굴 및 관리. 조건 협상과 지역 전반의 지속 가능한 채널 네트워크 구축.",

    // Track Record
    trackRecordHeadline: "아시아 태평양 전역의 입증된 성과",
    stat1Label: "년 APAC 경험",
    stat2Label: "개국 관리",
    stat3Label: "개 매장 오픈 및 운영",
    stat4Label: "개 럭셔리 브랜드 C급/VP급 리더십",

    // How It Works
    howItWorksHeadline: "간단한 협업 프로세스",
    step1Title: "탐색 통화",
    step1Desc:
      "브랜드 목표, 현재 APAC 현황, 과제를 논의합니다. 적합성을 평가하고 잠재적 접근 방식을 제시합니다.",
    step2Title: "전략 제안서",
    step2Desc:
      "시장 분석, 운영 계획, 타임라인, 투자를 포함한 맞춤형 로드맵을 제공합니다. 명확한 범위, 숨겨진 비용 없음.",
    step3Title: "실행 및 성장",
    step3Desc:
      "직접 실행. 임대인 미팅과 매장 오픈부터 팀 빌딩과 지속적인 성과 관리까지.",

    // CTA
    ctaHeadline: "아시아 태평양에서 브랜드를 성장시킬 준비가 되셨나요?",
    ctaSubtext: "목표에 대한 대화부터 시작합시다.",
    ctaButton: "문의하기",

    // Contact Form
    formName: "이름",
    formNamePlaceholder: "이름을 입력하세요",
    formEmail: "이메일",
    formEmailPlaceholder: "your@email.com",
    formCompany: "회사 / 브랜드",
    formCompanyPlaceholder: "회사 또는 브랜드명",
    formMessage: "메시지",
    formMessagePlaceholder: "브랜드에 대해 알려주세요...",
    formSubmit: "메시지 보내기",
    formSending: "전송 중...",
    formOrEmail: "또는 직접 이메일:",
    formSuccessTitle: "메시지 전송 완료!",
    formSuccessMsg: "연락해 주셔서 감사합니다. 1-2 영업일 내에 답변 드리겠습니다.",
    formError: "문제가 발생했습니다. 다시 시도하거나 직접 이메일을 보내주세요.",

    // Announcement Bar
    announce1: "GM으로서 Save The Duck 아시아태평양 확장",
    announce2: "Canada Goose 6개 APAC 시장 상업 전략 주도",
    announce3: "Giuseppe Zanotti 아시아태평양 사장으로서 전체 P&L 관리",
    announce4: "상하이에서 200+ 럭셔리 브랜드 멀티브랜드 리테일 플랫폼 구축",
    announce5: "Ferragamo 13개국 100+ 매장 머천다이징 및 마케팅 총괄",

    // Experience Page
    experiencePageTitle: "최근 경력",
    experiencePageSubtitle: "20년 이상 아시아 태평양에서 럭셔리 브랜드를 구축하고 확장한 주요 성과",
    viewExperience: "경력 보기",
    backToHome: "홈으로 돌아가기",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "이탈리아 지속가능 아우터웨어 — 매출 €7,200만, 40개국 진출, 18개 단독 매장",
    exp1Role: "아시아태평양 총괄 / 컨설턴트",
    exp1Period: "2024년 3월 – 현재",
    exp1Desc: "아시아태평양 도매/프랜차이즈 비즈니스 개발 및 확장, 각 시장에 적합한 유통업체 발굴 및 온보딩. 홍콩 2개 직영 매장 관리(창고, 물류, 전체 P&L 포함). 이탈리아 디자인팀과 제품 개발 지원, 디지털 마케팅, 광고, 커뮤니케이션 및 크리에이티브 전략 수립.",
    exp1Highlight1: "APAC 도매 및 프랜차이즈 네트워크 확장",
    exp1Highlight2: "홍콩 운영 전체 P&L 책임",
    exp1Highlight3: "이탈리아 본사와 전략적 제품 개발",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "캐나다 럭셔리 아우터웨어 — 연매출 CAD $13억, 전세계 74개 매장",
    exp2Role: "아시아태평양 상업 및 도매 부사장",
    exp2Period: "2022년 7월 – 2023년 8월",
    exp2Desc: "지역 장단기 전략 수립, 전체 P&L 책임. 홍콩, 대만, 마카오, 호주, 한국, 일본 리테일 비즈니스 관리. 1년 내 마카오 2개, 호주 2개 매장 오픈. Imaginex(전 중화권 JV 파트너)로부터 운영 기능과 물류를 인수하고 제3자 운영사로부터 임대인 관계 회수. 지역 리테일 매니저, 교육 디렉터, VM 매니저를 포함한 완전한 리테일 운영팀 구축.",
    exp2Highlight1: "6개 APAC 시장 리테일 관리",
    exp2Highlight2: "매장 부동산 포트폴리오 및 임대인 관계 리더십",
    exp2Highlight3: "판매, NPS, 전환율 등 럭셔리 성과 지표 추진",
    exp2Highlight4: "JV 파트너로부터 운영 인수 및 리테일팀 제로베이스 구축",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "이탈리아 럭셔리 풋웨어 — 75개국 이상 진출, 100+ 부티크, 연간 60만+ 켤레",
    exp3Role: "아시아태평양 사장 (중국 포함)",
    exp3Period: "2021년 3월 – 2022년 6월",
    exp3Desc: "중국을 포함한 아시아태평양 그룹 전략 실행의 전체 책임, 완전한 P&L 소유권. 모든 아시아 매장 협상, 임대 계약 및 신규 오픈을 개인적으로 담당. 리테일 네트워크 확장에 중점을 둔 성장 로드맵 개발 및 실행.",
    exp3Highlight1: "아시아태평양 전체 P&L 및 전략 소유권",
    exp3Highlight2: "리테일 네트워크 확장 계획 리더십",
    exp3Highlight3: "프랜차이즈 및 도매 파트너 에코시스템 관리",
    exp3Highlight4: "모든 아시아 매장 임대 및 오픈 직접 협상",

    exp4Company: "상하이 바이리안 그룹",
    exp4CompanyContext: "중국 최대 국영 리테일 기업 — 매출 ¥420억, 직원 45,000+, 리테일 면적 300만+ 제곱미터",
    exp4Role: "부총경리 — CEO, The Balancing / 전략 브랜드 GM / 유통 GM",
    exp4Period: "2018년 4월 – 2021년 3월",
    exp4Desc: "중국 최대 국영 리테일 기업에서 삼중 역할 수행. The Balancing CEO로서 200+ 국제 럭셔리 브랜드를 보유한 3개 멀티브랜드 매장 관리. 전략 브랜드 GM으로서 25개 백화점, 18개 쇼핑몰, 8개 아울렛의 60+ 브랜드 관리. 유통 GM으로서 DAKS, Wedgwood, Royal Doulton, FRED 브랜드 관리.",
    exp4Highlight1: "3개 멀티브랜드 매장 200+ 럭셔리 브랜드 관리",
    exp4Highlight2: "51개 리테일 거점 60+ 브랜드 감독",
    exp4Highlight3: "100+ 직원 팀 구축 및 이커머스 플랫폼 런칭",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "이탈리아 럭셔리 패션 하우스 — 연매출 €10억, 전세계 367개 매장",
    exp5Role: "아시아태평양 마케팅 & 머천다이징 총괄 이사",
    exp5Period: "2007년 7월 – 2017년 8월",
    exp5Desc: "13개국 관할, 100+ 직영 매장, 6개 도매 거래처, 75개 여행 리테일 매장/코너, 직영 이커머스 채널 포함. 중국 매장 입지 선정 및 임대인 협상 참여. 기업 마케팅 및 커뮤니케이션 전략 수립, 지역 광고, A&P 예산, CRM, VIP 이벤트, 부티크 오픈, 대규모 패션쇼 관리.",
    exp5Highlight1: "13개국, 100+ 매장, 75개 여행 리테일 거점",
    exp5Highlight2: "10년 재직, 머천다이징에서 경영진 리더십까지",
    exp5Highlight3: "전 APAC 시장 리테일 엑설런스 프로젝트 주도",
    exp5Highlight4: "JV 바이백 전환 관리 및 확대된 지역팀 구축",

    exp6Company: "Christian Dior Far East",
    exp6Role: "아시아태평양 머천다이징 디렉터 (중국 포함)",
    exp6Period: "2004년 11월 – 2006년 10월",
    exp6Desc: "12개국 58개 매장의 전체 머천다이징 기능 담당. 비주얼 머천다이징, 가격 책정, OTB 계획, €1.24억 연간 지역 매출 관리.",
    exp6Highlight1: "12개국 58개 매장",
    exp6Highlight2: "€1.24억 연간 지역 매출",
    exp6Highlight3: "3개년 예산/매출 예측 포함 전략 기획",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "지역 머천다이징 매니저",
    exp7Period: "1998년 1월 – 2004년 11월",
    exp7Desc: "아시아태평양 YSL Rive Gauche 및 Gucci 바잉 및 머천다이징 관리. 매출 예산, OTB 계획, 브랜드 인지도 개발, 매장 네트워크 확장 담당.",
    exp7Highlight1: "9개 APAC 시장 브랜드 존재감 구축",
    exp7Highlight2: "지역 거점 매출 예산 및 구매 계획",
    exp7Highlight3: "YSL 및 Gucci 매장 네트워크 확장",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "아시아 태평양 리테일 & 브랜드 전략",
    footerNavTitle: "네비게이션",
    footerContactTitle: "연락처",
    footerLocation: "홍콩 / 상하이",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. All rights reserved.`,
  },

  fr: {
    // Nav
    navAbout: "À propos",
    navServices: "Services",
    navTrackRecord: "Résultats",
    navHowItWorks: "Comment ça marche",
    navCta: "Nous contacter",

    // Hero
    heroBadge: "Plus de 25 ans dans le retail Asie-Pacifique",
    heroHeadline: "Développez votre marque en Asie-Pacifique",
    heroSubheadline:
      "De l'ouverture de flagship stores à la gestion complète du P&L — conseil stratégique retail pour les marques de luxe et lifestyle entrant ou se développant en Chine, Hong Kong et dans la région APAC.",
    heroPrimaryCta: "Nous contacter",
    heroSecondaryCta: "Voir les services",
    heroStat1Value: "25+",
    heroStat1Label: "ans d'expérience",
    heroStat2Value: "100+",
    heroStat2Label: "boutiques ouvertes",
    heroStat3Value: "13",
    heroStat3Label: "pays",

    // Trust Bar
    trustHeadline: "La confiance des grandes marques mondiales",

    // Problem–Solution
    comparisonHeadline: "Pourquoi les marques choisissent un conseil APAC spécialisé",
    comparisonProblemTitle: "L'approche classique",
    comparisonSolutionTitle: "Travailler avec YG Consulting",
    problem1Title: "Plans d'entrée génériques",
    problem1Desc: "Stratégies standardisées qui ignorent les nuances locales",
    solution1Title: "Stratégie APAC sur mesure",
    solution1Desc:
      "Feuilles de route personnalisées basées sur plus de 25 ans d'expérience terrain en Chine, HK, Asie du Sud-Est, Corée, Japon et Australie",
    problem2Title: "Déconnectés des propriétaires",
    problem2Desc: "Dépendance envers des courtiers tiers sans relations directes",
    solution2Title: "Relations directes avec les propriétaires",
    solution2Desc:
      "Réseaux personnels avec les principaux opérateurs de centres commerciaux et propriétaires en APAC, pour des baux plus rapides et de meilleures conditions",
    problem3Title: "Exécution locale faible",
    problem3Desc: "Plans imposés par le siège qui échouent au niveau du magasin",
    solution3Title: "Exécution de bout en bout",
    solution3Desc:
      "De la négociation du bail à l'installation VM, marketing, recrutement du personnel jusqu'aux opérations d'ouverture — géré directement",
    problem4Title: "Expertise cloisonnée",
    problem4Desc: "Consultants séparés pour le merchandising, le marketing, la formation",
    solution4Title: "Leadership retail complet",
    solution4Desc:
      "Merchandising, VM, marketing, formation, CRM et P&L sous un seul opérateur expérimenté",

    // About
    aboutHeadline: "Deux décennies de développement de marques en Asie-Pacifique",
    aboutBody:
      "Yvonne Gan a occupé des postes de direction senior dans les maisons de mode les plus prestigieuses au monde — de Directrice Exécutive Régionale chez Salvatore Ferragamo à Présidente de Giuseppe Zanotti Asie-Pacifique et VP Commerciale chez Canada Goose. Avec une carrière couvrant l'achat, le merchandising, le marketing, le VM et la gestion complète du P&L, elle apporte une rare étendue d'expertise opérationnelle à chaque mission.",
    aboutEducation: "Licence en Commerce, York University, Ontario",
    aboutLanguages: "Couramment anglais, cantonais, mandarin | Français et shanghainais de base",
    credential1Role: "VP Commerciale & Wholesale",
    credential1Company: "Canada Goose APAC",
    credential2Role: "Présidente",
    credential2Company: "Giuseppe Zanotti Asie-Pacifique",
    credential3Role: "Directrice Exécutive Régionale",
    credential3Company: "Ferragamo APAC",
    credential4Role: "CEO, The Balancing",
    credential4Company: "Bailian Group (Shanghai)",

    // Services
    servicesHeadline: "Comment j'aide les marques à réussir en APAC",
    service1Title: "Entrée sur le marché et expansion",
    service1Desc:
      "Planification stratégique pour l'entrée sur de nouveaux marchés APAC — de la faisabilité à l'ouverture du premier magasin. Sélection de site, négociation avec les propriétaires et gestion des baux.",
    service2Title: "Construction de marque et positionnement",
    service2Desc:
      "Élever la perception de la marque grâce au marketing ciblé, aux RP, aux partenariats avec des célébrités et aux campagnes intégrées adaptées aux consommateurs asiatiques.",
    service3Title: "Merchandising et stratégie produit",
    service3Desc:
      "Planification OTB, curation d'assortiment, stratégie de prix et développement de collections capsules pour les marchés APAC. Création de produits exclusifs.",
    service4Title: "Visual merchandising et créativité",
    service4Desc:
      "Développement de concepts vitrines, exécution VM, direction de campagnes publicitaires et design d'expérience en magasin qui résonne localement.",
    service5Title: "Constitution d'équipe et opérations retail",
    service5Desc:
      "Recrutement, formation et développement des équipes retail. Construction de la structure organisationnelle de zéro. Cadres KPI, schémas de commission et excellence opérationnelle.",
    service6Title: "Wholesale et distribution",
    service6Desc:
      "Identification et gestion de partenaires franchisés, comptes wholesale et distributeurs. Négociation des conditions et construction de réseaux de distribution durables dans la région.",

    // Track Record
    trackRecordHeadline: "Des résultats prouvés en Asie-Pacifique",
    stat1Label: "Années d'expérience APAC",
    stat2Label: "Pays gérés",
    stat3Label: "Boutiques ouvertes et opérées",
    stat4Label: "Marques de luxe dirigées au niveau C-suite / VP",

    // How It Works
    howItWorksHeadline: "Un processus de collaboration simple",
    step1Title: "Appel découverte",
    step1Desc:
      "Nous discutons des objectifs de votre marque, de votre présence actuelle en APAC et de vos défis. J'évalue la compatibilité et propose des approches potentielles.",
    step2Title: "Proposition stratégique",
    step2Desc:
      "Je fournis une feuille de route sur mesure — analyse de marché, plan opérationnel, calendrier et investissement. Périmètre clair, pas de frais cachés.",
    step3Title: "Exécution et croissance",
    step3Desc:
      "Mise en œuvre pratique. Des réunions avec les propriétaires et ouvertures de magasins à la constitution d'équipe et la gestion continue des performances.",

    // CTA
    ctaHeadline: "Prêt à développer votre marque en Asie-Pacifique ?",
    ctaSubtext: "Commençons par une conversation sur vos objectifs.",
    ctaButton: "Nous contacter",

    // Contact Form
    formName: "Nom",
    formNamePlaceholder: "Votre nom",
    formEmail: "Email",
    formEmailPlaceholder: "votre@email.com",
    formCompany: "Entreprise / Marque",
    formCompanyPlaceholder: "Nom de votre entreprise ou marque",
    formMessage: "Message",
    formMessagePlaceholder: "Parlez-moi de votre marque et comment je peux vous aider...",
    formSubmit: "Envoyer le message",
    formSending: "Envoi en cours...",
    formOrEmail: "ou écrivez directement à :",
    formSuccessTitle: "Message envoyé !",
    formSuccessMsg: "Merci de nous avoir contactés. Je vous répondrai sous 1-2 jours ouvrables.",
    formError: "Une erreur est survenue. Veuillez réessayer ou envoyer un email directement.",

    // Announcement Bar
    announce1: "Expansion de Save The Duck en Asie-Pacifique en tant que DG",
    announce2: "Stratégie commerciale sur 6 marchés APAC pour Canada Goose",
    announce3: "P&L complet en tant que Présidente, Giuseppe Zanotti Asie-Pacifique",
    announce4: "Création d'une plateforme retail multi-marques avec 200+ marques de luxe à Shanghai",
    announce5: "Direction merchandising et marketing sur 100+ boutiques dans 13 pays chez Ferragamo",

    // Experience Page
    experiencePageTitle: "Expérience récente",
    experiencePageSubtitle: "Points forts sélectionnés de plus de deux décennies de construction et développement de marques de luxe en Asie-Pacifique",
    viewExperience: "Voir l'expérience",
    backToHome: "Retour à l'accueil",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "Outerwear durable italien — €72M de CA, présent dans 40 pays, 18 boutiques monomarque",
    exp1Role: "Directrice Générale, Asie-Pacifique / Consultante",
    exp1Period: "Mars 2024 – Présent",
    exp1Desc: "Développement et expansion du business wholesale/franchise en Asie-Pacifique, identification et intégration des bons distributeurs pour opérer sur différents marchés. Supervision de 2 magasins en propre à Hong Kong, incluant entreposage, logistique et P&L complet. Support au développement produit avec l'équipe design en Italie, et développement de stratégies marketing digitales, publicitaires, de communication et de conception créative.",
    exp1Highlight1: "Expansion du réseau wholesale et franchise en APAC",
    exp1Highlight2: "Responsabilité P&L complète pour les opérations de Hong Kong",
    exp1Highlight3: "Développement produit stratégique avec le siège en Italie",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "Outerwear de luxe canadien — CAD $1,3Md CA annuel, 74 boutiques dans le monde",
    exp2Role: "Vice-Présidente, Commercial & Wholesale, Asie-Pacifique",
    exp2Period: "Juillet 2022 – Août 2023",
    exp2Desc: "Préparation de stratégies à long et court terme pour la région avec pleine responsabilité P&L. Gestion du retail à Hong Kong, Taiwan, Macao, Australie, Corée et Japon. Ouverture de 2 magasins à Macao et 2 en Australie en un an. Reprise des fonctions opérationnelles et logistiques d'Imaginex (ancien partenaire JV Greater China), récupérant les relations propriétaires auprès d'opérateurs tiers.",
    exp2Highlight1: "Gestion retail sur 6 marchés APAC",
    exp2Highlight2: "Leadership du portefeuille immobilier et des relations propriétaires",
    exp2Highlight3: "Pilotage des ventes, NPS, conversion et métriques de performance luxe",
    exp2Highlight4: "Reprise des opérations du partenaire JV et construction de l'équipe retail from scratch",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "Chaussures de luxe italiennes — présent dans 75+ pays, 100+ boutiques, 600K+ paires par an",
    exp3Role: "Présidente, Asie-Pacifique (y compris Chine)",
    exp3Period: "Mars 2021 – Juin 2022",
    exp3Desc: "Pleine responsabilité de l'exécution de la stratégie du Groupe en Asie-Pacifique y compris la Chine, avec ownership complète du P&L. Personnellement responsable de toutes les négociations, baux et nouvelles ouvertures de magasins en Asie.",
    exp3Highlight1: "P&L complet et ownership stratégique pour l'Asie-Pacifique",
    exp3Highlight2: "Leadership de la planification d'expansion du réseau retail",
    exp3Highlight3: "Gestion de l'écosystème partenaires franchise et wholesale",
    exp3Highlight4: "Négociation directe de tous les baux et ouvertures de magasins en Asie",

    exp4Company: "Shanghai Bailian Group",
    exp4CompanyContext: "Plus grande entreprise retail publique de Chine — ¥42Md CA, 45 000+ employés, 3M+ m² de surface retail",
    exp4Role: "Directrice Générale Adjointe — CEO, The Balancing / DG Marques Stratégiques / DG Distribution",
    exp4Period: "Avril 2018 – Mars 2021",
    exp4Desc: "Triple rôle dans la plus grande entreprise retail publique de Chine. En tant que CEO de The Balancing, gestion de 3 magasins multi-marques avec 200+ marques de luxe internationales. En tant que DG Marques Stratégiques, gestion de 60+ marques de luxe dans 25 grands magasins, 18 centres commerciaux et 8 outlets.",
    exp4Highlight1: "Gestion de 200+ marques de luxe dans 3 magasins multi-marques",
    exp4Highlight2: "Supervision de 60+ marques dans 51 points de vente",
    exp4Highlight3: "Constitution d'une équipe de 100+ personnes et lancement de plateformes e-commerce",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "Maison de mode de luxe italienne — €1Md CA annuel, 367 boutiques dans le monde",
    exp5Role: "Directrice Exécutive Régionale, Marketing & Merchandising — Asie-Pacifique",
    exp5Period: "Juillet 2007 – Août 2017",
    exp5Desc: "Supervision de 13 pays incluant 100+ magasins en propre, 6 comptes wholesale, 75 magasins/corners travel retail et canaux e-commerce directs. Implication dans la sélection des emplacements et la négociation avec les propriétaires pour les magasins en Chine.",
    exp5Highlight1: "13 pays, 100+ boutiques, 75 emplacements travel retail",
    exp5Highlight2: "10 ans de mandat, du merchandising au leadership exécutif",
    exp5Highlight3: "Direction du Projet Excellence Retail sur tous les marchés APAC",
    exp5Highlight4: "Gestion des transitions de rachat JV et construction de l'équipe régionale élargie",

    exp6Company: "Christian Dior Far East",
    exp6Role: "Directrice Merchandising Régionale — Asie-Pacifique (y compris Chine)",
    exp6Period: "Novembre 2004 – Octobre 2006",
    exp6Desc: "En charge de toutes les fonctions merchandising pour 58 magasins dans 12 pays. Gestion du visual merchandising, pricing, planification OTB et €124M de CA régional annuel.",
    exp6Highlight1: "58 boutiques dans 12 pays",
    exp6Highlight2: "€124M de CA régional annuel",
    exp6Highlight3: "Planification stratégique incluant budget/prévisions de ventes sur 3 ans",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "Responsable Merchandising Régionale",
    exp7Period: "Janvier 1998 – Novembre 2004",
    exp7Desc: "Gestion de l'achat et du merchandising pour YSL Rive Gauche et Gucci en Asie-Pacifique. Responsable du budgeting des ventes, projections OTB, développement de la notoriété de marque et expansion du réseau de magasins.",
    exp7Highlight1: "Construction de la présence de marque sur 9 marchés APAC",
    exp7Highlight2: "Budgeting des ventes et planification des achats pour les emplacements régionaux",
    exp7Highlight3: "Expansion du réseau de boutiques pour YSL et Gucci",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "Retail & Stratégie de Marque pour l'Asie-Pacifique",
    footerNavTitle: "Navigation",
    footerContactTitle: "Contact",
    footerLocation: "Hong Kong / Shanghai",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. Tous droits réservés.`,
  },

  ja: {
    // Nav
    navAbout: "会社概要",
    navServices: "サービス",
    navTrackRecord: "実績",
    navHowItWorks: "進め方",
    navCta: "お問い合わせ",

    // Hero
    heroBadge: "アジア太平洋リテール25年以上の経験",
    heroHeadline: "アジア太平洋でブランドを構築・成長",
    heroSubheadline:
      "フラッグシップ店のオープンからP&L全体管理まで — 中国、香港、アジア太平洋地域に進出・拡大するラグジュアリー＆ライフスタイルブランドのための戦略的リテールコンサルティング。",
    heroPrimaryCta: "お問い合わせ",
    heroSecondaryCta: "サービスを見る",
    heroStat1Value: "25+",
    heroStat1Label: "年の経験",
    heroStat2Value: "100+",
    heroStat2Label: "店舗オープン",
    heroStat3Value: "13",
    heroStat3Label: "カ国",

    // Trust Bar
    trustHeadline: "世界の主要ブランドからの信頼",

    // Problem–Solution
    comparisonHeadline: "ブランドがAPAC専門コンサルティングを選ぶ理由",
    comparisonProblemTitle: "従来のアプローチ",
    comparisonSolutionTitle: "YG Consultingとの協業",
    problem1Title: "画一的な市場参入計画",
    problem1Desc: "現地のニュアンスを無視した定型的な戦略",
    solution1Title: "オーダーメイドのAPAC戦略",
    solution1Desc:
      "中国、香港、東南アジア、韓国、日本、オーストラリアでの25年以上の現地経験に基づくカスタム市場参入ロードマップ",
    problem2Title: "オーナーとの接点不足",
    problem2Desc: "直接的な関係を持たない第三者仲介に依存",
    solution2Title: "オーナーとの直接的な関係",
    solution2Desc:
      "APAC全域の主要モール運営者やオーナーとの直接構築されたネットワークにより、より迅速なリースとより良い条件を実現",
    problem3Title: "現地での実行力不足",
    problem3Desc: "本社主導の計画が店舗レベルで破綻",
    solution3Title: "エンドツーエンドの実行",
    solution3Desc:
      "リース交渉からVM設置、マーケティング、スタッフ採用、オープン日の運営まで — 直接管理",
    problem4Title: "分断された専門性",
    problem4Desc: "マーチャンダイジング、マーケティング、トレーニングを別々のコンサルタントが担当",
    solution4Title: "フルスペクトラムリテールリーダーシップ",
    solution4Desc:
      "マーチャンダイジング、VM、マーケティング、トレーニング、CRM、P&Lを一人の経験豊富なオペレーターが統合管理",

    // About
    aboutHeadline: "アジア太平洋でのブランド構築20年",
    aboutBody:
      "Yvonne Ganは、世界で最も名声のあるファッションハウスでシニアリーダーシップを歴任してきました — Salvatore Ferragamoのリージョナル・エグゼクティブ・ディレクターからGiuseppe Zanottiアジア太平洋社長、Canada GooseのVPコマーシャルまで。バイイング、マーチャンダイジング、マーケティング、VM、P&L全体管理にわたるキャリアで、あらゆる案件に稀有な幅広い運営専門知識を提供します。",
    aboutEducation: "ビジネス学士号、ヨーク大学、オンタリオ州",
    aboutLanguages: "英語、広東語、北京語に堪能 | フランス語、上海語は基礎レベル",
    credential1Role: "VP コマーシャル＆ホールセール",
    credential1Company: "Canada Goose APAC",
    credential2Role: "社長",
    credential2Company: "Giuseppe Zanotti アジア太平洋",
    credential3Role: "リージョナル・エグゼクティブ・ディレクター",
    credential3Company: "Ferragamo APAC",
    credential4Role: "CEO, The Balancing",
    credential4Company: "Bailian Group（上海）",

    // Services
    servicesHeadline: "APACでブランドの成功を支援する方法",
    service1Title: "市場参入と拡大",
    service1Desc:
      "新しいAPAC市場への参入に向けた戦略立案 — フィージビリティから1号店オープンまで。物件選定、オーナー交渉、リース管理。",
    service2Title: "ブランド構築＆ポジショニング",
    service2Desc:
      "ターゲットマーケティング、PR、セレブリティ提携、アジアの消費者に合わせた統合キャンペーンによるブランド認知度向上。",
    service3Title: "マーチャンダイジング＆商品戦略",
    service3Desc:
      "OTB計画、アソートメントキュレーション、価格戦略、APACマーケット向けカプセルコレクション開発。限定商品制作。",
    service4Title: "ビジュアルマーチャンダイジング＆クリエイティブ",
    service4Desc:
      "ウィンドウコンセプト開発、VM実行、広告キャンペーンディレクション、現地に響く店内体験デザイン。",
    service5Title: "チームビルディング＆リテールオペレーション",
    service5Desc:
      "リテールチームの採用、トレーニング、育成。ゼロからの組織構造構築。KPIフレームワーク、コミッション制度、オペレーショナルエクセレンス。",
    service6Title: "ホールセール＆ディストリビューション",
    service6Desc:
      "フランチャイズパートナー、ホールセールアカウント、ディストリビューターの発掘と管理。条件交渉と地域全体での持続可能なチャネルネットワーク構築。",

    // Track Record
    trackRecordHeadline: "アジア太平洋全域での実証された実績",
    stat1Label: "年のAPAC経験",
    stat2Label: "カ国を管理",
    stat3Label: "店舗をオープン＆運営",
    stat4Label: "つのラグジュアリーブランドをCスイート/VP級で主導",

    // How It Works
    howItWorksHeadline: "シンプルな協業プロセス",
    step1Title: "ディスカバリーコール",
    step1Desc:
      "ブランドの目標、現在のAPACプレゼンス、課題について話し合います。適合性を評価し、潜在的なアプローチを提示します。",
    step2Title: "戦略提案",
    step2Desc:
      "市場分析、運営計画、タイムライン、投資を含むオーダーメイドのロードマップを提供します。明確なスコープ、隠れたコストなし。",
    step3Title: "実行と成長",
    step3Desc:
      "ハンズオンの実行。オーナーとのミーティングや店舗オープンからチームビルディング、継続的なパフォーマンス管理まで。",

    // CTA
    ctaHeadline: "アジア太平洋でブランドを成長させる準備はできていますか？",
    ctaSubtext: "まずは目標についての会話から始めましょう。",
    ctaButton: "お問い合わせ",

    // Contact Form
    formName: "お名前",
    formNamePlaceholder: "お名前を入力してください",
    formEmail: "メールアドレス",
    formEmailPlaceholder: "your@email.com",
    formCompany: "会社 / ブランド",
    formCompanyPlaceholder: "会社名またはブランド名",
    formMessage: "メッセージ",
    formMessagePlaceholder: "ブランドについて、またどのようにお手伝いできるかお聞かせください...",
    formSubmit: "メッセージを送信",
    formSending: "送信中...",
    formOrEmail: "または直接メール：",
    formSuccessTitle: "メッセージ送信完了！",
    formSuccessMsg: "お問い合わせありがとうございます。1〜2営業日以内にご返信いたします。",
    formError: "エラーが発生しました。再度お試しいただくか、直接メールをお送りください。",

    // Announcement Bar
    announce1: "GMとしてSave The Duckのアジア太平洋展開を推進",
    announce2: "Canada Goose 6つのAPACマーケットの商業戦略を主導",
    announce3: "Giuseppe Zanottiアジア太平洋社長として全P&Lを管理",
    announce4: "上海で200以上のラグジュアリーブランドのマルチブランドリテールプラットフォームを構築",
    announce5: "Ferragamoで13カ国100以上の店舗のマーチャンダイジング＆マーケティングを統括",

    // Experience Page
    experiencePageTitle: "最近の経歴",
    experiencePageSubtitle: "アジア太平洋で20年以上にわたりラグジュアリーブランドを構築・拡大してきた主な実績",
    viewExperience: "経歴を見る",
    backToHome: "ホームに戻る",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "イタリアのサステナブルアウターウェア — 売上€7,200万、40カ国展開、18のモノブランド店舗",
    exp1Role: "アジア太平洋ゼネラルマネージャー / コンサルタント",
    exp1Period: "2024年3月 – 現在",
    exp1Desc: "アジア太平洋のホールセール/フランチャイズビジネスの開発・拡大、各市場で運営する適切なディストリビューターの特定・オンボーディング。香港の直営2店舗を管理（倉庫、物流、全P&L含む）。イタリアのデザインチームとの商品開発サポート、デジタルマーケティング、広告、コミュニケーション、クリエイティブコンセプションの戦略策定。",
    exp1Highlight1: "APACホールセール＆フランチャイズネットワークの拡大",
    exp1Highlight2: "香港オペレーションの全P&L責任",
    exp1Highlight3: "イタリア本社との戦略的商品開発",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "カナダのラグジュアリーアウターウェア — 年間売上CAD $13億、世界74店舗",
    exp2Role: "アジア太平洋VP コマーシャル＆ホールセール",
    exp2Period: "2022年7月 – 2023年8月",
    exp2Desc: "地域の長期・短期戦略を策定、全P&L責任。香港、台湾、マカオ、オーストラリア、韓国、日本のリテールビジネスを管理。1年以内にマカオ2店舗、オーストラリア2店舗をオープン。Imaginex（前グレーターチャイナJVパートナー）から運営機能と物流を引き継ぎ、サードパーティからオーナー関係を回収。",
    exp2Highlight1: "6つのAPACマーケットでリテール管理",
    exp2Highlight2: "店舗不動産ポートフォリオ＆オーナー関係のリーダーシップ",
    exp2Highlight3: "売上、NPS、コンバージョン等のラグジュアリーKPI推進",
    exp2Highlight4: "JVパートナーからオペレーション引き継ぎ、リテールチームをゼロから構築",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "イタリアのラグジュアリーフットウェア — 75カ国以上展開、100以上のブティック、年間60万足以上",
    exp3Role: "アジア太平洋社長（中国含む）",
    exp3Period: "2021年3月 – 2022年6月",
    exp3Desc: "中国を含むアジア太平洋におけるグループの戦略実行の全責任、完全なP&Lオーナーシップ。全アジア店舗の交渉、リース契約、新規オープンを個人的に担当。リテールネットワーク拡大に重点を置いた成長ロードマップを策定・実行。",
    exp3Highlight1: "アジア太平洋の全P&L＆戦略オーナーシップ",
    exp3Highlight2: "リテールネットワーク拡大計画のリーダーシップ",
    exp3Highlight3: "フランチャイズ＆ホールセールパートナーエコシステムの管理",
    exp3Highlight4: "全アジア店舗のリース＆オープンを直接交渉",

    exp4Company: "上海百聯集団",
    exp4CompanyContext: "中国最大の国営リテール企業 — 売上¥420億、従業員45,000人以上、リテール面積300万平方メートル以上",
    exp4Role: "副総経理 — CEO, The Balancing / 戦略ブランドGM / 流通GM",
    exp4Period: "2018年4月 – 2021年3月",
    exp4Desc: "中国最大の国営リテール企業で三つの役割を兼任。The Balancing CEOとして200以上の国際ラグジュアリーブランドを擁する3つのマルチブランド店舗を管理。戦略ブランドGMとして25の百貨店、18のショッピングモール、8つのアウトレットで60以上のブランドを管理。",
    exp4Highlight1: "3つのマルチブランド店舗で200以上のラグジュアリーブランドを管理",
    exp4Highlight2: "51のリテール拠点で60以上のブランドを監督",
    exp4Highlight3: "100人以上のチーム構築＆ECプラットフォーム立ち上げ",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "イタリアのラグジュアリーファッションハウス — 年間売上€10億、世界367店舗",
    exp5Role: "アジア太平洋リージョナル・エグゼクティブ・ディレクター マーケティング＆マーチャンダイジング",
    exp5Period: "2007年7月 – 2017年8月",
    exp5Desc: "13カ国を管轄、100以上の直営店、6つのホールセールアカウント、75のトラベルリテール店舗/コーナー、直営ECチャネルを含む。中国店舗の立地選定とオーナー交渉に関与。企業マーケティング＆コミュニケーション戦略を策定、地域広告、A&P予算、CRM、VIPイベント、ブティックオープニング、大規模ファッションショーを管理。",
    exp5Highlight1: "13カ国、100以上の店舗、75のトラベルリテール拠点",
    exp5Highlight2: "マーチャンダイジングからエグゼクティブリーダーシップまで10年間の在任",
    exp5Highlight3: "全APACマーケットのリテールエクセレンスプロジェクトを主導",
    exp5Highlight4: "JVバイバック移行管理＆拡大した地域チームの構築",

    exp6Company: "Christian Dior Far East",
    exp6Role: "アジア太平洋リージョナル・マーチャンダイジング・ディレクター（中国含む）",
    exp6Period: "2004年11月 – 2006年10月",
    exp6Desc: "12カ国58店舗の全マーチャンダイジング機能を担当。VM、プライシング、OTB計画、€1.24億の年間地域売上を管理。",
    exp6Highlight1: "12カ国58店舗",
    exp6Highlight2: "€1.24億の年間地域売上",
    exp6Highlight3: "3カ年予算/売上予測を含む戦略計画",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "リージョナル・マーチャンダイジング・マネージャー",
    exp7Period: "1998年1月 – 2004年11月",
    exp7Desc: "アジア太平洋でYSL Rive GaucheとGucciのバイイング＆マーチャンダイジングを管理。売上予算、OTB計画、ブランド認知度向上、店舗ネットワーク拡大を担当。",
    exp7Highlight1: "9つのAPACマーケットでブランドプレゼンスを構築",
    exp7Highlight2: "地域拠点の売上予算＆仕入計画",
    exp7Highlight3: "YSLとGucciの店舗ネットワーク拡大",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "アジア太平洋リテール＆ブランド戦略",
    footerNavTitle: "ナビゲーション",
    footerContactTitle: "お問い合わせ",
    footerLocation: "香港 / 上海",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. All rights reserved.`,
  },

  es: {
    // Nav
    navAbout: "Sobre nosotros",
    navServices: "Servicios",
    navTrackRecord: "Resultados",
    navHowItWorks: "Cómo funciona",
    navCta: "Contáctanos",

    // Hero
    heroBadge: "Más de 25 años en retail Asia-Pacífico",
    heroHeadline: "Construye y haz crecer tu marca en Asia Pacífico",
    heroSubheadline:
      "Desde la apertura de flagship stores hasta la gestión completa del P&L — consultoría estratégica de retail para marcas de lujo y lifestyle que ingresan o se expanden en China, Hong Kong y la región APAC.",
    heroPrimaryCta: "Contáctanos",
    heroSecondaryCta: "Ver servicios",
    heroStat1Value: "25+",
    heroStat1Label: "años de experiencia",
    heroStat2Value: "100+",
    heroStat2Label: "tiendas abiertas",
    heroStat3Value: "13",
    heroStat3Label: "países",

    // Trust Bar
    trustHeadline: "La confianza de las principales marcas globales",

    // Problem–Solution
    comparisonHeadline: "Por qué las marcas eligen consultoría APAC especializada",
    comparisonProblemTitle: "El enfoque tradicional",
    comparisonSolutionTitle: "Trabajar con YG Consulting",
    problem1Title: "Planes de entrada genéricos",
    problem1Desc: "Estrategias estandarizadas que ignoran los matices locales",
    solution1Title: "Estrategia APAC a medida",
    solution1Desc:
      "Hojas de ruta personalizadas basadas en más de 25 años de experiencia en terreno en China, HK, Sudeste Asiático, Corea, Japón y Australia",
    problem2Title: "Desconectados de los propietarios",
    problem2Desc: "Dependencia de intermediarios sin relaciones directas",
    solution2Title: "Relaciones directas con propietarios",
    solution2Desc:
      "Redes personales con los principales operadores de centros comerciales y propietarios en APAC, para arrendamientos más rápidos y mejores condiciones",
    problem3Title: "Ejecución local débil",
    problem3Desc: "Planes de la sede central que fallan a nivel de tienda",
    solution3Title: "Ejecución de principio a fin",
    solution3Desc:
      "Desde la negociación del contrato de arrendamiento hasta la instalación VM, marketing, contratación de personal hasta las operaciones de apertura — gestionado directamente",
    problem4Title: "Experiencia fragmentada",
    problem4Desc: "Consultores separados para merchandising, marketing, formación",
    solution4Title: "Liderazgo retail integral",
    solution4Desc:
      "Merchandising, VM, marketing, formación, CRM y P&L bajo un solo operador experimentado",

    // About
    aboutHeadline: "Dos décadas construyendo marcas en Asia Pacífico",
    aboutBody:
      "Yvonne Gan ha ocupado puestos de liderazgo senior en algunas de las casas de moda más prestigiosas del mundo — desde Directora Ejecutiva Regional en Salvatore Ferragamo hasta Presidenta de Giuseppe Zanotti Asia Pacífico y VP Comercial en Canada Goose. Con una carrera que abarca compras, merchandising, marketing, VM y gestión completa del P&L, aporta una amplitud excepcional de experiencia operativa a cada proyecto.",
    aboutEducation: "Licenciatura en Negocios, York University, Ontario",
    aboutLanguages: "Fluido en inglés, cantonés, mandarín | Francés y shanghainés básico",
    credential1Role: "VP Comercial y Wholesale",
    credential1Company: "Canada Goose APAC",
    credential2Role: "Presidenta",
    credential2Company: "Giuseppe Zanotti Asia Pacífico",
    credential3Role: "Directora Ejecutiva Regional",
    credential3Company: "Ferragamo APAC",
    credential4Role: "CEO, The Balancing",
    credential4Company: "Bailian Group (Shanghái)",

    // Services
    servicesHeadline: "Cómo ayudo a las marcas a triunfar en APAC",
    service1Title: "Entrada al mercado y expansión",
    service1Desc:
      "Planificación estratégica para ingresar a nuevos mercados APAC — desde la viabilidad hasta la apertura de la primera tienda. Selección de ubicación, negociación con propietarios y gestión de arrendamientos.",
    service2Title: "Construcción de marca y posicionamiento",
    service2Desc:
      "Elevar la percepción de marca a través de marketing dirigido, RRPP, alianzas con celebridades y campañas integradas adaptadas a los consumidores asiáticos.",
    service3Title: "Merchandising y estrategia de producto",
    service3Desc:
      "Planificación OTB, curación de surtido, estrategia de precios y desarrollo de colecciones cápsula para mercados APAC. Creación de productos exclusivos.",
    service4Title: "Visual merchandising y creatividad",
    service4Desc:
      "Desarrollo de conceptos de vitrinas, ejecución VM, dirección de campañas publicitarias y diseño de experiencia en tienda que resuena localmente.",
    service5Title: "Construcción de equipo y operaciones retail",
    service5Desc:
      "Reclutamiento, formación y desarrollo de equipos retail. Construcción de estructura organizacional desde cero. Marcos de KPI, esquemas de comisión y excelencia operativa.",
    service6Title: "Wholesale y distribución",
    service6Desc:
      "Identificación y gestión de socios franquiciados, cuentas wholesale y distribuidores. Negociación de términos y construcción de redes de canales sostenibles en la región.",

    // Track Record
    trackRecordHeadline: "Resultados comprobados en Asia Pacífico",
    stat1Label: "Años de experiencia APAC",
    stat2Label: "Países gestionados",
    stat3Label: "Tiendas abiertas y operadas",
    stat4Label: "Marcas de lujo lideradas a nivel C-suite / VP",

    // How It Works
    howItWorksHeadline: "Un proceso de colaboración sencillo",
    step1Title: "Llamada de descubrimiento",
    step1Desc:
      "Discutimos los objetivos de tu marca, presencia actual en APAC y desafíos. Evalúo la compatibilidad y propongo enfoques potenciales.",
    step2Title: "Propuesta estratégica",
    step2Desc:
      "Entrego una hoja de ruta a medida — análisis de mercado, plan operativo, cronograma e inversión. Alcance claro, sin costos ocultos.",
    step3Title: "Ejecución y crecimiento",
    step3Desc:
      "Implementación práctica. Desde reuniones con propietarios y aperturas de tiendas hasta construcción de equipo y gestión continua del rendimiento.",

    // CTA
    ctaHeadline: "¿Listo para hacer crecer tu marca en Asia Pacífico?",
    ctaSubtext: "Empecemos con una conversación sobre tus objetivos.",
    ctaButton: "Contáctanos",

    // Contact Form
    formName: "Nombre",
    formNamePlaceholder: "Tu nombre",
    formEmail: "Email",
    formEmailPlaceholder: "tu@email.com",
    formCompany: "Empresa / Marca",
    formCompanyPlaceholder: "Nombre de tu empresa o marca",
    formMessage: "Mensaje",
    formMessagePlaceholder: "Cuéntame sobre tu marca y cómo puedo ayudarte...",
    formSubmit: "Enviar mensaje",
    formSending: "Enviando...",
    formOrEmail: "o escribe directamente a:",
    formSuccessTitle: "¡Mensaje enviado!",
    formSuccessMsg: "Gracias por contactarnos. Responderé en 1-2 días hábiles.",
    formError: "Algo salió mal. Inténtalo de nuevo o envía un email directamente.",

    // Announcement Bar
    announce1: "Expansión de Save The Duck en Asia Pacífico como DG",
    announce2: "Lideré la estrategia comercial en 6 mercados APAC para Canada Goose",
    announce3: "P&L completo como Presidenta, Giuseppe Zanotti Asia Pacífico",
    announce4: "Construí plataforma retail multimarca con 200+ marcas de lujo en Shanghái",
    announce5: "Dirigí merchandising y marketing en 100+ tiendas en 13 países en Ferragamo",

    // Experience Page
    experiencePageTitle: "Experiencia reciente",
    experiencePageSubtitle: "Logros seleccionados de más de dos décadas construyendo y escalando marcas de lujo en Asia Pacífico",
    viewExperience: "Ver experiencia",
    backToHome: "Volver al inicio",

    exp1Company: "Save The Duck",
    exp1CompanyContext: "Outerwear sostenible italiano — €72M ingresos, presente en 40 países, 18 tiendas monomarca",
    exp1Role: "Directora General, Asia Pacífico / Consultora",
    exp1Period: "Marzo 2024 – Presente",
    exp1Desc: "Desarrollo y expansión del negocio wholesale/franquicia en Asia Pacífico, identificación e incorporación de los distribuidores adecuados para operar en varios mercados. Supervisión de 2 tiendas de operación directa en Hong Kong, incluyendo almacenamiento, logística y P&L completo. Apoyo al desarrollo de producto con el equipo de diseño en Italia, y desarrollo de estrategias de marketing digital, publicidad, comunicación y concepción creativa.",
    exp1Highlight1: "Expansión de red wholesale y franquicia en APAC",
    exp1Highlight2: "Responsabilidad P&L completa para operaciones de Hong Kong",
    exp1Highlight3: "Desarrollo estratégico de producto con sede en Italia",

    exp2Company: "Canada Goose",
    exp2CompanyContext: "Outerwear de lujo canadiense — CAD $1.3B ingresos anuales, 74 tiendas globalmente",
    exp2Role: "Vicepresidenta, Comercial & Wholesale, Asia Pacífico",
    exp2Period: "Julio 2022 – Agosto 2023",
    exp2Desc: "Preparación de estrategias a largo y corto plazo para la región con plena responsabilidad P&L. Gestión del negocio retail en Hong Kong, Taiwán, Macao, Australia, Corea y Japón. Apertura de 2 tiendas en Macao y 2 en Australia en un año. Toma de funciones operativas y logísticas de Imaginex (socio JV anterior de Greater China), recuperando relaciones con propietarios de operadores terceros.",
    exp2Highlight1: "Gestión retail en 6 mercados APAC",
    exp2Highlight2: "Liderazgo del portfolio inmobiliario y relaciones con propietarios",
    exp2Highlight3: "Impulso de ventas, NPS, conversión y métricas de rendimiento de lujo",
    exp2Highlight4: "Toma de operaciones del socio JV y construcción de equipo retail desde cero",

    exp3Company: "Giuseppe Zanotti",
    exp3CompanyContext: "Calzado de lujo italiano — presente en 75+ países, 100+ boutiques, 600K+ pares anuales",
    exp3Role: "Presidenta, Asia Pacífico (incluyendo China)",
    exp3Period: "Marzo 2021 – Junio 2022",
    exp3Desc: "Plena responsabilidad de la ejecución de la estrategia del Grupo en Asia Pacífico incluyendo China, con ownership completa del P&L. Personalmente responsable de todas las negociaciones, contratos de arrendamiento y nuevas aperturas de tiendas en Asia.",
    exp3Highlight1: "P&L completo y ownership estratégica para Asia Pacífico",
    exp3Highlight2: "Liderazgo en planificación de expansión de red retail",
    exp3Highlight3: "Gestión del ecosistema de socios franquicia y wholesale",
    exp3Highlight4: "Negociación directa de todos los arrendamientos y aperturas en Asia",

    exp4Company: "Shanghai Bailian Group",
    exp4CompanyContext: "La mayor empresa retail estatal de China — ¥42B ingresos, 45.000+ empleados, 3M+ m² de espacio retail",
    exp4Role: "Subdirectora General — CEO, The Balancing / DG Marcas Estratégicas / DG Distribución",
    exp4Period: "Abril 2018 – Marzo 2021",
    exp4Desc: "Triple rol en la mayor empresa retail estatal de China. Como CEO de The Balancing, gestión de 3 tiendas multimarca con 200+ marcas de lujo internacionales. Como DG Marcas Estratégicas, gestión de 60+ marcas de lujo en 25 tiendas departamentales, 18 centros comerciales y 8 outlets.",
    exp4Highlight1: "Gestión de 200+ marcas de lujo en 3 tiendas multimarca",
    exp4Highlight2: "Supervisión de 60+ marcas en 51 puntos de venta",
    exp4Highlight3: "Construcción de equipo de 100+ personas y lanzamiento de plataformas e-commerce",

    exp5Company: "Salvatore Ferragamo",
    exp5CompanyContext: "Casa de moda de lujo italiana — €1B ingresos anuales, 367 tiendas mundialmente",
    exp5Role: "Directora Ejecutiva Regional, Marketing & Merchandising — Asia Pacífico",
    exp5Period: "Julio 2007 – Agosto 2017",
    exp5Desc: "Supervisión de 13 países incluyendo 100+ tiendas propias, 6 cuentas wholesale, 75 tiendas/corners de travel retail y canales de e-commerce directos. Participación en selección de ubicaciones y negociación con propietarios para tiendas en China.",
    exp5Highlight1: "13 países, 100+ tiendas, 75 ubicaciones de travel retail",
    exp5Highlight2: "10 años de mandato, de merchandising a liderazgo ejecutivo",
    exp5Highlight3: "Liderazgo del Proyecto de Excelencia Retail en todos los mercados APAC",
    exp5Highlight4: "Gestión de transiciones de recompra JV y construcción de equipo regional ampliado",

    exp6Company: "Christian Dior Far East",
    exp6Role: "Directora Regional de Merchandising — Asia Pacífico (incluyendo China)",
    exp6Period: "Noviembre 2004 – Octubre 2006",
    exp6Desc: "A cargo de todas las funciones de merchandising para 58 tiendas en 12 países. Gestión de visual merchandising, pricing, planificación OTB y €124M de facturación regional anual.",
    exp6Highlight1: "58 tiendas en 12 países",
    exp6Highlight2: "€124M facturación regional anual",
    exp6Highlight3: "Planificación estratégica incluyendo presupuesto/previsión de ventas a 3 años",

    exp7Company: "Gucci Group — Yves Saint Laurent / Gucci",
    exp7Role: "Gerente Regional de Merchandising",
    exp7Period: "Enero 1998 – Noviembre 2004",
    exp7Desc: "Gestión de compras y merchandising para YSL Rive Gauche y Gucci en Asia Pacífico. Responsable de presupuesto de ventas, proyecciones OTB, desarrollo de notoriedad de marca y expansión de red de tiendas.",
    exp7Highlight1: "Construcción de presencia de marca en 9 mercados APAC",
    exp7Highlight2: "Presupuesto de ventas y planificación de compras para ubicaciones regionales",
    exp7Highlight3: "Expansión de red de tiendas para YSL y Gucci",

    // Footer
    footerBrand: "YG Consulting",
    footerTagline: "Retail y Estrategia de Marca para Asia Pacífico",
    footerNavTitle: "Navegación",
    footerContactTitle: "Contacto",
    footerLocation: "Hong Kong / Shanghái",
    footerCopyright: `© ${new Date().getFullYear()} YG Consulting. Todos los derechos reservados.`,
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getTranslations(locale: Locale) {
  return translations[locale];
}
