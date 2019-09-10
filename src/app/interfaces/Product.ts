export interface Product {
    $key?: string;
    idProduct: string;
    name: string;
    description: string;
    price: number;
    color: string;
    size: string;
    quantity: number;
    numCategory: category;
    active: boolean;
    image?: string;

}

export enum category {
    Conjuntos = 1,
    Vestidos = 2,
    Pantalones = 3,
    Blusas = 4,
    Accesorios = 5,
    Base = 6
}