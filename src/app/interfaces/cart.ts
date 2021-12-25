export interface Cart {
    title: string;
    img:string;
    quantity: number;
    price: number;
    totalPrice: number;
    variants: variant;
}

export interface variant {
    [name: string] : variantProp
}

export interface variantProp{
    spec : string,
    price: number
}