import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"

import { CartProps } from "../../@types"

import { useProduct } from "../../hooks"

type CounterProps = {
  cartProduct: CartProps
}

export const Counter: React.FC<CounterProps> = ({ cartProduct }: CounterProps) => {

  const { cart, totalPrice, setTotalPrice, addToLocalStorage } = useProduct()

  const addProductQuantity = () => {
    cartProduct.quantity++
    cartProduct.total = cartProduct.product.price * cartProduct.quantity

    setTotalPrice(totalPrice + cartProduct.total)
    addToLocalStorage("cart", JSON.stringify(cart))
    addToLocalStorage("totalPrice", JSON.stringify(totalPrice))
  }

  const removeProductQuantity = () => {
    cartProduct.quantity--
    cartProduct.total -= cartProduct.product.price
    
    setTotalPrice(cartProduct.total)
    addToLocalStorage("cart", JSON.stringify(cart))
    addToLocalStorage("totalPrice", JSON.stringify(totalPrice))
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
          { cartProduct.quantity }
        </span>
        <button
          type="button"
          className="flex justify-center p-2 hover:bg-gray-300 rounded-full h-full items-center"
          onClick={() => addProductQuantity()}
        >
          <FaPlus size={10} color="gray" />
        </button>
      </section>
    </>
  )
}
