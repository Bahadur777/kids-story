"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import urlImg1 from '@/app/public/story1.jpg'
import urlImg2 from '@/app/public/story2.jpg'
import urlImg3 from '@/app/public/story3.jpg'
export interface optionField{
    label:string,
    imageUrl:string,
    isFree:boolean
}
const AgeGroupe = ({userSelection}:any) => {
    const OptionList=[
        {
            label:'0-2 Years',
            imageUrl:urlImg1,
            isFree:true
        },
        {
            label:'3-5 Years',
            imageUrl:urlImg2,
            isFree:true
        },
        {
            label:'5-8 Years',
            imageUrl:urlImg3,
            isFree:true
        }
    ]
    const [selectedOption, setSelectedOption]= useState<string>()
    const userSelect=(option:optionField)=>{
        setSelectedOption(option.label)
        userSelection({
            fieldValue:option?.label,
            fieldName:'AgeGroup'

        })
    }
  return (
    <div>
        <label htmlFor="" className='font-extrabold' >3. Age group</label>
        <div className='grid grid-cols-1 gap-2 justify-center justify-items-center md:grid-cols-3 sm:grid-cols-2 mt-4 md:gap-2 sm:gap-2'>
            {
                OptionList.map((option, index)=>(
                    <div  className={`relative grayscale hover:grayscale-0 p-2 cursor-pointer
                        ${selectedOption==option.label?'grayscale-0 border-2 rounded-3xl border-primary ':'grayscale'}
                    `}key={index} onClick={()=>userSelect(option)}>
                        <h2 className=' absolute  text-center text-white bottom-2 w-full'>{option.label}</h2>
                      <Image src={option.imageUrl} alt={option.label} width={300} height={500} className='rounded-2xl h-[200px] '/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AgeGroupe