interface IBook {
    id: string;
    title: string;
    author: string;
    available: boolean;
    category: string[];
    pages?: number;
    markDamage?: DamangeLogger
}


interface IBook {
    publisher: string;
    hasId: boolean
}

interface DamangeLogger {
    (reason: string): void;
}