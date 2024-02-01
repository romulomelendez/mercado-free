import { Link } from "react-router-dom"

export const Payment: React.FC = () => (
  <div className="flex flex-col justify-evenly items-center h-full bg-main-gray">
    <h1>PAYMENT MADE SUCCESSFULLY 🥳</h1>
    <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-sm p-2 text-white font-semibold rounded-full">
        BACK TO HOME
    </Link>
  </div>
)
