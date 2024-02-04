import { Counter, Total } from ".."

import { ProductProps } from "../../@types"

type PurchaseProps = {
  data: {
    product: ProductProps
    quantity: number
    total: number
  }
}

export const Purchase: React.FC<PurchaseProps> = ({ data }: PurchaseProps) => {
  return (
    <div className="flex justify-evenly md:w-[900px] h-max p-5 gap-3">
      <img src={data.product.img} alt="product image" height={50} width={180} />
      <section className="flex flex-col justify-between items-center">
        <span className="text-lg font-semibold">{data.product.name}</span>
        <span className="text-md font-bold">US$ {data.product.price}</span>
        <Counter cartProduct={data} />
        <Total total={data.total} />
      </section>
    </div>
  )
}
