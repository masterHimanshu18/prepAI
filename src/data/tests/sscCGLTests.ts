// src/data/tests/sscCGLTests.ts

import type { TestConfig, Section, Question } from './testTypes';

// ✏️ Placeholders for Reasoning and Quant, paste them later
import { englishQuestions } from './english';
import { generalScienceQuestions } from './generalScience';
import { reasoningQuestions } from './reasoning';
import { quantQuestions } from './quant';


// ✅ SSC CGL Full Mock Test
export const sscCGLFullTest01: TestConfig = {
  id: 'ssc-cgl-tier1-fulltest-01',
  title: 'SSC CGL Tier 1 • Full Mock Test 01',
  totalDuration: 60 * 60,
  sections: [
    { name: 'English', questions: englishQuestions },
    { name: 'General Awareness', questions: generalScienceQuestions },
    { name: 'Logical Reasoning', questions: reasoningQuestions },
    { name: 'Quantitative Aptitude', questions: quantQuestions }
  ]
};

// ✅ Sectional Test - English
export const sscCGLEnglishSectional: TestConfig = {
  id: 'ssc-cgl-english-sectional-01',
  title: 'SSC CGL • English Sectional Test',
  totalDuration: 30 * 60,
  sections: [
    { name: 'English', questions: englishQuestions }
  ]
};
