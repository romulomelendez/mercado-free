import { ProductProps } from "./ProductProps"

export type CartProps = {
    product: ProductProps,
    quantity: number,
    total: number
}