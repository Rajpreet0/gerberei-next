export interface MarktData {
    _id: string;
    datum: string;
    uhrzeit: string;
    standort: string;
    marktTitel: string;
    marktBeschreibung: string;
    hintergrundBild: {
        asset: {
            url: string
        }
    };
}

export interface ProduktData {
    _id: string;
    titel: string;
    slug: {
       current: string;
    };
    kategorie: string;
    produktBeschreibung: string;
    produktBild: {
        asset: {
            url: string;
        }
    };
    preis: number;
}

