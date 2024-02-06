import { useState } from "react"

import { ProductContext } from "../contexts"

import { ProductProps, CartProps, ProductProviderProps,  } from "../@types"

export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [cart, setCart] = useState<CartProps[]>([])
    const [cartLength, setCartLength] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const addToCart = (product: ProductProps): void => {
        setCart(allOtherProducts => [...allOtherProducts, {
            product: product,
            quantity: 1,
            total: +product.price
        }])
        const auxTotal = totalPrice + product.price
        setTotalPrice(auxTotal)
        setCartLength(cartLength + 1)

        addToLocalStorage("totalPrice", JSON.stringify(auxTotal))
        addToLocalStorage("cartLength", JSON.stringify(cartLength))
    }

    const removeFromCart = ({ id }: ProductProps): void => {

        const newCartArray = cart.filter(cartItem => +cartItem.product.id !== +id)
        setCart(newCartArray)
        setCartLength(cartLength - 1)

        addToLocalStorage("cart", JSON.stringify(newCartArray))
        addToLocalStorage("cartLength", JSON.stringify(cartLength))
    }

    const addToLocalStorage = (key: string, value: string): void => localStorage.setItem(key, value)

    const clearLocalStorage = (): void => localStorage.clear()

    return (
        <ProductContext.Provider value={{
            cart,
            setCart,
            addToCart,
            removeFromCart,
            totalPrice,
            setTotalPrice,
            addToLocalStorage,
            clearLocalStorage,
            cartLength,
            setCartLength
        }}>
            { children }
        </ProductContext.Provider>
    )
}