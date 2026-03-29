import { useState } from 'react'
import {
  BRAND, TITLE, PROBLEM, MARKET, SOLUTION, PRODUCT,
  MARKETPLACE_MODEL, TECH_STACK, TRACTION, REVENUE,
  COMPETITION, TEAM, ROADMAP, THE_ASK, SLIDE_TITLES,
} from '../constants/content'

function SlideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-bubs-brown mb-4 px-1">{title}</h2>
      {children}
    </section>
  )
}

function Card({ icon, title, description, className = '' }: {
  icon?: string; title: string; description: string; className?: string
}) {
  return (
    <div className={`bg-white rounded-xl p-4 border border-bubs-border mb-3 ${className}`}>
      {icon && <div className="text-2xl mb-2">{icon}</div>}
      <h3 className="font-bold text-bubs-brown text-sm">{title}</h3>
      <p className="text-xs text-bubs-brown/70 mt-1 leading-relaxed">{description}</p>
    </div>
  )
}

export default function MobileView() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slideContent = [
    // 0: Title
    <div key="title" className="text-center py-8">
      <img src={import.meta.env.BASE_URL + 'bubs-logo-nogb.png'} alt="Hello BUBS" className="w-32 mx-auto mb-4" />
      <h1 className="text-2xl font-extrabold text-bubs-brown mb-2">{TITLE.heading}</h1>
      <p className="text-bubs-brown/70 mb-6">{TITLE.subheading}</p>
      <div className="flex flex-col gap-2">
        {TITLE.links.map((l, i) => (
          <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
            className="bg-white border border-bubs-border rounded-xl px-4 py-3 text-sm font-semibold text-bubs-brown hover:border-bubs-pink">
            {l.label}
          </a>
        ))}
      </div>
    </div>,

    // 1: Problem
    <SlideCard key="problem" title={PROBLEM.heading}>
      <p className="text-sm text-bubs-brown/60 mb-4">{PROBLEM.subheading}</p>
      {PROBLEM.painPoints.map(p => (
        <Card key={p.id} icon={p.icon} title={p.title} description={p.description} />
      ))}
    </SlideCard>,

    // 2: Market
    <SlideCard key="market" title={MARKET.heading}>
      <p className="text-sm text-bubs-brown/60 mb-4">{MARKET.subheading}</p>
      {[MARKET.tam, MARKET.sam, MARKET.som].map(m => (
        <div key={m.label} className="bg-white rounded-xl p-4 border border-bubs-border mb-3 flex items-center gap-4">
          <div className="text-2xl font-extrabold text-bubs-pink">{m.value}</div>
          <div>
            <div className="text-xs font-bold text-bubs-pink">{m.label}</div>
            <div className="text-sm text-bubs-brown/70">{m.description}</div>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {MARKET.stats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-3 border border-bubs-border text-center">
            <div className="text-xl font-bold text-bubs-pink">{s.value}</div>
            <div className="text-xs text-bubs-brown/60">{s.label}</div>
          </div>
        ))}
      </div>
    </SlideCard>,

    // 3: Solution
    <SlideCard key="solution" title={SOLUTION.heading}>
      <div className="bg-bubs-pink text-white rounded-xl p-4 mb-4 text-center">
        <h3 className="font-bold">{SOLUTION.core.title}</h3>
        <p className="text-sm text-white/80">{SOLUTION.core.description}</p>
      </div>
      {SOLUTION.features.map(f => (
        <Card key={f.id} icon={f.icon} title={f.title} description={f.description} />
      ))}
    </SlideCard>,

    // 4: Product
    <SlideCard key="product" title={PRODUCT.heading}>
      <p className="text-sm text-bubs-brown/60 mb-4">{PRODUCT.subheading}</p>
      {PRODUCT.steps.map((s, i) => (
        <div key={s.id} className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-bubs-pink/10 flex items-center justify-center text-sm font-bold text-bubs-pink shrink-0">
            {i + 1}
          </div>
          <div>
            <h4 className="font-bold text-sm text-bubs-brown">{s.icon} {s.title}</h4>
            <p className="text-xs text-bubs-brown/70">{s.description}</p>
          </div>
        </div>
      ))}
    </SlideCard>,

    // 5: Marketplace Model
    <SlideCard key="model" title={MARKETPLACE_MODEL.heading}>
      <p className="text-sm text-bubs-brown/60 mb-4">{MARKETPLACE_MODEL.subheading}</p>
      {[MARKETPLACE_MODEL.buyer, MARKETPLACE_MODEL.platform, MARKETPLACE_MODEL.seller, MARKETPLACE_MODEL.escrow].map(a => (
        <div key={a.id} className={`rounded-xl p-4 border mb-3 ${a.id === 'trustap' ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-bubs-border'}`}>
          <h3 className="font-bold text-sm text-bubs-brown mb-2">{a.title}</h3>
          <ul className="space-y-1">
            {a.actions.map((act, i) => (
              <li key={i} className="text-xs text-bubs-brown/70">• {act}</li>
            ))}
          </ul>
        </div>
      ))}
    </SlideCard>,

    // 6: Tech Stack
    <SlideCard key="tech" title={TECH_STACK.heading}>
      {TECH_STACK.layers.map(layer => (
        <div key={layer.id} className="mb-4">
          <div className="text-xs font-bold text-bubs-pink uppercase tracking-wider mb-2">{layer.label}</div>
          <div className="grid grid-cols-2 gap-2">
            {layer.items.map(item => (
              <div key={item.id} className="bg-white rounded-xl p-3 border border-bubs-border">
                <div className="font-bold text-sm text-bubs-brown">{item.name}</div>
                <div className="text-xs text-bubs-brown/60">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </SlideCard>,

    // 7: Traction
    <SlideCard key="traction" title={TRACTION.heading}>
      <p className="text-sm text-bubs-brown/60 mb-4">{TRACTION.subheading}</p>
      <div className="grid grid-cols-2 gap-3">
        {TRACTION.metrics.map(m => (
          <div key={m.id} className="bg-white rounded-xl p-4 border border-bubs-border text-center">
            <div className="text-xl mb-1">{m.icon}</div>
            <div className="text-2xl font-extrabold text-bubs-pink">{m.value}</div>
            <div className="text-xs text-bubs-brown/60">{m.label}</div>
          </div>
        ))}
      </div>
    </SlideCard>,

    // 8: Revenue
    <SlideCard key="revenue" title={REVENUE.heading}>
      {REVENUE.streams.map(s => (
        <Card key={s.id} icon={s.icon} title={`${s.title} · ${s.status}`} description={s.description} />
      ))}
    </SlideCard>,

    // 9: Competition
    <SlideCard key="competition" title={COMPETITION.heading}>
      <p className="text-sm text-bubs-brown/60 mb-4">{COMPETITION.subheading}</p>
      {COMPETITION.competitors.map(c => (
        <div key={c.id} className={`flex items-center gap-3 mb-2 p-3 rounded-xl ${c.highlight ? 'bg-bubs-pink/10 border border-bubs-pink' : 'bg-white border border-bubs-border'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${c.highlight ? 'bg-bubs-pink text-white' : 'bg-bubs-border text-bubs-brown'}`}>
            {c.name.charAt(0)}
          </div>
          <span className={`text-sm font-medium ${c.highlight ? 'text-bubs-pink' : 'text-bubs-brown'}`}>{c.name}</span>
        </div>
      ))}
    </SlideCard>,

    // 10: Team
    <SlideCard key="team" title={TEAM.heading}>
      {TEAM.members.map(m => (
        <div key={m.id} className="bg-white rounded-xl p-4 border border-bubs-border mb-3 flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-bubs-pink/10 flex items-center justify-center text-lg text-bubs-pink font-bold shrink-0">
            {m.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-sm text-bubs-brown">{m.name}</h3>
            <div className="text-xs text-bubs-pink font-medium">{m.role}</div>
            <p className="text-xs text-bubs-brown/60 mt-1">{m.bio}</p>
          </div>
        </div>
      ))}
    </SlideCard>,

    // 11: Roadmap
    <SlideCard key="roadmap" title={ROADMAP.heading}>
      {ROADMAP.phases.map(phase => (
        <div key={phase.id} className="mb-5">
          <div className="text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: phase.color + '18', color: phase.color }}>
            {phase.label}
          </div>
          {phase.items.map(item => (
            <div key={item.id} className="flex items-start gap-2 mb-2 ml-2">
              <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: phase.color }} />
              <div>
                <h4 className="font-bold text-sm text-bubs-brown">{item.title}</h4>
                <p className="text-xs text-bubs-brown/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </SlideCard>,

    // 12: The Ask
    <SlideCard key="ask" title={THE_ASK.heading}>
      <div className="bg-bubs-pink text-white rounded-xl p-6 text-center mb-4">
        <div className="text-xs uppercase tracking-wider text-white/70">Raising</div>
        <div className="text-4xl font-extrabold">{THE_ASK.amount}</div>
        <div className="text-sm text-white/70">Pre-Seed Round</div>
      </div>
      {THE_ASK.allocation.map(a => (
        <div key={a.id} className="bg-white rounded-xl p-4 border border-bubs-border mb-3">
          <div className="flex justify-between mb-1">
            <span className="font-bold text-sm text-bubs-brown">{a.label}</span>
            <span className="font-bold text-sm text-bubs-pink">{a.percent}%</span>
          </div>
          <div className="w-full h-1.5 bg-bubs-border rounded-full overflow-hidden mb-2">
            <div className="h-full bg-bubs-pink rounded-full" style={{ width: `${a.percent}%` }} />
          </div>
          <p className="text-xs text-bubs-brown/60">{a.description}</p>
        </div>
      ))}
      <div className="text-center mt-6">
        <p className="text-sm font-semibold text-bubs-brown mb-3">{THE_ASK.cta}</p>
        <a href={`mailto:${THE_ASK.contact.email}`}
          className="inline-block bg-bubs-pink text-white px-6 py-2 rounded-full text-sm font-semibold">
          {THE_ASK.contact.email}
        </a>
      </div>
    </SlideCard>,
  ]

  return (
    <div className="min-h-screen bg-bubs-cream">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bubs-cream/95 backdrop-blur-sm border-b border-bubs-border p-3">
        <div className="flex items-center justify-between">
          <img src={import.meta.env.BASE_URL + 'bubs-logo-nogb.png'} alt="BUBS" className="h-8" />
          <div className="text-xs text-bubs-brown/50">{activeSlide + 1}/{SLIDE_TITLES.length}</div>
        </div>
        {/* Slide tabs */}
        <div className="flex gap-1 mt-2 overflow-x-auto pb-1 scrollbar-hide">
          {SLIDE_TITLES.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                i === activeSlide
                  ? 'bg-bubs-pink text-white'
                  : 'bg-white text-bubs-brown/60 border border-bubs-border'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="p-4 pb-20">
        {slideContent[activeSlide]}
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-bubs-cream/95 backdrop-blur-sm border-t border-bubs-border p-3 flex justify-between items-center">
        <button
          onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
          disabled={activeSlide === 0}
          className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-bubs-border text-bubs-brown disabled:opacity-30"
        >
          ← Prev
        </button>
        <span className="text-xs text-bubs-brown/50">{SLIDE_TITLES[activeSlide]}</span>
        <button
          onClick={() => setActiveSlide(Math.min(SLIDE_TITLES.length - 1, activeSlide + 1))}
          disabled={activeSlide === SLIDE_TITLES.length - 1}
          className="px-4 py-2 rounded-full text-sm font-semibold bg-bubs-pink text-white disabled:opacity-30"
        >
          Next →
        </button>
      </nav>
    </div>
  )
}
