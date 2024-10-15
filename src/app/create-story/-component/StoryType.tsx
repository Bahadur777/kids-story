"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import urlImg1 from '@/app/public/story1.jpg'
import urlImg2 from '@/app/public/story2.jpg'
import urlImg3 from '@/app/public/story3.jpg'

const StoryType = () => {
    const OptionList=[
        {
            label:'Story1',
            imageUrl:urlImg1,
            isFree:true
        },
        {
            label:'Story2',
            imageUrl:urlImg2,
            isFree:true
        },
        {
            label:'Story3',
            imageUrl:urlImg3,
            isFree:true
        }
    ]
    const [selectedOption, setSelectedOption]= useState<string>()
  return (
    <div>
        <label htmlFor="" className='font-extrabold' >2. Story</label>
        <div className='grid grid-cols-1 gap-2 justify-center justify-items-center md:grid-cols-3 sm:grid-cols-2 mt-4 md:gap-2 sm:gap-2'>
            {
                OptionList.map((option, index)=>(
                    <div  className={`relative grayscale hover:grayscale-0 p-2 cursor-pointer
                        ${selectedOption==option.label?'grayscale-0 border-2 rounded-3xl border-primary ':'grayscale'}
                    `}key={index} onClick={()=>setSelectedOption(option.label)}>
                        <h2 className=' absolute  text-center text-white bottom-2 w-full'>{option.label}</h2>
                      <Image src={option.imageUrl} alt={option.label} width={300} height={500} className='rounded-2xl h-[200px] '/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default StoryType