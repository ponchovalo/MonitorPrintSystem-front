import { Oid } from "./printer-detail.interfaces";

export interface PrinterModel {
  _id?: string;
  brand: string;
  name: string;
  type: string;
  countOids: Oid[];
  levelOids: Oid[];
}
