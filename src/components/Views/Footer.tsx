import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="body-font">
  <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col border border-gray-700 mb-4 rounded-xl bg-slate-900">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <p className="text-2xl font-bold ml-3 text-white">Portfolio</p>
    </a>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
      <Link href={'https://www.facebook.com/profile.php?id=100055704636250'}><FaFacebookSquare size={40} color='blue'/></Link>
      <Link href={'https://twitter.com/WasifKh05957381'}><FaXTwitter size={40} color='white'/></Link>
      <Link href={'https://www.linkedin.com/in/muhammad-wasif-48282b274/'}><FaLinkedin size={40} color='#06b6d4'/></Link>
      <Link href={'https://www.instagram.com/muhammad_wasif19/'}><RiInstagramFill size={40} color='#e11d48'/></Link>
    </span>
  </div>
</footer>
  )
}

export default Footer