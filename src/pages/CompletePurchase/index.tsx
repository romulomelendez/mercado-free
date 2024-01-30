import { Link } from "react-router-dom"

import { Card, Counter } from "../../components"

import { GiShoppingBag } from "react-icons/gi"

import { useProduct } from "../../hooks"


export const CompletePurchase: React.FC = () => {

  const { cart } = useProduct()

  return (
    <div className="flex flex-col justify-start items-center w-screen h-full p-2 gap-2 bg-main-gray overflow-scroll">
      {
        cart.length != 0 ?
          cart.map(cartItem => (
            <div
              className="bg-white w-full flex flex-col justify-center items-center rounded-sm"
              key={cartItem.product.id}
            >
              <Card product={cartItem.product} />
              <Counter price={cartItem.product.price} />
            </div>
          ))
        :
          <div className="flex flex-col items-center mt-3 p-2 gap-4 w-full">
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
    </div>
  )
  
}