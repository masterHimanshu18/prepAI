// File: src/data/tests/allTests.ts
// ✏️ Placeholders for Reasoning and Quant, paste them later
import { englishQuestions } from './english';
import { generalScienceQuestions } from './generalScience';
import { reasoningQuestions } from './reasoning';
import { quantQuestions } from './quant';

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  solution?: string;
  explanation?: string;
}

export interface TestSection {
  name: string;
  questions: Question[];
}

export interface TestConfig {
  id: string;
  title: string;
  totalDuration: number; // in seconds
  sections: TestSection[];
}

export const allTests: Record<string, TestConfig> = {
  't1-full-01': {
    id: 't1-full-01',
    title: 'SSC CGL Full Test - 01',
    totalDuration: 60 * 60, // 60 mins
    sections: [
      {
        name: 'English Comprehension',
        questions: englishQuestions,
      },
      {
        name: 'General Awareness',
        questions: generalScienceQuestions,
      },
      {
        name: 'Logical Reasoning',
        questions: reasoningQuestions,
      },
      {
        name: 'Quantitative Aptitude',
        questions: quantQuestions,
      }
    ]
  },

  't2-sec-03': {
    id: 't2-sec-03',
    title: 'Tier 2 English Sectional Test - 01',
    totalDuration: 40 * 60, // 40 mins
    sections: [
      {
        name: 'English Comprehension',
        questions: englishQuestions,
      }
    ]
  },

  // 🔜 You can keep adding more testIds here as you create more data files.
};
