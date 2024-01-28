"use client"

import { useState, useEffect, Suspense } from "react"

import { useProduct } from "../../hooks"

import { CiShoppingCart } from "react-icons/ci"

import { ProductProps } from "../../@types"

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
    <div className="bg-light-gray grid grid-cols-2 h-full w-full place-items-center max-xm:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 p-5 gap-5 md:gap-x-16 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 cursor-pointer">
      <Suspense fallback={<p>Loading Products...</p>}>
        {
          products && products.map(product => (
            <div key={ product.id } className="flex flex-col w-48 h-full p-5 gap-1 justify-between items-start bg-white hover:bg-slate-200">
              <img src={ product.img } alt="product image" height={200} width={150} />
              <span className="text-bold text-2xl">{ product.name }</span>
              <span className="text-bold text-xl mt-5">R$ { product.price }</span>
              <button
                type="button"
                className="flex w-full h-max bg-blue-700 hover:bg-blue-900 p-1 gap-2 rounded-md justify-center items-center mt-5"
                onClick={() => addToCart(product)}
                >
                  <CiShoppingCart size={28} color="white"/>
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
