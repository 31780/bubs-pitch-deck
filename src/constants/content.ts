// ============================================================
// Hello BUBS Pitch Deck — All text content in one place
// Edit this file to update any slide content
// ============================================================

export const BRAND = {
  name: 'Hello BUBS',
  tagline: 'The trusted marketplace for parents to buy, sell & share kids\' items',
  website: 'https://hello-bubs.com',
  iosApp: 'https://apps.apple.com/us/app/hello-bubs/id6759551593',
  webApp: 'https://hellobubs.web.app/',
  colors: {
    pink: '#FD4A6A',
    brown: '#4d4338',
    cream: '#F8F6F3',
    border: '#E8E4E0',
  },
}

// ── Slide 0: Title ──────────────────────────────────────────
export const TITLE = {
  heading: 'Hello BUBS',
  subheading: 'The trusted marketplace for parents to buy, sell & share kids\' items',
  cta: 'Swipe or press → to begin',
  links: [
    { label: '🌐 Website', url: BRAND.website },
    { label: '📱 iOS App', url: BRAND.iosApp },
    { label: '💻 Web App', url: BRAND.webApp },
  ],
}

// ── Slide 1: Problem ────────────────────────────────────────
export const PROBLEM = {
  heading: 'The Problem',
  subheading: 'Challenges faced by parents today',
  painPoints: [
    {
      id: 'outgrow',
      icon: '📏',
      title: 'Accumulation',
      description: 'Parents accumulate children\'s items that are quickly outgrown but remain in good condition — sitting unused in closets.',
    },
    {
      id: 'time',
      icon: '⏳',
      title: 'Time-Consuming',
      description: 'Finding quality second-hand kids\' items is time-consuming and often unreliable for busy parents.',
    },
    {
      id: 'trust',
      icon: '🔒',
      title: 'No Trusted Platform',
      description: 'No dedicated peer-to-peer marketplace exists for parents. Existing options are generic and lack parent-focused safety features.',
    },
    {
      id: 'safety',
      icon: '⚠️',
      title: 'Safety Concerns',
      description: 'Facebook Marketplace lacks identity verification and escrow payments. Parents face scams and interact with unknown sellers.',
    },
  ],
}

// ── Slide 2: Market Size ────────────────────────────────────
export const MARKET = {
  heading: 'Market Opportunity',
  subheading: 'The US kids\' resale market is booming — growing 5x faster than retail',
  tam: { label: 'TAM', value: '$55B', description: 'US children\'s apparel market (2025)' },
  sam: { label: 'SAM', value: '$9B', description: 'US kids & baby resale market' },
  som: { label: 'SOM', value: '$200M', description: 'Online P2P marketplace share, first 3 years' },
  stats: [
    { value: '59%', label: 'of US parents buy secondhand' },
    { value: '14%', label: 'YoY resale market growth' },
    { value: '23%', label: 'online resale growth in 2024' },
  ],
}

// ── Slide 3: Solution ───────────────────────────────────────
export const SOLUTION = {
  heading: 'The BUBS Solution',
  subheading: 'A dedicated P2P marketplace with built-in verification, community forums, expert blogs, and local parent groups',
  core: {
    id: 'bubs-core',
    title: 'BUBS Platform',
    description: 'Secure marketplace + parenting community — built by parents, for parents',
  },
  features: [
    {
      id: 'marketplace',
      icon: '🛒',
      title: 'Marketplace',
      description: 'Buy & sell kids\' clothes, toys, gear and more with category-specific listings',
    },
    {
      id: 'forum',
      icon: '💬',
      title: 'Community Forum',
      description: 'Connect with local parents, share advice, and build trust before transacting',
    },
    {
      id: 'blog',
      icon: '📝',
      title: 'Parenting Blog',
      description: 'Expert content on sustainable parenting, product reviews, and tips',
    },
    {
      id: 'escrow',
      icon: '🔐',
      title: 'Secure Payments',
      description: 'Trustap escrow protection on every transaction — money held until delivery confirmed',
    },
  ],
}

