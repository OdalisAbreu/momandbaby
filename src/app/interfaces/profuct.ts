export interface product {
    $key?: string;
    idProduct: string;
    name: string;
    description: string;
    price: number;
    color: string;
    size: string;
    quantity: number;
    category: category;
    active: boolean;

}

export enum category{
    conjuntos = 1,
    vestidos = 2,
    pantalones = 3,
    blusas = 4,
    accesorios = 5


}