// Every claim here traces to the resumes or LinkedIn profile (see vaishnavi-kulkarni/context.md).
// Board fields are uppercase and length-limited because each character is one flap tile.

export type Lens = 'product' | 'program' | 'project';

export interface Row {
  id: string;
  year: string;      // max 7 chars
  title: string;     // max 24 chars (board)
  where: string;     // max 12 chars (board)
  result: string;    // max 24 chars (board)
  what: string;      // ticket: one-line context
  did: string[];     // ticket: what she did
  stack: string[];
  employer: string;  // ticket: full name
  notes: Record<Lens, string>;
}

export const rows: Row[] = [
  {
    id: 'agent',
    year: '2026',
    title: 'AI CONVERSATIONAL AGENT',
    where: 'SFE GROUP',
    result: '-80% RESOLUTION TIME',
    what: 'A 0-to-1 AI agent for the sales and support teams at SFE Group, an industrial manufacturing and fabrication company.',
    did: [
      'Turned what sales and support needed into technical requirements.',
      'Built it on Gemini Flash with retrieval-augmented generation (RAG), Google Cloud Storage and Flask.',
      'Answers link to their source documents through secure links that expire after 5 minutes.',
      'Cut query resolution time by about 80%.',
    ],
    stack: ['Gemini Flash', 'RAG', 'Google ADK', 'GCS', 'Flask'],
    employer: 'SFE Group, Portland, OR',
    notes: {
      product: 'Product lens: user need to requirements to a shipped 0-to-1 AI product.',
      program: 'Program lens: owned delivery and launch from requirements to production.',
      project: 'Project lens: a scoped build with a measurable result.',
    },
  },
  {
    id: 'machine',
    year: '2026',
    title: 'CUSTOM MACHINE PROGRAM',
    where: 'SFE GROUP',
    result: 'ON TIME, UNDER BUDGET',
    what: 'End-to-end delivery of a custom-built machine for a client in Saudi Arabia.',
    did: [
      'Handled evolving requirements, scope creep and sales order revisions.',
      'Turned each change into a scope decision and a priority trade-off.',
      'Kept the program on schedule and under budget.',
    ],
    stack: ['Scope', 'Schedule', 'Budget', 'Stakeholders'],
    employer: 'SFE Group, Portland, OR',
    notes: {
      product: 'Product lens: prioritization under changing requirements.',
      program: 'Program lens: scope, schedule and budget trade-offs owned end to end.',
      project: 'Project lens: delivery held to schedule and budget despite change.',
    },
  },
  {
    id: 'launches',
    year: '2026',
    title: '7 LAUNCHES, US + FRANCE',
    where: 'SFE GROUP',
    result: '70% ON SCHEDULE',
    what: 'Cross-functional coordination of product launches across two countries.',
    did: [
      'Aligned engineering, sales, marketing and operations on milestones and dependencies.',
      'Tracked launch readiness across the US and France.',
      '70% of the launches met their schedule.',
    ],
    stack: ['Milestones', 'Dependencies', 'Launch readiness'],
    employer: 'SFE Group, Portland, OR',
    notes: {
      product: 'Product lens: go-to-market execution across teams and regions.',
      program: 'Program lens: dependencies and milestones across seven launches.',
      project: 'Project lens: schedule performance, measured per launch.',
    },
  },
  {
    id: 'onboarding',
    year: '2024-25',
    title: 'CUSTODIAN ONBOARDING',
    where: 'BOUNTEOUS',
    result: '+25% CLIENT SATISFACTION',
    what: 'Onboarding financial custodians onto CircleBlack, a wealth-management platform, as lead engineer at a digital engineering consultancy.',
    did: [
      'Led the onboarding of financial custodians onto the platform.',
      'Coordinated technical implementation and data integration across a distributed engineering team.',
      'Contributed to a 25% increase in client satisfaction through reliable delivery.',
    ],
    stack: ['Python', 'SQL', 'Data integration', 'Jira'],
    employer: 'Bounteous, Bangalore, India',
    notes: {
      product: 'Product lens: customer outcomes tied to reliable delivery.',
      program: 'Program lens: a technical rollout coordinated across teams and a client.',
      project: 'Project lens: repeatable onboarding delivery with a satisfaction measure.',
    },
  },
  {
    id: 'qa',
    year: '2024-25',
    title: 'DATA VALIDATION + QA',
    where: 'BOUNTEOUS',
    result: '-40% DISCREPANCIES',
    what: 'Validation and quality protocols for the portfolio datasets behind financial advisors’ dashboards.',
    did: [
      'Validated and optimized large portfolio datasets with Python and SQL.',
      'Cut data discrepancies by 40%, so advisors could trust the insights.',
      'Built QA and risk protocols that catch issues before deployment, saving 20+ hours a month of troubleshooting.',
    ],
    stack: ['Python', 'SQL', 'QA protocols', 'Risk management'],
    employer: 'Bounteous, Bangalore, India',
    notes: {
      product: 'Product lens: data quality as a product feature advisors depend on.',
      program: 'Program lens: release readiness and risk surfaced before deployment.',
      project: 'Project lens: process change that saves 20+ hours a month.',
    },
  },
  {
    id: 'pipelines',
    year: '2022-24',
    title: 'LEGACY TO AWS PIPELINES',
    where: 'BOUNTEOUS',
    result: '50%+ FASTER',
    what: 'Modernizing legacy data pipelines into a cloud-native AWS architecture as a software engineer.',
    did: [
      'Rebuilt the pipelines on Airflow, S3 and PySpark and cut processing time by more than 50%.',
      'Built an AWS Athena to MySQL pipeline, 30% faster, working with cross-functional teams on requirements.',
      'Worked with leadership on Agile workflow changes in Jira that raised engineering productivity by 15%.',
    ],
    stack: ['AWS', 'Airflow', 'S3', 'PySpark', 'Athena', 'MySQL'],
    employer: 'Bounteous, Bangalore, India',
    notes: {
      product: 'Product lens: platform reliability behind advisor-facing dashboards.',
      program: 'Program lens: technical depth to plan and de-risk a migration.',
      project: 'Project lens: a migration delivered inside stringent SLAs.',
    },
  },
  {
    id: 'kuvia',
    year: '2026',
    title: 'KUVIA AI STRATEGY',
    where: 'PURDUE',
    result: '+40% DATA QUALITY',
    what: 'A product-strategy engagement with Kuvia AI, a healthcare AI startup, through Purdue’s Social Impact Startup Academy.',
    did: [
      'Mapped stakeholder incentives across the healthcare ecosystem to shape pricing and go-to-market.',
      'Benchmarked 4–6 competitors, including three in Central America.',
      'Built a medical imaging data normalization pipeline that improved dataset quality by 40% for the AI team.',
    ],
    stack: ['Product discovery', 'Competitive analysis', 'Go-to-market', 'Python'],
    employer: 'Purdue University, Social Impact Startup Academy',
    notes: {
      product: 'Product lens: discovery, positioning and commercialization for an AI product.',
      program: 'Program lens: strategy tied to a data pipeline the AI team depends on.',
      project: 'Project lens: scoped consulting engagement with defined deliverables.',
    },
  },
  {
    id: 'forecast',
    year: '2025',
    title: 'DEMAND FORECAST, 9 SKUS',
    where: 'PURDUE',
    result: '+20% SUPPLY-DEMAND FIT',
    what: 'Predictive demand forecasting for Red Gold, a US food manufacturer, through Purdue’s Experiential Learning Initiative.',
    did: [
      'Built forecasting models across 9 SKUs and improved supply-demand alignment by 20%.',
      'Gave production teams stronger inputs for inventory and production planning.',
      'Coordinated a cross-functional team of 10 on timelines, dependencies, milestones and client deliverables.',
    ],
    stack: ['Python', 'Time series', 'Machine learning', 'Supply chain'],
    employer: 'Purdue University, Experiential Learning Initiative',
    notes: {
      product: 'Product lens: a model built around what planners needed to decide.',
      program: 'Program lens: workstream dependencies across a 10-person team.',
      project: 'Project lens: milestones and deliverables through final handoff.',
    },
  },
  {
    id: 'rules',
    year: '2022',
    title: 'RULES ENGINE UI',
    where: 'BOUNTEOUS',
    result: '+30% RULE ACCURACY',
    what: 'An internship project that put a friendly interface on the Drools rules engine.',
    did: [
      'Built a Python wrapper UI so non-technical staff could manage rules.',
      'Led client demos, requirements gathering and documentation.',
      'Improved rule-engine accuracy by 30% using Drools, DMN modeling and Python.',
    ],
    stack: ['Python', 'Drools', 'DMN'],
    employer: 'Bounteous, Bangalore, India (internship)',
    notes: {
      product: 'Product lens: designing for the non-technical user of a technical system.',
      program: 'Program lens: bridging technical and non-technical stakeholders.',
      project: 'Project lens: client demos and requirements through delivery.',
    },
  },
  {
    id: 'ppe',
    year: '2021',
    title: 'PPE DETECTION (AI)',
    where: 'L&T',
    result: 'LIVE AT 2 SITES, 5 WKS',
    what: 'A computer-vision project at Larsen & Toubro that automated safety-equipment monitoring.',
    did: [
      'Started a PPE detection project using AI and motion detection to reduce manual supervision.',
      'Deployed it at two manufacturing sites in five weeks.',
    ],
    stack: ['Python', 'Pandas', 'Deep learning'],
    employer: 'Larsen & Toubro, Surat, India (internship)',
    notes: {
      product: 'Product lens: an AI idea taken to real sites.',
      program: 'Program lens: manufacturing deployment on a tight timeline.',
      project: 'Project lens: five weeks from start to two live sites.',
    },
  },
];

