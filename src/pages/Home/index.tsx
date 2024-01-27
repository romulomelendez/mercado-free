"use client"

import { useState, useEffect, Suspense } from "react"

type ProductProps = {
  id: number | string,
  name: string,
  price: number | string,
  img: string
}

export const Home: React.FC = () => {

  const [ products, setProducts ] = useState<ProductProps[]>()
  
  const getProducts = async (): Promise<void> => {
    const products = await (await fetch("http://localhost:3000/products")).json()
    console.log(products)
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
            <div key={ product.id } className="flex flex-col w-48 h-full p-5 gap-1 justify-between items-start bg-white hover:bg-slate-300">
              <img src={ product.img } alt="product image" height={200} width={150} />
              <span className="text-bold text-xl">{ product.name }</span>
              <span className="text-semibold text-xl">R$ { product.price }</span>
            </div>
          ))
        }
      </Suspense>
    </div>
  )
}
