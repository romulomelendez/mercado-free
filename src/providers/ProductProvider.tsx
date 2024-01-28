import { useState, ReactNode } from "react"

import { ProductContext } from "../contexts"

import { ProductProps } from "../@types"

type ProductProviderProps = {
    children: ReactNode
}

export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [ cart, setCart ] = useState<ProductProps[]>([])

    const addToCart = (product: ProductProps): void => setCart(allOtherProducts => [...allOtherProducts, product])

    // const removeToCart = (product: ProductProps): void => {

    //     setCart(allOtherProducts => [...allOtherProducts, product])
    // }

    return (
        <ProductContext.Provider value={{ cart, addToCart }}>
            { children }
        </ProductContext.Provider>
    )
}