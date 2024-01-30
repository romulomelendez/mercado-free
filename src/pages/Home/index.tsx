import { useState, useEffect, Suspense } from "react"

import { Card } from "../../components/Card"

import { useProduct } from "../../hooks"
import { ProductProps } from "../../@types"

import { CiShoppingCart } from "react-icons/ci"

export const Home: React.FC = () => {

  const [ products, setProducts ] = useState<ProductProps[]>([])
  const { addToCart } = useProduct()
  
  const getProducts = async (): Promise<void> => {

    const products = await (await fetch(import.meta.env.VITE_APP_BASE_API_URL + "/products")).json()
    setProducts(products)
  }

  useEffect(() => {
    return () => {
      getProducts()
    }
  }, [])
  
  return (
    <div className="bg-light-gray grid grid-cols-2 h-full w-full overflow-scroll place-items-center max-xm:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 p-5 gap-5 md:gap-x-16 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 cursor-pointer">
      <Suspense fallback={<p>Loading Products...</p>}>
        {
          products && products.map(product => (
            <div className="flex flex-col items-center h-max bg-white hover:bg-slate-300 p-2 rounded-sm" key={product.id}>
              <Card product={product} />
              <button
                type="button"
                className="flex justify-center items-center w-44 h-8 bg-blue-700 hover:bg-blue-900 p-1 gap-2 rounded-md mt-3"
                onClick={() => addToCart(product)}
              >
                  <CiShoppingCart size={28} color="white" />
                  <span className="text-white text-semibold text-lg">
                      Add to cart
                  </span>
              </button>
            </div>
          ))
        }
      </Suspense>
    </div>
  )
}
