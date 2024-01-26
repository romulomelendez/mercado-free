import { CiSearch } from "react-icons/ci"

import { Searcher } from "../"

export const SearchContainer: React.FC = () => (
    <div className="flex gap-2 w-full shadow-md justify-center items-center bg-white rounded-sm p-1">
        <CiSearch color="#cecece" size={20} />
        <Searcher />
    </div>
)