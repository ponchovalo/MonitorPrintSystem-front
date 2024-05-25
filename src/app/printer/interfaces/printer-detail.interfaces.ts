export interface PrinterDetail {
    printerName:      string;
    printerBrand:     string;
    printerModel:     string;
    printerSerie:     string;
    printerType:      string;
    printerIp:        string;
    printerMac:       string;
    printerBuilding:  string;
    printerLocation:  string;
    printerCountOids: Oid[];
    printerLevelOids: Oid[];
    messageStatus:    string;
}

export interface Oid {
    name:   string;
    oid:    string;
    value?:  number;
    color?: string;
}
