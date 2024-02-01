import { useProduct } from "../../hooks"

export const Notification: React.FC = () => {
    const { cart } = useProduct()

    return (
        <div className="absolute flex justify-center items-center text-white text-xs bg-red-600 w-5 h-5 right-4 top-1 rounded-full">
            { cart.length }
        </div>
    )
}