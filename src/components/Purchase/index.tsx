import { Counter, Total } from ".."

import { ProductProps } from "../../@types"

type PurchaseProps = {
  productData: {
    product: ProductProps
    quantity: number
    total: number
  }
}

export const Purchase: React.FC<PurchaseProps> = ({ productData }: PurchaseProps) => (
  <div className="flex justify-evenly md:w-[900px] h-max p-5 gap-3">
    <img src={productData.product.img} alt="product image" height={50} width={180} />
    <section className="flex flex-col justify-between items-center">
      <span className="text-lg font-semibold">
        {productData.product.name}
      </span>
      <span className="text-md font-bold">
        US$ {productData.product.price}
      </span>
      <Counter cartProduct={productData} />
      <Total total={productData.total} />
    </section>
  </div>
)
