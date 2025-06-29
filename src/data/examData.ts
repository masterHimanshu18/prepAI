// src/data/examData.ts
import sscLogo from '../assets/examsLogo/ssc_logo.png';
import ibpsLogo from '../assets/examsLogo/ibps_logo.png';
import rbiLogo from '../assets/examsLogo/rbi_logo.png';
import defenceLogo from '../assets/examsLogo/defence_logo.png';
import armyLogo from '../assets/examsLogo/army_logo.png';
import airforceLogo from '../assets/examsLogo/airforce_logo.png';
import kvsLogo from '../assets/examsLogo/kvs_logo.png';
import nabardLogo from '../assets/examsLogo/nabard_logo.png';
import netLogo from '../assets/examsLogo/net_logo.png';
import sbiLogo from '../assets/examsLogo/sbi_logo.png';
import teachingLogo from '../assets/examsLogo/teaching_logo.png';

export interface SubExam {
    id: number;
    name: string;
    logo: string;
  }
  
  export interface ExamCategory {
    id: number;
    name: string;
    icon: string;
    subExams: SubExam[];
  }
  

  // Enhanced exam categories data
export const examCategories: ExamCategory[] = [
    {
      id: 1,
      name: 'SSC Exams',
      icon: sscLogo,
      subExams: [
        { id: 101, name: 'SSC CPO', logo: sscLogo },
        { id: 102, name: 'SSC CGL', logo: sscLogo },
        { id: 103, name: 'SSC CHSL', logo: sscLogo },
        { id: 104, name: 'SSC MTS', logo: sscLogo },
        { id: 105, name: 'SSC Stenographer', logo: sscLogo },
        { id: 106, name: 'SSC JE CE', logo: sscLogo },
      ]
    },
    {
      id: 2,
      name: 'Banking Exams',
      icon: ibpsLogo,
      subExams: [
        { id: 201, name: 'IBPS PO', logo: ibpsLogo },
        { id: 202, name: 'SBI PO', logo: sbiLogo },
        { id: 203, name: 'RBI Grade B', logo: rbiLogo },
        { id: 204, name: 'NABARD', logo: nabardLogo },
      ]
    },
    {
      id: 3,
      name: 'Defence Exams',
      icon: defenceLogo,
      subExams: [
        { id: 301, name: 'CDS', logo: defenceLogo },
        { id: 302, name: 'NDA', logo: armyLogo },
        { id: 303, name: 'AFCAT', logo: airforceLogo },
        { id: 304, name: 'SSB Interview', logo: defenceLogo },
      ]
    },
    {
      id: 4,
      name: 'Teaching Exams',
      icon: teachingLogo,
      subExams: [
        { id: 401, name: 'CTET', logo: teachingLogo },
        { id: 402, name: 'TET', logo: teachingLogo },
        { id: 403, name: 'NET', logo: netLogo },
        { id: 404, name: 'KVS PGT/TGT/PRT', logo: kvsLogo },
      ]
    }
  ];