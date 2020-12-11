export enum Brands {
  AMD = 'AMD',
  ASROCK = 'ASRock',
  ASUS = 'Asus',
  COLORFUL = 'Colorful',
  EVGA = 'EVGA',
  GALAX = 'GALAX',
  GIGABYTE = 'Gigabyte',
  INNO3D = 'Inno3D',
  MSI = 'MSI',
  NVIDIA = 'NVIDIA',
  PNY = 'PNY',
  POWERCOLOR = 'PowerColor',
  SAPPHIRE = 'Sapphire',
  XFX = 'XFX',
  ZOTAC = 'Zotac'
};

export type RTXBrands = Exclude<Brands, Brands.AMD | Brands.ASROCK | Brands.POWERCOLOR | Brands.SAPPHIRE | Brands.XFX>;
export type RXBrands = Exclude<Brands, Brands.NVIDIA | Brands.COLORFUL | Brands.EVGA | Brands.GALAX | Brands.INNO3D | Brands.PNY | Brands.ZOTAC>;

export enum NVIDIAChipsets {
  RTX_3060Ti = 'RTX 3060 Ti',
  RTX_3070 = 'RTX 3070',
  RTX_3080 = 'RTX 3080',
  RTX_3090 = 'RTX 3090'
};

export enum AMDChipsets {
  RX6800 = 'RX 6800',
  RX6800_XT = 'RX 6800XT',
  RX6900_XT = 'RX 6900XT'
};

export enum ZEN3 {
  R5_5600X = 'R5 5600X',
  R7_5800X = 'R7 5800X',
  R9_5900X = 'R9 5900X',
  R9_5950X = 'R9 5950X'
}