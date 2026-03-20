export interface ExpertisePage {
  slug: string;
  icon: string;
  titleKey: string;
  subtitleKey: string;
  heroIntroKey: string;
  challengeTitleKey: string;
  challengeP1Key: string;
  challengeP2Key: string;
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
    relatedSlugs: ["retail-expert-asia", "brand-expansion-asia", "startup-business-asia"],
    meta: {
      title: "Business Development in Asia | YG Consulting",
      description: "Expert business development consulting for Asia Pacific. 25+ years opening 100+ stores across 13 APAC countries. Direct landlord networks in China, Hong Kong, SEA.",
    },
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
    relatedSlugs: ["business-development-asia", "luxury-retail-asia", "fashion-retail-asia"],
    meta: {
      title: "Retail Expert in Asia | YG Consulting",
      description: "Asia's trusted retail operations expert. 25+ years of P&L leadership at Dior, Ferragamo, Canada Goose. KPI-driven retail excellence across Hong Kong and APAC.",
    },
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
    relatedSlugs: ["business-development-asia", "startup-business-asia", "luxury-retail-asia"],
    meta: {
      title: "Brand Expansion in Asia | YG Consulting",
      description: "Expand your brand across Asia Pacific. Market entry strategy, JV buyouts, and team building in China, Korea, Japan, Singapore, and Australia.",
    },
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
    relatedSlugs: ["fashion-retail-asia", "retail-expert-asia", "brand-expansion-asia"],
    meta: {
      title: "Luxury Retail in Asia | YG Consulting",
      description: "Luxury retail consulting for Asia Pacific. C-suite experience with Dior (€124M), Ferragamo, Gucci, YSL. 200+ luxury brands across China and Hong Kong.",
    },
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
    relatedSlugs: ["luxury-retail-asia", "retail-expert-asia", "brand-expansion-asia"],
    meta: {
      title: "Fashion Retail in Asia | YG Consulting",
      description: "Fashion retail strategy and visual merchandising for Asia. Capsule collections, product curation, and VM. From Joyce Boutique to Ferragamo regional leadership.",
    },
  },
];

export const EXPERTISE_HUB_META = {
  title: "Expertise — Retail & Brand Consulting Asia | YG Consulting",
  description: "Strategic consulting expertise for luxury and fashion brands in Asia Pacific. Market entry, brand expansion, retail operations, and business development.",
};

export function getExpertiseBySlug(slug: string) {
  return EXPERTISE_PAGES.find((p) => p.slug === slug);
}
