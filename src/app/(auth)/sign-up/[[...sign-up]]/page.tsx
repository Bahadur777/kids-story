import { SignUp } from '@clerk/nextjs'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import sideImage from '@/app/public/logo.jpg'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-col-2'>
      <div>
        <Image src={sideImage} alt='side img' className='h-screen' ></Image>
      </div>
      <div><SignUp />
    </div>
    </div>
  )
}