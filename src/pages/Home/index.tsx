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
    <div className="h-screen w-screen bg-light-gray">
      <Suspense fallback={<p>Loading Products...</p>}>
        {
          products && products.map(product => (
            <div key={ product.id } className="flex flex-col">
              <span>{ product.name }</span>
              <span>{ product.price }</span>
              <img src={ product.img } alt="product image" height={200} width={200} />
            </div>
          ))
        }
      </Suspense>
    </div>
  )
}
