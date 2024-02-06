import { useEffect } from "react"

import { Link } from "react-router-dom"

import { GiShoppingBag } from "react-icons/gi"

import { useProduct } from "../../hooks"

import { Purchase } from "../../components"

export const CompletePurchase: React.FC = () => {
  const { cart, setCart, addToLocalStorage, totalPrice, setTotalPrice } =
    useProduct()

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") as string)
    const totalPrice = Number(localStorage.getItem("totalPrice"))

    if (cart.length === 0 && cartItems) {
      setCart(cartItems)
      setTotalPrice(totalPrice)
      return
    }
    addToLocalStorage("cart", JSON.stringify(cart))
    addToLocalStorage("totalPrice", JSON.stringify(totalPrice))
    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col items-center w-screen h-screen p-2 gap-2 bg-main-gray">
      {cart.length !== 0 ? (
        <div className="flex flex-col justify-start items-center gap-2 center h-[720px] w-full overflow-scroll">
          {cart.map((cartItem) => (
            <div
              className="flex flex-col items-center bg-white w-full md:w-[900px] rounded-sm"
              key={cartItem.product.id}
            >
              <Purchase productData={cartItem} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-3 p-2 gap-4 w-max">
          <GiShoppingBag size={150} color="#cecece" />
          <span className="text-black text-xl">Build your shopping cart</span>
          <span className="text-slate-400 text-md">
            Add products and get free shipping
          </span>
          <Link to="/" className="w-full h-max rounded-md bg-blue-600 mt-2 p-3">
            <span className="text-white flex justify-center items-center text-md text-bold">
              Check Products
            </span>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex justify-between items-center h-max w-full bg-white shadow-sm p-5">
          <span className="text-lg text-black font-bold">
            TOTAL: R$ {totalPrice}
          </span>
          <Link
            to="/payment"
            className="bg-blue-600 hover:bg-blue-700 text-sm p-2 text-white font-semibold rounded-full"
          >
            PROCEED TO PAYMENT
          </Link>
        </div>
      )}
    </div>
  )
}
