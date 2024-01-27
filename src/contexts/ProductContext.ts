import { createContext } from "react"

type ProductProps = {
  id: number | string
  name: string
  price: number | string
  img: string
}

const initialValues = {
  id: 0,
  name: "",
  price: 0,
  img: "",
}

export const ProductContext = createContext<ProductProps>(initialValues)
