import { useState } from "react"

import { ProductContext } from "../contexts"

import { ProductProps, CartProps, ProductProviderProps,  } from "../@types"

export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [cart, setCart] = useState<CartProps[]>([])
    const [cartLength, setCartLength] = useState<number>(0)
    const [itemQuantity, setItemQuantity] = useState<number>(1)
    const [finalTotal, setFinalTotal] = useState<number>(0)

    const addToCart = (product: ProductProps): void => {
        setCart(allOtherProducts => [...allOtherProducts, {
            product: product,
            quantity: 1,
            total: +product.price
        }])
        setCartLength(cartLength + 1)
        setFinalTotal(finalTotal + product.price)

        addToLocalStorage("cartLength", JSON.stringify(cartLength))
        addToLocalStorage("finalTotal", JSON.stringify(finalTotal))
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
            addToLocalStorage,
            clearLocalStorage,
            cartLength,
            setCartLength,
            itemQuantity,
            setItemQuantity,
            finalTotal,
            setFinalTotal
        }}>
            { children }
        </ProductContext.Provider>
    )
}