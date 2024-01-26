import { IoCartOutline } from "react-icons/io5"
import { CiMenuBurger } from "react-icons/ci"
import { LuMapPin } from "react-icons/lu"
import { MdKeyboardArrowRight } from "react-icons/md"

import { Logo, SearchContainer } from "../"

export const Header = () => {
    return (
        <div className="flex flex-col bg-light-yellow">
            <section className="flex justify-center items-center p-2 gap-3">
                <Logo />
                <SearchContainer />
                <CiMenuBurger size={25} className="cursor-pointer" />
                <IoCartOutline size={25} className="cursor-pointer" />
            </section>
            <section className="flex w-full justify-between items-center p-2 gap-3">
                <div className="flex gap-2">
                    <LuMapPin size={15} className="text-dark-yellow" />
                    <span className="text-dark-yellow text-xs">Send to P. Sherman, 42 Wallaby Way, Sydney</span>
                </div>
                <MdKeyboardArrowRight size={15} className="text-dark-yellow" />
            </section>
        </div>
    )
}