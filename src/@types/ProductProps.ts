import { ReactNode } from "react"

export type ProductProviderProps = {
  children: ReactNode
}

export type ProductProps = {
  id: number
  name: string
  price: number
  img: string
}
