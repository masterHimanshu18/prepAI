export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  explanation: string;
};

export const quantQuestions: Question[] = 
[
  {
    "id": 1,
    "question": "What is the value of 25% of 200?",
    "options": [
      "25",
      "50",
      "75",
      "100"
    ],
    "answer": 1,
    "solution": "50",
    "explanation": "25% of 200 = (25/100) × 200 = 50."
  },
  {
    "id": 2,
    "question": "If 3x + 7 = 22, what is the value of x?",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": 1,
    "solution": "5",
    "explanation": "3x = 22 - 7 = 15, so x = 15/3 = 5."
  },
  {
    "id": 3,
    "question": "What is the square root of 144?",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "answer": 2,
    "solution": "12",
    "explanation": "12 × 12 = 144."
  },
  {
    "id": 4,
    "question": "A sum of ₹500 is divided between A and B in the ratio 3:2. What is B’s share?",
    "options": [
      "₹200",
      "₹250",
      "₹300",
      "₹350"
    ],
    "answer": 0,
    "solution": "₹200",
    "explanation": "B's share = (2/5) × 500 = ₹200."
  },
  {
    "id": 5,
    "question": "If the perimeter of a square is 40 cm, what is its area?",
    "options": [
      "100 cm²",
      "81 cm²",
      "64 cm²",
      "25 cm²"
    ],
    "answer": 2,
    "solution": "64 cm²",
    "explanation": "Side = 40/4 = 10 cm; area = 10 × 10 = 100 cm²."
  },
  {
    "id": 6,
    "question": "If the cost price is ₹240 and profit is 25%, what is the selling price?",
    "options": [
      "₹260",
      "₹280",
      "₹300",
      "₹320"
    ],
    "answer": 2,
    "solution": "₹300",
    "explanation": "SP = CP + 25% of CP = 240 + 60 = ₹300."
  },
  {
    "id": 7,
    "question": "The average of 5, 8, 12, 15, and 20 is:",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 2,
    "solution": "14",
    "explanation": "Sum = 60; Average = 60/5 = 12."
  },
  {
    "id": 8,
    "question": "What is the value of (2/3) + (1/6)?",
    "options": [
      "1/2",
      "3/4",
      "5/6",
      "7/6"
    ],
    "answer": 2,
    "solution": "5/6",
    "explanation": "Common denominator: (4+1)/6 = 5/6."
  },
  {
    "id": 9,
    "question": "If a train travels 120 km in 2 hours, what is its average speed?",
    "options": [
      "40 km/h",
      "50 km/h",
      "60 km/h",
      "70 km/h"
    ],
    "answer": 2,
    "solution": "60 km/h",
    "explanation": "Speed = Distance/Time = 120/2 = 60 km/h."
  },
  {
    "id": 10,
    "question": "What is the simple interest on ₹1000 at 5% per annum for 2 years?",
    "options": [
      "₹50",
      "₹100",
      "₹150",
      "₹200"
    ],
    "answer": 1,
    "solution": "₹100",
    "explanation": "SI = (1000×5×2)/100 = ₹100."
  },
  {
    "id": 11,
    "question": "If the ratio of boys to girls in a class is 3:2 and there are 30 boys, how many girls are there?",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": 2,
    "solution": "20",
    "explanation": "If 3 parts = 30, then 1 part = 10; girls = 2×10 = 20."
  },
  {
    "id": 12,
    "question": "What is 15% of 80?",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 3,
    "solution": "12",
    "explanation": "15% of 80 = (15/100) × 80 = 12."
  },
  {
    "id": 13,
    "question": "The HCF of 36 and 48 is:",
    "options": [
      "6",
      "12",
      "18",
      "24"
    ],
    "answer": 1,
    "solution": "12",
    "explanation": "12 is the highest common factor."
  },
  {
    "id": 14,
    "question": "If the sum of two numbers is 25 and their difference is 5, what is the bigger number?",
    "options": [
      "10",
      "12",
      "15",
      "20"
    ],
    "answer": 2,
    "solution": "15",
    "explanation": "x + y = 25, x - y = 5 ⇒ x = 15."
  },
  {
    "id": 15,
    "question": "If the radius of a circle is 7 cm, what is its circumference? (Take π = 22/7)",
    "options": [
      "22 cm",
      "44 cm",
      "66 cm",
      "88 cm"
    ],
    "answer": 1,
    "solution": "44 cm",
    "explanation": "Circumference = 2πr = 2×22/7×7 = 44 cm."
  },
  {
    "id": 16,
    "question": "A shopkeeper sells an article at a loss of 10%. If the cost price is ₹200, what is the selling price?",
    "options": [
      "₹180",
      "₹190",
      "₹200",
      "₹210"
    ],
    "answer": 0,
    "solution": "₹180",
    "explanation": "SP = CP - 10% of CP = 200 - 20 = ₹180."
  },
  {
    "id": 17,
    "question": "What is the value of 2³ × 3²?",
    "options": [
      "12",
      "18",
      "24",
      "72"
    ],
    "answer": 3,
    "solution": "72",
    "explanation": "2³ = 8; 3² = 9; 8 × 9 = 72."
  },
  {
    "id": 18,
    "question": "If a number is divided by 5, the remainder is 3. What is the remainder when the same number is divided by 10?",
    "options": [
      "3",
      "5",
      "7",
      "8"
    ],
    "answer": 2,
    "solution": "7",
    "explanation": "Possible number: 5k+3. When divided by 10: (5k+3) % 10. For k=1, 8; for k=2, 13%10=3; but in general, remainder can be 3 or 8 or 7 depending on k."
  },
  {
    "id": 19,
    "question": "A man can do a piece of work in 10 days. How many days will 5 men take to complete the same work?",
    "options": [
      "2",
      "4",
      "5",
      "10"
    ],
    "answer": 0,
    "solution": "2",
    "explanation": "More men, less time: 10/5 = 2 days."
  },
  {
    "id": 20,
    "question": "If the sum of the angles of a polygon is 1080°, how many sides does it have?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 2,
    "solution": "8",
    "explanation": "Sum = (n-2)×180 ⇒ n = (1080/180) + 2 = 8."
  },
  {
    "id": 21,
    "question": "If 12 men can complete a work in 6 days, how many men are needed to complete it in 4 days?",
    "options": [
      "8",
      "12",
      "16",
      "18"
    ],
    "answer": 2,
    "solution": "16",
    "explanation": "Men × Days = Constant. 12×6 = x×4 ⇒ x = 18."
  },
  {
    "id": 22,
    "question": "What is the value of 0.25 × 0.4?",
    "options": [
      "0.01",
      "0.10",
      "0.12",
      "0.14"
    ],
    "answer": 2,
    "solution": "0.10",
    "explanation": "0.25 × 0.4 = 0.10."
  },
  {
    "id": 23,
    "question": "If the sides of a triangle are 3 cm, 4 cm, and 5 cm, what is its area?",
    "options": [
      "6 cm²",
      "12 cm²",
      "10 cm²",
      "8 cm²"
    ],
    "answer": 0,
    "solution": "6 cm²",
    "explanation": "It's a right triangle: (1/2)×3×4=6 cm²."
  },
  {
    "id": 24,
    "question": "The value of 5! (5 factorial) is:",
    "options": [
      "60",
      "100",
      "120",
      "150"
    ],
    "answer": 2,
    "solution": "120",
    "explanation": "5! = 5×4×3×2×1 = 120."
  },
  {
    "id": 25,
    "question": "If the average of three numbers is 20, what is their sum?",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "answer": 2,
    "solution": "60",
    "explanation": "Sum = Average × Number of terms = 20×3 = 60."
  }
]
