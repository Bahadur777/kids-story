"use client"
import React from 'react'
import StorySubjectInput from './-component/StorySubjectInput'
import StoryType from './-component/StoryType'

export interface fieldData{
  fieldName:string,
  fieldValue:string
}
const CreateStory = () => {
  const onHandleUserSelection=(data:fieldData)=>{
       console.log(data)
  }
  return (
    <div className='p-10 md:px-20 lg:px-40 bg-[#cad3ff]'>
      <div>
        <h1 className='font-extrabold text-[40px] text-center text-primary uppercase'>Create Your story</h1>
        <p className='text-[20px] text-primary text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a iure dignissimos nam, possimus architecto quae provident minima nemo quisquam consequuntur culpa rem itaque ?</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
          {/* Story subject */}
            <StorySubjectInput userSelection={onHandleUserSelection}/>
          {/* Story type */}
              <StoryType/>
          {/* age group */}

          {/* Image style */}
        </div>
      </div>
    </div>
  )
}

export default CreateStory