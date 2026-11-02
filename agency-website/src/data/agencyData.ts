import { Project, ServiceItem, PricingPlan, FAQItem } from '../types';

export const AGENCY_INFO = {
  name: 'Nexora Digital',
  tagline: 'Engineering the Next Generation of Digital Dominance',
  phone: '+1 (415) 890-NEXO',
  whatsappNumber: '14158906396',
  email: 'hello@nexoradigital.io',
  studios: ['San Francisco (HQ)', 'London Shoreditch', 'Singapore Marina Bay'],
  stats: [
    { value: '$180M+', label: 'Client Venture Capital Raised' },
    { value: '140+', label: 'Digital Products Engineered' },
    { value: '99.4%', label: 'On-Time Sprint Delivery' },
    { value: '4.9/5', label: 'Average Clutch & G2 Rating' },
  ],
  clientLogos: ['Stripe Ecosystem', 'Vercel Enterprise', 'OpenAI Builders', 'Supabase Partner', 'AWS Cloud Guild'],
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'AuraVault — Institutional DeFi Yield Engine',
    client: 'Aura Capital Labs',
    category: 'FinTech',
    tagline: 'Real-time liquidity telemetry dashboard and smart vault management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    tags: ['React 18', 'TypeScript', 'Tailwind', 'Ethers.js', 'WebSocket'],
    metrics: [
      { label: 'Total Value Locked', value: '$84M' },
      { label: 'Latency Reduction', value: '72%' },
      { label: 'Active Daily Traders', value: '34K+' },
    ],
    challenge: 'Aura Capital required an institutional-grade liquidity monitoring interface capable of rendering millisecond WebSocket order-book updates without UI frame drop.',
    solution: 'Engineered an ultra-optimized virtualized grid architecture paired with bespoke Canvas-based charting, multi-signature transaction queues, and biometric authentication.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Golang Microservices', 'Kafka'],
    demoUrl: 'https://auravault-demo.internal',
  },
  {
    id: 'proj-2',
    title: 'CognitiveDesk — Enterprise LLM Knowledge Graph',
    client: 'Synapse AI Systems',
    category: 'AI & SaaS',
    tagline: 'Autonomous AI workflow orchestration for Fortune 500 legal teams.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    tags: ['AI Agentic Workflows', 'Python FastAPI', 'Vector DB', 'Next.js'],
    metrics: [
      { label: 'Contract Review Time', value: '-85%' },
      { label: 'Accuracy Benchmark', value: '99.7%' },
      { label: 'Enterprise ARR', value: '$4.2M' },
    ],
    challenge: 'Corporate attorneys spent hundreds of hours reading repetitive master services agreements without structured anomaly detection.',
    solution: 'Designed and deployed an agentic cognitive workspace featuring contextual semantic chunking, citation highlighting, and deterministic export pipelines.',
    techStack: ['React', 'LangChain', 'Pinecone Vector DB', 'FastAPI', 'Tailwind CSS', 'Docker'],
    demoUrl: 'https://cognitivedesk.ai',
  },
  {
    id: 'proj-3',
    title: 'Velocita Atelier — Luxury Headless Commerce',
    client: 'Velocita Milan',
    category: 'E-Commerce',
    tagline: 'Sub-second mobile checkout and 3D digital garment configurator.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Headless Shopify', 'Three.js 3D', 'Next.js', 'Stripe'],
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Average Order Value', value: '€840' },
    ],
    challenge: 'A luxury Milanese atelier was hindered by monolithic legacy checkout pages that had mobile bounce rates over 65%.',
    solution: 'Engineered a modern headless storefront with instant edge caching, interactive WebGL fabric preview, and a single-tap Apple Pay/Google Pay flow.',
    techStack: ['Shopify Storefront API', 'Next.js App Router', 'Three.js', 'Tailwind CSS', 'Vercel Edge'],
    demoUrl: 'https://velocita-atelier.com',
  },
  {
    id: 'proj-4',
    title: 'HyperLink Protocol — Cross-Chain Asset Bridge',
    client: 'HyperLink DAO',
    category: 'Web3',
    tagline: 'Cryptographic zero-knowledge interoperability across 14 networks.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80',
    tags: ['Zero Knowledge', 'WebSockets', 'React', 'Rust'],
    metrics: [
      { label: 'Bridged Volume', value: '$1.4B' },
      { label: 'Bridge Finality', value: '4.2s' },
      { label: 'Smart Contract Audits', value: '3 Passed' },
    ],
    challenge: 'Cross-chain bridging protocols suffered from severe phishing risk and opaque gas estimation interfaces.',
    solution: 'Crafted a military-grade security UI with automated route optimization, real-time gas simulations, and dynamic transaction step visualizers.',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Viem', 'Rust Backend', 'Alchemy'],
    demoUrl: 'https://hyperlink-protocol.org',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's-1',
    title: 'Full-Stack Web & SaaS Engineering',
    tagline: 'Scalable, fault-tolerant cloud architectures built to withstand millions of requests.',
    description: 'We construct high-velocity web platforms using Next.js, React, Node.js, and TypeScript. Clean domain-driven architecture with 100% type safety and CI/CD pipelines.',
    deliverables: ['Custom Next.js & React Applications', 'Microservices & REST/GraphQL APIs', 'Scalable Database Schemas (Postgres/Redis)', 'Automated Unit & E2E Testing (Playwright)'],
    icon: 'Code2',
  },
  {
    id: 's-2',
    title: 'Product UI/UX & Design Systems',
    tagline: 'Human-centered digital interfaces that transform complex data into intuitive clarity.',
    description: 'From wireframe prototyping to production design tokens in Figma and code. We build cohesive visual languages that elevate brand authority and drive conversions.',
    deliverables: ['Full Interactive Product Prototypes', 'Production Design Token Systems', 'User Journey & Friction Audits', 'Responsive Micro-Interactions & Motion'],
    icon: 'Layers',
  },
  {
    id: 's-3',
    title: 'Generative AI & Agentic Workflows',
    tagline: 'Custom AI model orchestration, vector embeddings, and intelligent enterprise automation.',
    description: 'Integrate LLMs, retrieval-augmented generation (RAG), and autonomous agent frameworks directly into your operational software stack.',
    deliverables: ['Domain-Trained RAG Knowledge Bases', 'Custom OpenAI / Anthropic Integration', 'Autonomous Workflow Assistants', 'Prompt Engineering & Guardrails'],
    icon: 'Cpu',
  },
  {
    id: 's-4',
    title: 'Headless E-Commerce & Performance',
    tagline: 'Lightning-fast storefronts that dominate mobile conversions and Google Core Web Vitals.',
    description: 'Decoupled modern commerce architecture pairing Shopify Plus, Medusa, or custom backends with edge-rendered frontends.',
    deliverables: ['Headless Shopify & Custom Storefronts', 'Sub-second Edge Hydration', 'Global Payment & Multi-Currency Stacks', 'Custom 3D Product Configurator (WebGL)'],
    icon: 'ShoppingBag',
  },
  {
    id: 's-5',
    title: 'Cloud DevOps & Security Infrastructure',
    tagline: 'Zero-downtime deployment pipelines, containerization, and enterprise compliance.',
    description: 'Infrastructure as Code (Terraform) deployed on AWS, GCP, or Vercel Enterprise with automated vulnerability scanning and SOC2 readiness.',
    deliverables: ['Docker & Kubernetes Containerization', 'Automated GitHub Actions CI/CD', 'Serverless & Edge Compute Setup', 'Pen-Testing & Security Hardening'],
    icon: 'Cloud',
  },
];

