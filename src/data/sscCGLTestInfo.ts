// File: src/data/sscCGLTestInfo.ts

export interface Test {
  id: string;
  title: string;
  attempts: number;
  questions: number;
  marks: number;
  duration: string;
  isLocked?: boolean;
}

export interface Category {
  key: string;
  label: string;
  count?: number;
  tests: Test[];
}

export interface PatternData {
  name: string; // Tier 1, Tier 2, etc.
  categories: Category[];
}

export const sscCGLTestPatterns: PatternData[] = [
  {
    name: 'Tier 1',
    categories: [
      {
        key: 'live',
        label: 'Live Tests',
        count: 3,
        tests: [
          {
            id: 't1-live-01',
            title: 'SSC CGL Tier 1 - Live Test 01',
            attempts: 225000,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: false,
          },
          {
            id: 't1-live-02',
            title: 'SSC CGL Tier 1 - Live Test 02',
            attempts: 204300,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: true,
          },
          {
            id: 't1-live-03',
            title: 'SSC CGL Tier 1 - Live Test 03',
            attempts: 189400,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: true,
          }
        ],
      },
      {
        key: 'full',
        label: 'Full Tests',
        count: 5,
        tests: [
          {
            id: 't1-full-01',
            title: 'SSC CGL Full Test - 01',
            attempts: 300000,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: false,
          },
          {
            id: 't1-full-02',
            title: 'SSC CGL Full Test - 02',
            attempts: 278000,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: false,
          },
          {
            id: 't1-full-03',
            title: 'SSC CGL Full Test - 03',
            attempts: 256000,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: true,
          },
          {
            id: 't1-full-04',
            title: 'SSC CGL Full Test - 04',
            attempts: 190500,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: true,
          },
          {
            id: 't1-full-05',
            title: 'SSC CGL Full Test - 05',
            attempts: 145800,
            questions: 100,
            marks: 200,
            duration: '60 mins',
            isLocked: true,
          }
        ],
      },
      {
        key: 'advanced',
        label: 'Advanced Tests',
        count: 2,
        tests: [
          {
            id: 't1-adv-01',
            title: 'Advanced Practice Set - Quant (Tier 1)',
            attempts: 112300,
            questions: 25,
            marks: 50,
            duration: '20 mins',
            isLocked: false,
          },
          {
            id: 't1-adv-02',
            title: 'Advanced Practice Set - English (Tier 1)',
            attempts: 98000,
            questions: 25,
            marks: 50,
            duration: '20 mins',
            isLocked: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Tier 2',
    categories: [
      {
        key: 'full',
        label: 'Full Tests',
        count: 3,
        tests: [
          {
            id: 't2-full-01',
            title: 'SSC CGL Tier 2 Full Test - 01',
            attempts: 105000,
            questions: 135,
            marks: 270,
            duration: '120 mins',
            isLocked: false,
          },
          {
            id: 't2-full-02',
            title: 'SSC CGL Tier 2 Full Test - 02',
            attempts: 92000,
            questions: 135,
            marks: 270,
            duration: '120 mins',
            isLocked: true,
          },
          {
            id: 't2-full-03',
            title: 'SSC CGL Tier 2 Full Test - 03',
            attempts: 87500,
            questions: 135,
            marks: 270,
            duration: '120 mins',
            isLocked: true,
          },
        ],
      },
      {
        key: 'sectional',
        label: 'Sectional Tests',
        count: 4,
        tests: [
          {
            id: 't2-sec-01',
            title: 'Tier 2 Quant Sectional Test - 01',
            attempts: 74000,
            questions: 30,
            marks: 90,
            duration: '30 mins',
            isLocked: false,
          },
          {
            id: 't2-sec-02',
            title: 'Tier 2 Reasoning Sectional Test - 01',
            attempts: 69000,
            questions: 30,
            marks: 90,
            duration: '30 mins',
            isLocked: false,
          },
          {
            id: 't2-sec-03',
            title: 'Tier 2 English Sectional Test - 01',
            attempts: 61000,
            questions: 45,
            marks: 135,
            duration: '40 mins',
            isLocked: true,
          },
          {
            id: 't2-sec-04',
            title: 'Tier 2 General Awareness Sectional Test - 01',
            attempts: 57000,
            questions: 25,
            marks: 75,
            duration: '25 mins',
            isLocked: true,
          },
        ],
      },
    ],
  },
];
