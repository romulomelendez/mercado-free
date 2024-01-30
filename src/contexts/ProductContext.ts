import { createContext } from "react"

import { ProductProps, CartProps } from "../@types"

type ProductContextProps = {
  cart: CartProps[],
  addToCart: (product: ProductProps) => void,
  removeFromCart: (product: ProductProps) => void,
}

const initialValues = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
}

export const ProductContext = createContext<ProductContextProps>(initialValues)
