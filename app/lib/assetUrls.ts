export const ASSET_PATHS = {
  logo: "/assets/icons/beezie-logo.svg",
  clawIcon: "/assets/icons/claw-icon.svg",
  clawMachine: "/assets/claw/claw-machine.png",
  clawHero: "/assets/claw/claw-hero.png",
  coinIcon: "/assets/icons/coin.svg",
  profileImage: "/assets/avatars/profile.png",
  viewOddsIcon: "/assets/icons/view-odds.svg",

  topItems: [
    "/assets/items/top-item-mew.jpg",
    "/assets/items/top-item-pikachu.jpg",
    "/assets/items/top-item-charizard.jpg",
    "/assets/items/top-item-collection.jpg",
    "/assets/items/top-item-booster.jpg",
    "/assets/items/top-item-sneaker-green.jpg",
    "/assets/items/top-item-jordan.jpg",
    "/assets/items/top-item-pokemon-pack.jpg",
    "/assets/items/top-item-collectible-set.jpg",
  ],

  recentPulls: [
    "/assets/items/recent-pull-garchomp.jpg",
    "/assets/items/recent-pull-charizard.jpg",
  ],

  features: {
    vault: "/assets/features/vault.svg",
    swap: "/assets/features/swap.svg",
    redeem: "/assets/features/redeem.svg",
  },

  badges: {
    star: "/assets/badges/star.svg",
    arrow: "/assets/badges/arrow.svg",
  },

  referral: {
    illustration: "/assets/referral/illustration.svg",
    confetti: [
      "/assets/referral/confetti-1.svg",
      "/assets/referral/confetti-2.svg",
      "/assets/referral/confetti-3.svg",
      "/assets/referral/confetti-4.svg",
      "/assets/referral/confetti-5.svg",
    ],
  },

  claw: {
    pointsIcon: "/assets/claw/claw-points-icon.svg",
    decrementIcon: "/assets/claw/claw-card.svg",
    incrementIcon: "/assets/claw/claw-card-secondary.svg",
    viewOddsIcon: "/assets/claw/claw-price-background.svg",
    divider: "/assets/claw/claw-divider.svg",
    ctaIllustration: "/assets/claw/claw-cta-illustration.svg",
    featureVault: "/assets/claw/claw-feature-vault.svg",
    featureSwap: "/assets/claw/claw-feature-swap.svg",
    featureRedeem: "/assets/claw/claw-feature-redeem.svg",
    confetti: [
      "/assets/claw/claw-confetti-1.svg",
      "/assets/claw/claw-confetti-2.svg",
      "/assets/claw/claw-confetti-3.svg",
      "/assets/claw/claw-confetti-4.svg",
      "/assets/claw/claw-confetti-5.svg",
    ],
  },
} as const;

export type AssetPaths = typeof ASSET_PATHS;
