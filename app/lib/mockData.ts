import { ASSET_PATHS } from "./assetUrls";

export interface TopItem {
  id: string;
  imageUrl: string;
  title: string;
}

export interface RecentPull {
  id: string;
  imageUrl: string;
  title: string;
  username: string;
  timestamp: string;
}

const [
  topItemMew,
  topItemPikachu,
  topItemCharizard,
  topItemCollection,
  topItemBooster,
  topItemSneakerGreen,
  topItemJordan,
  topItemPokemonPack,
  topItemCollectibleSet,
] = ASSET_PATHS.topItems;

const [recentPullGarchomp, recentPullCharizard] = ASSET_PATHS.recentPulls;

export const topItems: TopItem[] = [
  {
    id: "1",
    imageUrl: topItemMew,
    title: "PSA Graded Pokémon Card - Mew",
  },
  {
    id: "2",
    imageUrl: topItemPikachu,
    title: "PSA Graded Pokémon Card - Pikachu",
  },
  {
    id: "3",
    imageUrl: topItemCharizard,
    title: "PSA Graded Pokémon Card - Charizard",
  },
  {
    id: "4",
    imageUrl: topItemCollection,
    title: "PSA Graded Pokémon Card Collection",
  },
  {
    id: "5",
    imageUrl: topItemJordan,
    title: "Limited Edition Jordan Sneakers",
  },
  {
    id: "6",
    imageUrl: topItemPokemonPack,
    title: "Pokémon Collectible Package",
  },
  {
    id: "7",
    imageUrl: topItemSneakerGreen,
    title: "Exclusive Sneakers - Green",
  },
  {
    id: "8",
    imageUrl: topItemBooster,
    title: "Pokémon Booster Box",
  },
  {
    id: "9",
    imageUrl: topItemCollectibleSet,
    title: "Limited Collectible Set",
  },
];

export const recentPulls: RecentPull[] = [
  {
    id: "1",
    imageUrl: recentPullGarchomp,
    title: "2024 Palden Fates Garchomp EX #260 PSA 9",
    username: "lebnani",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    imageUrl: recentPullCharizard,
    title: "2020 Japanese Black Star Promos Charizard #066 PSA 10",
    username: "lebnani",
    timestamp: "5 minutes ago",
  },
  {
    id: "3",
    imageUrl: recentPullGarchomp,
    title: "2024 Palden Fates Garchomp EX #260 PSA 9",
    username: "lebnani",
    timestamp: "8 minutes ago",
  },
  {
    id: "4",
    imageUrl: recentPullCharizard,
    title: "2020 Japanese Black Star Promos Charizard #066 PSA 10",
    username: "lebnani",
    timestamp: "12 minutes ago",
  },
  {
    id: "5",
    imageUrl: recentPullCharizard,
    title: "2020 Japanese Black Star Promos Charizard #066 PSA 10",
    username: "lebnani",
    timestamp: "15 minutes ago",
  },
  {
    id: "6",
    imageUrl: recentPullCharizard,
    title: "2020 Japanese Black Star Promos Charizard #066 PSA 10",
    username: "lebnani",
    timestamp: "20 minutes ago",
  },
];
