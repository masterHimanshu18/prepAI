// Define the Question type if not already imported
export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  explanation: string;
}

export const generalScienceQuestions: Question[] = [
  {
    "id": 1,
    "question": "Who was the first Governor-General of independent India?",
    "options": [
      "C. Rajagopalachari",
      "Lord Mountbatten",
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru"
    ],
    "answer": 1,
    "solution": "Lord Mountbatten",
    "explanation": "Lord Mountbatten was appointed as the first Governor-General of independent India."
  },
  {
    "id": 2,
    "question": "Which river is known as the 'Sorrow of Bihar'?",
    "options": [
      "Ganga",
      "Kosi",
      "Son",
      "Gandak"
    ],
    "answer": 1,
    "solution": "Kosi",
    "explanation": "The Kosi river is called the 'Sorrow of Bihar' due to its frequent floods."
  },
  {
    "id": 3,
    "question": "Who is known as the 'Father of Indian Constitution'?",
    "options": [
      "Dr. B.R. Ambedkar",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    "answer": 0,
    "solution": "Dr. B.R. Ambedkar",
    "explanation": "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Indian Constitution."
  },
  {
    "id": 4,
    "question": "Which is the largest planet in our Solar System?",
    "options": [
      "Earth",
      "Jupiter",
      "Saturn",
      "Mars"
    ],
    "answer": 1,
    "solution": "Jupiter",
    "explanation": "Jupiter is the largest planet in the Solar System."
  },
  {
    "id": 5,
    "question": "Who discovered the sea route to India?",
    "options": [
      "Christopher Columbus",
      "Marco Polo",
      "Vasco da Gama",
      "Ferdinand Magellan"
    ],
    "answer": 2,
    "solution": "Vasco da Gama",
    "explanation": "Vasco da Gama discovered the sea route to India in 1498."
  },
  {
    "id": 6,
    "question": "Which Mughal Emperor built the Red Fort in Delhi?",
    "options": [
      "Akbar",
      "Jahangir",
      "Shah Jahan",
      "Aurangzeb"
    ],
    "answer": 2,
    "solution": "Shah Jahan",
    "explanation": "Shah Jahan built the Red Fort in Delhi."
  },
  {
    "id": 7,
    "question": "What is the chemical symbol for Gold?",
    "options": [
      "Gd",
      "Au",
      "Ag",
      "Go"
    ],
    "answer": 1,
    "solution": "Au",
    "explanation": "The chemical symbol for Gold is Au."
  },
  {
    "id": 8,
    "question": "Who was the first Indian to win a Nobel Prize?",
    "options": [
      "Rabindranath Tagore",
      "C.V. Raman",
      "Mother Teresa",
      "Amartya Sen"
    ],
    "answer": 0,
    "solution": "Rabindranath Tagore",
    "explanation": "Rabindranath Tagore won the Nobel Prize in Literature in 1913."
  },
  {
    "id": 9,
    "question": "Which gas is most abundant in the Earth's atmosphere?",
    "options": [
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    "answer": 2,
    "solution": "Nitrogen",
    "explanation": "Nitrogen constitutes about 78% of Earth's atmosphere."
  },
  {
    "id": 10,
    "question": "Who was the first President of India?",
    "options": [
      "Dr. Rajendra Prasad",
      "Dr. S. Radhakrishnan",
      "Zakir Hussain",
      "V.V. Giri"
    ],
    "answer": 0,
    "solution": "Dr. Rajendra Prasad",
    "explanation": "Dr. Rajendra Prasad was the first President of India."
  },
  {
    "id": 11,
    "question": "Which is the longest river in India?",
    "options": [
      "Yamuna",
      "Brahmaputra",
      "Ganga",
      "Godavari"
    ],
    "answer": 2,
    "solution": "Ganga",
    "explanation": "The Ganga is the longest river in India."
  },
  {
    "id": 12,
    "question": "Who invented the telephone?",
    "options": [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Michael Faraday",
      "James Watt"
    ],
    "answer": 0,
    "solution": "Alexander Graham Bell",
    "explanation": "Alexander Graham Bell invented the telephone in 1876."
  },
  {
    "id": 13,
    "question": "Which is the largest desert in India?",
    "options": [
      "Thar",
      "Sahara",
      "Gobi",
      "Kalahari"
    ],
    "answer": 0,
    "solution": "Thar",
    "explanation": "The Thar Desert is the largest desert in India."
  },
  {
    "id": 14,
    "question": "Who wrote the book 'Discovery of India'?",
    "options": [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Indira Gandhi",
      "Sardar Patel"
    ],
    "answer": 1,
    "solution": "Jawaharlal Nehru",
    "explanation": "Jawaharlal Nehru wrote 'Discovery of India' during his imprisonment."
  },
  {
    "id": 15,
    "question": "Which organ purifies our blood?",
    "options": [
      "Heart",
      "Liver",
      "Lungs",
      "Kidney"
    ],
    "answer": 3,
    "solution": "Kidney",
    "explanation": "Kidneys filter and purify blood in the human body."
  },
  {
    "id": 16,
    "question": "Who was the founder of the Maurya Empire?",
    "options": [
      "Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Chanakya"
    ],
    "answer": 1,
    "solution": "Chandragupta Maurya",
    "explanation": "Chandragupta Maurya founded the Maurya Empire."
  },
  {
    "id": 17,
    "question": "Which is the smallest bone in the human body?",
    "options": [
      "Stapes",
      "Femur",
      "Tibia",
      "Fibula"
    ],
    "answer": 0,
    "solution": "Stapes",
    "explanation": "The stapes is the smallest bone, located in the middle ear."
  },
  {
    "id": 18,
    "question": "Which planet is known as the 'Red Planet'?",
    "options": [
      "Jupiter",
      "Mars",
      "Venus",
      "Saturn"
    ],
    "answer": 1,
    "solution": "Mars",
    "explanation": "Mars is called the 'Red Planet' because of its reddish appearance."
  },
  {
    "id": 19,
    "question": "Who was the first woman Prime Minister of India?",
    "options": [
      "Sarojini Naidu",
      "Indira Gandhi",
      "Pratibha Patil",
      "Sonia Gandhi"
    ],
    "answer": 1,
    "solution": "Indira Gandhi",
    "explanation": "Indira Gandhi was the first woman Prime Minister of India."
  },
  {
    "id": 20,
    "question": "Which is the largest continent in the world?",
    "options": [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    "answer": 1,
    "solution": "Asia",
    "explanation": "Asia is the largest continent in terms of area and population."
  },
  {
    "id": 21,
    "question": "Who invented the light bulb?",
    "options": [
      "Thomas Edison",
      "Nikola Tesla",
      "Isaac Newton",
      "James Watt"
    ],
    "answer": 0,
    "solution": "Thomas Edison",
    "explanation": "Thomas Edison is credited with inventing the practical electric light bulb."
  },
  {
    "id": 22,
    "question": "Which Indian state is the largest by area?",
    "options": [
      "Maharashtra",
      "Uttar Pradesh",
      "Rajasthan",
      "Madhya Pradesh"
    ],
    "answer": 2,
    "solution": "Rajasthan",
    "explanation": "Rajasthan is the largest state in India by area."
  },
  {
    "id": 23,
    "question": "Who is known as the 'Missile Man of India'?",
    "options": [
      "Dr. Homi Bhabha",
      "Dr. A.P.J. Abdul Kalam",
      "Dr. Vikram Sarabhai",
      "Dr. S. Chandrasekhar"
    ],
    "answer": 1,
    "solution": "Dr. A.P.J. Abdul Kalam",
    "explanation": "Dr. A.P.J. Abdul Kalam is called the 'Missile Man of India' for his work with ballistic missiles."
  },
  {
    "id": 24,
    "question": "Which is the highest mountain peak in India?",
    "options": [
      "Kanchenjunga",
      "Mount Everest",
      "Nanda Devi",
      "Anamudi"
    ],
    "answer": 0,
    "solution": "Kanchenjunga",
    "explanation": "Kanchenjunga is the highest mountain peak in India."
  },
  {
    "id": 25,
    "question": "Who was the first Indian to go into space?",
    "options": [
      "Kalpana Chawla",
      "Rakesh Sharma",
      "Sunita Williams",
      "Vikram Sarabhai"
    ],
    "answer": 1,
    "solution": "Rakesh Sharma",
    "explanation": "Rakesh Sharma was the first Indian to travel to space in 1984."
  }
]
