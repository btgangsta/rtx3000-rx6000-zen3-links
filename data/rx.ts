import { Brands, Card, AMDChipsets, RetailerListings, RXBrands } from '../interfaces';

export const rx6800: Card<RXBrands, AMDChipsets, RetailerListings>[] = [
  {
    chipset: AMDChipsets.RX6800,
    brand: Brands.GIGABYTE,
    card: 'Reference',
    model: 'GV-R68-16GC-B',
    pccg: 'https://www.pccasegear.com/products/52481/gigabyte-radeon-rx-6800-16gb-rdna-2'
  }
];

export const rx6800_xt: Card<RXBrands, AMDChipsets, RetailerListings>[] = [
  {
    chipset: AMDChipsets.RX6800_XT,
    brand: Brands.ASROCK,
    card: 'Phantom Gaming D OC',
    model: 'RX6800XT PGD 16GO',
    pccg: 'https://www.scorptec.com.au/product/graphics-cards/amd/86775-rx6800xt-pgd-16go'
  }
];

export const rx6900_xt: Card<RXBrands, AMDChipsets, RetailerListings>[] = [
  {
    chipset: AMDChipsets.RX6900_XT,
    brand: Brands.ASROCK,
    card: 'Reference',
    model: 'GV-R69XT-16GC-B',
    pccg: 'https://www.pccasegear.com/products/52745/gigabyte-radeon-rx-6900-xt-16gb-rdna-2'
  }
];