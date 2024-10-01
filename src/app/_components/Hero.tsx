import { Button } from '@nextui-org/react'
import React from 'react'
import Cover from '@/app/public/hero.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex justify-center items-center gap-8 p-6 bg-[#cad3ff]'>
      <div className='w-full flex flex-wrap items-center'>
        {/* child 1 start */}
        <div className='w-full md:w-1/2 '>
          <h1 className=' text-primary text-[1.5rem] w-full lg:text-[6rem] p-3  h-full md:text-[3.5rem] lg:leading-[7rem] md:leading-[3.5rem]  sm:leading-[2rem] sm:text-[2.5rem]' >Craft magical story for kids in a minute</h1>
          <Link href={'/create-story'}>
          <Button color='primary'>Create Story</Button>
          </Link>
        </div>
        {/* child 1 end */}
        {/* child 2 start */}
        <div className='w-full md:w-1/2'>
        <Image
        src={Cover}
        width={500}
        height={500}
        alt="Picture of the author"
      />
        </div>
        {/* child 2 end */}
      </div>
    </div>
  )
}

export default Hero