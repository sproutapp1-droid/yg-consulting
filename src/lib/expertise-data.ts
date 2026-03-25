export interface ExpertisePage {
  slug: string;
  icon: string;
  titleKey: string;
  subtitleKey: string;
  heroIntroKey: string;
  challengeTitleKey: string;
  challengeP1Key: string;
  challengeP2Key: string;
  howYvonneHelpsKey: string;
  capabilities: {
    titleKey: string;
    descKey: string;
  }[];
  stats: {
    value: number;
    suffix: string;
    labelKey: string;
  }[];
  proofBrands: string[];
  relatedSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
  faqs: {
    questionKey: string;
    answerKey: string;
  }[];
  ctaHeadlineKey: string;
}

export const EXPERTISE_PAGES: ExpertisePage[] = [
  {
    slug: "business-development-asia",
    icon: "Building2",
    titleKey: "expBizDevH1",
    subtitleKey: "expBizDevSubtitle",
    heroIntroKey: "expBizDevIntro",
    challengeTitleKey: "expBizDevChallengeTitle",
    challengeP1Key: "expBizDevChallengeP1",
    challengeP2Key: "expBizDevChallengeP2",
    howYvonneHelpsKey: "expBizDevHowHelps",
    capabilities: [
      { titleKey: "expBizDevCap1Title", descKey: "expBizDevCap1Desc" },
      { titleKey: "expBizDevCap2Title", descKey: "expBizDevCap2Desc" },
      { titleKey: "expBizDevCap3Title", descKey: "expBizDevCap3Desc" },
      { titleKey: "expBizDevCap4Title", descKey: "expBizDevCap4Desc" },
    ],
    stats: [
      { value: 100, suffix: "+", labelKey: "expBizDevStat1" },
      { value: 13, suffix: "", labelKey: "expBizDevStat2" },
      { value: 25, suffix: "+", labelKey: "expBizDevStat3" },
    ],
    proofBrands: ["Ferragamo", "Canada Goose", "Giuseppe Zanotti", "YSL", "DAKS", "Bailian Group"],
    relatedSlugs: ["retail-expert-asia", "brand-expansion-asia", "store-operations-asia"],
    meta: {
      title: "Business Development in Asia | YG Consulting",
      description: "Expert business development consulting for Asia Pacific. 25+ years opening 100+ stores across 13 APAC countries. Direct landlord networks in China, Hong Kong, SEA.",
    },
    faqs: [
      { questionKey: "expBizDevFaq1Q", answerKey: "expBizDevFaq1A" },
      { questionKey: "expBizDevFaq2Q", answerKey: "expBizDevFaq2A" },
      { questionKey: "expBizDevFaq3Q", answerKey: "expBizDevFaq3A" },
      { questionKey: "expBizDevFaq4Q", answerKey: "expBizDevFaq4A" },
      { questionKey: "expBizDevFaq5Q", answerKey: "expBizDevFaq5A" },
    ],
    ctaHeadlineKey: "expBizDevCtaHeadline",
  },
  {
    slug: "retail-expert-asia",
    icon: "Store",
    titleKey: "expRetailH1",
    subtitleKey: "expRetailSubtitle",
    heroIntroKey: "expRetailIntro",
    challengeTitleKey: "expRetailChallengeTitle",
    challengeP1Key: "expRetailChallengeP1",
    challengeP2Key: "expRetailChallengeP2",
    howYvonneHelpsKey: "expRetailHowHelps",
    capabilities: [
      { titleKey: "expRetailCap1Title", descKey: "expRetailCap1Desc" },
      { titleKey: "expRetailCap2Title", descKey: "expRetailCap2Desc" },
      { titleKey: "expRetailCap3Title", descKey: "expRetailCap3Desc" },
      { titleKey: "expRetailCap4Title", descKey: "expRetailCap4Desc" },
    ],
    stats: [
      { value: 25, suffix: "+", labelKey: "expRetailStat1" },
      { value: 13, suffix: "", labelKey: "expRetailStat2" },
      { value: 6, suffix: "", labelKey: "expRetailStat3" },
    ],
    proofBrands: ["Ferragamo", "Dior", "Canada Goose", "Giuseppe Zanotti", "DAKS", "Wedgwood"],
    relatedSlugs: ["store-operations-asia", "luxury-retail-asia", "fashion-specialist-asia"],
    meta: {
      title: "Retail Expert in Asia | YG Consulting",
      description: "Hire a proven retail expert in Asia. 25+ years leading P&L at Dior, Ferragamo, Canada Goose across 13 APAC countries. KPI frameworks, team building, operations.",
    },
    faqs: [
      { questionKey: "expRetailFaq1Q", answerKey: "expRetailFaq1A" },
      { questionKey: "expRetailFaq2Q", answerKey: "expRetailFaq2A" },
      { questionKey: "expRetailFaq3Q", answerKey: "expRetailFaq3A" },
      { questionKey: "expRetailFaq4Q", answerKey: "expRetailFaq4A" },
      { questionKey: "expRetailFaq5Q", answerKey: "expRetailFaq5A" },
    ],
    ctaHeadlineKey: "expRetailCtaHeadline",
  },
  {
    slug: "brand-expansion-asia",
    icon: "Globe",
    titleKey: "expBrandExpH1",
    subtitleKey: "expBrandExpSubtitle",
    heroIntroKey: "expBrandExpIntro",
    challengeTitleKey: "expBrandExpChallengeTitle",
    challengeP1Key: "expBrandExpChallengeP1",
    challengeP2Key: "expBrandExpChallengeP2",
    howYvonneHelpsKey: "expBrandExpHowHelps",
    capabilities: [
      { titleKey: "expBrandExpCap1Title", descKey: "expBrandExpCap1Desc" },
      { titleKey: "expBrandExpCap2Title", descKey: "expBrandExpCap2Desc" },
      { titleKey: "expBrandExpCap3Title", descKey: "expBrandExpCap3Desc" },
      { titleKey: "expBrandExpCap4Title", descKey: "expBrandExpCap4Desc" },
    ],
    stats: [
      { value: 13, suffix: "", labelKey: "expBrandExpStat1" },
      { value: 100, suffix: "+", labelKey: "expBrandExpStat2" },
      { value: 4, suffix: "", labelKey: "expBrandExpStat3" },
    ],
    proofBrands: ["Ferragamo", "Canada Goose", "Giuseppe Zanotti", "Save The Duck", "Gucci", "YSL"],
    relatedSlugs: ["retail-expansion-china", "retail-expansion-southeast-asia", "startup-business-asia"],
    meta: {
      title: "Brand Expansion in Asia | YG Consulting",
      description: "Asia brand expansion consultant — 25+ years experience. JV buyouts, market entry, team building across China, Korea, Japan, Singapore. 100+ stores opened.",
    },
    faqs: [
      { questionKey: "expBrandExpFaq1Q", answerKey: "expBrandExpFaq1A" },
      { questionKey: "expBrandExpFaq2Q", answerKey: "expBrandExpFaq2A" },
      { questionKey: "expBrandExpFaq3Q", answerKey: "expBrandExpFaq3A" },
      { questionKey: "expBrandExpFaq4Q", answerKey: "expBrandExpFaq4A" },
      { questionKey: "expBrandExpFaq5Q", answerKey: "expBrandExpFaq5A" },
    ],
    ctaHeadlineKey: "expBrandExpCtaHeadline",
  },
  {
    slug: "startup-business-asia",
    icon: "Rocket",
    titleKey: "expStartupH1",
    subtitleKey: "expStartupSubtitle",
    heroIntroKey: "expStartupIntro",
    challengeTitleKey: "expStartupChallengeTitle",
    challengeP1Key: "expStartupChallengeP1",
    challengeP2Key: "expStartupChallengeP2",
    howYvonneHelpsKey: "expStartupHowHelps",
    capabilities: [
      { titleKey: "expStartupCap1Title", descKey: "expStartupCap1Desc" },
      { titleKey: "expStartupCap2Title", descKey: "expStartupCap2Desc" },
      { titleKey: "expStartupCap3Title", descKey: "expStartupCap3Desc" },
      { titleKey: "expStartupCap4Title", descKey: "expStartupCap4Desc" },
    ],
    stats: [
      { value: 200, suffix: "+", labelKey: "expStartupStat1" },
      { value: 100, suffix: "+", labelKey: "expStartupStat2" },
      { value: 3, suffix: "", labelKey: "expStartupStat3" },
    ],
    proofBrands: ["Bailian Group", "Giuseppe Zanotti", "Jil Sander", "Victoria Beckham", "Stella McCartney", "Paul Smith"],
    relatedSlugs: ["business-development-asia", "brand-expansion-asia", "retail-expert-asia"],
    meta: {
      title: "Start Up Business in Asia | YG Consulting",
      description: "Launch your retail business in Asia from zero. Team building, store setup, e-commerce. Built multi-brand operations in Shanghai for Bailian Group.",
    },
    faqs: [
      { questionKey: "expStartupFaq1Q", answerKey: "expStartupFaq1A" },
      { questionKey: "expStartupFaq2Q", answerKey: "expStartupFaq2A" },
      { questionKey: "expStartupFaq3Q", answerKey: "expStartupFaq3A" },
      { questionKey: "expStartupFaq4Q", answerKey: "expStartupFaq4A" },
      { questionKey: "expStartupFaq5Q", answerKey: "expStartupFaq5A" },
    ],
    ctaHeadlineKey: "expStartupCtaHeadline",
  },
  {
    slug: "luxury-retail-asia",
    icon: "Diamond",
    titleKey: "expLuxuryH1",
    subtitleKey: "expLuxurySubtitle",
    heroIntroKey: "expLuxuryIntro",
    challengeTitleKey: "expLuxuryChallengeTitle",
    challengeP1Key: "expLuxuryChallengeP1",
    challengeP2Key: "expLuxuryChallengeP2",
    howYvonneHelpsKey: "expLuxuryHowHelps",
    capabilities: [
      { titleKey: "expLuxuryCap1Title", descKey: "expLuxuryCap1Desc" },
      { titleKey: "expLuxuryCap2Title", descKey: "expLuxuryCap2Desc" },
      { titleKey: "expLuxuryCap3Title", descKey: "expLuxuryCap3Desc" },
      { titleKey: "expLuxuryCap4Title", descKey: "expLuxuryCap4Desc" },
    ],
    stats: [
      { value: 124, suffix: "M", labelKey: "expLuxuryStat1" },
      { value: 200, suffix: "+", labelKey: "expLuxuryStat2" },
      { value: 58, suffix: "", labelKey: "expLuxuryStat3" },
    ],
    proofBrands: ["Dior", "Ferragamo", "Gucci", "YSL", "Giuseppe Zanotti", "Joyce Boutique"],
    relatedSlugs: ["fashion-specialist-asia", "retail-expert-asia", "retail-expansion-hong-kong"],
    meta: {
      title: "Luxury Retail in Asia | YG Consulting",
      description: "Independent luxury retail consultant for Asia Pacific. C-suite experience with Dior (€124M), Ferragamo, Gucci, YSL. 200+ luxury brands across China and Hong Kong.",
    },
    faqs: [
      { questionKey: "expLuxuryFaq1Q", answerKey: "expLuxuryFaq1A" },
      { questionKey: "expLuxuryFaq2Q", answerKey: "expLuxuryFaq2A" },
      { questionKey: "expLuxuryFaq3Q", answerKey: "expLuxuryFaq3A" },
      { questionKey: "expLuxuryFaq4Q", answerKey: "expLuxuryFaq4A" },
      { questionKey: "expLuxuryFaq5Q", answerKey: "expLuxuryFaq5A" },
    ],
    ctaHeadlineKey: "expLuxuryCtaHeadline",
  },
  {
    slug: "fashion-retail-asia",
    icon: "Shirt",
    titleKey: "expFashionH1",
    subtitleKey: "expFashionSubtitle",
    heroIntroKey: "expFashionIntro",
    challengeTitleKey: "expFashionChallengeTitle",
    challengeP1Key: "expFashionChallengeP1",
    challengeP2Key: "expFashionChallengeP2",
    howYvonneHelpsKey: "expFashionHowHelps",
    capabilities: [
      { titleKey: "expFashionCap1Title", descKey: "expFashionCap1Desc" },
      { titleKey: "expFashionCap2Title", descKey: "expFashionCap2Desc" },
      { titleKey: "expFashionCap3Title", descKey: "expFashionCap3Desc" },
      { titleKey: "expFashionCap4Title", descKey: "expFashionCap4Desc" },
    ],
    stats: [
      { value: 5, suffix: "", labelKey: "expFashionStat1" },
      { value: 100, suffix: "+", labelKey: "expFashionStat2" },
      { value: 26, suffix: "", labelKey: "expFashionStat3" },
    ],
    proofBrands: ["Ferragamo", "Dior", "Canada Goose", "DAKS", "Joyce Boutique", "Save The Duck"],
    relatedSlugs: ["fashion-specialist-asia", "luxury-retail-asia", "store-operations-asia"],
    meta: {
      title: "Fashion Retail in Asia | YG Consulting",
      description: "Fashion retail strategy and visual merchandising for Asia. Capsule collections, product curation, and VM. From Joyce Boutique to Ferragamo regional leadership.",
    },
    faqs: [
      { questionKey: "expFashionFaq1Q", answerKey: "expFashionFaq1A" },
      { questionKey: "expFashionFaq2Q", answerKey: "expFashionFaq2A" },
      { questionKey: "expFashionFaq3Q", answerKey: "expFashionFaq3A" },
      { questionKey: "expFashionFaq4Q", answerKey: "expFashionFaq4A" },
      { questionKey: "expFashionFaq5Q", answerKey: "expFashionFaq5A" },
    ],
    ctaHeadlineKey: "expFashionCtaHeadline",
  },
  {
    slug: "store-operations-asia",
    icon: "ClipboardList",
    titleKey: "expStoreOpsH1",
    subtitleKey: "expStoreOpsSubtitle",
    heroIntroKey: "expStoreOpsIntro",
    challengeTitleKey: "expStoreOpsChallengeTitle",
    challengeP1Key: "expStoreOpsChallengeP1",
    challengeP2Key: "expStoreOpsChallengeP2",
    howYvonneHelpsKey: "expStoreOpsHowHelps",
    capabilities: [
      { titleKey: "expStoreOpsCap1Title", descKey: "expStoreOpsCap1Desc" },
      { titleKey: "expStoreOpsCap2Title", descKey: "expStoreOpsCap2Desc" },
      { titleKey: "expStoreOpsCap3Title", descKey: "expStoreOpsCap3Desc" },
      { titleKey: "expStoreOpsCap4Title", descKey: "expStoreOpsCap4Desc" },
    ],
    stats: [
      { value: 100, suffix: "+", labelKey: "expStoreOpsStat1" },
      { value: 13, suffix: "", labelKey: "expStoreOpsStat2" },
      { value: 51, suffix: "", labelKey: "expStoreOpsStat3" },
    ],
    proofBrands: ["Ferragamo", "Dior", "Canada Goose", "Giuseppe Zanotti", "Bailian Group", "Save The Duck"],
    relatedSlugs: ["retail-expert-asia", "luxury-retail-asia", "business-development-asia"],
    meta: {
      title: "Store Operations in Asia | YG Consulting",
      description: "Expert store operations management across Asia Pacific. 100+ stores operated across 13 countries. KPI frameworks, team training, and retail excellence from Ferragamo to Canada Goose.",
    },
    faqs: [
      { questionKey: "expStoreOpsFaq1Q", answerKey: "expStoreOpsFaq1A" },
      { questionKey: "expStoreOpsFaq2Q", answerKey: "expStoreOpsFaq2A" },
      { questionKey: "expStoreOpsFaq3Q", answerKey: "expStoreOpsFaq3A" },
    ],
    ctaHeadlineKey: "expStoreOpsCtaHeadline",
  },
  {
    slug: "fashion-specialist-asia",
    icon: "Scissors",
    titleKey: "expFashSpecH1",
    subtitleKey: "expFashSpecSubtitle",
    heroIntroKey: "expFashSpecIntro",
    challengeTitleKey: "expFashSpecChallengeTitle",
    challengeP1Key: "expFashSpecChallengeP1",
    challengeP2Key: "expFashSpecChallengeP2",
    howYvonneHelpsKey: "expFashSpecHowHelps",
    capabilities: [
      { titleKey: "expFashSpecCap1Title", descKey: "expFashSpecCap1Desc" },
      { titleKey: "expFashSpecCap2Title", descKey: "expFashSpecCap2Desc" },
      { titleKey: "expFashSpecCap3Title", descKey: "expFashSpecCap3Desc" },
      { titleKey: "expFashSpecCap4Title", descKey: "expFashSpecCap4Desc" },
    ],
    stats: [
      { value: 5, suffix: "", labelKey: "expFashSpecStat1" },
      { value: 200, suffix: "+", labelKey: "expFashSpecStat2" },
      { value: 26, suffix: "", labelKey: "expFashSpecStat3" },
    ],
    proofBrands: ["Joyce Boutique", "Ferragamo", "Dior", "Canada Goose", "DAKS", "Bailian Group"],
    relatedSlugs: ["fashion-retail-asia", "luxury-retail-asia", "brand-expansion-asia"],
    meta: {
      title: "Fashion Specialist in Asia | YG Consulting",
      description: "Fashion specialist in Asia with 25+ years of experience. From Joyce Boutique buyer to Ferragamo regional leadership. Capsule collections, VM, buying, and brand curation.",
    },
    faqs: [
      { questionKey: "expFashSpecFaq1Q", answerKey: "expFashSpecFaq1A" },
      { questionKey: "expFashSpecFaq2Q", answerKey: "expFashSpecFaq2A" },
      { questionKey: "expFashSpecFaq3Q", answerKey: "expFashSpecFaq3A" },
    ],
    ctaHeadlineKey: "expFashSpecCtaHeadline",
  },
  {
    slug: "retail-expansion-china",
    icon: "MapPin",
    titleKey: "expChinaH1",
    subtitleKey: "expChinaSubtitle",
    heroIntroKey: "expChinaIntro",
    challengeTitleKey: "expChinaChallengeTitle",
    challengeP1Key: "expChinaChallengeP1",
    challengeP2Key: "expChinaChallengeP2",
    howYvonneHelpsKey: "expChinaHowHelps",
    capabilities: [
      { titleKey: "expChinaCap1Title", descKey: "expChinaCap1Desc" },
      { titleKey: "expChinaCap2Title", descKey: "expChinaCap2Desc" },
      { titleKey: "expChinaCap3Title", descKey: "expChinaCap3Desc" },
      { titleKey: "expChinaCap4Title", descKey: "expChinaCap4Desc" },
    ],
    stats: [
      { value: 200, suffix: "+", labelKey: "expChinaStat1" },
      { value: 100, suffix: "+", labelKey: "expChinaStat2" },
      { value: 3, suffix: "", labelKey: "expChinaStat3" },
    ],
    proofBrands: ["Bailian Group", "Ferragamo", "Giuseppe Zanotti", "DAKS", "Wedgwood", "Jil Sander"],
    relatedSlugs: ["retail-expansion-hong-kong", "retail-expansion-southeast-asia", "brand-expansion-asia"],
    meta: {
      title: "Retail Expansion in China | YG Consulting",
      description: "China retail expansion consultant with 3 years Shanghai-based leadership. 200+ luxury brands managed at Bailian Group. JV buyouts, store openings, and e-commerce across mainland China.",
    },
    faqs: [
      { questionKey: "expChinaFaq1Q", answerKey: "expChinaFaq1A" },
      { questionKey: "expChinaFaq2Q", answerKey: "expChinaFaq2A" },
      { questionKey: "expChinaFaq3Q", answerKey: "expChinaFaq3A" },
    ],
    ctaHeadlineKey: "expChinaCtaHeadline",
  },
  {
    slug: "retail-expansion-hong-kong",
    icon: "Building",
    titleKey: "expHKH1",
    subtitleKey: "expHKSubtitle",
    heroIntroKey: "expHKIntro",
    challengeTitleKey: "expHKChallengeTitle",
    challengeP1Key: "expHKChallengeP1",
    challengeP2Key: "expHKChallengeP2",
    howYvonneHelpsKey: "expHKHowHelps",
    capabilities: [
      { titleKey: "expHKCap1Title", descKey: "expHKCap1Desc" },
      { titleKey: "expHKCap2Title", descKey: "expHKCap2Desc" },
      { titleKey: "expHKCap3Title", descKey: "expHKCap3Desc" },
      { titleKey: "expHKCap4Title", descKey: "expHKCap4Desc" },
    ],
    stats: [
      { value: 25, suffix: "+", labelKey: "expHKStat1" },
      { value: 6, suffix: "", labelKey: "expHKStat2" },
      { value: 5, suffix: "", labelKey: "expHKStat3" },
    ],
    proofBrands: ["Save The Duck", "Canada Goose", "Ferragamo", "Joyce Boutique", "Giuseppe Zanotti", "Dior"],
    relatedSlugs: ["retail-expansion-china", "retail-expansion-southeast-asia", "luxury-retail-asia"],
    meta: {
      title: "Retail Expansion in Hong Kong | YG Consulting",
      description: "Hong Kong retail expansion consultant based in HK. Currently operating stores for Save The Duck. Former Joyce Boutique buyer, Ferragamo and Canada Goose APAC leadership.",
    },
    faqs: [
      { questionKey: "expHKFaq1Q", answerKey: "expHKFaq1A" },
      { questionKey: "expHKFaq2Q", answerKey: "expHKFaq2A" },
      { questionKey: "expHKFaq3Q", answerKey: "expHKFaq3A" },
    ],
    ctaHeadlineKey: "expHKCtaHeadline",
  },
  {
    slug: "retail-expansion-southeast-asia",
    icon: "Compass",
    titleKey: "expSEAH1",
    subtitleKey: "expSEASubtitle",
    heroIntroKey: "expSEAIntro",
    challengeTitleKey: "expSEAChallengeTitle",
    challengeP1Key: "expSEAChallengeP1",
    challengeP2Key: "expSEAChallengeP2",
    howYvonneHelpsKey: "expSEAHowHelps",
    capabilities: [
      { titleKey: "expSEACap1Title", descKey: "expSEACap1Desc" },
      { titleKey: "expSEACap2Title", descKey: "expSEACap2Desc" },
      { titleKey: "expSEACap3Title", descKey: "expSEACap3Desc" },
      { titleKey: "expSEACap4Title", descKey: "expSEACap4Desc" },
    ],
    stats: [
      { value: 6, suffix: "", labelKey: "expSEAStat1" },
      { value: 10, suffix: "+", labelKey: "expSEAStat2" },
      { value: 25, suffix: "+", labelKey: "expSEAStat3" },
    ],
    proofBrands: ["Ferragamo", "Canada Goose", "Save The Duck", "Giuseppe Zanotti", "DAKS", "Gucci"],
    relatedSlugs: ["retail-expansion-china", "retail-expansion-hong-kong", "brand-expansion-asia"],
    meta: {
      title: "Retail Expansion in Southeast Asia | YG Consulting",
      description: "Southeast Asia retail expansion consultant. Direct experience in Singapore, Malaysia, Thailand, Indonesia, and Australia. Ferragamo JV buyback, Canada Goose store openings.",
    },
    faqs: [
      { questionKey: "expSEAFaq1Q", answerKey: "expSEAFaq1A" },
      { questionKey: "expSEAFaq2Q", answerKey: "expSEAFaq2A" },
      { questionKey: "expSEAFaq3Q", answerKey: "expSEAFaq3A" },
    ],
    ctaHeadlineKey: "expSEACtaHeadline",
  },
];

export const EXPERTISE_HUB_META = {
  title: "Expertise — Retail & Brand Consulting Asia | YG Consulting",
  description: "Strategic consulting expertise for luxury and fashion brands in Asia Pacific. Market entry, brand expansion, retail operations, and business development.",
};

export function getExpertiseBySlug(slug: string) {
  return EXPERTISE_PAGES.find((p) => p.slug === slug);
}
