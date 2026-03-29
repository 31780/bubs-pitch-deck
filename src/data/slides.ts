import type { Node, Edge } from '@xyflow/react'
import {
  TITLE, PROBLEM, MARKET, SOLUTION, PRODUCT,
  MARKETPLACE_MODEL, TECH_STACK, TRACTION, REVENUE,
  COMPETITION, TEAM, ROADMAP, THE_ASK,
} from '../constants/content'

// Helper to create a node
function n(id: string, x: number, y: number, data: Record<string, unknown>, type = 'bubsNode'): Node {
  return { id, type, position: { x, y }, data }
}

// Helper to create an edge
function e(id: string, source: string, target: string, opts: Partial<Edge> = {}): Edge {
  return {
    id,
    source,
    target,
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#FD4A6A', strokeWidth: 2 },
    ...opts,
  }
}

// ── Slide 0: Title ──────────────────────────────────────────
function titleSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('logo', 400, 40, { variant: 'logo' }),
      n('tagline', 400, 200, {
        variant: 'heading',
        title: TITLE.heading,
        description: TITLE.subheading,
      }),
      ...TITLE.links.map((link, i) =>
        n(`link-${i}`, 200 + i * 250, 380, {
          variant: 'link',
          title: link.label,
          url: link.url,
        })
      ),
      n('cta', 400, 500, { variant: 'cta', title: TITLE.cta }),
    ],
    edges: [
      e('e-logo-tag', 'logo', 'tagline'),
      ...TITLE.links.map((_, i) => e(`e-tag-link${i}`, 'tagline', `link-${i}`)),
    ],
  }
}

// ── Slide 1: Problem ────────────────────────────────────────
function problemSlide(): { nodes: Node[]; edges: Edge[] } {
  const header = n('problem-header', 300, 20, {
    variant: 'section-header',
    title: PROBLEM.heading,
    description: PROBLEM.subheading,
  })

  const painNodes = PROBLEM.painPoints.map((p, i) =>
    n(p.id, 80 + (i % 2) * 420, 180 + Math.floor(i / 2) * 200, {
      variant: 'card',
      icon: p.icon,
      title: p.title,
      description: p.description,
    })
  )

  return {
    nodes: [header, ...painNodes],
    edges: painNodes.map(pn => e(`e-h-${pn.id}`, 'problem-header', pn.id)),
  }
}

// ── Slide 2: Market Size ────────────────────────────────────
function marketSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('market-header', 300, 20, {
        variant: 'section-header',
        title: MARKET.heading,
        description: MARKET.subheading,
      }),
      n('tam', 80, 160, { variant: 'market-circle', ...MARKET.tam, size: 'large' }),
      n('sam', 330, 180, { variant: 'market-circle', ...MARKET.sam, size: 'medium' }),
      n('som', 540, 200, { variant: 'market-circle', ...MARKET.som, size: 'small' }),
      ...MARKET.stats.map((s, i) =>
        n(`stat-${i}`, 100 + i * 260, 520, { variant: 'stat', ...s })
      ),
    ],
    edges: [
      e('e-tam-sam', 'tam', 'sam', { animated: true, style: { stroke: '#FD4A6A', strokeWidth: 2 } }),
      e('e-sam-som', 'sam', 'som', { animated: true, style: { stroke: '#FD4A6A', strokeWidth: 2 } }),
    ],
  }
}

// ── Slide 3: Solution ───────────────────────────────────────
function solutionSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('sol-header', 300, 20, {
        variant: 'section-header',
        title: SOLUTION.heading,
        description: SOLUTION.subheading,
      }),
      n('sol-core', 330, 180, {
        variant: 'core',
        title: SOLUTION.core.title,
        description: SOLUTION.core.description,
      }),
      ...SOLUTION.features.map((f, i) =>
        n(f.id, 80 + (i % 2) * 420, 340 + Math.floor(i / 2) * 170, {
          variant: 'feature',
          icon: f.icon,
          title: f.title,
          description: f.description,
        })
      ),
    ],
    edges: SOLUTION.features.map(f =>
      e(`e-core-${f.id}`, 'sol-core', f.id)
    ),
  }
}

