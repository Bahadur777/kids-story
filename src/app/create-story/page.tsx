"use client"
import React, { useState,useEffect } from 'react'
import StorySubjectInput from './-component/StorySubjectInput'
import StoryType from './-component/StoryType'
import AgeGroupe from './-component/AgeGroupe'
import ImageStyle from './-component/ImageStyle'
import { Button } from '@nextui-org/react'
import { chatSession } from '../../config/GeminiAi'



const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

export interface fieldData{
  fieldName:string,
  fieldValue:string
}
export interface fromDataType{
  storySubject:string,
  storyType:string,
  imageStyle:string,
  ageGroup:string

}

const CreateStory = () => {
  const onHandleUserSelection=(data:fieldData)=>{
       
       setFormData((prev:any)=>({
              ...prev,
              [data.fieldName]:data.fieldValue
       }))
       console.log(formData)
  }
  const [formData, setFormData] =useState<fromDataType>();
  
  const GenerateStory=async()=>{
    const FINAL_PROMPT=CREATE_STORY_PROMPT?.replace('{ageGroup',formData?.ageGroup??'')
    .replace('{storyType',formData?.storyType?? '')
    .replace('{storySubject',formData?.storySubject?? '')
    .replace('{imageStyle',formData?.imageStyle?? '')

      //Generate AI Story
      try{
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        const responseText = await result.response.text();
       console.log(responseText);
      } catch(e){
           console.log(e);
      }
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
              <StoryType userSelection={onHandleUserSelection}/>
          {/* age group */}
           <AgeGroupe userSelection={onHandleUserSelection}/>
          {/* Image style */}
          <ImageStyle userSelection={onHandleUserSelection}/>
        </div>
      </div>
      <div className='flex justify-end mt-10'>
        <Button onClick={GenerateStory} color='primary' className=' p-7 text-2xl'>Generate story</Button>
      </div>
    </div>
  )
}

export default CreateStory