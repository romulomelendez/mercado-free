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
  clearLocalStorage: () => void,
  cartLength: number,
  setCartLength: (length: number) => void,
}

const initialValues = {
  cart: [],
  totalPrice: 0,
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  setTotalPrice: () => {},
  addToLocalStorage: () => {},
  clearLocalStorage: () => {},
  cartLength: 0,
  setCartLength: () => {}
}

export const ProductContext = createContext<ProductContextProps>(initialValues)