// ── Slide 4: Product ────────────────────────────────────────
function productSlide(): { nodes: Node[]; edges: Edge[] } {
  const nodes = [
    n('prod-header', 300, 20, {
      variant: 'section-header',
      title: PRODUCT.heading,
      description: PRODUCT.subheading,
    }),
    ...PRODUCT.steps.map((s, i) =>
      n(s.id, 50 + i * 145, 200, {
        variant: 'step',
        icon: s.icon,
        title: s.title,
        description: s.description,
        stepNumber: i + 1,
      })
    ),
  ]

  const edges = PRODUCT.steps.slice(0, -1).map((s, i) =>
    e(`e-step-${i}`, s.id, PRODUCT.steps[i + 1].id)
  )

  return { nodes, edges }
}

// ── Slide 5: Marketplace Model ──────────────────────────────
function marketplaceModelSlide(): { nodes: Node[]; edges: Edge[] } {
  const m = MARKETPLACE_MODEL
  return {
    nodes: [
      n('model-header', 300, 20, {
        variant: 'section-header',
        title: m.heading,
        description: m.subheading,
      }),
      n(m.buyer.id, 50, 200, { variant: 'actor', ...m.buyer }),
      n(m.platform.id, 310, 200, { variant: 'actor', ...m.platform }),
      n(m.seller.id, 570, 200, { variant: 'actor', ...m.seller }),
      n(m.escrow.id, 310, 430, { variant: 'escrow-node', ...m.escrow }),
    ],
    edges: [
      e('e-buy-plat', m.buyer.id, m.platform.id, { label: 'Payment' }),
      e('e-plat-sell', m.platform.id, m.seller.id, { label: 'Payout' }),
      e('e-plat-escrow', m.platform.id, m.escrow.id, { label: 'Escrow' }),
      e('e-escrow-sell', m.escrow.id, m.seller.id, { label: 'Release', style: { stroke: '#10b981', strokeWidth: 2 } }),
    ],
  }
}

// ── Slide 6: Tech Stack ─────────────────────────────────────
function techStackSlide(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [
    n('tech-header', 300, 20, {
      variant: 'section-header',
      title: TECH_STACK.heading,
      description: TECH_STACK.subheading,
    }),
  ]
  const edges: Edge[] = []

  TECH_STACK.layers.forEach((layer, li) => {
    const layerId = `layer-${layer.id}`
    nodes.push(n(layerId, 50 + li * 210, 160, {
      variant: 'tech-layer',
      label: layer.label,
    }))

    layer.items.forEach((item, ii) => {
      const itemId = `tech-${item.id}`
      nodes.push(n(itemId, 50 + li * 210, 260 + ii * 140, {
        variant: 'tech-item',
        name: item.name,
        detail: item.detail,
      }))
      edges.push(e(`e-${layerId}-${itemId}`, layerId, itemId, {
        animated: false,
        style: { stroke: '#E8E4E0', strokeWidth: 2 },
      }))
    })
  })

  // Connect layers horizontally
  for (let i = 0; i < TECH_STACK.layers.length - 1; i++) {
    edges.push(e(`e-layer-${i}`, `layer-${TECH_STACK.layers[i].id}`, `layer-${TECH_STACK.layers[i + 1].id}`, {
      style: { stroke: '#FD4A6A', strokeWidth: 2, strokeDasharray: '6,4' },
      animated: false,
    }))
  }

  return { nodes, edges }
}

// ── Slide 7: Traction ───────────────────────────────────────
function tractionSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('traction-header', 300, 20, {
        variant: 'section-header',
        title: TRACTION.heading,
        description: TRACTION.subheading,
      }),
      ...TRACTION.metrics.map((m, i) =>
        n(m.id, 80 + (i % 3) * 250, 180 + Math.floor(i / 3) * 200, {
          variant: 'metric',
          icon: m.icon,
          value: m.value,
          label: m.label,
        })
      ),
    ],
    edges: TRACTION.metrics.map(m =>
      e(`e-tr-${m.id}`, 'traction-header', m.id)
    ),
  }
}

// ── Slide 8: Revenue Model ──────────────────────────────────
function revenueSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('rev-header', 300, 20, {
        variant: 'section-header',
        title: REVENUE.heading,
        description: REVENUE.subheading,
      }),
      ...REVENUE.streams.map((s, i) =>
        n(s.id, 80 + (i % 2) * 420, 180 + Math.floor(i / 2) * 200, {
          variant: 'revenue-stream',
          icon: s.icon,
          title: s.title,
          description: s.description,
          status: s.status,
        })
      ),
    ],
    edges: REVENUE.streams.map(s =>
      e(`e-rev-${s.id}`, 'rev-header', s.id)
    ),
  }
}

