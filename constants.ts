export const classicAvailable = [50, 70, 90, 110, 130, 150, 165, 180, 195, 210, 225, 240, 260, 280, 300, 320, 340, 360, 380];
export const softLineAvailable = [150, 175, 200, 225, 250, 275, 300];

export type Feature = {
  description: string;
  icon: string;
};

export type Connector = {
  title: string;
  code: string;
  image: string;
}

export type Cap = {
  title: string;
  code: string;
  image: string;
}

export interface Quote {
  type: string
  length: string
  color: string
  price: string
}

export const classicFeatures: Feature[] = [
  {
    description: "Kanciasty kształt profili aluminiowych",
    icon: "/classicicon.svg"
  },
  {
    description: "Średnia grubość parapetów wynosząca ok. 2 mm",
    icon: "/tickness.svg"
  },
  {
    description: "Zróżnicowane szerokości parapetów od 50 do 380 mm",
    icon: "/meter.svg"
  },
  {
    description: "Ekstrudowane aluminium zapewniające komfort akustyczny wewnątrz pomieszczenia",
    icon: "/speaker.svg"
  },
  {
    description: "Możliwość spawania parapetów pod różnym kątem",
    icon: "/fire.svg"
  }
]

export const softlineFeatures: Feature[] = [
  {
    description: "Zaokrąglony kształt profili aluminiowych",
    icon: "/softicon.svg"
  },
  {
    description: "Średnia grubość parapetów wynosząca ok. 2 mm",
    icon: "/tickness.svg"
  },
  {
    description: "Zróżnicowane szerokości parapetów od 150 do 300 mm",
    icon: "/meter.svg"
  },
  {
    description: "Ekstrudowane aluminium zapewniające komfort akustyczny wewnątrz pomieszczenia",
    icon: "/speaker.svg"
  },
  {
    description: "Możliwość spawania parapetów pod różnym kątem",
    icon: "/fire.svg"
  }
]

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
]

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
]

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
]

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
]

export interface PriceItem {
  depth: number;
  price: number;
}

export interface Prices {
  classic: PriceItem[];
  softline: PriceItem[];
}

export const prices: Prices = {
  classic: [
    { depth: 50, price: 38.99 },
    { depth: 70, price: 46.29 },
    { depth: 90, price: 53.2 },
    { depth: 110, price: 59.03 },
    { depth: 130, price: 64.53 },
    { depth: 150, price: 67.52 },
    { depth: 165, price: 72.15 },
    { depth: 180, price: 76.85 },
    { depth: 195, price: 84.0 },
    { depth: 210, price: 88.82 },
    { depth: 225, price: 103.23 },
    { depth: 240, price: 115.9 },
    { depth: 260, price: 137.92 },
    { depth: 280, price: 141.67 },
    { depth: 300, price: 161.52 },
    { depth: 320, price: 173.52 },
    { depth: 340, price: 191.29 },
    { depth: 360, price: 209.9 },
    { depth: 380, price: 241.9 },
  ],
  softline: [
    { depth: 150, price: 62.61 },
    { depth: 175, price: 75.47 },
    { depth: 200, price: 86.52 },
    { depth: 225, price: 88.76 },
    { depth: 250, price: 109.61 },
    { depth: 275, price: 121.28 },
    { depth: 300, price: 131.92 },
  ],
};