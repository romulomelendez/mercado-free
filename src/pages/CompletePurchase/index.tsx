import { Link } from "react-router-dom"

import { GiShoppingBag } from "react-icons/gi"

export const CompletePurchase: React.FC = () => {

  return (
    <div className="flex justify-center items-start w-screen h-full p-2 bg-main-gray">
      <div className="flex flex-col items-center mt-3 p-2 gap-4 w-full">
        <GiShoppingBag color="#cecece" size={150} />
        <span className="text-black text-xl">
          Build your shopping cart
        </span>
        <span className="text-slate-400 text-md">
          Add products and get free shipping
        </span>
        <Link to="/app" className="w-full h-max rounded-md bg-blue-600 mt-2 p-3">
          <span className="text-white flex justify-center items-center text-md text-bold">
            Check Products
          </span>
        </Link>
      </div>
    </div>
  )
  
}