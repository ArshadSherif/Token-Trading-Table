import { Token } from "@/types/token";

const mockTokens: Token[] = [
  {
    id: "11",
    symbol: "NOVA",
    name: "Nova Chain",
    image:
      "https://imgs.search.brave.com/IAsNB8tfXvffBa1P9aVtMjgk-OsCMRmuMabdTNUwvEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9z/dGlja2Vycy8xMjAw/L2NoYWluLmpwZw",
    price: 0.31,
    priceChange24h: 4.8,
    volume24h: 1_850_000,
    liquidity: 620_000,
    marketCap: 4_200_000,
    stage: "NEW",
    updatedAt: Date.now() - 9000,

    txCount: 22,
    txDelta: 9,
    solAmount: 0.18,
    fValue: 0.097,
    bondingPercentage: 2.65, // % of liquidity in the bonding curve
  },
  {
    id: "12",
    symbol: "FLUX",
    name: "Flux Layer",
    image:
      "https://imgs.search.brave.com/-piODeI5eeCzmFrP6jkPVysZ3s3KIRYBKdkEzk8T2q0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC1vdGhl/cnMtcGlrZS1waWN0/dXJlLzEyMDAvZXh0/ZXJuYWwtTXVsdGls/YXllci1OZXVyYWwt/TmV0d29yay1uZXVy/YWwtb3RoZXJzLXBp/a2UtcGljdHVyZS0y/LmpwZw",
    price: 1.76,
    priceChange24h: -2.3,
    volume24h: 2_400_000,
    liquidity: 880_000,
    marketCap: 9_600_000,
    stage: "NEW",
    updatedAt: Date.now() - 15000,

    txCount: 14,
    txDelta: -6,
    solAmount: 0.11,
    fValue: 0.082,
    bondingPercentage: 3.12, // % of liquidity in the bonding curve
  },
  {
    id: "13",
    symbol: "ORBIT",
    name: "Orbit Rollup",
    image:
      "https://imgs.search.brave.com/cjJB_1FKDg5BDmoeBvHnNhatslwfMTp3ixY6B1ezvWE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yNDg2LzI0ODY2/NDEucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs",
    price: 3.42,
    priceChange24h: 1.9,
    volume24h: 3_100_000,
    liquidity: 1_400_000,
    marketCap: 17_800_000,
    stage: "FINAL",
    updatedAt: Date.now() - 6000,

    txCount: 28,
    txDelta: 11,
    solAmount: 0.39,
    fValue: 0.214,
    bondingPercentage: 4.25, // % of liquidity in the bonding curve
  },
  {
    id: "14",
    symbol: "MESH",
    name: "Mesh Network",
    image: "",
    price: 0.087,
    priceChange24h: -5.1,
    volume24h: 740_000,
    liquidity: 260_000,
    marketCap: 1_050_000,
    stage: "FINAL",
    updatedAt: Date.now() - 21000,

    txCount: 6,
    txDelta: -4,
    solAmount: 0.03,
    fValue: 0.021,
    bondingPercentage: 1.75, // % of liquidity in the bonding curve
  },
  {
    id: "15",
    symbol: "ZENX",
    name: "Zen Protocol",
    image: "",
    price: 6.92,
    priceChange24h: 0.6,
    volume24h: 4_800_000,
    liquidity: 2_200_000,
    marketCap: 36_000_000,
    stage: "MIGRATED",
    updatedAt: Date.now() - 12000,

    txCount: 41,
    txDelta: 19,
    solAmount: 0.61,
    fValue: 0.347,
    bondingPercentage: 5.15, // % of liquidity in the bonding curve
  },
  {
    id: "16",
    symbol: "PIX",
    name: "Pixel Swap",
    image: "",
    price: 0.012,
    priceChange24h: -8.4,
    volume24h: 390_000,
    liquidity: 95_000,
    marketCap: 720_000,
    stage: "MIGRATED",
    updatedAt: Date.now() - 34000,

    txCount: 3,
    txDelta: -2,
    solAmount: 0.008,
    fValue: 0.009,
    bondingPercentage: 0.85, // % of liquidity in the bonding curve
  },
  {
    id: "17",
    symbol: "AURA",
    name: "Aura Finance",
    image: "",
    price: 2.18,
    priceChange24h: 7.2,
    volume24h: 2_950_000,
    liquidity: 1_050_000,
    marketCap: 14_200_000,
    stage: "FINAL",
    updatedAt: Date.now() - 5000,

    txCount: 35,
    txDelta: 16,
    solAmount: 0.48,
    fValue: 0.266,
    bondingPercentage: 3.75, // % of liquidity in the bonding curve
  },
  {
    id: "18",
    symbol: "DRIFT",
    name: "Drift X",
    image: "",
    price: 0.58,
    priceChange24h: -1.1,
    volume24h: 1_120_000,
    liquidity: 410_000,
    marketCap: 5_900_000,
    stage: "NEW",
    updatedAt: Date.now() - 17000,

    txCount: 11,
    txDelta: -5,
    solAmount: 0.09,
    fValue: 0.071,
    bondingPercentage: 2.25, // % of liquidity in the bonding curve
  },
  {
    id: "19",
    symbol: "LYNX",
    name: "Lynx Protocol",
    image: "",
    price: 9.34,
    priceChange24h: 0.3,
    volume24h: 6_200_000,
    liquidity: 3_100_000,
    marketCap: 52_000_000,
    stage: "MIGRATED",
    updatedAt: Date.now() - 8000,

    txCount: 47,
    txDelta: 21,
    solAmount: 0.88,
    fValue: 0.512,
    bondingPercentage: 6.5, // % of liquidity in the bonding curve
  },
  {
    id: "20",
    symbol: "SPARK",
    name: "Spark Layer",
    image: "",
    price: 0.044,
    priceChange24h: 10.6,
    volume24h: 680_000,
    liquidity: 190_000,
    marketCap: 1_380_000,
    stage: "NEW",
    updatedAt: Date.now() - 11000,

    txCount: 19,
    txDelta: 8,
    solAmount: 0.15,
    fValue: 0.093,
    bondingPercentage: 1.95, // % of liquidity in the bonding curve
  },
];

export default mockTokens;
