import { createContext } from "react"

import { ProductProps, CartProps } from "../@types"

type ProductContextProps = {
  cart: CartProps[],
  totalPrice: number,
  setCart: (product: CartProps[]) => void,
  addToCart: (product: ProductProps) => void,
  removeFromCart: (product: ProductProps) => void,
  setTotalPrice: (productPrice: number) => void,
  addToLocalStorage: (key: string, value: string) => void,
  removeFromLocalStorage: (key: string) => void
}

const initialValues = {
  cart: [],
  totalPrice: 0,
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  setTotalPrice: () => {},
  addToLocalStorage: () => {},
  removeFromLocalStorage: () => {}
}

export const ProductContext = createContext<ProductContextProps>(initialValues)
