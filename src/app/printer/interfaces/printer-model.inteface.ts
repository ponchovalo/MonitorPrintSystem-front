import { Oid } from "./printer-detail.interfaces";

export interface PrinterModel {
  brand: string;
  name: string;
  type: string;
  countOids: Oid[];
  levelOids: Oid[];
}
