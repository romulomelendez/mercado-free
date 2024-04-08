import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"

import { CartProps } from "../../@types"

import { useProduct } from "../../hooks"
import { useState } from "react"

type CounterProps = {
  cartProduct: CartProps
}

export const Counter: React.FC<CounterProps> = ({ cartProduct }: CounterProps) => {

  const { cart, addToLocalStorage, finalTotal, setFinalTotal} = useProduct()
  const [itemQuantity, setItemquantity] = useState(1)

  const handleFinalPrice = (total: number): void => setFinalTotal(total)

  const addProductQuantity = () => {
    cartProduct.quantity++
    cartProduct.total = cartProduct.product.price * cartProduct.quantity
    setItemquantity(itemQuantity + 1)
    handleFinalPrice(finalTotal + cartProduct.product.price)

    addToLocalStorage("cart", JSON.stringify(cart))
    addToLocalStorage("finalTotal", JSON.stringify(finalTotal))
  }

  const removeProductQuantity = () => {
    cartProduct.quantity--
    cartProduct.total -= cartProduct.product.price
    setItemquantity(itemQuantity - 1)
    handleFinalPrice(finalTotal - cartProduct.product.price)

    addToLocalStorage("cart", JSON.stringify(cart))
    addToLocalStorage("finalTotal", JSON.stringify(finalTotal))
  }

  return (
    <>
      <section className="flex justify-around w-28 h-max items-center bg-slate-200 rounded-full">
        <button
          type="button"
          className="flex justify-center p-2 hover:bg-gray-300 rounded-full h-full items-center"
          onClick={removeProductQuantity}
          disabled={cartProduct.quantity === 1 ? true : false}
        >  
          <FaMinus size={10} color="gray" />
        </button>
        <span className="text-md">
          { itemQuantity }
        </span>
        <button
          type="button"
          className="flex justify-center p-2 hover:bg-gray-300 rounded-full h-full items-center"
          onClick={addProductQuantity}
        >
          <FaPlus size={10} color="gray" />
        </button>
      </section>
    </>
  )
}