// ── Slide 4: Product ────────────────────────────────────────
export const PRODUCT = {
  heading: 'User Journey',
  subheading: 'Simple, safe, and seamless from browse to review',
  steps: [
    { id: 'browse', icon: '🔍', title: 'Browse', description: 'Search & filter by age, size, category, location' },
    { id: 'detail', icon: '📋', title: 'Item Detail', description: 'Photos, condition rating, seller profile & reviews' },
    { id: 'cart', icon: '🛒', title: 'Add to Cart', description: 'Bundle items from same seller for combined shipping' },
    { id: 'escrow', icon: '🔐', title: 'Escrow Payment', description: 'Trustap holds funds securely until delivery' },
    { id: 'delivery', icon: '📦', title: 'Delivery', description: 'Ship or arrange local pickup / meetup' },
    { id: 'review', icon: '⭐', title: 'Review', description: 'Rate transaction, build community trust scores' },
  ],
}

// ── Slide 5: Marketplace Model ──────────────────────────────
export const MARKETPLACE_MODEL = {
  heading: 'Marketplace Model',
  subheading: 'Trustap escrow creates a safe transaction layer',
  buyer: {
    id: 'buyer',
    title: '🛍️ Buyer',
    actions: ['Browses listings', 'Makes payment', 'Confirms receipt', 'Leaves review'],
  },
  platform: {
    id: 'platform',
    title: '🏠 BUBS Platform',
    actions: ['Listing management', 'Identity verification', 'Dispute resolution', 'Community moderation'],
  },
  seller: {
    id: 'seller',
    title: '📤 Seller',
    actions: ['Creates listing', 'Ships item', 'Receives payment', 'Builds reputation'],
  },
  escrow: {
    id: 'trustap',
    title: '🔐 Trustap Escrow',
    actions: ['Holds buyer funds', 'Releases on confirmation', 'Handles disputes', 'Chargeback protection'],
  },
}

