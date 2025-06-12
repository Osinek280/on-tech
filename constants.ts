export const classicAvailable = [
  50, 70, 90, 110, 130, 150, 165, 180, 195, 210, 225, 240, 260, 280, 300, 320,
  340, 360, 380,
];
export const softLineAvailable = [150, 175, 200, 225, 250, 275, 300];

export type Feature = {
  description: string;
  icon: string;
};

export type Connector = {
  title: string;
  code: string;
  image: string;
};

export type Cap = {
  title: string;
  code: string;
  image: string;
};

export interface Quote {
  type: string;
  length: string;
  color: string;
  price: string;
}

export const classicFeatures: Feature[] = [
  {
    description: "Kanciasty kształt profili aluminiowych",
    icon: "/classicicon.svg",
  },
  {
    description: "Średnia grubość parapetów wynosząca ok. 2 mm",
    icon: "/tickness.svg",
  },
  {
    description: "Zróżnicowane szerokości parapetów od 50 do 380 mm",
    icon: "/meter.svg",
  },
  {
    description:
      "Ekstrudowane aluminium zapewniające komfort akustyczny wewnątrz pomieszczenia",
    icon: "/speaker.svg",
  },
  {
    description: "Możliwość spawania parapetów pod różnym kątem",
    icon: "/fire.svg",
  },
];

export const softlineFeatures: Feature[] = [
  {
    description: "Zaokrąglony kształt profili aluminiowych",
    icon: "/softicon.svg",
  },
  {
    description: "Średnia grubość parapetów wynosząca ok. 2 mm",
    icon: "/tickness.svg",
  },
  {
    description: "Zróżnicowane szerokości parapetów od 150 do 300 mm",
    icon: "/meter.svg",
  },
  {
    description:
      "Ekstrudowane aluminium zapewniające komfort akustyczny wewnątrz pomieszczenia",
    icon: "/speaker.svg",
  },
  {
    description: "Możliwość spawania parapetów pod różnym kątem",
    icon: "/fire.svg",
  },
];

export const classicConnectors: Connector[] = [
  {
    title: "Łącznik kątowy zewnętrzny 90°",
    code: "(LAK40/XXX/Z/90S)",
    image: "/lol/1.png",
  },
  {
    title: "Łącznik kątowy wewnętrzny 90°",
    code: "(LAK40/XXX/W/90S)",
    image: "/lol/3.png",
  },
  {
    title: "Łącznik kątowy zewnętrzny 135°",
    code: "(LAK40/XXX/Z/135S)",
    image: "/lol/5.png",
  },
  {
    title: "Łącznik prosty 180°",
    code: "(LAK40/XXX)",
    image: "/lol/7.png",
  },
];

export const softlineConnectors: Connector[] = [
  {
    title: "Łącznik kątowy zewnętrzny 90°",
    code: "(LAK40/XXX/Z/90S)",
    image: "/lol/14.png",
  },
  {
    title: "Łącznik kątowy wewnętrzny 90°",
    code: "(LAK40/XXX/W/90S)",
    image: "/lol/9.png",
  },
  {
    title: "Łącznik kątowy zewnętrzny 135°",
    code: "(LAK40/XXX/Z/135S)",
    image: "/lol/10.png",
  },
  {
    title: "Łącznik prosty 180°",
    code: "(LAK40/XXX)",
    image: "/lol/11.png",
  },
];

export const classicCaps: Cap[] = [
  {
    title: "Zaślepka do tynku",
    code: "(ZAK40/XXX)",
    image: "/lol/18.png",
  },
  {
    title: "Zaślepka do muru klinkierowego",
    code: "(ZAKF40/XXX)",
    image: "/lol/17.png",
  },
];

export const softlineCaps: Cap[] = [
  {
    title: "Zaślepka do tynku",
    code: "(ZA/XXX)",
    image: "/lol/12.png",
  },
  {
    title: "Zaślepka z tworzywa sztucznego",
    code: "(ZT/XXX)",
    image: "/lol/15.png",
  },
  {
    title: "Zaślepka do muru klinkierowego",
    code: "(ZAKF/XXX)",
    image: "/lol/16.png",
  },
];

export interface PriceItem {
  depth: number;
  pricePerMbBrutto: number;
  endCapBrutto: number;
  straightConnectorBrutto: number;
  angleConnectorBrutto?: number;
}

export interface Prices {
  classic: PriceItem[];
  softline: PriceItem[];
}

type WindowSillProduct = {
  depth: number; // głębokość parapetu w mm
  pricePerMbBrutto: number; // Cena za MB (brutto) STANDARD
  endCapBrutto: number; // Zaślepka Cena STANDARD brutto
  straightConnectorBrutto: number; // Łącznik prosty Cena STANDARD brutto
  angleConnectorBrutto: number | null; // Łącznik kątowy Cena STANDARD brutto (brak danych => null)
};

