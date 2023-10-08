import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between  bg-slate-900
    px-5 pt-10 pb-5 "> 
        <Link href="/" className='label-box text-white font-extrabold sm:text-4xl pt-2 ml-20'> 
        <h1 className="dishes"> Dishes.Com </h1></Link>
        <Link href={"/addDish"} className='add-dish bg-white  px-5 pt-2 rounded-md 
        mb-2 mr-6 text-lg font-bold'>Add Dish</Link>
    </nav>
  )
}

export default Navbar