export enum Type {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

export enum Status {
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
  DRAFT = 'DRAFT',
}

export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export interface TableItemData {
  [index: string]: string | number;
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteUrl: string;
}
