import { Link } from "react-router-dom"

import { Card } from "../../components"

import { useProduct } from "../../hooks"

import { FaRegTrashAlt } from "react-icons/fa"
import { IoAddCircle } from "react-icons/io5"
import { GiShoppingBag } from "react-icons/gi"

export const CompletePurchase: React.FC = () => {

  const { cart } = useProduct()

  return (
    <div className="flex flex-col justify-start items-center w-screen h-full p-2 gap-2 bg-main-gray overflow-scroll">
      {
        cart.length != 0 ?
          cart.map(cartItem => (
            <div className="bg-white rounded-sm" key={ cartItem.id }>
              <Card product={cartItem} />
              <section className="flex justify-around p-2">
                <button type="button" className="flex justify-center bg-blue-400 w-1/2 p-2">
                  <IoAddCircle size={20} color="white" />
                </button>
                <button type="button" className="flex justify-center bg-red-600 w-1/2 p-2">
                  <FaRegTrashAlt size={20} color="white" />
                </button>
              </section>
            </div>
          ))
        :
          <div className="flex flex-col items-center mt-3 p-2 gap-4 w-full">
            <GiShoppingBag color="#cecece" size={150} />
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