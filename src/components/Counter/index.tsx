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

    addToLocalStorage("cart", JSON.stringify(cart))
    setTotalPrice(totalPrice + cartProduct.total)
  }

  const removeProductQuantity = () => {
    cartProduct.quantity--
    cartProduct.total -= cartProduct.product.price
    
    addToLocalStorage("cart", JSON.stringify(cart))
    setTotalPrice(cartProduct.total)
  }

  return (
    <>
      <section className="flex justify-around w-32 items-center gap-2 p-1 mb-1 bg-slate-200 rounded-full">
        <button
          type="button"
          className="flex justify-center w-1/2 p-2 hover:bg-gray-300 rounded-full h-full items-center"
          onClick={removeProductQuantity}
          disabled={cartProduct.quantity === 1 ? true : false}
        >  
          <FaMinus size={18} color="gray" />
        </button>
        <span className="text-xl p-2">
          { cartProduct.quantity }
        </span>
        <button
          type="button"
          className="flex justify-center w-1/2 p-2 hover:bg-gray-300 rounded-full h-full items-center"
          onClick={() => addProductQuantity()}
        >
          <FaPlus size={18} color="gray" />
        </button>
      </section>
    </>
  )
}
