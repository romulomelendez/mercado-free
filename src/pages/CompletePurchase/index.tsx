import { useEffect } from "react"

import { Link } from "react-router-dom"

import { GiShoppingBag } from "react-icons/gi"

import { useProduct } from "../../hooks"

import { Summary } from "../../components"

export const CompletePurchase: React.FC = () => {

  const { cart, setCart, addToLocalStorage, totalPrice } = useProduct()

  useEffect(() => {
    const cartItems = localStorage.getItem("cart") as string
    if (cart.length === 0 && cartItems)
      return setCart(JSON.parse(cartItems))
    return addToLocalStorage("cart", JSON.stringify(cart))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col justify-between items-center w-screen h-full p-2 gap-2 bg-main-gray overflow-scroll">
      {
        cart.length !== 0 ?
          cart.map(cartItem => (
            <div
              className="flex flex-col justify-center items-center w-full bg-white rounded-sm"
              key={cartItem.product.id}
            >
              <Summary data={cartItem} />
            </div>
          ))
        :
          <div className="flex flex-col items-center mt-3 p-2 gap-4 w-max">
            <GiShoppingBag size={150} color="#cecece" />
            <span className="text-black text-xl">
              Build your shopping cart
            </span>
            <span className="text-slate-400 text-md">
              Add products and get free shipping
            </span>
            <Link to="/" className="w-full h-max rounded-md bg-blue-600 mt-2 p-3">
              <span className="text-white flex justify-center items-center text-md text-bold">
                Check Products
              </span>
            </Link>
          </div>
      }
      {
        cart.length > 0 && (
          <div className="flex justify-between items-center w-full">
            <span>
              TOTAL: {totalPrice}
            </span>
            <Link to="/payment" className="bg-blue-600 hover:bg-blue-700 text-sm p-2 text-white font-semibold rounded-full">
              PROCEED TO PAYMENT
            </Link>
          </div>
        )
      }
    </div>
  )
}