import { FC } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import Link from "next/link"
import { useState } from "react"
import { NavbarItemType } from "@/components/utils/NavbarArrayandTypes"

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpended, setExpanded] = useState<boolean>(false);
    const [isTimeOut, setTimeOut] = useState<boolean>(false);

    function handleExpand() {
        setExpanded(!isExpended);
        setTimeout(() => {
            setTimeOut(!isTimeOut)
        }, 200);

    }
    return (
        <li className='list-none text-white bg-sky-500 rounded-md duration-300'>
            <div onClick={handleExpand} className=" py-2 px-3 flex duration-300 rounded-md items-center justify-between">
                <Link href={item.href}>{item.label}</Link>
            </div>
            <div className="flex flex-col space-y-1 mt-2">
            </div>
        </li>
    )
}

export default Expand