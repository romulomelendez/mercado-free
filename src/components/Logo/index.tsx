import { Link } from "react-router-dom"
import MercadoFreePageLogo from "../../assets/mercado-free-page-logo.png"

export const Logo: React.FC = () => (
    <Link to="/">
        <img src={MercadoFreePageLogo} className="cursor-pointer" alt="Logo" height="45" width="45" />
    </Link>
)