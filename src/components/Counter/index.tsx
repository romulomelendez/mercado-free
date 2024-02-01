import { FaRegTrashAlt } from "react-icons/fa"
import { IoAddCircle } from "react-icons/io5"

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

    const auxArray: CartProps[] = cart
    const productIndex = cart.findIndex(item => item.product.id === cartProduct.product.id)

    auxArray[productIndex] = {
      product: cartProduct.product,
      quantity: cartProduct.quantity,
      total: cartProduct.total
    }
    addToLocalStorage("cart", JSON.stringify(auxArray))
    setTotalPrice(totalPrice + cartProduct.total)
  }

  const removeProductQuantity = () => {
    cartProduct.quantity--
    cartProduct.total -= cartProduct.product.price
    setTotalPrice(cartProduct.total)
  }

  return (
    <>
      <section className="flex justify-around w-full items-center gap-2 p-2">
        <button
          type="button"
          className="flex justify-center bg-red-600 w-1/2 p-2"
          onClick={removeProductQuantity}
        >  
          <FaRegTrashAlt size={20} color="white" />
        </button>
        <span className="text-xl p-2">
          { cartProduct.quantity }
        </span>
        <button
          type="button"
          className="flex justify-center bg-blue-600 w-1/2 p-2"
          onClick={() => addProductQuantity()}
        >
          <IoAddCircle size={20} color="white" />
        </button>
      </section>
    </>
  )
}
