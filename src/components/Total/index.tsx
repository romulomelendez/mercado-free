type TotalProps = {
  total: number
}

export const Total: React.FC<TotalProps> = ({ total }: TotalProps) => {
  return (
    <span className="font-bold text-slate-500 text-md p-2">
      TOTAL: {total}
    </span>
  )
}
