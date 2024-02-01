import { createContext } from "react"

import { ProductProps, CartProps } from "../@types"

type ProductContextProps = {
  cart: CartProps[],
  totalPrice: number,
  addToCart: (product: ProductProps) => void,
  removeFromCart: (product: ProductProps) => void,
  setTotalPrice: (productPrice: number) => void
}

const initialValues = {
  cart: [],
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  setTotalPrice: () => {}
}

export const ProductContext = createContext<ProductContextProps>(initialValues)