// ── Slide 6: Tech Stack ─────────────────────────────────────
export const TECH_STACK = {
  heading: 'Tech Stack',
  subheading: 'Modern, scalable architecture built for growth',
  layers: [
    {
      id: 'frontend',
      label: 'Frontend',
      items: [
        { id: 'react', name: 'React', detail: 'Web application' },
        { id: 'flutter', name: 'Flutter', detail: 'iOS app (Android planned)' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      items: [
        { id: 'express', name: 'Express.js', detail: 'REST API server' },
        { id: 'firebase-auth', name: 'Firebase', detail: 'Authentication & storage' },
      ],
    },
    {
      id: 'data',
      label: 'Data',
      items: [
        { id: 'supabase', name: 'Supabase', detail: 'PostgreSQL database' },
        { id: 'postgres', name: 'PostgreSQL', detail: 'Relational data layer' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      items: [
        { id: 'trustap', name: 'Trustap', detail: 'Escrow payments' },
        { id: 'hosting', name: 'Firebase Hosting', detail: 'CDN & deployment' },
      ],
    },
  ],
}

// ── Slide 7: Traction ───────────────────────────────────────
export const TRACTION = {
  heading: 'Traction',
  subheading: 'Early momentum with real users and live products',
  metrics: [
    { id: 'appstore', icon: '📱', value: 'Live', label: 'iOS App on App Store' },
    { id: 'webapp', icon: '💻', value: 'Live', label: 'Web App launched' },
    { id: 'users', icon: '👥', value: '200+', label: 'Registered users' },
    { id: 'forum', icon: '💬', value: 'Active', label: 'Community forum engagement' },
  ],
}

// ── Slide 8: Revenue Model ──────────────────────────────────
export const REVENUE = {
  heading: 'Revenue Model',
  subheading: 'Multiple revenue streams with strong unit economics',
  streams: [
    {
      id: 'fees',
      icon: '💳',
      title: 'Transaction Fees',
      description: '8-10% commission on each sale via Trustap escrow',
      status: 'Active',
    },
    {
      id: 'featured',
      icon: '⭐',
      title: 'Featured Listings',
      description: 'Sellers pay to boost visibility of their items',
      status: 'Planned',
    },
    {
      id: 'premium',
      icon: '👑',
      title: 'Premium Subscriptions',
      description: 'Unlimited listings, analytics, early access to deals',
      status: 'Planned',
    },
    {
      id: 'brands',
      icon: '🤝',
      title: 'Brand Partnerships',
      description: 'Kids\' brands sponsor listings and community content',
      status: 'Planned',
    },
  ],
}

// ── Slide 9: Competitive Landscape ──────────────────────────
export const COMPETITION = {
  heading: 'Competitive Landscape',
  subheading: 'BUBS uniquely combines trust, safety, and community for parents',
  axes: { x: 'Community Focus →', y: 'Trust & Safety →' },
  competitors: [
    { id: 'bubs', name: 'BUBS', x: 0.85, y: 0.9, highlight: true },
    { id: 'fb', name: 'Facebook Marketplace', x: 0.3, y: 0.2 },
    { id: 'mercari', name: 'Mercari', x: 0.2, y: 0.45 },
    { id: 'recess', name: 'Recess', x: 0.65, y: 0.5 },
    { id: 'poshmark', name: 'Poshmark', x: 0.45, y: 0.5 },
  ],
}

// ── Slide 10: Team ──────────────────────────────────────────
export const TEAM = {
  heading: 'Our Team',
  subheading: 'Combined expertise in technology, sustainability, and parenting',
  members: [
    {
      id: 'david',
      name: 'David Ninobla',
      role: 'CEO / Founder / Engineer',
      bio: 'Full-stack engineer. Built BUBS from the ground up — Flutter, React, Express, Supabase.',
    },
    {
      id: 'eric',
      name: 'Eric Sanchez',
      role: 'COO / CFO',
      bio: 'Operations and finance. Driving sustainable growth and financial strategy.',
    },
    {
      id: 'richard',
      name: 'Richard Welch III',
      role: 'CMO / CRO',
      bio: 'Marketing and revenue. Building brand awareness and user acquisition strategies.',
    },
  ],
}

// ── Slide 11: Roadmap ───────────────────────────────────────
export const ROADMAP = {
  heading: 'Roadmap',
  subheading: 'From MVP to market leader',
  phases: [
    {
      id: 'past',
      label: 'Completed',
      color: '#10b981',
      items: [
        { id: 'mvp', title: 'MVP Built', description: 'Full marketplace with escrow payments' },
        { id: 'ios', title: 'iOS App Launch', description: 'Live on Apple App Store' },
        { id: 'web', title: 'Web App Launch', description: 'React web application deployed' },
        { id: 'forum-launch', title: 'Community Forum', description: 'Parent discussion forum live' },
      ],
    },
    {
      id: 'present',
      label: 'In Progress',
      color: '#FD4A6A',
      items: [
        { id: 'traction', title: 'User Growth', description: 'Marketing & community building' },
        { id: 'blog', title: 'Blog Content', description: 'SEO-driven parenting content' },
        { id: 'iterate', title: 'Product Iteration', description: 'Feature improvements from user feedback' },
      ],
    },
    {
      id: 'future',
      label: 'Next Up',
      color: '#6366f1',
      items: [
        { id: 'android', title: 'Android App', description: 'Flutter cross-platform expansion' },
        { id: 'ai', title: 'AI Recommendations', description: 'Smart matching based on child age & preferences' },
        { id: 'geo', title: 'Geo Expansion', description: 'UK, Ireland, and European markets' },
        { id: 'premium-launch', title: 'Premium Tier', description: 'Subscription model for power sellers' },
      ],
    },
  ],
}

// ── Slide 12: The Ask ───────────────────────────────────────
export const THE_ASK = {
  heading: 'The Ask',
  subheading: 'Friends & family round to accelerate growth',
  amount: '$250K',
  allocation: [
    { id: 'marketing', label: 'Marketing', percent: 45, description: 'User acquisition, brand partnerships, content, social media' },
    { id: 'eng', label: 'Engineering', percent: 30, description: 'Android app, AI features, platform scaling' },
    { id: 'ops', label: 'Operations', percent: 15, description: 'Customer support, community management' },
    { id: 'legal', label: 'Legal & Compliance', percent: 10, description: 'Trust & safety infrastructure, regulatory' },
  ],
  contact: {
    email: 'hello@hello-bubs.com',
    website: BRAND.website,
  },
  cta: 'Let\'s build the future of kids\' commerce together',
}

// ── Slide titles for navigation ─────────────────────────────
export const SLIDE_TITLES = [
  'Title',
  'Problem',
  'Market',
  'Solution',
  'Product',
  'Model',
  'Tech',
  'Traction',
  'Revenue',
  'Competition',
  'Team',
  'Roadmap',
  'The Ask',
]
