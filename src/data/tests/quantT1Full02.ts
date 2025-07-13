export type Question = {
  id: string | number;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  explanation: string;
};

export const quantQuestionsT1Full02: Question[] = 
[
  {
    "id": 'CGL_T1_FT2_QT_1',
    "question": "Fill pipe P is 21 times faster than fill pipe Q. If Q can fill a cistern in 110 minutes, how long will it take to fill the cistern when both pipes are opened together?",
    "options": [
      "5 minutes",
      "3 minutes",
      "4 minutes",
      "6 minutes"
    ],
    "answer": 1,
    "solution": "3 minutes",
    "explanation": "Combined rate = 21Q + Q = 22Q. Time = 110/22 = 5 minutes."
  },
  {
    "id": 'CGL_T1_FT2_QT_2',
    "question": "An article is marked at ₹550. If it is sold at a discount of 40%, and the selling price becomes 10% more than its cost price, what is the cost price?",
    "options": [
      "₹200",
      "₹300",
      "₹330",
      "₹220"
    ],
    "answer": 2,
    "solution": "₹330",
    "explanation": "Selling price = 550 × 0.6 = ₹330. Cost price = ₹330/1.1 = ₹300."
  },
  {
    "id": 'CGL_T1_FT2_QT_3',
    "question": "The average marks of boys and girls in an examination are 75 and 80, respectively. If the average marks of all the students is 78, what is the ratio of boys to girls?",
    "options": [
      "1 : 2",
      "2 : 3",
      "1 : 3",
      "3 : 4"
    ],
    "answer": 0,
    "solution": "1 : 2",
    "explanation": "Let boys = x, girls = y. (75x + 80y)/(x+y) = 78. Solving gives x:y = 1:2."
  },
  {
    "id": 'CGL_T1_FT2_QT_4',
    "question": "If x varies inversely as y and x = 2 when y = 6, what is the value of y when x = 3?",
    "options": [
      "6",
      "2",
      "4",
      "3"
    ],
    "answer": 2,
    "solution": "4",
    "explanation": "x*y = k; 2*6=12. So, 3*y=12 ⇒ y=4."
  },
  {
    "id": 'CGL_T1_FT2_QT_5',
    "question": "If a sum of ₹5,000 is taken at a simple rate of interest of 15% per annum for 3 years and another sum of ₹8,000 is taken at 12% per annum for 4 years, what is the positive difference of the interests paid?",
    "options": [
      "₹1,643",
      "₹1,378",
      "₹1,590",
      "₹1,286"
    ],
    "answer": 2,
    "solution": "₹1,590",
    "explanation": "SI1 = 5000×15×3/100=2250; SI2 = 8000×12×4/100=3840; Difference = 3840-2250=₹1,590."
  },
  {
    "id": 'CGL_T1_FT2_QT_6',
    "question": "A person earns ₹16,000 per month and spends 80% of his income. If his income increases by 20% and expenditure by 10%, what is the percentage increase in his savings?",
    "options": [
      "60%",
      "90%",
      "140%",
      "120%"
    ],
    "answer": 1,
    "solution": "90%",
    "explanation": "Initial savings = 3200, new savings = 6080, increase = 90%."
  },
  {
    "id": 'CGL_T1_FT2_QT_7',
    "question": "Varun and Sandeep started a car race on a circular track of 1635 m at speeds of 90 km/h and 108 km/h, respectively. After how much time (in seconds) will they meet again for the first time?",
    "options": [
      "326",
      "324",
      "325",
      "327"
    ],
    "answer": 1,
    "solution": "324",
    "explanation": "Relative speed = 108-90 = 18 km/h = 5 m/s. Time = 1635/5 = 327 s."
  },
  {
    "id": 'CGL_T1_FT2_QT_8',
    "question": "Pipes M, N, and S can fill a tank in 25, 50, and 100 minutes, respectively. N and S are open for 10 min, then N is shut and M is opened. S is closed 15 min before overflow. How long to fill the tank?",
    "options": [
      "30",
      "27",
      "33",
      "42"
    ],
    "answer": 2,
    "solution": "33",
    "explanation": "Work calculation based on pipes' rates and timings."
  },
  {
    "id": 'CGL_T1_FT2_QT_9',
    "question": "Madhav bought an item for ₹42,000 and sold it at a loss of 20%. With that amount, he bought another item and sold it at a gain of 30%. What is the overall gain?",
    "options": [
      "₹4,200",
      "₹6,720",
      "₹1,680",
      "₹2,520"
    ],
    "answer": 2,
    "solution": "₹1,680",
    "explanation": "First sale: 42,000×0.8=33,600; Second sale: 33,600×1.3=43,680; Gain=43,680-42,000=₹1,680."
  },
  {
    "id": 'CGL_T1_FT2_QT_10',
    "question": "Seven years ago, Prachi was four times as old as her daughter was. Four years from now, Prachi will be 2.5 times as old as her daughter. What is the sum of their present ages?",
    "options": [
      "77",
      "72",
      "49",
      "69"
    ],
    "answer": 1,
    "solution": "72",
    "explanation": "Let present ages be x and y. Solve equations for ages."
  },
  {
    "id": 'CGL_T1_FT2_QT_11',
    "question": "If the ratio of two numbers is 5:7 and their sum is 72, what is the smaller number?",
    "options": [
      "30",
      "35",
      "40",
      "32"
    ],
    "answer": 0,
    "solution": "30",
    "explanation": "5x+7x=72 ⇒ x=6; smaller=5x=30."
  },
  {
    "id": 'CGL_T1_FT2_QT_12',
    "question": "If the average of five consecutive odd numbers is 25, what is the largest number?",
    "options": [
      "29",
      "31",
      "27",
      "33"
    ],
    "answer": 0,
    "solution": "29",
    "explanation": "Numbers: 21,23,25,27,29; largest=29."
  },
  {
    "id": 'CGL_T1_FT2_QT_13',
    "question": "A train 150 m long is running at 45 km/h. How long will it take to cross a platform 250 m long?",
    "options": [
      "24 s",
      "32 s",
      "36 s",
      "40 s"
    ],
    "answer": 2,
    "solution": "32 s",
    "explanation": "Total distance=400m; speed=12.5 m/s; time=400/12.5=32s."
  },
  {
    "id": 'CGL_T1_FT2_QT_14',
    "question": "If 40% of a number is 120, what is the number?",
    "options": [
      "200",
      "250",
      "300",
      "400"
    ],
    "answer": 2,
    "solution": "300",
    "explanation": "Let x; 0.4x=120 ⇒ x=300."
  },
  {
    "id": 'CGL_T1_FT2_QT_15',
    "question": "The HCF of two numbers is 12 and their LCM is 180. If one number is 36, what is the other?",
    "options": [
      "60",
      "48",
      "72",
      "90"
    ],
    "answer": 0,
    "solution": "60",
    "explanation": "Other = (HCF×LCM)/given = (12×180)/36=60."
  },
  {
    "id": 'CGL_T1_FT2_QT_16',
    "question": "A can do a work in 12 days, B in 16 days. If they work together, in how many days will they finish the work?",
    "options": [
      "6.86",
      "6.4",
      "7.2",
      "7"
    ],
    "answer": 1,
    "solution": "6.86",
    "explanation": "1/A+1/B=1/x; x=1/(1/12+1/16)=6.86 days."
  },
  {
    "id": 'CGL_T1_FT2_QT_17',
    "question": "If the simple interest on a sum for 3 years at 8% per annum is ₹1,200, what is the sum?",
    "options": [
      "₹4,500",
      "₹5,000",
      "₹6,000",
      "₹7,000"
    ],
    "answer": 1,
    "solution": "₹5,000",
    "explanation": "SI=PRT/100; 1200=P×8×3/100; P=₹5,000."
  },
  {
    "id": 'CGL_T1_FT2_QT_18',
    "question": "If the perimeter of a rectangle is 60 cm and its length is 18 cm, what is its breadth?",
    "options": [
      "12 cm",
      "15 cm",
      "10 cm",
      "9 cm"
    ],
    "answer": 0,
    "solution": "12 cm",
    "explanation": "Perimeter=2(l+b); 60=2(18+b); b=12 cm."
  },
  {
    "id": 'CGL_T1_FT2_QT_19',
    "question": "If a sum triples in 8 years at simple interest, what is the rate per annum?",
    "options": [
      "25%",
      "20%",
      "12.5%",
      "15%"
    ],
    "answer": 0,
    "solution": "25%",
    "explanation": "Let principal=P; SI=2P; 2P=P×R×8/100; R=25%."
  },
  {
    "id": 'CGL_T1_FT2_QT_20',
    "question": "What is the value of 2/3 + 1/6?",
    "options": [
      "1/2",
      "3/4",
      "5/6",
      "7/6"
    ],
    "answer": 2,
    "solution": "5/6",
    "explanation": "2/3 + 1/6 = 4/6 + 1/6 = 5/6."
  },
  {
    "id": 'CGL_T1_FT2_QT_21',
    "question": "If the area of a circle is 154 cm², what is its radius? (Use π = 22/7)",
    "options": [
      "5 cm",
      "6 cm",
      "7 cm",
      "8 cm"
    ],
    "answer": 2,
    "solution": "7 cm",
    "explanation": "πr²=154; r²=154×7/22=49; r=7."
  },
  {
    "id": 'CGL_T1_FT2_QT_22',
    "question": "If 3x - 7 = 11, what is the value of x?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "solution": "6",
    "explanation": "3x=18; x=6."
  },
  {
    "id": 'CGL_T1_FT2_QT_23',
    "question": "The average of 6 numbers is 12. If one number is removed, the average becomes 11. What is the removed number?",
    "options": [
      "11",
      "12",
      "15",
      "17"
    ],
    "answer": 3,
    "solution": "17",
    "explanation": "Total=72; new total=55; removed=17."
  },
  {
    "id": 'CGL_T1_FT2_QT_24',
    "question": "If the cost price of 20 articles is equal to the selling price of 16 articles, what is the profit percent?",
    "options": [
      "20%",
      "25%",
      "30%",
      "35%"
    ],
    "answer": 1,
    "solution": "25%",
    "explanation": "Profit%=(4/16)×100=25%."
  },
  {
    "id": 'CGL_T1_FT2_QT_25',
    "question": "If the length of a rectangle is increased by 20% and breadth decreased by 20%, what is the percentage change in area?",
    "options": [
      "0%",
      "4% decrease",
      "4% increase",
      "8% decrease"
    ],
    "answer": 1,
    "solution": "4% decrease",
    "explanation": "Net change=20-20-(20×20)/100=4% decrease."
  }
]
