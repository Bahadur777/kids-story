CREATE TABLE IF NOT EXISTS "storyData" (
	"id" serial PRIMARY KEY NOT NULL,
	"StorySubject" text,
	"StoryType" varchar,
	"ageGroup" varchar,
	"imageStyle" varchar,
	"output" json,
	"coverImage" varchar
);
