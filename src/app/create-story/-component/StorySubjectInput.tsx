"use client"
import {Textarea} from "@nextui-org/react";
import React from "react";

const StorySubjectInput = ({userSelection}:any) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="font-extrabold">1. Subject of the story</label>
      <Textarea maxRows={9}
        placeholder="Write the Subject of the story which you want to generate"
        disableAutosize
        className=" mt-4 rounded-lg max-w-lg  max-h-[150px]"
        onChange={(e)=>userSelection({
            fieldValue:e.target.value,
            fieldName:"StorySubject"
        })}
      />
    </div>
  );
};

export default StorySubjectInput;
