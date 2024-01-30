import { useState, ReactNode } from "react"

import { ProductContext } from "../contexts"

import { ProductProps, CartProps } from "../@types"

type ProductProviderProps = {
    children: ReactNode
}

export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [ cart, setCart ] = useState<CartProps[]>([])

    const addToCart = (product: ProductProps): void => setCart(allOtherProducts => [...allOtherProducts, {
        product: product,
        quantity: 1,
        total: +product.price
    }])

    const removeFromCart = ({ id }: ProductProps): void => {

        const newCartArray = cart.filter(cartItem => +cartItem.product.id !== +id)
        setCart(newCartArray)
    }

    return (
        <ProductContext.Provider value={{ cart, addToCart, removeFromCart }}>
            { children }
        </ProductContext.Provider>
    )
}