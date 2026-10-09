// Every claim here traces to her resumes or LinkedIn profile.
// Open facts (not asserted anywhere): Bounteous team size, exact Bounteous start months,
// her exact SFE title, and whether "70% on schedule" means 5 of 7.

export type Lens = 'product' | 'program' | 'project';
export type Diagram = 'agent' | 'launches' | 'pipeline' | 'machine';
export type Swatch = 'lilac' | 'butter' | 'mint' | 'peach' | 'sky' | 'rose';

export interface Project {
  id: string;
  headline: string;        // outcome-first title
  where: string;           // employer or program
  year: string;
  result: string;          // the measured result, short
  roles: Lens[];           // which lenses this work belongs to
  color: Swatch;
  diagram?: Diagram;       // featured projects only
  what: string;            // one-line context
  did: string[];           // what she did
  stack: string[];
  notes: Record<Lens, string>;
}

export const projects: Project[] = [
  {
    id: 'agent',
    headline: 'Cutting query resolution time 80% with a 0-to-1 AI agent',
    where: 'SFE Group', year: '2026', result: '−80% query resolution time',
    roles: ['product', 'program'], color: 'mint', diagram: 'agent',
    what: 'An AI agent for the sales and support teams at SFE Group, an industrial manufacturing and fabrication company in Portland, Oregon.',
    did: [
      'Turned what sales and support needed into technical requirements.',
      'Built it on Gemini Flash with retrieval-augmented generation (RAG), Google Cloud Storage and Flask.',
      'Answers link to their source documents through secure links that expire after 5 minutes.',
      'Cut query resolution time by about 80%.',
    ],
    stack: ['Gemini Flash', 'RAG', 'Google ADK', 'GCS', 'Flask'],
    notes: {
      product: 'Product: from user need to requirements to a shipped 0-to-1 AI product.',
      program: 'Program: owned delivery and launch from requirements to production.',
      project: 'Project: a scoped build with a measurable result.',
    },
  },
  {
    id: 'launches',
    headline: 'Aligning 7 launches across the US and France',
    where: 'SFE Group', year: '2026', result: '70% launched on schedule',
    roles: ['program', 'project'], color: 'butter', diagram: 'launches',
    what: 'Cross-functional coordination of new product launches across two countries.',
    did: [
      'Aligned engineering, sales, marketing and operations on milestones and dependencies.',
      'Tracked launch readiness across the US and France.',
      '70% of the launches met their schedule.',
    ],
    stack: ['Milestones', 'Dependencies', 'Launch readiness'],
    notes: {
      product: 'Product: go-to-market execution across teams and regions.',
      program: 'Program: dependencies and milestones across seven launches.',
      project: 'Project: schedule performance, measured per launch.',
    },
  },
  {
    id: 'pipelines',
    headline: 'Moving legacy pipelines to AWS, 50%+ faster',
    where: 'Bounteous', year: '2022–24', result: '50%+ faster processing',
    roles: ['program', 'project'], color: 'sky', diagram: 'pipeline',
    what: 'Modernizing legacy data pipelines into a cloud-native AWS architecture for a wealth-management platform.',
    did: [
      'Rebuilt the pipelines on Airflow, S3 and PySpark and cut processing time by more than 50%.',
      'Built an AWS Athena to MySQL pipeline, 30% faster, working with cross-functional teams on requirements.',
      'Worked with leadership on Agile changes in Jira that raised engineering productivity by 15%.',
    ],
    stack: ['AWS', 'Airflow', 'S3', 'PySpark', 'Athena', 'MySQL'],
    notes: {
      product: 'Product: platform reliability behind advisor-facing dashboards.',
      program: 'Program: the technical depth to plan and de-risk a migration.',
      project: 'Project: a migration delivered inside stringent SLAs.',
    },
  },
  {
    id: 'machine',
    headline: 'Delivering a custom machine on time and under budget',
    where: 'SFE Group', year: '2026', result: 'On time, under budget',
    roles: ['project', 'program'], color: 'peach', diagram: 'machine',
    what: 'End-to-end delivery of a custom-built machine for a client in Saudi Arabia.',
    did: [
      'Handled evolving requirements, scope creep and sales order revisions.',
      'Turned each change into a scope decision and a priority trade-off.',
      'Kept the program on schedule and under budget.',
    ],
    stack: ['Scope', 'Schedule', 'Budget', 'Stakeholders'],
    notes: {
      product: 'Product: prioritization under changing requirements.',
      program: 'Program: scope, schedule and budget trade-offs owned end to end.',
      project: 'Project: delivery held to schedule and budget despite change.',
    },
  },
  {
    id: 'onboarding',
    headline: 'Onboarding financial custodians onto a wealth platform',
    where: 'Bounteous', year: '2024–25', result: '+25% client satisfaction',
    roles: ['project', 'program'], color: 'lilac',
    what: 'Bringing financial custodians onto CircleBlack, a wealth-management platform, as lead engineer.',
    did: [
      'Led the onboarding of financial custodians onto the platform.',
      'Coordinated technical implementation and data integration across a distributed engineering team.',
      'Contributed to a 25% increase in client satisfaction through reliable delivery.',
    ],
    stack: ['Python', 'SQL', 'Data integration', 'Jira'],
    notes: {
      product: 'Product: customer outcomes tied to reliable delivery.',
      program: 'Program: a technical rollout coordinated across teams and a client.',
      project: 'Project: repeatable onboarding with a satisfaction measure.',
    },
  },
  {
    id: 'qa',
    headline: 'Cutting data discrepancies 40% with validation and QA',
    where: 'Bounteous', year: '2024–25', result: '−40% discrepancies',
    roles: ['program', 'project'], color: 'rose',
    what: 'Validation and quality protocols for the portfolio datasets behind financial advisors’ dashboards.',
    did: [
      'Validated and optimized large portfolio datasets with Python and SQL.',
      'Cut data discrepancies by 40%, so advisors could trust the insights.',
      'Built QA and risk protocols that catch issues before deployment, saving 20+ hours a month of troubleshooting.',
    ],
    stack: ['Python', 'SQL', 'QA protocols', 'Risk management'],
    notes: {
      product: 'Product: data quality as something advisors depend on.',
      program: 'Program: release readiness and risk surfaced before deployment.',
      project: 'Project: a process change that saves 20+ hours a month.',
    },
  },
  {
    id: 'kuvia',
    headline: 'Shaping go-to-market for a healthcare AI startup',
    where: 'Kuvia AI, via Purdue', year: '2026', result: '+40% dataset quality',
    roles: ['product'], color: 'mint',
    what: 'A product-strategy engagement with Kuvia AI, a healthcare AI startup, through Purdue’s Social Impact Startup Academy.',
    did: [
      'Mapped stakeholder incentives across the healthcare ecosystem to shape pricing and go-to-market.',
      'Benchmarked 4–6 competitors, including three in Central America.',
      'Built a medical imaging data normalization pipeline that improved dataset quality by 40% for the AI team.',
    ],
    stack: ['Product discovery', 'Competitive analysis', 'Go-to-market', 'Python'],
    notes: {
      product: 'Product: discovery, positioning and commercialization for an AI product.',
      program: 'Program: strategy tied to a data pipeline the AI team depends on.',
      project: 'Project: a scoped consulting engagement with defined deliverables.',
    },
  },
  {
    id: 'forecast',
    headline: 'Forecasting demand across 9 SKUs for a food manufacturer',
    where: 'Red Gold, via Purdue', year: '2025', result: '+20% supply–demand fit',
    roles: ['product', 'project'], color: 'butter',
    what: 'Predictive demand forecasting for Red Gold, a US food manufacturer, through Purdue’s Experiential Learning Initiative.',
    did: [
      'Built forecasting models across 9 SKUs and improved supply-demand alignment by 20%.',
      'Gave production teams stronger inputs for inventory and production planning.',
      'Coordinated a cross-functional team of 10 on timelines, dependencies, milestones and client deliverables.',
    ],
    stack: ['Python', 'Time series', 'Machine learning', 'Supply chain'],
    notes: {
      product: 'Product: a model built around what planners needed to decide.',
      program: 'Program: workstream dependencies across a 10-person team.',
      project: 'Project: milestones and deliverables through final handoff.',
    },
  },
  {
    id: 'rules',
    headline: 'Making a rules engine usable for non-technical staff',
    where: 'Bounteous, internship', year: '2022', result: '+30% rule accuracy',
    roles: ['product'], color: 'sky',
    what: 'An internship project that put a friendly interface on the Drools rules engine.',
    did: [
      'Built a Python wrapper UI so non-technical staff could manage rules.',
      'Led client demos, requirements gathering and documentation.',
      'Improved rule-engine accuracy by 30% using Drools, DMN modeling and Python.',
    ],
    stack: ['Python', 'Drools', 'DMN'],
    notes: {
      product: 'Product: designing for the non-technical user of a technical system.',
      program: 'Program: bridging technical and non-technical stakeholders.',
      project: 'Project: client demos and requirements through delivery.',
    },
  },
  {
    id: 'ppe',
    headline: 'Taking AI safety monitoring live in 5 weeks',
    where: 'Larsen & Toubro, internship', year: '2021', result: 'Live at 2 sites',
    roles: ['product', 'project'], color: 'peach',
    what: 'A computer-vision project at Larsen & Toubro that automated safety-equipment (PPE) monitoring.',
    did: [
      'Started a PPE detection project using AI and motion detection to reduce manual supervision.',
      'Deployed it at two manufacturing sites in five weeks.',
    ],
    stack: ['Python', 'Pandas', 'Deep learning'],
    notes: {
      product: 'Product: an AI idea taken to real sites.',
      program: 'Program: a manufacturing deployment on a tight timeline.',
      project: 'Project: five weeks from start to two live sites.',
    },
  },
];