// Order of rows per lens. Rows listed are "in lens"; the rest follow, dimmed.
export const lensOrder: Record<Lens, string[]> = {
  product: ['agent', 'kuvia', 'forecast', 'rules', 'ppe'],
  program: ['launches', 'machine', 'pipelines', 'onboarding', 'qa', 'agent'],
  project: ['machine', 'onboarding', 'launches', 'forecast', 'pipelines'],
};

export const lensIntro: Record<Lens, string> = {
  product: 'Product: finding the problem, setting priorities and shipping an AI product that cut resolution time by about 80%.',
  program: 'Program: owning scope, schedule and dependencies across seven launches in two countries.',
  project: 'Project: delivery that stays on schedule and under budget, with the numbers to show it.',
};

export const toolkit = [
  { lens: 'Product', items: ['Roadmapping', 'Feature prioritization', 'AI/ML product strategy', 'Competitive analysis', 'Go-to-market', 'Requirements definition'] },
  { lens: 'Program', items: ['Cross-functional delivery', 'Dependency and milestone management', 'Risk and scope management', 'Launch management', 'Stakeholder management'] },
  { lens: 'Project', items: ['Planning, schedule and budget', 'Agile (Scrum, Kanban)', 'Jira, Confluence, MS Project', 'SDLC'] },
  { lens: 'Technical', items: ['Python', 'SQL', 'AWS (S3, Airflow, Athena, EMR)', 'PySpark', 'MySQL', 'LLMs and RAG', 'Gemini Flash', 'Google ADK', 'Flask'] },
];
