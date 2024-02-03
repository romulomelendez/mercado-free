import { useEffect } from "react"

import { useProduct } from "../../hooks"

import { Link } from "react-router-dom"

export const Payment: React.FC = () => {
  const { setCart, clearLocalStorage } = useProduct()

  useEffect(() => {
    setCart([])
    clearLocalStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col justify-evenly items-center h-full bg-main-gray">
      <h1 className="text-xl">
        PAYMENT MADE SUCCESSFULLY 🥳
      </h1>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-sm p-2 text-white font-semibold rounded-full"
      >
        BACK TO HOME
      </Link>
    </div>
  )
}
