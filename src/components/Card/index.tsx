import { ProductProps } from "../../@types"

type CardProps = {
    product: ProductProps
}

export const Card: React.FC<CardProps> = ({ product: { id, name, price, img } }: CardProps) => (
    <div
      key={ id }
      className="flex flex-col w-48 h-80 p-5 gap-1 justify-between items-start bg-white hover:bg-slate-200"
    >
        <img src={ img } alt="product image" height={150} width={150} />
        <span className="text-bold text-2xl">
            { name }
        </span>
        <span className="text-bold text-xl mt-5">
            R$ { price }
        </span>
    </div>
)