// src/data/sscCglRoadmapInfo.ts
export interface ExamSectionInfo {
  section: string;
  questions: string;
  maxMarks: string;
  duration: string;
}

export interface TopicWeight {
  subject: string;
  subTopics: { chapter: string; range: string }[];
}

// Tier 1 Exam Pattern rows
export const sscCglTier1Info: ExamSectionInfo[] = [
    {
    section: "General Intelligence & Reasoning",
    questions: "25 MCQs",
    maxMarks: `50 Marks (every wrong answer will be penalized with 0.5 marks)`,
    duration: `1 Hour (for General Candidates)`,
  },
  {
    section: "General Awareness",
    questions: "25 MCQs",
    maxMarks: `50 Marks (every wrong answer will be penalized with 0.5 marks)`,
    duration: "1 Hour",
  },
  {
    section: "Numerical Aptitude",
    questions: "25 MCQs",
    maxMarks: `50 Marks (every wrong answer will be penalized with 0.5 marks)`,
    duration: "1 Hour",
  },
  {
    section: "English Comprehension",
    questions: "25 MCQs",
    maxMarks: `50 Marks (every wrong answer will be penalized with 0.5 marks)`,
    duration: "1 Hour",
  },
];

// Tier 1 Topic weightage breakdown
export const sscCglTier1Weightage: TopicWeight[] = [
  {
    subject: "General Knowledge",
    subTopics: [
      { chapter: "Ancient History", range: "1 - 2 Questions" },
      { chapter: "Medieval History", range: "1 - 2 Questions" },
      { chapter: "Modern Indian History", range: "2 - 3 Questions" },
      { chapter: "Polity", range: "3 - 4 Questions" },
      { chapter: "Indian Geography", range: "2 - 3 Questions" },
      { chapter: "World Geography", range: "1 - 2 Questions" },
      { chapter: "Economy", range: "2 - 3 Questions" },
      { chapter: "Physics", range: "0 - 1 Questions" },
      { chapter: "Chemistry", range: "1 - 2 Questions" },
      { chapter: "Biology", range: "2 - 3 Questions" },
      { chapter: "Art and Culture", range: "2 - 3 Questions" },
      { chapter: "Static GK", range: "4 - 5 Questions" },
      { chapter: "Current Affairs", range: "4 - 5 Questions" },
    ],
  },
  {
    subject: "Logical Reasoning",
    subTopics: [
      { chapter: "Alphabet or Word Test", range: "1 - 2 Questions" },
      { chapter: "Syllogism", range: "1 - 2 Questions" },
      { chapter: "Blood Relations", range: "1 - 2 Questions" },
      { chapter: "Classification", range: "2 - 3 Questions" },
      { chapter: "Coding Decoding", range: "2 - 3 Questions" },
      { chapter: "Puzzle", range: "2 - 3 Questions" },
      { chapter: "Non Verbal Reasoning", range: "4 - 5 Questions" },
      { chapter: "Analogy", range: "4 - 5 Questions" },
      { chapter: "Series", range: "5 - 6 Questions" },
      { chapter: "Missing Number", range: "1 - 2 Questions" },
      { chapter: "Venn Diagram", range: "1 - 2 Questions" },
      { chapter: "Miscellaneous", range: "1 - 2 Questions" },
      { chapter: "Clock and Calendar", range: "0 - 1 Questions" },
      { chapter: "Direction and Distance", range: "0 - 1 Questions" },
      { chapter: "Seating Arrangement", range: "0 - 1 Questions" },
    ],
  },
  {
    subject: "Quantitative Aptitude",
    subTopics: [
      { chapter: "Average", range: "1 - 2 Questions" },
      { chapter: "Percentage", range: "1 - 2 Questions" },
      { chapter: "Ratio and Proportion", range: "1 - 2 Questions" },
      { chapter: "Interest", range: "1 - 2 Questions" },
      { chapter: "Simplification", range: "1 - 2 Questions" },
      { chapter: "Speed Time and Distance", range: "2 - 3 Questions" },
      { chapter: "Time and Work", range: "2 - 3 Questions" },
      { chapter: "Profit and Loss", range: "2 - 3 Questions" },
      { chapter: "Data Interpretation", range: "3 - 4 Questions" },
      { chapter: "Elementary Statistics", range: "0 - 1 Questions" },
      { chapter: "Number System", range: "2 - 3 Questions" },
      { chapter: "Trigonometry", range: "3 - 4 Questions" },
      { chapter: "Geometry", range: "2 - 3 Questions" },
      { chapter: "Algebra", range: "2 - 3 Questions" },
      { chapter: "Mensuration", range: "2 - 3 Questions" },
    ],
  },
  {
    subject: "English",
    subTopics: [
      { chapter: "Synonyms", range: "2 - 3 Questions" },
      { chapter: "Antonyms", range: "2 - 3 Questions" },
      { chapter: "Idioms", range: "2 - 3 Questions" },
      { chapter: "One Word Substitution", range: "2 - 3 Questions" },
      { chapter: "Spellings", range: "2 - 3 Questions" },
      { chapter: "Error Detection", range: "2 - 3 Questions" },
      { chapter: "Error Correction", range: "2 - 3 Questions" },
      { chapter: "Fill in the Blanks", range: "2 - 3 Questions" },
      { chapter: "Cloze Test", range: "5 - 6 Questions" },
      { chapter: "Active and Passive", range: "2 - 3 Questions" },
      { chapter: "Jumbled Sentence", range: "2 - 3 Questions" },
    ],
  },
];