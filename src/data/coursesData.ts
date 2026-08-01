export interface CourseModule {
  title: string;
  sessions?: string;
  time?: string;
  attachments?: string;
  bonus?: boolean;
}

export interface DetailedCourse {
  id: string;
  title: string;
  badge: string;
  instructor: string;
  language: string;
  originalPrice: string;
  price: string;
  discount: string;
  promoCode: string;
  promoDiscount: string;
  format: string;
  duration: string;
  level: string;
  rating?: string;
  ratingCount?: string;
  subtitle: string;
  aboutText: string;
  whoShouldAttend: string[];
  whyJoinText: string;
  highlights: string[];
  syllabus: CourseModule[];
}

export const detailedCoursesData: Record<string, DetailedCourse> = {
  "cdp-advanced": {
    id: "cdp-advanced",
    title: "Carbon Disclosure Project (CDP) Advanced - Practitioner Batch",
    badge: "CDP Practitioner",
    instructor: "ReGeneva Academy",
    language: "English",
    originalPrice: "₹19,999",
    price: "₹9,999",
    discount: "50% OFF",
    promoCode: "REGENEVA25",
    promoDiscount: "FLAT 25% OFF",
    format: "Blended Advanced Training: Live Weekend Sessions & Recorded",
    duration: "40 Hours",
    level: "Advanced",
    subtitle: "Take your CDP reporting and rating skills to the next level with our advanced practitioner batch course.",
    aboutText: "The CDP Advanced – Practitioner Batch is a practical, industry-focused program designed to help ESG professionals, sustainability teams, consultants, and aspiring practitioners develop end-to-end expertise in CDP Climate Change reporting. This hands-on course goes beyond theory to cover the complete CDP disclosure process—from understanding the scoring methodology and questionnaire to preparing high-quality responses, avoiding common submission mistakes, and implementing proven strategies to improve CDP scores.",
    whoShouldAttend: [
      "Corporate Sustainability & ESG Professionals",
      "ESG & Sustainability Consultants",
      "EHS & Climate Professionals",
      "Students & Green Job Aspirants",
      "Professionals transitioning into ESG careers"
    ],
    whyJoinText: "Unlike generic CDP courses, this program focuses on practical implementation using real consulting approaches, case studies, templates, and best practices. You'll learn how to prepare, review, and improve CDP disclosures with confidence while building skills that are directly applicable in corporate sustainability and ESG consulting roles.",
    highlights: [
      "40 Hours of Comprehensive Curriculum",
      "Live Weekend Classes & Lifetime Access to Recordings",
      "Practical Case Studies & Real Business Scenarios",
      "Ready-to-Use Working Templates & Practitioner Handbook",
      "Query Resolution Support & Capstone Project",
      "Bonus Module: AI for CDP Reporting & Scoring Excellence",
      "Certificate of Completion & Peer Professional Networking"
    ],
    syllabus: [
      { title: "Module 1: Introduction to CDP & Climate Disclosure Ecosystem", sessions: "2 Sessions", time: "2 hour 8 min 54 sec" },
      { title: "Module 2: Climate Change Fundamentals", sessions: "2 Sessions", time: "2 hour 21 min 27 sec" },
      { title: "Module 3: CDP Questionnaire Deep Dive", sessions: "1 Session" },
      { title: "Module 4: CDP Scoring Methodology" },
      { title: "Module 5: Corporate Governance & Climate Strategy" },
      { title: "Module 6: Climate Risk & Opportunity Assessment (CDP Aligned)" },
      { title: "Module 7: GHG Inventorization and Accounting for CDP" },
      { title: "Module 8: Climate Targets & Transition Plan" },
      { title: "Module 9: Preparing High-Quality CDP Responses" },
      { title: "Module 10: Improving CDP Scores - Detailed Strategy and Action Plan" },
      { title: "Module 11: CDP Submission & Quality Assurance" },
      { title: "Module 12: Integration with Other ESG and Sustainability Frameworks" },
      { title: "Module 13: Consulting Methodology & Client Engagement" },
      { title: "Module 14: Ready-to-Use Working Templates Debriefing" },
      { title: "Module 15: Practical Case Studies & Real Business Scenarios" },
      { title: "Module 16 (Bonus Module): AI for CDP Reporting & Scoring Excellence", bonus: true },
      { title: "Module 17: Capstone Project" },
      { title: "Module 18: Assessment & Certificate of Completion" }
    ]
  },
  "ecovadis-advanced": {
    id: "ecovadis-advanced",
    title: "EcoVadis Assessment Preparation – Advanced: Detailed Strategy on Assessment and Performance Improvement",
    badge: "EcoVadis Strategy",
    instructor: "Gabriela Uberna",
    language: "English",
    originalPrice: "₹19,999",
    price: "₹7,999",
    discount: "60% OFF",
    promoCode: "REGENEVA25",
    promoDiscount: "FLAT 25% OFF",
    format: "CPD Certified | 5 Hours | Self-Led Online Course",
    duration: "5 Hours",
    level: "Advanced",
    subtitle: "Score Improvement, Business Value & Strategic Use for enterprise supply chains.",
    aboutText: "Your clients aren't just asking for your EcoVadis score anymore — they're setting minimum thresholds, tying supplier selection to medal levels, and expecting improvement roadmaps. This advanced course goes beyond the basics of the assessment process to teach you how to read a scorecard the way EcoVadis analysts do, pinpoint exactly where points are lost, and build a credible improvement plan.",
    whoShouldAttend: [
      "Supply chain companies under client pressure to improve EcoVadis scores",
      "ESG and sustainability professionals managing assessments",
      "Procurement and supply chain managers integrating EcoVadis",
      "Consultants advising clients on ESG compliance and score improvement"
    ],
    whyJoinText: "Most companies underperform on EcoVadis because their documentation, policy formalisation, and internal governance don't reflect what they actually do. Closing that gap systematically with the right evidence is what moves scores.",
    highlights: [
      "CPD Certified 5-Hour Self-Led Online Course",
      "Full command of EcoVadis 4-pillar scoring methodology",
      "Bronze, Silver, Gold & Platinum medal threshold roadmaps",
      "Audit-ready Corrective Action Plans (CAPs) & Documentation Checklists",
      "Real scorecard case studies & gap analysis frameworks"
    ],
    syllabus: [
      { title: "Getting Started: Know Your Instructor & Learning Objectives", attachments: "5 attachments" },
      { title: "Module 1: Introduction to EcoVadis, ESG Context & Risk-Based Screening", attachments: "9 attachments" },
      { title: "Module 2: Reassessment Decoded: What Changes and Why", attachments: "8 attachments" },
      { title: "Module 3: Building a High-Scoring Repository", attachments: "21 attachments" },
      { title: "Module 4: CAPs & Stakeholder Engagement", attachments: "15 attachments" },
      { title: "Module 5: Strategic Use of EcoVadis Results", attachments: "20 attachments" },
      { title: "Module 6: Building an Internal EcoVadis Operating System", attachments: "12 attachments" },
      { title: "Module 7: Summary & Next Steps", attachments: "14 attachments" },
      { title: "Assessment: EcoVadis - Advanced", attachments: "1 attachment" },
      { title: "Feedback: EcoVadis - Advanced", attachments: "1 attachment" }
    ]
  },
  "ecovadis-templates": {
    id: "ecovadis-templates",
    title: "EcoVadis Assessment Preparation – Advanced: Actionable Templates Included",
    badge: "Templates Included",
    instructor: "Gabriela Uberna",
    language: "English",
    originalPrice: "₹21,999",
    price: "₹9,999",
    discount: "55% OFF",
    promoCode: "REGENEVA25",
    promoDiscount: "FLAT 25% OFF",
    format: "CPD Certified | 5 Hours | Actionable Templates Included",
    duration: "5 Hours",
    level: "Advanced",
    subtitle: "Complete toolkit version with ready-to-use policy documentation, audit templates, and CAP workbooks.",
    aboutText: "This edition of EcoVadis Assessment Preparation – Advanced comes fully packed with actionable documentation templates, policy formalisation kits, and corrective action planning workbooks to accelerate your score improvement journey.",
    whoShouldAttend: [
      "Companies requiring ready-to-implement EcoVadis policy templates",
      "Sustainability teams managing corporate EcoVadis re-assessments",
      "ESG Consultants deploying client policy documentation"
    ],
    whyJoinText: "Every module produces a tangible deliverable: a gap analysis, a corrective action plan, a documentation checklist, and an improvement roadmap that you can use immediately.",
    highlights: [
      "Includes Actionable Policy & Audit Document Templates",
      "CPD Certified Self-Led Course with Lifetime Access",
      "4-Pillar Scorecard Gap Analysis Frameworks",
      "Step-by-step guidance to achieve Silver, Gold, or Platinum medals"
    ],
    syllabus: [
      { title: "Getting Started: Know Your Instructor & Learning Objectives", attachments: "4 attachments", time: "3 min 31 sec" },
      { title: "Module 1: Introduction to EcoVadis & Risk-Based Screening", attachments: "9 attachments", time: "7 min 38 sec" },
      { title: "Module 2: Reassessment Decoded: What Changes and Why", attachments: "11 attachments", time: "8 min 5 sec" },
      { title: "Module 3: Building a High-Scoring Repository", attachments: "30 attachments", time: "26 min 26 sec" },
      { title: "Module 4: CAPs & Stakeholder Engagement", attachments: "16 attachments", time: "10 min 36 sec" },
      { title: "Module 5: Strategic Use of EcoVadis Results", attachments: "24 attachments", time: "21 min 33 sec" },
      { title: "Module 6: Building an Internal EcoVadis Operating System", attachments: "15 attachments", time: "13 min" },
      { title: "Module 7: Summary & Next Steps", attachments: "14 attachments", time: "16 min 50 sec" },
      { title: "Supplement: EcoVadis Assessment – Use Cases", attachments: "6 attachments", time: "13 min 18 sec" },
      { title: "Assessment: EcoVadis - Advanced", attachments: "1 attachment" },
      { title: "Feedback: EcoVadis - Advanced", attachments: "1 attachment" }
    ]
  },
  "double-materiality": {
    id: "double-materiality",
    title: "Double Materiality Assessment (DMA) - Advanced: ESRS & CSRD",
    badge: "ESRS & CSRD",
    instructor: "Sunny Revankar",
    language: "English",
    originalPrice: "₹11,999",
    price: "₹4,999",
    discount: "58% OFF",
    promoCode: "REGENEVA70",
    promoDiscount: "70% OFF",
    format: "Practitioner-Oriented Intensive Masterclass",
    duration: "15 Hours",
    level: "Advanced",
    subtitle: "Master practical application of impact and financial materiality under ESRS & CSRD!",
    aboutText: "Double Materiality Assessment (DMA) – Advanced is an in-depth, practitioner-oriented course designed to equip professionals with the knowledge and practical tools required to design and implement a Double Materiality Assessment in line with European Sustainability Reporting Standards (ESRS) and Corporate Sustainability Reporting Directive (CSRD).",
    whoShouldAttend: [
      "ESG and sustainability professionals",
      "Corporate sustainability and reporting teams",
      "Consultants supporting CSRD/ESRS implementation",
      "Risk management and strategy professionals",
      "Auditors and assurance professionals reviewing sustainability disclosures"
    ],
    whyJoinText: "Double materiality has become a cornerstone of modern sustainability reporting. By the end of the course, participants will be able to independently conduct or manage a Double Materiality Assessment aligned with CSRD expectations.",
    highlights: [
      "Impact & Financial Materiality Matrix Development",
      "ESRS & CSRD Regulatory Alignment",
      "Stakeholder Engagement & Scoring Methodologies",
      "Integration into GRI and Integrated Reporting Frameworks"
    ],
    syllabus: [
      { title: "Getting Started: Know Your Instructor & Learning Objectives", attachments: "2 attachments" },
      { title: "Module 1: Introduction to Materiality Assessment", attachments: "1 attachment" },
      { title: "Module 2: From Single to Double Materiality", attachments: "1 attachment" },
      { title: "Module 3: Mapping ESRS Impact & Financial Materiality" },
      { title: "Module 4: Stakeholder Engagement & Scoring Methodologies" },
      { title: "Module 5: Constructing the Double Materiality Matrix" }
    ]
  },
  "gri-reporting": {
    id: "gri-reporting",
    title: "GRI Reporting- Advanced: Practical Guide to Drafting ESG Reports",
    badge: "GRI Standards",
    instructor: "Naina Agrawal",
    language: "English",
    originalPrice: "₹18,999",
    price: "₹8,999",
    discount: "52% OFF",
    promoCode: "REGENEVA70",
    promoDiscount: "70% OFF",
    format: "Comprehensive Practitioner Course",
    duration: "20 Hours",
    level: "Advanced",
    subtitle: "Craft Dynamic ESG/Sustainability Reports Like a Pro using GRI Standards!",
    aboutText: "GRI Reporting – Advanced: Practical Guide to Drafting ESG/Sustainability/Integrated Reports is a comprehensive, practitioner-focused course designed to equip professionals with the skills required to prepare high-quality sustainability, ESG, and integrated reports using the Global Reporting Initiative (GRI) Standards.",
    whoShouldAttend: [
      "ESG and sustainability professionals",
      "Corporate reporting and strategy teams",
      "Consultants and auditors working in ESG reporting",
      "Professionals involved in BRSR and integrated reporting",
      "Students & early-career sustainability aspirants"
    ],
    whyJoinText: "Goes beyond theoretical understanding to provide a step-by-step practical approach to developing a complete sustainability report—from framework alignment to compiling disclosures.",
    highlights: [
      "Complete GRI 2, GRI 3, GRI 300 & GRI 400 Standards Coverage",
      "Integration with BRSR & Integrated Reporting",
      "Report Assembly, Content Index & Assurance Best Practices",
      "Templates and real-world reporting insights"
    ],
    syllabus: [
      { title: "Getting Started: Know Your Instructor & Learning Objectives", attachments: "2 attachments", time: "48 sec" },
      { title: "Module 1: Introduction to GRI Standard & Reporting Principles", attachments: "1 attachment", time: "1 min 52 sec" },
      { title: "Module 2: Organizational Disclosure (GRI 2)", attachments: "6 attachments", time: "34 min 19 sec" },
      { title: "Module 3: Materiality Assessment (GRI 3)", attachments: "6 attachments", time: "11 min 25 sec" },
      { title: "Module 4: Economic Topic Standard", attachments: "6 attachments", time: "16 min 17 sec" },
      { title: "Module 5: Environmental Topics (GRI 300)", attachments: "9 attachments", time: "29 min 28 sec" },
      { title: "Module 6: Social Topics (GRI 400)", attachments: "5 attachments", time: "12 min 51 sec" },
      { title: "Module 7: Data Management & Assurance", attachments: "4 attachments", time: "18 min 9 sec" },
      { title: "Module 8: Report Assembly & Content Index", attachments: "2 attachments", time: "12 min 56 sec" },
      { title: "Module 9: Integration with Other Standards", attachments: "1 attachment", time: "5 min 58 sec" },
      { title: "Module 10: Recent Developments in Global Disclosures", attachments: "7 attachments", time: "8 min 19 sec" }
    ]
  },
  "ghg-accounting": {
    id: "ghg-accounting",
    title: "GHG Inventorization and Accounting (Recorded Workshop)",
    badge: "Recorded Workshop",
    instructor: "Mohit Waghela",
    language: "English",
    originalPrice: "₹9,999",
    price: "₹6,999",
    discount: "30% OFF",
    promoCode: "REGENEVA25",
    promoDiscount: "25% OFF",
    format: "Recorded Workshop with Lifetime Access",
    duration: "10 Hours",
    level: "Intermediate",
    rating: "5.0",
    ratingCount: "1",
    subtitle: "Complete GHG Protocol workshop on Scope 1, 2 & 3 carbon footprint quantification.",
    aboutText: "Master greenhouse gas inventorization and carbon accounting methods compliant with the GHG Protocol. Learn how to calculate Scope 1 direct emissions, Scope 2 indirect energy emissions, and Scope 3 supply chain footprints.",
    whoShouldAttend: [
      "Corporate EHS and energy managers",
      "Carbon accounting consultants",
      "Sustainability directors setting Net-Zero targets"
    ],
    whyJoinText: "Hands-on calculation exercises and ready-to-use GHG inventorization templates.",
    highlights: [
      "GHG Protocol Standard Alignment",
      "Scope 1, 2 & 3 Calculation Spreadsheet Tools",
      "Emission Factor Databases & Verification Techniques"
    ],
    syllabus: [
      { title: "Module 1: GHG Protocol Accounting Principles" },
      { title: "Module 2: Direct Scope 1 Stationary & Mobile Combustion" },
      { title: "Module 3: Indirect Scope 2 Purchased Energy & Steam" },
      { title: "Module 4: Scope 3 Value Chain Categories 1 to 15" }
    ]
  },
  "brsr-deep-dive": {
    id: "brsr-deep-dive",
    title: "Deep Dive into Business Responsibility and Sustainability Reporting (BRSR)",
    badge: "BRSR Workshop",
    instructor: "Surya Narayan Kar, Mitanjali Routray",
    language: "English",
    originalPrice: "₹13,999",
    price: "₹5,999",
    discount: "57% OFF",
    promoCode: "REGENEVA25",
    promoDiscount: "25% OFF",
    format: "Recorded Workshop",
    duration: "12 Hours",
    level: "Intermediate",
    subtitle: "Recorded deep-dive workshop on essential and leadership indicators for BRSR compliance.",
    aboutText: "Detailed walkthrough of SEBI mandatory Business Responsibility and Sustainability Reporting (BRSR) core framework, indicator drafting, and audit preparedness for Indian listed entities.",
    whoShouldAttend: [
      "CS, Legal, and Compliance Officers",
      "ESG Reporting Directors",
      "Advisors to listed companies in India"
    ],
    whyJoinText: "Step-by-step indicator drafting guidance and real report case studies.",
    highlights: [
      "BRSR Core 9 Principles Deep Dive",
      "Essential vs Leadership Indicator Documentation",
      "SEBI Compliance & Verification Guidelines"
    ],
    syllabus: [
      { title: "Module 1: Overview of SEBI BRSR Mandates" },
      { title: "Module 2: Section A, B & C Principles Breakdown" },
      { title: "Module 3: Drafting Essential vs Leadership Disclosures" }
    ]
  },
  "esg-intro": {
    id: "esg-intro",
    title: "Introduction to ESG & Sustainability (Recorded Workshop)",
    badge: "Introductory Primer",
    instructor: "Surya Narayan Kar, Mitanjali Routray",
    language: "English",
    originalPrice: "₹1,998",
    price: "₹999",
    discount: "50% OFF",
    promoCode: "REGENEVA25",
    promoDiscount: "25% OFF",
    format: "Recorded Workshop",
    duration: "3 Hours",
    level: "Beginner",
    subtitle: "Essential primer on core ESG metrics, climate risks, and sustainability career paths.",
    aboutText: "The perfect starting point for professionals and students seeking to understand the ESG ecosystem, regulatory mandates, and high-growth sustainability career paths.",
    whoShouldAttend: [
      "Students and job seekers entering ESG",
      "Corporate managers needing foundational ESG literacy",
      "Entrepreneurs building green ventures"
    ],
    whyJoinText: "Fast-track 3-hour foundational course covering essential concepts.",
    highlights: [
      "Fundamentals of E, S, and G Pillars",
      "Global ESG Regulatory Landscape Overview",
      "Career Pathways & Upskilling Guidance"
    ],
    syllabus: [
      { title: "Module 1: What is ESG & Why Does It Matter?" },
      { title: "Module 2: ESG Frameworks Overview (GRI, BRSR, CSRD)" },
      { title: "Module 3: ESG Career Landscape & Next Steps" }
    ]
  }
};
