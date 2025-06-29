// src/data/allRoadmaps.ts

import type { ExamSectionInfo, TopicWeight } from "./sscCglRoadmapInfo";
import { sscCglTier1Info, sscCglTier1Weightage } from "./sscCglRoadmapInfo";

// Define the pattern structure
export interface PatternData {
  name: string;               // e.g. "Tier 1"
  examInfo: ExamSectionInfo[];
  weightage: TopicWeight[];
}

export const allRoadmaps: PatternData[] = [
  {
    name: "Tier 1",
    examInfo: sscCglTier1Info,
    weightage: sscCglTier1Weightage,
  },
  // Future patterns:
  // { name: "Tier 2", examInfo: tier2Info, weightage: tier2Weightage },
];