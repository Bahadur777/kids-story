import { pgTable,serial,text,varchar,json} from "drizzle-orm/pg-core";


export const StoryData=pgTable('storyData',{
     id:serial('id').primaryKey(),
     StorySubject:text('StorySubject'),
     StoryType:varchar('StoryType'),
     ageGroup:varchar('ageGroup'),
     imageStyle:varchar('imageStyle'),
     output:json('output'),
     coverImage:varchar('coverImage') 

})