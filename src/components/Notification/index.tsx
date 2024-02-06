import { useEffect } from "react"

import { useProduct } from "../../hooks"

export const Notification: React.FC = () => {
  const { cartLength, setCartLength } = useProduct()

  useEffect(() => {
    const getCartLengthInLocalStorage = () => {
      const cartLengthStoraged: number = JSON.parse(localStorage.getItem("cartLength") as string)
      
      if(cartLengthStoraged)
        return setCartLength(cartLengthStoraged + 1)
      return
    }

    getCartLengthInLocalStorage()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="absolute flex justify-center items-center text-white text-xs bg-red-600 w-5 h-5 right-4 top-1 rounded-full">
      {cartLength}
    </div>
  )
}
