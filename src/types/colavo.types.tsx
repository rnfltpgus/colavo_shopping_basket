export enum CurrencyCode {
  KRW = "KRW",
  USD = "USD",
}

export enum FetchStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  FAIL = "fail",
}

export interface Item {
  id: string;
  count: number;
  name: string;
  price: number;
}

export interface Items {
  [key: string]: Item;
}

export interface Discount {
  id: string;
  name: string;
  rate: number;
}

export interface Discounts {
  [key: string]: Discount;
}

export interface FetchError {
  message: string;
  code: number;
}

export interface ColavoData {
  currencyCode: CurrencyCode;
  items: {
    [key: string]: Item;
  };
  discounts: {
    [key: string]: Discount;
  };
}

export interface FetchDataState {
  data: ColavoData;
  status: FetchStatus;
  error: FetchError | null;
}
