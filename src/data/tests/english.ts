// Define the Question type if not already imported
export type Question = {
  id: string | number;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  explanation: string;
};

export const englishQuestions: Question[] = 
[
  {
    "id": 'CGL_T1_FT1_EN_1',
    "question": "Select the synonym of the given word.\nAbundant",
    "options": [
      "Scarce",
      "Plenty",
      "Little",
      "Few"
    ],
    "answer": 1,
    "solution": "Plenty",
    "explanation": "Abundant means existing in large quantities, which is similar to plenty."
  },
  {
    "id": 'CGL_T1_FT1_EN_2',
    "question": "Select the antonym of the given word.\nHostile",
    "options": [
      "Friendly",
      "Angry",
      "Aggressive",
      "Harsh"
    ],
    "answer": 0,
    "solution": "Friendly",
    "explanation": "Hostile means unfriendly or antagonistic, so the opposite is friendly."
  },
  {
    "id": 'CGL_T1_FT1_EN_3',
    "question": "Choose the correct spelling.",
    "options": [
      "Accomodate",
      "Accommodate",
      "Acommodate",
      "Accomodete"
    ],
    "answer": 1,
    "solution": "Accommodate",
    "explanation": "The correct spelling is 'accommodate' with two c's and two m's."
  },
  {
    "id": 'CGL_T1_FT1_EN_4',
    "question": "Find the error in the sentence.\nHe do not likes to play cricket.",
    "options": [
      "do",
      "likes",
      "play",
      "cricket"
    ],
    "answer": 0,
    "solution": "do",
    "explanation": "It should be 'does not like' instead of 'do not likes.'"
  },
  {
    "id": 'CGL_T1_FT1_EN_5',
    "question": "Select the synonym of the given word.\nCandid",
    "options": [
      "Secret",
      "Honest",
      "Clever",
      "Polite"
    ],
    "answer": 1,
    "solution": "Honest",
    "explanation": "Candid means truthful and straightforward, similar to honest."
  },
  {
    "id": 'CGL_T1_FT1_EN_6',
    "question": "Choose the correct one-word substitution.\nA person who talks too much",
    "options": [
      "Reticent",
      "Garrulous",
      "Taciturn",
      "Sullen"
    ],
    "answer": 1,
    "solution": "Garrulous",
    "explanation": "Garrulous describes someone who talks excessively."
  },
  {
    "id": 'CGL_T1_FT1_EN_7',
    "question": "Fill in the blank with the correct word.\nShe is _____ than her sister.",
    "options": [
      "tall",
      "tallest",
      "more tall",
      "taller"
    ],
    "answer": 3,
    "solution": "taller",
    "explanation": "The comparative form 'taller' is used when comparing two people."
  },
  {
    "id": 'CGL_T1_FT1_EN_8',
    "question": "Select the antonym of the given word.\nOptimistic",
    "options": [
      "Hopeful",
      "Cheerful",
      "Pessimistic",
      "Confident"
    ],
    "answer": 2,
    "solution": "Pessimistic",
    "explanation": "Optimistic means expecting good things; pessimistic is the opposite."
  },
  {
    "id": 'CGL_T1_FT1_EN_9',
    "question": "Choose the correctly punctuated sentence.",
    "options": [
      "She said, \"I am coming.\"",
      "She said \"I am coming.\"",
      "She said, I am coming.",
      "She said I am coming."
    ],
    "answer": 0,
    "solution": "She said, \"I am coming.\"",
    "explanation": "Direct speech must be enclosed in quotation marks and preceded by a comma."
  },
  {
    "id": 'CGL_T1_FT1_EN_10',
    "question": "Select the synonym of the given word.\nEloquent",
    "options": [
      "Silent",
      "Fluent",
      "Hesitant",
      "Rude"
    ],
    "answer": 1,
    "solution": "Fluent",
    "explanation": "Eloquent means fluent or persuasive in speaking or writing."
  },
  {
    "id": 'CGL_T1_FT1_EN_11',
    "question": "Choose the correct passive form.\nThey are playing football.",
    "options": [
      "Football is played by them.",
      "Football was being played by them.",
      "Football is being played by them.",
      "Football has been played by them."
    ],
    "answer": 2,
    "solution": "Football is being played by them.",
    "explanation": "Present continuous passive is 'is being played.'"
  },
  {
    "id": 'CGL_T1_FT1_EN_12',
    "question": "Select the antonym of the given word.\nDiligent",
    "options": [
      "Industrious",
      "Lazy",
      "Hardworking",
      "Sincere"
    ],
    "answer": 1,
    "solution": "Lazy",
    "explanation": "Diligent means hardworking; lazy is the opposite."
  },
  {
    "id": 'CGL_T1_FT1_EN_13',
    "question": "Find the correctly spelled word.",
    "options": [
      "Perserverance",
      "Perseverance",
      "Perseverence",
      "Perserverence"
    ],
    "answer": 1,
    "solution": "Perseverance",
    "explanation": "'Perseverance' is the correct spelling."
  },
  {
    "id": 'CGL_T1_FT1_EN_14',
    "question": "Choose the correct idiom for the meaning: 'To start something new'",
    "options": [
      "Break the ice",
      "Turn a new leaf",
      "Hit the books",
      "Spill the beans"
    ],
    "answer": 1,
    "solution": "Turn a new leaf",
    "explanation": "'Turn a new leaf' means to start anew or make a fresh start."
  },
  {
    "id": 'CGL_T1_FT1_EN_15',
    "question": "Fill in the blank with the correct preposition.\nHe is fond _____ music.",
    "options": [
      "at",
      "for",
      "of",
      "with"
    ],
    "answer": 2,
    "solution": "of",
    "explanation": "The correct phrase is 'fond of.'"
  },
  {
    "id": 'CGL_T1_FT1_EN_16',
    "question": "Select the synonym of the given word.\nReluctant",
    "options": [
      "Willing",
      "Hesitant",
      "Happy",
      "Eager"
    ],
    "answer": 1,
    "solution": "Hesitant",
    "explanation": "Reluctant means unwilling or hesitant."
  },
  {
    "id": 'CGL_T1_FT1_EN_17',
    "question": "Choose the correct indirect speech.\nShe said, \"I will come tomorrow.\"",
    "options": [
      "She said that she will come tomorrow.",
      "She said that she would come the next day.",
      "She said she will come the next day.",
      "She said she would come tomorrow."
    ],
    "answer": 1,
    "solution": "She said that she would come the next day.",
    "explanation": "'Will' becomes 'would' and 'tomorrow' becomes 'the next day' in indirect speech."
  },
  {
    "id": 'CGL_T1_FT1_EN_18',
    "question": "Select the antonym of the given word.\nGenerous",
    "options": [
      "Kind",
      "Selfish",
      "Helpful",
      "Caring"
    ],
    "answer": 1,
    "solution": "Selfish",
    "explanation": "Generous means giving; selfish is the opposite."
  },
  {
    "id": 'CGL_T1_FT1_EN_19',
    "question": "Choose the correct one-word substitution.\nA person who believes in fate",
    "options": [
      "Fatalist",
      "Optimist",
      "Pessimist",
      "Realist"
    ],
    "answer": 0,
    "solution": "Fatalist",
    "explanation": "A fatalist is someone who believes that all events are predetermined."
  },
  {
    "id": 'CGL_T1_FT1_EN_20',
    "question": "Find the error in the sentence.\nEach of the boys have done their homework.",
    "options": [
      "Each",
      "have",
      "done",
      "their"
    ],
    "answer": 1,
    "solution": "have",
    "explanation": "'Each' is singular, so it should be 'has done.'"
  },
  {
    "id": 'CGL_T1_FT1_EN_21',
    "question": "Select the synonym of the given word.\nVivid",
    "options": [
      "Faint",
      "Lively",
      "Dull",
      "Weak"
    ],
    "answer": 1,
    "solution": "Lively",
    "explanation": "Vivid means producing powerful feelings or strong images, similar to lively."
  },
  {
    "id": 'CGL_T1_FT1_EN_22',
    "question": "Choose the correct phrase to complete the sentence.\nIf I _____ you, I would apologize.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answer": 2,
    "solution": "were",
    "explanation": "The correct conditional phrase is 'If I were you.'"
  },
  {
    "id": 'CGL_T1_FT1_EN_23',
    "question": "Select the antonym of the given word.\nExpand",
    "options": [
      "Increase",
      "Contract",
      "Grow",
      "Enlarge"
    ],
    "answer": 1,
    "solution": "Contract",
    "explanation": "Expand means to become larger; contract is the opposite."
  },
  {
    "id": 'CGL_T1_FT1_EN_24',
    "question": "Choose the correct spelling.",
    "options": [
      "Recieve",
      "Receive",
      "Receeve",
      "Recive"
    ],
    "answer": 1,
    "solution": "Receive",
    "explanation": "'Receive' follows the 'i before e except after c' rule."
  },
  {
    "id": 'CGL_T1_FT1_EN_25',
    "question": "Select the synonym of the given word.\nAdept",
    "options": [
      "Clumsy",
      "Skilled",
      "Slow",
      "Weak"
    ],
    "answer": 1,
    "solution": "Skilled",
    "explanation": "Adept means very skilled or proficient at something."
  }
]