export const lensIntro: Record<Lens | 'all', string> = {
  all: 'Ten projects across product, program and project work. Pick a role to highlight the work that fits it.',
  product: 'Product work: finding the problem, setting priorities, and shipping an AI agent that cut query resolution time by about 80%.',
  program: 'Program work: scope, schedule and dependencies across seven launches in two countries, and a migration to AWS.',
  project: 'Project work: delivery that holds, from a custom machine on time and under budget to a 10-person team kept on its milestones.',
};

export const toolkit: { lens: Lens | 'technical'; label: string; color: Swatch; items: string[] }[] = [
  { lens: 'product', label: 'Product', color: 'mint', items: ['Roadmapping', 'Feature prioritization', 'AI/ML product strategy', 'Competitive analysis', 'Go-to-market', 'Requirements definition'] },
  { lens: 'program', label: 'Program', color: 'lilac', items: ['Cross-functional delivery', 'Dependencies and milestones', 'Risk and scope', 'Launch management', 'Stakeholder management'] },
  { lens: 'project', label: 'Project', color: 'butter', items: ['Planning, schedule and budget', 'Agile (Scrum, Kanban)', 'Jira, Confluence, MS Project', 'SDLC'] },
  { lens: 'technical', label: 'Technical', color: 'sky', items: ['Python', 'SQL', 'AWS (S3, Airflow, Athena, EMR)', 'PySpark', 'MySQL', 'LLMs and RAG', 'Gemini Flash', 'Google ADK', 'Flask'] },
];
