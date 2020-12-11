import { BaseItem } from '.';

export enum JWOnlineStatus {
  YES = 'yes',
  PARTNER = 'partner',
  STORE = 'store',
  NO = 'no',
  NOT_AVAILABLE = 'not-available'
};

export enum JWStoreStatus {
  YES = 'yes',
  LIMITED = 'limited',
  ORDER_WAREHOUSE = 'order-warehouse',
  ORDER_PARTNER = 'order-partner',
  NO = 'no'
};

export interface JWItem extends Omit<BaseItem, 'stock'> {
  stock: JWOnlineStatus,
  dispatch?: string,
  bankstown?: JWStoreStatus,
  blacktown?: JWStoreStatus,
  castlehill?: JWStoreStatus
};

export type JWGetStatus = Pick<JWItem, 'stock' | 'bankstown' | 'castlehill' | 'blacktown'>;