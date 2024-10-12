import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import SideImg from '@/app/public/logo.jpg'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src={SideImg} height={700} width={1000} alt='side img' className='w-full h-screen'></Image>
      </div>
      <div className='flex justify-center items-center h-screen order-first md:order-last'><SignIn /></div>
    </div>
  )
}