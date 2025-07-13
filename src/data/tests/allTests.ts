// File: src/data/tests/allTests.ts
// ✏️ Placeholders for Reasoning and Quant, paste them later
import { englishQuestions } from './english';
import { generalScienceQuestions } from './generalScience';
import { reasoningQuestions } from './reasoning';
import { quantQuestions } from './quant';
import { currentAffairsMay2025 } from './currentAffairsMay2025';
import { currentAffairsJune2025 } from './currentAffairsJune2025';
import { englishQuestionsT1Full02 } from './englishT1Full02';
import { quantQuestionsT1Full02 } from './quantT1Full02';
import { reasoningQuestionsT1Full02 } from './reasoningT1Full02';
import { gsQuestionsT1Full02 } from './gsT1Full02';


export interface Question {
  id: string | number;
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
  't1-full-02': {
    id: 't1-full-02',
    title: 'SSC CGL Full Test - 02',
    totalDuration: 60 * 60, // 60 mins
    sections: [
      {
        name: 'English Comprehension',
        questions: englishQuestionsT1Full02,
      },
      {
        name: 'General Awareness',
        questions: gsQuestionsT1Full02,
      },
      {
        name: 'Logical Reasoning',
        questions: reasoningQuestionsT1Full02,
      },
      {
        name: 'Quantitative Aptitude',
        questions: quantQuestionsT1Full02,
      }
    ]
  },

  't1-sec-03': {
    id: 't1-sec-03',
    title: 'Tier 1 English Sectional Test - 01',
    totalDuration: 15 * 60,   
    sections: [
      {
        name: 'English Comprehension',
        questions: englishQuestions,
      }
    ]
  },
  't1-sec-01': {
    id: 't1-sec-01',
    title: 'Tier 1 Quant Sectional Test - 01',
    totalDuration: 15 * 60,   
    sections: [
      {
        name: 'Quantitative Aptitude',
        questions: quantQuestions,
      }
    ]
  },
  't1-sec-02': {
    id: 't1-sec-02',
    title: 'Tier 1 Reasoning Sectional Test - 01',
    totalDuration: 15 * 60,   
    sections: [
      {
        name: 'Reasoning',
        questions: reasoningQuestions,
      }
    ]
  },
  't1-sec-04': {
    id: 't1-sec-04',
    title: 'Tier 1 GA Sectional Test - 01',
    totalDuration: 15 * 60,   
    sections: [
      {
        name: 'General Awareness',
        questions: gsQuestionsT1Full02,
      }
    ]
  },
  'ca-01': {
    id: 'ca-01',
    title: 'Current Affairs May 2025',
    totalDuration: 30 * 60,   
    sections: [
      {
        name: 'Current Affairs May 2025',
        questions: currentAffairsMay2025,
      }
    ]
  },
  'ca-02': {
    id: 'ca-02',
    title: 'Current Affairs June 2025',
    totalDuration: 30 * 60,   
    sections: [
      {
        name: 'Current Affairs June 2025',
        questions: currentAffairsJune2025,
      }
    ]
  },

  // 🔜 You can keep adding more testIds here as you create more data files.
};
