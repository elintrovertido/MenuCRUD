import DishList from '@/components/DishList'
import Footer from '@/components/Footer'
import Image from 'next/image'




export default function Home() {
  return (
    <main className="main-page flex min-h-screen
    flex-col items-center justify-between ">
      
      <div>
        {/* <DishList/> */}
        
      </div>
      <Footer/>
    </main>
  )
}
