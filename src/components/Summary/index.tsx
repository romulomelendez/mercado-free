import { Counter, Total } from ".."

import { useProduct } from "../../hooks"

import { ProductProps } from "../../@types"

type SummaryProps = {
  data: {
    product: ProductProps
    quantity: number
    total: number
  }
}

export const Summary: React.FC<SummaryProps> = ({ data }: SummaryProps) => {
  const { totalPrice } = useProduct()

  return (
    <div className="flex h-max p-5 gap-3 w-max">
      <img src={data.product.img} alt="product image" height={50} width={200} />
      <section className="flex flex-col justify-between items-center">
        <span className="text-lg font-semibold">{data.product.name}</span>
        <span className="text-md font-bold">US$ {data.product.price}</span>
        <Counter cartProduct={data} />
        <Total total={totalPrice} />
      </section>
    </div>
  )
}
