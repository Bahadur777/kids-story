import { SignUp } from '@clerk/nextjs'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import sideImage from '@/app/public/logo.jpg'

export default function Page() {
  return (
    <div className='grid md:grid-cols-2 gap-3 md:gap-2 '>
      <div className='hidden md:block'>
        <Image src={sideImage} alt='side img' height={700} width={1000} className=' h-screen '/>
      </div>
      <div className='flex justify-center order-first md:order-last'>
        <SignUp/>
      </div>
    </div>
  )
}