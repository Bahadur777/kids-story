const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create a story where 5-6 years old boy playing. education story. and all image in a paper cut. story of a boy and magic school. Give me 5 chapter "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## The Boy Who Found Magic School\n\n**Chapter 1: The Paper Cut**\n\nThe sun streamed through the window, painting stripes of light on the worn carpet. Five-year-old Alex, with his messy brown hair and perpetually curious eyes, was engrossed in his world of paper cut-outs. A magnificent castle, complete with a drawbridge, towered over a field of flowers he had meticulously crafted. \n\nSuddenly, Alex yelped. A tiny shard of paper had sliced his finger, a crimson drop blooming on the papery castle wall. He sucked on the wound, a tear welling in his eye. \n\n\"Boo hoo,\" a voice whispered from behind the castle.\n\nAlex jumped, startled. There, peering over the edge of the paper mountain, was a tiny, shimmering creature made entirely of paper. Its eyes were two black dots, its smile a wobbly line.\n\n\"Who are you?\" Alex asked, his fear replaced by wonder.\n\n\"I'm Sparkle,\" the creature chirped. \"And you, brave adventurer, have found my magic school.\"\n\n**Chapter 2: The Paper School**\n\nSparkle, it turned out, wasn't just any paper creature. She was a pixie, a guide for those who stumbled upon the magical world hidden within the folds of paper. Alex, still wide-eyed, followed Sparkle through a tunnel in the castle wall, emerging into a dazzling world made entirely of paper.\n\nPaper trees swayed in a gentle breeze, their leaves whispering secrets. Paper birds chirped and fluttered, their wings rustling with the sound of turning pages. Even the sun seemed to be made of shimmering paper, casting a warm, golden glow over everything.\n\nThey reached a grand, paper-constructed schoolhouse, its windows glowing with a soft, blue light. \n\n\"Welcome to the Paper School, Alex,\" Sparkle announced, leading him inside. \"Here, you'll learn the secrets of the paper world and discover your own magical talents.\"\n\n**Chapter 3: The Papercraft Class**\n\nThe Paper School was filled with whimsical classrooms. In one, students were learning to write with quill pens made from sharpened bamboo skewers, their ink flowing like a vibrant river from paper leaves. In another, children danced with origami butterflies, their movements as graceful as the flapping of delicate wings. \n\nAlex was most excited for the Papercraft class, where he learned to fold paper into intricate shapes – a paper dragon with shimmering scales, a paper boat that sailed across the classroom floor, and a paper flower that bloomed with a touch of magic.\n\nBut there was one skill he couldn't quite master – the art of storytelling. \n\n**Chapter 4: The Storyteller's Secret**\n\nAlex struggled with his story, the words tumbling out of his mouth like loose pebbles. He felt a pang of frustration, wishing he could weave words as beautifully as the paper creations he made.\n\nSparkle, sensing his distress, brought him to a quiet corner of the school. \"Every story,\" she whispered, \"is a journey, Alex. And every journey begins with a single step.\"\n\nShe pointed to a dusty, old book on the shelf. \"This is the book of stories,\" Sparkle said. \"Within its pages lie the seeds of every tale ever told. Find your own story, Alex, and it will bloom.\"\n\n**Chapter 5: The Magic Within**\n\nWith a newfound determination, Alex opened the book. He read about brave knights, mischievous fairies, and wise old wizards. Each story sparked a spark of imagination within him.\n\nFinally, he found his own tale. It was about a boy, much like himself, who discovered a magical world within the folds of a paper castle.\n\nAlex began to tell the story, his voice growing stronger with each sentence. The paper creatures around him leaned in, their paper eyes wide with wonder. As he reached the climax of the story, he felt a surge of magic flow through him. \n\nThe paper castle around him seemed to come alive, its towers reaching for the sky, its walls shimmering with a soft light. The paper creatures cheered, and Alex, the boy who once felt lost, realized he had found his own magic within the pages of his imagination. \n\nFrom that day on, Alex never forgot the magic he found in the Paper School. He carried it with him, not just in the paper creations he made, but in the stories he told, the dreams he chased, and the magic he brought into the world. \n"},
          ],
        },
      ],
    });
  


    