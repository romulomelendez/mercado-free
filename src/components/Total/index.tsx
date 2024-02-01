type TotalProps = {
  total: number
}

export const Total: React.FC<TotalProps> = ({ total }: TotalProps) => {
  return (
    <span className="font-bold text-black text-2xl p-2">
      TOTAL: {total}
    </span>
  )
}
