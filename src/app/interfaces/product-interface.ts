
export interface Product {
    title: string,
    id: string,
    img: string,
    description: string,
    price: number
    variant: variant[]
}
export interface variantOption {
    spec: string,
    price: number
}
export interface variant {
    name: string,
    option: variantOption[]
}