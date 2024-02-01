import { useState } from "react"

import { ProductContext } from "../contexts"

import { ProductProps, CartProps, ProductProviderProps,  } from "../@types"

export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [cart, setCart] = useState<CartProps[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const addToCart = (product: ProductProps): void => setCart(allOtherProducts => [...allOtherProducts, {
        product: product,
        quantity: 1,
        total: +product.price
    }])

    const removeFromCart = ({ id }: ProductProps): void => {

        const newCartArray = cart.filter(cartItem => +cartItem.product.id !== +id)
        setCart(newCartArray)
        localStorage.removeItem("cart")
    }

    const addToLocalStorage = (key: string, value: string): void => localStorage.setItem(key, value)

    const removeFromLocalStorage = (key: string): void => localStorage.removeItem(key)

    return (
        <ProductContext.Provider value={{
            cart,
            setCart,
            addToCart,
            removeFromCart,
            totalPrice,
            setTotalPrice,
            addToLocalStorage,
            removeFromLocalStorage
        }}>
            { children }
        </ProductContext.Provider>
    )
}