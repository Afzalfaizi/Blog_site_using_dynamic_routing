import React from 'react'
import Link from 'next/link'
import {FaGithub, FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-slate-600 text-white mt-16 p-6 text-center">
        Copyright &copy; 2019 - {'Afzal faizi'}
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
              <Link className="text-white/90 hover:text-white" href={"https://github.com/Afzalfaizi"}><FaGithub/></Link>
              <Link className="text-white/90 hover:text-white" href={"https://twitter.com/Afzal_faizi_"}><FaTwitter/></Link>
              <Link className="text-white/90 hover:text-white" href={"https://www.facebook.com/Afzalfaizii"}><FaFacebook/></Link>
              <Link className="text-white/90 hover:text-white" href={"https://www.linkedin.com/in/mafzalfaizi/"}><FaLinkedin/></Link>
        </div>

    </footer>
  )
}
