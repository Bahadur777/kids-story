import Image from 'next/image'
import React from 'react'
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
  return (
    <div>
        <label htmlFor="" className='font-extrabold' >2. Story</label>
        <div className='grid grid-cols-1 gap-2 justify-center justify-items-center md:grid-cols-3 sm:grid-cols-2 mt-4 md:gap-2 sm:gap-2'>
            {
                OptionList.map((option, index)=>(
                    <div key={index}>
                      <Image src={option.imageUrl} alt={option.label} width={300} height={500} className='rounded-3xl'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default StoryType