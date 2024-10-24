const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "create kids story on description on 4-5 years kids. educational story, and all image in a paper cut style. Story of a boy and magic school. Give me % chapter . With details image text prompt  for each of chapter image prompt .all in JSON  file formet"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"chapters\": [\n    {\n      \"title\": \"The Curious Boy\",\n      \"text\": \"Once upon a time, in a cozy little town nestled between rolling hills, lived a boy named Leo. Leo loved to explore, his pockets always filled with treasures he found on his adventures. One day, while playing in the woods, Leo stumbled upon a shimmering, silver door hidden behind a waterfall. Curiosity got the better of him, and he cautiously pushed it open.\",\n      \"image\": {\n        \"prompt\": \"Paper cut style illustration of a curious boy with brown hair and big blue eyes, wearing a blue shirt and brown pants, standing in front of a shimmering silver door hidden behind a waterfall. The boy is holding a magnifying glass in his hand, his face filled with wonder. The background should be a lush green forest with tall trees and vibrant wildflowers.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"title\": \"The Magic School\",\n      \"text\": \"Behind the door, Leo found himself in a breathtaking courtyard. Colorful flowers bloomed, and sparkling fountains danced in the air. But the most amazing sight was the school - a grand, whimsical building that seemed to shimmer and change colors. A sign above the entrance read: 'Welcome to the Magic School!'\",\n      \"image\": {\n        \"prompt\": \"Paper cut style illustration of a boy standing in awe in front of a magical school. The school is a large, whimsical building with colorful windows and turrets. A sign above the entrance reads 'Welcome to the Magic School!'. The courtyard is filled with vibrant flowers, sparkling fountains, and playful butterflies.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"title\": \"Learning to Fly\",\n      \"text\": \"Leo was welcomed by a friendly, fluffy owl named Professor Hoot.  He learned that at Magic School, students could learn to fly, speak animal languages, and even make objects disappear!  Leo's eyes widened in excitement. He wanted to learn it all!\",\n      \"image\": {\n        \"prompt\": \"Paper cut style illustration of a fluffy owl with big, wise eyes, wearing a round spectacles, welcoming a boy to the Magic School. The boy is looking at the owl with excitement, his mouth wide open. The background is a classroom with colorful bookshelves and floating magic wands.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"title\": \"The Magical Challenge\",\n      \"text\": \"Professor Hoot explained that learning magic wasn't easy. It took practice, concentration, and a good dose of imagination! Leo was eager to learn, and he started by practicing the 'Floating Feather' spell. He held his wand tight and said the magic words, but nothing happened.\",\n      \"image\": {\n        \"prompt\": \"Paper cut style illustration of a boy holding a wooden wand in his hand, concentrating intently, trying to make a feather float in the air. He is surrounded by magical objects, such as floating books, swirling dust, and twinkling stars. The background is a classroom with colorful bookshelves and a blackboard covered in magic formulas.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"title\": \"The Magic Within\",\n      \"text\": \"Professor Hoot chuckled and said, 'Magic isn't just about words and wands, Leo. It comes from within you. You need to believe in yourself and use your imagination!'. Leo closed his eyes, took a deep breath, and imagined the feather floating up, up, up!  And to his surprise, it worked! The feather slowly rose, carried by his belief and his imagination.\",\n      \"image\": {\n        \"prompt\": \"Paper cut style illustration of a boy with closed eyes, holding a wand in his hand, concentrating intently. A feather is slowly rising above his hand, surrounded by a swirling cloud of magical dust. The background is a classroom with colorful bookshelves and a blackboard covered in magic formulas. There is a magical glow around the boy and the feather.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"title\": \"A Magical Journey Begins\",\n      \"text\": \"From that day on, Leo was a different boy. He discovered that magic wasn't just in spells and potions, but in his own heart and mind. He continued his adventures at Magic School, learning new spells and making new friends. He learned that the most powerful magic of all is the magic of believing in yourself and using your imagination.\",\n      \"image\": {\n        \"prompt\": \"Paper cut style illustration of a boy smiling brightly, holding a magic wand in his hand, flying above a colorful field of flowers. He is surrounded by other children, all flying on their own magical objects. The background is a sky filled with fluffy clouds, bright stars, and rainbows.\",\n        \"style\": \"Paper cut\"\n      }\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

  