// ── Slide 9: Competition ────────────────────────────────────
function competitionSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('comp-header', 300, 20, {
        variant: 'section-header',
        title: COMPETITION.heading,
        description: COMPETITION.subheading,
      }),
      n('comp-plot', 100, 140, {
        variant: 'competition-plot',
        axes: COMPETITION.axes,
        competitors: COMPETITION.competitors,
      }),
    ],
    edges: [],
  }
}

// ── Slide 10: Team ──────────────────────────────────────────
function teamSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('team-header', 300, 20, {
        variant: 'section-header',
        title: TEAM.heading,
        description: TEAM.subheading,
      }),
      ...TEAM.members.map((m, i) =>
        n(m.id, 250 + (i % 3) * 220, 180 + Math.floor(i / 3) * 220, {
          variant: 'team-member',
          name: m.name,
          role: m.role,
          bio: m.bio,
        })
      ),
    ],
    edges: TEAM.members.map(m =>
      e(`e-team-${m.id}`, 'team-header', m.id)
    ),
  }
}

// ── Slide 11: Roadmap ───────────────────────────────────────
function roadmapSlide(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [
    n('road-header', 300, 20, {
      variant: 'section-header',
      title: ROADMAP.heading,
      description: ROADMAP.subheading,
    }),
  ]
  const edges: Edge[] = []

  ROADMAP.phases.forEach((phase, pi) => {
    const phaseId = `phase-${phase.id}`
    nodes.push(n(phaseId, 50 + pi * 280, 150, {
      variant: 'roadmap-phase',
      label: phase.label,
      color: phase.color,
    }))

    if (pi > 0) {
      edges.push(e(`e-phase-${pi}`, `phase-${ROADMAP.phases[pi - 1].id}`, phaseId, {
        style: { stroke: phase.color, strokeWidth: 3 },
      }))
    }

    phase.items.forEach((item, ii) => {
      const itemId = `road-${item.id}`
      nodes.push(n(itemId, 50 + pi * 280, 250 + ii * 100, {
        variant: 'roadmap-item',
        title: item.title,
        description: item.description,
        color: phase.color,
      }))
      edges.push(e(`e-${phaseId}-${itemId}`, phaseId, itemId, {
        animated: false,
        style: { stroke: phase.color, strokeWidth: 1.5 },
      }))
    })
  })

  return { nodes, edges }
}

// ── Slide 12: The Ask ───────────────────────────────────────
function askSlide(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      n('ask-header', 300, 20, {
        variant: 'section-header',
        title: THE_ASK.heading,
        description: THE_ASK.subheading,
      }),
      n('ask-amount', 320, 160, {
        variant: 'ask-amount',
        amount: THE_ASK.amount,
      }),
      ...THE_ASK.allocation.map((a, i) =>
        n(a.id, 80 + (i % 2) * 420, 300 + Math.floor(i / 2) * 160, {
          variant: 'allocation',
          label: a.label,
          percent: a.percent,
          description: a.description,
        })
      ),
      n('ask-cta', 320, 620, {
        variant: 'ask-cta',
        cta: THE_ASK.cta,
        contact: THE_ASK.contact,
      }),
    ],
    edges: [
      ...THE_ASK.allocation.map(a =>
        e(`e-ask-${a.id}`, 'ask-amount', a.id)
      ),
      ...THE_ASK.allocation.map(a =>
        e(`e-${a.id}-cta`, a.id, 'ask-cta', {
          animated: false,
          style: { stroke: '#E8E4E0', strokeWidth: 1 },
        })
      ),
    ],
  }
}

// ── Export all slides ───────────────────────────────────────
export const slides = [
  titleSlide,
  problemSlide,
  marketSlide,
  solutionSlide,
  productSlide,
  marketplaceModelSlide,
  techStackSlide,
  tractionSlide,
  revenueSlide,
  competitionSlide,
  teamSlide,
  roadmapSlide,
  askSlide,
].map(fn => fn())
