'use client'
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import Image from "next/image"
import Link from "next/link"
import { FaOpencart } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import DropDown from "./SubComponents/DropDown"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from 'react-icons/io'
import Expand from "./SubComponents/Expand"

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)
  return (
    <div className="text-white bg-slate-900 py-3 mr-4 ml-4 border border-gray-700 rounded-3xl mt-3">
      <div className="flex items-center justify-between pl-4 pr-4">
        <p className="text-2xl font-bold">Portfolio</p>
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="font-semibold text-xl flex gap-14 pl-0 pr-0">
            {NavbarArray.map((item: NavbarItemType) => (
              // eslint-disable-next-line react/jsx-key 
              <Link href={item.href} target="_blank" className="hover:text-gray-700">{item.label}</Link>
            ))}
          </ul>
        </div>
        <div className="cursor-pointer" onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ?
            <div className="flex lg:hidden"><IoMdClose size={30} /></div>
            :
            <div className="flex lg:hidden"><GiHamburgerMenu size={25} /></div>
          }
        </div>
        <Link
              href={"https://www.linkedin.com/in/muhammad-wasif-48282b274/"}
              target="_blank"
              className="hidden lg:flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg font-bold"
            >
              Contact
            </Link>
      </div>
      {
        isNavbarOpen && <Mobilenavbar />
      }
    </div>
  )
}

export default Navbar

const Mobilenavbar = () => {
  return (
    <div className="w-full px-6 py-4">
      {
        NavbarArray.map((item: NavbarItemType, index: number) => {
          return (
            <Expand key={index} item={item} />
          )
        })
      }
    </div>
  )
}