export const prices: {
  classic: WindowSillProduct[];
  softline: WindowSillProduct[];
} = {
  classic: [
    {
      depth: 50,
      pricePerMbBrutto: 38.16,
      endCapBrutto: 18.8,
      straightConnectorBrutto: 36.71,
      angleConnectorBrutto: 90.48,
    },
    {
      depth: 70,
      pricePerMbBrutto: 45.3,
      endCapBrutto: 19.53,
      straightConnectorBrutto: 37.38,
      angleConnectorBrutto: 92.46,
    },
    {
      depth: 90,
      pricePerMbBrutto: 52.06,
      endCapBrutto: 20.32,
      straightConnectorBrutto: 38.36,
      angleConnectorBrutto: 94.42,
    },
    {
      depth: 110,
      pricePerMbBrutto: 57.75,
      endCapBrutto: 21.07,
      straightConnectorBrutto: 39.35,
      angleConnectorBrutto: 96.39,
    },
    {
      depth: 130,
      pricePerMbBrutto: 63.15,
      endCapBrutto: 21.84,
      straightConnectorBrutto: 40.33,
      angleConnectorBrutto: 98.35,
    },
    {
      depth: 150,
      pricePerMbBrutto: 66.05,
      endCapBrutto: 22.63,
      straightConnectorBrutto: 41.31,
      angleConnectorBrutto: 100.33,
    },
    {
      depth: 165,
      pricePerMbBrutto: 70.6,
      endCapBrutto: 23.81,
      straightConnectorBrutto: 42.31,
      angleConnectorBrutto: 102.33,
    },
    {
      depth: 180,
      pricePerMbBrutto: 75.2,
      endCapBrutto: 25.04,
      straightConnectorBrutto: 43.27,
      angleConnectorBrutto: 104.25,
    },
    {
      depth: 195,
      pricePerMbBrutto: 82.19,
      endCapBrutto: 26.27,
      straightConnectorBrutto: 44.25,
      angleConnectorBrutto: 106.21,
    },
    {
      depth: 210,
      pricePerMbBrutto: 86.91,
      endCapBrutto: 27.53,
      straightConnectorBrutto: 45.23,
      angleConnectorBrutto: 108.18,
    },
    {
      depth: 225,
      pricePerMbBrutto: 101.01,
      endCapBrutto: 28.86,
      straightConnectorBrutto: 46.23,
      angleConnectorBrutto: 110.16,
    },
    {
      depth: 240,
      pricePerMbBrutto: 113.41,
      endCapBrutto: 30.37,
      straightConnectorBrutto: 47.21,
      angleConnectorBrutto: 112.13,
    },
    {
      depth: 260,
      pricePerMbBrutto: 134.97,
      endCapBrutto: 32.03,
      straightConnectorBrutto: 48.19,
      angleConnectorBrutto: 114.08,
    },
    {
      depth: 280,
      pricePerMbBrutto: 138.64,
      endCapBrutto: 33.74,
      straightConnectorBrutto: 49.17,
      angleConnectorBrutto: 116.05,
    },
    {
      depth: 300,
      pricePerMbBrutto: 158.03,
      endCapBrutto: 35.25,
      straightConnectorBrutto: 50.16,
      angleConnectorBrutto: 118.0,
    },
    {
      depth: 320,
      pricePerMbBrutto: 169.8,
      endCapBrutto: 37.25,
      straightConnectorBrutto: 51.14,
      angleConnectorBrutto: 119.99,
    },
    {
      depth: 340,
      pricePerMbBrutto: 187.19,
      endCapBrutto: 39.35,
      straightConnectorBrutto: 52.12,
      angleConnectorBrutto: 121.96,
    },
    {
      depth: 360,
      pricePerMbBrutto: 205.37,
      endCapBrutto: 41.41,
      straightConnectorBrutto: 53.1,
      angleConnectorBrutto: 123.92,
    },
    {
      depth: 380,
      pricePerMbBrutto: 236.7,
      endCapBrutto: 43.57,
      straightConnectorBrutto: 54.1,
      angleConnectorBrutto: 125.88,
    },
  ],
  softline: [
    {
      depth: 150,
      pricePerMbBrutto: 71.75,
      endCapBrutto: 24.89,
      straightConnectorBrutto: 41.31,
      angleConnectorBrutto: null,
    },
    {
      depth: 175,
      pricePerMbBrutto: 85.55,
      endCapBrutto: 24.77,
      straightConnectorBrutto: 42.87,
      angleConnectorBrutto: null,
    },
    {
      depth: 200,
      pricePerMbBrutto: 99.36,
      endCapBrutto: 26.78,
      straightConnectorBrutto: 44.63,
      angleConnectorBrutto: null,
    },
    {
      depth: 225,
      pricePerMbBrutto: 101.86,
      endCapBrutto: 28.86,
      straightConnectorBrutto: 46.23,
      angleConnectorBrutto: null,
    },
    {
      depth: 250,
      pricePerMbBrutto: 126.93,
      endCapBrutto: 31.0,
      straightConnectorBrutto: 47.61,
      angleConnectorBrutto: null,
    },
    {
      depth: 275,
      pricePerMbBrutto: 140.74,
      endCapBrutto: 33.24,
      straightConnectorBrutto: 48.79,
      angleConnectorBrutto: null,
    },
    {
      depth: 300,
      pricePerMbBrutto: 154.53,
      endCapBrutto: 36.36,
      straightConnectorBrutto: 51.82,
      angleConnectorBrutto: null,
    },
  ],
};
