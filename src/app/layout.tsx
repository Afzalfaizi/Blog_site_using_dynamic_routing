import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './(components)/NavBar/Navbar'
import MyProfilePic from './(components)/MyProfilePic/MyProfilePic'
import Footer from './(components)/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Faizi's Blog",
  description: 'Created by Afzal Faizi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar/>
        <MyProfilePic/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
