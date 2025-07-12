export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  explanation: string;
};

export const reasoningQuestions: Question[] =
[
  {
    "id": 1,
    "question": "Which of the following is the odd one out?",
    "options": [
      "Apple",
      "Banana",
      "Grapes",
      "Potato"
    ],
    "answer": 3,
    "solution": "Potato",
    "explanation": "Potato is a vegetable, the rest are fruits."
  },
  {
    "id": 2,
    "question": "If CAT is coded as DBU, how is DOG coded?",
    "options": [
      "EPH",
      "EPI",
      "DPH",
      "EOG"
    ],
    "answer": 0,
    "solution": "EPH",
    "explanation": "Each letter is replaced by its next letter in the alphabet."
  },
  {
    "id": 3,
    "question": "Find the missing number: 2, 6, 12, 20, ?, 42",
    "options": [
      "28",
      "30",
      "32",
      "34"
    ],
    "answer": 0,
    "solution": "28",
    "explanation": "Pattern: n^2 + n (n=1,2,3...)"
  },
  {
    "id": 4,
    "question": "A is the brother of B. B is the sister of C. C is the son of D. How is D related to A?",
    "options": [
      "Father",
      "Mother",
      "Uncle",
      "Aunt"
    ],
    "answer": 0,
    "solution": "Father",
    "explanation": "D is the parent of A."
  },
  {
    "id": 5,
    "question": "Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?\nA_BA_BA_BA_B",
    "options": [
      "AABB",
      "ABAB",
      "BABA",
      "BBBB"
    ],
    "answer": 1,
    "solution": "ABAB",
    "explanation": "The series is ABBA repeatedly."
  },
  {
    "id": 6,
    "question": "If 1st January is Monday, what day of the week will be 1st March in the same year (non-leap year)?",
    "options": [
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "answer": 2,
    "solution": "Saturday",
    "explanation": "Jan=31, Feb=28, so 59 days later. 59 mod 7 = 3, so Saturday."
  },
  {
    "id": 7,
    "question": "Find the odd one out:\n2, 3, 5, 7, 11, 14, 17, 19",
    "options": [
      "14",
      "17",
      "11",
      "19"
    ],
    "answer": 0,
    "solution": "14",
    "explanation": "14 is not a prime number."
  },
  {
    "id": 8,
    "question": "If in a code language, 'MANGO' is written as 'NZOHQ', how is 'APPLE' written?",
    "options": [
      "BQQMF",
      "BQQMG",
      "BQQNF",
      "BPPMF"
    ],
    "answer": 0,
    "solution": "BQQMF",
    "explanation": "Each letter is replaced by its next letter."
  },
  {
    "id": 9,
    "question": "Which number will replace the question mark?\n3, 8, 15, 24, ?, 48",
    "options": [
      "35",
      "36",
      "38",
      "40"
    ],
    "answer": 1,
    "solution": "36",
    "explanation": "Pattern: n^2 + 2 (n=1,2,3...)"
  },
  {
    "id": 10,
    "question": "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
    "options": [
      "Mother",
      "Aunt",
      "Sister",
      "Grandmother"
    ],
    "answer": 0,
    "solution": "Mother",
    "explanation": "She is the man's mother."
  },
  {
    "id": 11,
    "question": "If 'EASY' is coded as 'FCZT', how is 'HARD' coded?",
    "options": [
      "IBSE",
      "IBSE",
      "IBSE",
      "IBSE"
    ],
    "answer": 0,
    "solution": "IBSE",
    "explanation": "Each letter is replaced by its next letter."
  },
  {
    "id": 12,
    "question": "Which one is different from the rest?",
    "options": [
      "Circle",
      "Triangle",
      "Rectangle",
      "Sphere"
    ],
    "answer": 3,
    "solution": "Sphere",
    "explanation": "Sphere is a 3D shape, others are 2D."
  },
  {
    "id": 13,
    "question": "Find the missing term: ACE, BDF, CEG, ?",
    "options": [
      "DFH",
      "DEH",
      "DGH",
      "DFG"
    ],
    "answer": 0,
    "solution": "DFH",
    "explanation": "Pattern: Each letter increases by 1."
  },
  {
    "id": 14,
    "question": "Which number is missing?\n5, 9, 17, 33, ?, 129",
    "options": [
      "65",
      "49",
      "65",
      "97"
    ],
    "answer": 0,
    "solution": "65",
    "explanation": "Each term is multiplied by 2 and then 1 is subtracted."
  },
  {
    "id": 15,
    "question": "Complete the analogy:\nDog : Bark :: Cat : ?",
    "options": [
      "Roar",
      "Meow",
      "Chirp",
      "Moo"
    ],
    "answer": 1,
    "solution": "Meow",
    "explanation": "Dog barks, cat meows."
  },
  {
    "id": 16,
    "question": "Which one does not belong to the group?",
    "options": [
      "Iron",
      "Copper",
      "Aluminium",
      "Plastic"
    ],
    "answer": 3,
    "solution": "Plastic",
    "explanation": "Plastic is not a metal."
  },
  {
    "id": 17,
    "question": "If PENCIL is coded as QFODJM, how is ERASER coded?",
    "options": [
      "FSBTFS",
      "FSBTFQ",
      "FSBTFQ",
      "FSBTFR"
    ],
    "answer": 0,
    "solution": "FSBTFS",
    "explanation": "Each letter is replaced by its next letter."
  },
  {
    "id": 18,
    "question": "Find the odd one out:\nCar, Bus, Train, Aeroplane",
    "options": [
      "Car",
      "Bus",
      "Train",
      "Aeroplane"
    ],
    "answer": 3,
    "solution": "Aeroplane",
    "explanation": "Aeroplane travels by air, others by land."
  },
  {
    "id": 19,
    "question": "If 5 + 3 = 24, 6 + 2 = 48, 4 + 4 = 32, then 7 + 1 = ?",
    "options": [
      "56",
      "49",
      "36",
      "63"
    ],
    "answer": 0,
    "solution": "56",
    "explanation": "Multiply the two numbers and then multiply by 2."
  },
  {
    "id": 20,
    "question": "Find the missing number:\n7, 14, 28, 56, ?, 224",
    "options": [
      "84",
      "112",
      "96",
      "168"
    ],
    "answer": 1,
    "solution": "112",
    "explanation": "Each number is multiplied by 2."
  },
  {
    "id": 21,
    "question": "Which of the following is the odd one out?",
    "options": [
      "Rose",
      "Lily",
      "Lotus",
      "Mango"
    ],
    "answer": 3,
    "solution": "Mango",
    "explanation": "Mango is a fruit, others are flowers."
  },
  {
    "id": 22,
    "question": "If in a certain code, 'FISH' is written as 'GJTI', how is 'BIRD' written?",
    "options": [
      "CJSE",
      "CJRF",
      "CJTE",
      "CJRE"
    ],
    "answer": 0,
    "solution": "CJSE",
    "explanation": "Each letter is replaced by its next letter."
  },
  {
    "id": 23,
    "question": "Which number should come next in the series?\n1, 4, 9, 16, 25, ?",
    "options": [
      "36",
      "49",
      "64",
      "81"
    ],
    "answer": 0,
    "solution": "36",
    "explanation": "Series of squares: 1^2, 2^2, 3^2, etc."
  },
  {
    "id": 24,
    "question": "Complete the analogy:\nBook : Reading :: Fork : ?",
    "options": [
      "Drawing",
      "Writing",
      "Stirring",
      "Eating"
    ],
    "answer": 3,
    "solution": "Eating",
    "explanation": "Book is used for reading, fork is used for eating."
  },
  {
    "id": 25,
    "question": "If 'FLOWER' is coded as 'GMQXFS', how is 'PLANT' coded?",
    "options": [
      "QMBUO",
      "QMBNU",
      "QMBNU",
      "QMBNV"
    ],
    "answer": 0,
    "solution": "QMBUO",
    "explanation": "Each letter is replaced by its next letter."
  }
]
