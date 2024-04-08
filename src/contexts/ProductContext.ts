import { createContext } from "react"

import { ProductProps, CartProps } from "../@types"

type ProductContextProps = {
  cart: CartProps[],
  setCart: (product: CartProps[]) => void,
  addToCart: (product: ProductProps) => void,
  removeFromCart: (product: ProductProps) => void,
  addToLocalStorage: (key: string, value: string) => void,
  clearLocalStorage: () => void,
  cartLength: number,
  setCartLength: (length: number) => void,
  itemQuantity?: number,
  setItemQuantity: (quantity: number) => void
  finalTotal: number,
  setFinalTotal: (finalTotal: number) => void
}

const initialValues = {
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  addToLocalStorage: () => {},
  clearLocalStorage: () => {},
  cartLength: 0,
  setCartLength: () => {},
  ItemQuantity: 1,
  setItemQuantity: () => {},
  finalTotal: 0,
  setFinalTotal: () => {},
}

export const ProductContext = createContext<ProductContextProps>(initialValues)
