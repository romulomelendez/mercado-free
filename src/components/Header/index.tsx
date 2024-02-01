import { IoCartOutline } from "react-icons/io5"
import { CiMenuBurger } from "react-icons/ci"
import { LuMapPin } from "react-icons/lu"
import { MdKeyboardArrowRight } from "react-icons/md"

import { Logo, SearchContainer, Notification } from ".."

import { Link } from "react-router-dom"
import { useProduct } from "../../hooks"

export const Header = () => {

    const { cart } = useProduct()
    
    return (
        <div className="flex flex-col w-full bg-light-yellow">
            <section className="flex justify-center items-center p-2 gap-2">
                <Logo />
                <SearchContainer />
                <Link to="/">
                    <CiMenuBurger size={25} className="cursor-pointer" />
                </Link>
                <Link to="/purchases">
                    <IoCartOutline size={25} className="cursor-pointer" />
                </Link>
                {
                    cart.length !== 0 && <Notification />
                }
            </section>
            <section className="flex w-full justify-between items-center p-2 gap-3">
                <div className="flex gap-2 w-full">
                    <LuMapPin size={15} className="text-dark-yellow" />
                    <span className="text-dark-yellow text-xs">Send to P. Sherman, 42 Wallaby Way, Sydney</span>
                </div>
                <MdKeyboardArrowRight size={15} className="text-dark-yellow" />
            </section>
        </div>
    )
}