export const TECH_CATEGORIES = [
  {
    name: 'Frontend Mastery',
    items: ['React 18/19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL'],
  },
  {
    name: 'Backend & Cloud',
    items: ['Node.js / Express', 'Python / FastAPI', 'PostgreSQL / Prisma', 'Redis Caching', 'GraphQL', 'Go Microservices'],
  },
  {
    name: 'AI & Data Intelligence',
    items: ['OpenAI APIs', 'LangChain', 'Pinecone Vector DB', 'HuggingFace', 'PyTorch', 'Semantic Search'],
  },
  {
    name: 'DevOps & Reliability',
    items: ['AWS / Cloudflare', 'Docker', 'Kubernetes', 'Vercel Edge', 'Terraform', 'Datadog APM'],
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Strategic Blueprint',
    duration: 'Week 1',
    description: 'We dissect your product vision, target market dynamics, architectural bottlenecks, and KPI milestones to produce a detailed execution backlog.',
  },
  {
    step: '02',
    title: 'Architectural Prototype & Design',
    duration: 'Weeks 2 – 3',
    description: 'High-fidelity interactive UI/UX prototyping in Figma, database schema modeling, and API contract definition before writing single lines of code.',
  },
  {
    step: '03',
    title: 'Agile Sprint Engineering',
    duration: 'Weeks 4 – 8',
    description: 'Two-week sprint cycles with live staging deployments, transparent GitHub PR reviews, and bi-weekly product demos directly with our engineering leads.',
  },
  {
    step: '04',
    title: 'Launch, Benchmark & Scale',
    duration: 'Week 9+',
    description: 'Stress testing under load, SEO & accessibility audits, edge deployment, telemetry instrumentation, and proactive post-launch maintenance.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-starter',
    name: 'MVP Launch Sprint',
    tagline: 'For seed-stage startups requiring a market-ready web product in record time.',
    monthlyPrice: 4800,
    annualPrice: 4200,
    deliveryTime: '3 – 4 Weeks',
    features: [
      'Complete Full-Stack React / Next.js Web App',
      'Custom UI/UX Design System in Figma',
      'Database Schema & Authentication (Supabase/Auth0)',
      'Responsive Mobile & Tablet Optimization',
      'Payment Gateway Integration (Stripe)',
      '30 Days Post-Launch Warranty Support',
    ],
    ctaText: 'Reserve Sprint Slot',
  },
  {
    id: 'plan-growth',
    name: 'Growth Engine Dedicated',
    tagline: 'Our flagship sprint tier for scale-ups and high-growth venture companies.',
    monthlyPrice: 8900,
    annualPrice: 7600,
    popular: true,
    deliveryTime: '6 – 8 Weeks',
    features: [
      'Everything in MVP Sprint',
      'Dedicated Senior Full-Stack Engineer + Lead Designer',
      'AI / LLM Workflow Integration & Vector Search',
      'Complex Real-Time WebSockets & Dashboards',
      'Automated CI/CD Pipeline & Staging Environments',
      'Performance Optimization (<1s Load Times)',
      'Direct Private Slack Channel with Engineering Team',
      '60 Days Dedicated SLA Guarantee',
    ],
    ctaText: 'Start Growth Partnership',
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise Transformation',
    tagline: 'Custom multi-sprint engineering and bespoke AI transformation for market leaders.',
    monthlyPrice: 15500,
    annualPrice: 13200,
    deliveryTime: 'Custom Timeline',
    features: [
      'Multi-Team Dedicated Squad (Frontend, Backend, DevOps, AI)',
      'Enterprise Microservices Architecture & Kubernetes',
      'SOC2 & HIPAA Compliant Architecture',
      'Custom Generative AI Fine-Tuning & On-Premise Models',
      '24/7 Production Incident Response',
      'Full Intellectual Property & Codebase Ownership',
      'Executive Steering Committee & Weekly Reporting',
    ],
    ctaText: 'Schedule Executive Briefing',
  },
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Aura Capital Labs',
    quote: 'Nexora Digital delivered our high-frequency DeFi dashboard four weeks ahead of schedule. Their command of React, WebSockets, and state architecture is world-class.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 't-2',
    author: 'Marcus Sterling',
    role: 'Co-Founder & CEO',
    company: 'Synapse AI Systems',
    quote: 'Finding an agency that truly understands both bleeding-edge generative AI and pixel-perfect design is rare. Nexora took our product from concept to $4.2M ARR.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 't-3',
    author: 'Sophia Chen',
    role: 'VP of Digital Commerce',
    company: 'Velocita Milan',
    quote: 'Our mobile conversion rate surged by 42% after launching the headless storefront engineered by Nexora. Our team and shareholders could not be happier.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can Nexora kick off our project?',
    answer: 'We maintain dedicated sprint capacity. Once the strategic blueprint and scope alignment call are finalized (typically within 48 to 72 hours), your dedicated squad begins active sprint execution immediately on the following Monday.',
  },
  {
    id: 'faq-2',
    question: 'Who owns the intellectual property and source code?',
    answer: 'You retain 100% legal ownership of all source code, Figma design assets, database schemas, and intellectual property. All code repositories are transferred to your organization upon milestone completion.',
  },
  {
    id: 'faq-3',
    question: 'How do you communicate during active sprints?',
    answer: 'We provide direct access to your assigned engineering leads via a dedicated private Slack or Discord channel, weekly Loom video updates, transparent GitHub project boards, and bi-weekly live staging demos.',
  },
  {
    id: 'faq-4',
    question: 'Can you work with our existing in-house developers?',
    answer: 'Absolutely. We frequently integrate alongside existing engineering teams as an specialized acceleration squad, augmenting frontend capabilities, rebuilding design systems, or leading zero-to-one AI features.',
  },
  {
    id: 'faq-5',
    question: 'What happens after our product goes live?',
    answer: 'All projects include 30 to 60 days of complimentary bug-fix warranty and telemetry monitoring. Afterward, clients can transition into an ongoing retainership for continuous feature development and DevOps support.',
  },
];
