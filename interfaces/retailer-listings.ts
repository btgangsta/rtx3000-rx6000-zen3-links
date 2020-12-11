import { ComputerAllianceItem, JWItem, PCByteItem, PCCaseGearItem, ScorptecItem, MwaveItem } from '.';
import { Brands, NVIDIAChipsets, RTXBrands, ZEN3 } from './brands';

export interface RetailerResults {
  mwave?: MwaveItem,
  computeralliance?: ComputerAllianceItem,
  jw?: JWItem,
  pcbyte?: PCByteItem,
  pccg?: PCCaseGearItem,
  scorptec?: ScorptecItem,
  umart?: any,
  ple?: any,
  austin?: any,
  bpc?: any,
  shoppingexpress?: any,
  mightyape?: any,
  centrecom?: any,
  storm?: any,
  cpl?: any,
  itech?: any,
  skycomp?: any
}

export type RetailerListings = {
  [K in keyof RetailerResults]?: string
};

export type SimpleCard<B, C> = {
  brand: B,
  chipset: C
  card: string,
  model: string,
};

export type Card<B, C, T> = T & SimpleCard<B, C>;

export enum BaseStock {
  YES = 'yes',
  NO = 'no',
  NOT_AVAILABLE = 'not-available'
};

export interface BaseItem {
  stock: BaseStock,
  link: string,
  price?: number
};

export interface SimpleCPU {
  processor: ZEN3
};

export type CPU<T> = T & SimpleCPU;