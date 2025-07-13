// src/data/tests/testTypes.ts


export interface Question {
  id: string | number;
  question: string;
  options: string[];
  answer: number;
  solution?: string;      //  ← make optional
  explanation?: string;   //  ← make optional
}

export interface Section {
  name: string;
  questions: Question[];
}

export interface TestConfig {
  id: string;
  title: string;
  totalDuration: number; // in seconds
  sections: Section[];
}
