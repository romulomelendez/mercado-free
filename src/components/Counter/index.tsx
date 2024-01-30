import { useState } from "react"

import { FaRegTrashAlt } from "react-icons/fa"
import { IoAddCircle } from "react-icons/io5"

type CounterPriceProps = {
  price: number
}

export const Counter: React.FC<CounterPriceProps> = ({ price }: CounterPriceProps) => {

    const [quantity, setQuantity] = useState<number>(1)

    return (
        <>
            <section className="flex justify-around w-full items-center gap-2 p-2">
                <button
                  type="button"
                  className="flex justify-center bg-red-600 w-1/2 p-2"
                  onClick={ () => setQuantity(quantity - 1) }
                >
                    <FaRegTrashAlt size={20} color="white" />
                </button>
                <span className="text-xl p-2">
                    { quantity }
                </span>
                <button
                  type="button"
                  className="flex justify-center bg-blue-600 w-1/2 p-2"
                  onClick={ () => setQuantity(quantity + 1) }
                >
                    <IoAddCircle size={20} color="white" />
                </button>
            </section>
            <span className="text-xl">
                { price * quantity }
            </span>
        </>
  )
}
