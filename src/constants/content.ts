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
  subheading: 'Parents face real friction when buying & selling kids\' items',
  painPoints: [
    {
      id: 'outgrow',
      icon: '📏',
      title: 'Kids Outgrow Fast',
      description: 'Children outgrow clothes and gear every 3-6 months. Families spend $12,000+ on items used for weeks.',
    },
    {
      id: 'waste',
      icon: '🗑️',
      title: 'Landfill Waste',
      description: '9.5M tons of kids\' items end up in landfill annually. Most still in great condition.',
    },
    {
      id: 'trust',
      icon: '🔒',
      title: 'No Trusted Platform',
      description: 'No dedicated peer-to-peer marketplace exists for parents. Current options are generic and lack safety features.',
    },
    {
      id: 'safety',
      icon: '⚠️',
      title: 'Safety Concerns',
      description: 'Facebook Marketplace lacks identity verification, escrow payments, and parent-focused community features.',
    },
  ],
}

// ── Slide 2: Market Size ────────────────────────────────────
export const MARKET = {
  heading: 'Market Opportunity',
  subheading: 'The secondhand kids\' market is massive and growing',
  tam: { label: 'TAM', value: '$35B', description: 'Global secondhand kids\' market' },
  sam: { label: 'SAM', value: '$8B', description: 'US & UK online resale for kids' },
  som: { label: 'SOM', value: '$200M', description: 'Addressable in first 3 years' },
  stats: [
    { value: '15%', label: 'YoY market growth' },
    { value: '73%', label: 'of parents buy secondhand' },
    { value: '2x', label: 'growth post-pandemic' },
  ],
}

// ── Slide 3: Solution ───────────────────────────────────────
export const SOLUTION = {
  heading: 'The BUBS Solution',
  subheading: 'A purpose-built platform for the parenting community',
  core: {
    id: 'bubs-core',
    title: 'BUBS Platform',
    description: 'All-in-one marketplace designed exclusively for parents',
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
    { id: 'users', icon: '👥', value: '500+', label: 'Registered users' },
    { id: 'listings', icon: '📦', value: '1,200+', label: 'Items listed' },
    { id: 'forum', icon: '💬', value: 'Active', label: 'Community forum engagement' },
    { id: 'rating', icon: '⭐', value: '4.8', label: 'App Store rating' },
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
  subheading: 'BUBS uniquely combines trust and community for parents',
  axes: { x: 'Community Focus →', y: 'Trust & Safety →' },
  competitors: [
    { id: 'bubs', name: 'BUBS', x: 0.85, y: 0.9, highlight: true },
    { id: 'fb', name: 'Facebook Marketplace', x: 0.3, y: 0.2 },
    { id: 'ebay', name: 'eBay', x: 0.15, y: 0.5 },
    { id: 'kidizen', name: 'Kidizen', x: 0.6, y: 0.6 },
    { id: 'mercari', name: 'Mercari', x: 0.25, y: 0.45 },
    { id: 'poshmark', name: 'Poshmark', x: 0.5, y: 0.5 },
  ],
}

// ── Slide 10: Team ──────────────────────────────────────────
export const TEAM = {
  heading: 'Our Team',
  subheading: 'Passionate builders and parents',
  members: [
    {
      id: 'founder1',
      name: 'Nino',
      role: 'Founder & CEO',
      bio: 'Full-stack engineer. Built BUBS from the ground up — Flutter, React, Express, Supabase.',
    },
    // Add more team members here
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
  subheading: 'Pre-seed round to accelerate growth',
  amount: '$250K',
  allocation: [
    { id: 'eng', label: 'Engineering', percent: 40, description: 'Android app, AI features, platform scaling' },
    { id: 'marketing', label: 'Marketing', percent: 30, description: 'User acquisition, brand partnerships, content' },
    { id: 'ops', label: 'Operations', percent: 15, description: 'Customer support, community management' },
    { id: 'legal', label: 'Legal & Compliance', percent: 15, description: 'Trust & safety infrastructure, regulatory' },
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
