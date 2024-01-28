import { createContext } from "react"

import { ProductProps } from "../@types"

type ProductContextProps = {
  cart: ProductProps[],
  addToCart: (product: ProductProps) => void,
  // removeFromCart: (product: ProductProps) => void,
}

const initialValues = {
  cart: [],
  addToCart: () => {},
  // removeFromCart: () => {},
}

export const ProductContext = createContext<ProductContextProps>(initialValues)
