import {
  BRAND, TITLE, PROBLEM, MARKET, SOLUTION, PRODUCT,
  MARKETPLACE_MODEL, TECH_STACK, TRACTION, REVENUE,
  COMPETITION, TEAM, ROADMAP, THE_ASK,
} from '../constants/content'

function SlideHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-bubs-brown">{title}</h2>
      <p className="text-sm text-bubs-brown/60">{subtitle}</p>
    </div>
  )
}

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <div className="print-slide">
      {children}
      <div className="absolute bottom-3 right-4 text-[9px] text-bubs-brown/30">hello-bubs.com</div>
    </div>
  )
}

export default function PrintView() {
  return (
    <div className="print-only hidden">
      {/* 0: Title */}
      <Slide>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <img src={import.meta.env.BASE_URL + 'logo-light-theme.png'} alt="BUBS" className="w-40 mb-4" />
          <h1 className="text-4xl font-extrabold text-bubs-brown mb-2">{TITLE.heading}</h1>
          <p className="text-lg text-bubs-brown/70 mb-6 max-w-lg">{TITLE.subheading}</p>
          <div className="flex gap-4">
            {TITLE.links.map((l, i) => (
              <span key={i} className="text-sm bg-white border border-bubs-border rounded-lg px-4 py-2 text-bubs-brown">
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </Slide>

      {/* 1: Problem */}
      <Slide>
        <SlideHeader title={PROBLEM.heading} subtitle={PROBLEM.subheading} />
        <div className="grid grid-cols-2 gap-4 flex-1">
          {PROBLEM.painPoints.map(p => (
            <div key={p.id} className="bg-white rounded-xl p-4 border border-bubs-border">
              <div className="text-2xl mb-2">{p.icon}</div>
              <h3 className="font-bold text-bubs-brown text-sm mb-1">{p.title}</h3>
              <p className="text-xs text-bubs-brown/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 2: Market */}
      <Slide>
        <SlideHeader title={MARKET.heading} subtitle={MARKET.subheading} />
        <div className="flex items-center justify-center gap-8 flex-1">
          {[MARKET.tam, MARKET.sam, MARKET.som].map((m, i) => {
            const sizes = ['w-48 h-48', 'w-36 h-36', 'w-28 h-28']
            const bgs = ['bg-bubs-pink/10 border-bubs-pink/30', 'bg-bubs-pink/20 border-bubs-pink/50', 'bg-bubs-pink/40 border-bubs-pink']
            return (
              <div key={m.label} className={`${sizes[i]} ${bgs[i]} rounded-full border-2 flex flex-col items-center justify-center text-center`}>
                <div className="text-xs font-bold text-bubs-pink uppercase">{m.label}</div>
                <div className="text-xl font-extrabold text-bubs-brown">{m.value}</div>
                <div className="text-[10px] text-bubs-brown/60 max-w-[80%]">{m.description}</div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center gap-6 mt-2">
          {MARKET.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-extrabold text-bubs-pink">{s.value}</div>
              <div className="text-xs text-bubs-brown/60">{s.label}</div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 3: Solution */}
      <Slide>
        <SlideHeader title={SOLUTION.heading} subtitle={SOLUTION.subheading} />
        <div className="flex flex-col items-center flex-1">
          <div className="bg-bubs-pink text-white rounded-xl px-6 py-3 text-center mb-6">
            <h3 className="font-bold">{SOLUTION.core.title}</h3>
            <p className="text-sm text-white/80">{SOLUTION.core.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {SOLUTION.features.map(f => (
              <div key={f.id} className="bg-white rounded-xl p-4 border border-bubs-border">
                <span className="text-xl mr-2">{f.icon}</span>
                <span className="font-bold text-sm text-bubs-brown">{f.title}</span>
                <p className="text-xs text-bubs-brown/70 mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 4: Product */}
      <Slide>
        <SlideHeader title={PRODUCT.heading} subtitle={PRODUCT.subheading} />
        <div className="flex items-center justify-center gap-3 flex-1">
          {PRODUCT.steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-3 border border-bubs-border text-center w-[120px]">
                <div className="text-[10px] font-bold text-bubs-pink mb-1">Step {i + 1}</div>
                <div className="text-xl mb-1">{s.icon}</div>
                <h4 className="text-xs font-bold text-bubs-brown">{s.title}</h4>
                <p className="text-[9px] text-bubs-brown/60 mt-1">{s.description}</p>
              </div>
              {i < PRODUCT.steps.length - 1 && (
                <span className="text-bubs-pink font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </Slide>

      {/* 5: Marketplace Model */}
      <Slide>
        <SlideHeader title={MARKETPLACE_MODEL.heading} subtitle={MARKETPLACE_MODEL.subheading} />
        <div className="flex items-start justify-center gap-6 flex-1">
          {[MARKETPLACE_MODEL.buyer, MARKETPLACE_MODEL.platform, MARKETPLACE_MODEL.seller].map((a, i) => (
            <div key={a.id} className="flex items-center gap-4">
              <div className="bg-white rounded-xl p-4 border border-bubs-border w-[180px]">
                <h3 className="font-bold text-sm text-bubs-brown mb-2">{a.title}</h3>
                <ul className="space-y-1">
                  {a.actions.map((act, j) => (
                    <li key={j} className="text-[10px] text-bubs-brown/70">• {act}</li>
                  ))}
                </ul>
              </div>
              {i < 2 && <span className="text-bubs-pink font-bold text-lg">↔</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-300 w-[220px] text-center">
            <h3 className="font-bold text-xs text-emerald-800 mb-1">{MARKETPLACE_MODEL.escrow.title}</h3>
            <ul className="space-y-0.5">
              {MARKETPLACE_MODEL.escrow.actions.map((a, i) => (
                <li key={i} className="text-[10px] text-emerald-700">✓ {a}</li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* 6: Tech Stack */}
      <Slide>
        <SlideHeader title={TECH_STACK.heading} subtitle={TECH_STACK.subheading} />
        <div className="flex gap-4 flex-1 items-start">
          {TECH_STACK.layers.map(layer => (
            <div key={layer.id} className="flex-1">
              <div className="bg-bubs-pink/10 rounded-lg px-3 py-2 text-center mb-3 border border-bubs-pink/30">
                <span className="font-bold text-bubs-pink text-xs uppercase tracking-wider">{layer.label}</span>
              </div>
              {layer.items.map(item => (
                <div key={item.id} className="bg-white rounded-lg p-3 border border-bubs-border mb-2">
                  <div className="font-bold text-sm text-bubs-brown">{item.name}</div>
                  <div className="text-[10px] text-bubs-brown/60">{item.detail}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Slide>

      {/* 7: Traction */}
      <Slide>
        <SlideHeader title={TRACTION.heading} subtitle={TRACTION.subheading} />
        <div className="grid grid-cols-2 gap-4 flex-1 content-center">
          {TRACTION.metrics.map(m => (
            <div key={m.id} className="bg-white rounded-xl p-5 border border-bubs-border text-center">
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="text-3xl font-extrabold text-bubs-pink">{m.value}</div>
              <div className="text-sm text-bubs-brown/70 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 8: Revenue */}
      <Slide>
        <SlideHeader title={REVENUE.heading} subtitle={REVENUE.subheading} />
        <div className="grid grid-cols-2 gap-4 flex-1">
          {REVENUE.streams.map(s => (
            <div key={s.id} className="bg-white rounded-xl p-4 border border-bubs-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-sm text-bubs-brown">{s.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {s.status}
                  </span>
                </div>
              </div>
              <p className="text-xs text-bubs-brown/70">{s.description}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 9: Competition */}
      <Slide>
        <SlideHeader title={COMPETITION.heading} subtitle={COMPETITION.subheading} />
        <div className="flex-1 flex items-center justify-center">
          <div className="relative bg-white rounded-xl border border-bubs-border" style={{ width: 560, height: 360 }}>
            <div className="absolute bottom-0 left-10 right-2 h-px bg-bubs-border" />
            <div className="absolute bottom-0 left-10 top-2 w-px bg-bubs-border" />
            <div className="absolute bottom-[-20px] left-1/2 text-[10px] text-bubs-brown/60">{COMPETITION.axes.x}</div>
            <div className="absolute top-1/2 left-[-4px] text-[10px] text-bubs-brown/60 -rotate-90 origin-center whitespace-nowrap">{COMPETITION.axes.y}</div>
            {COMPETITION.competitors.map(c => (
              <div
                key={c.id}
                className="absolute flex flex-col items-center"
                style={{ left: `${10 + c.x * 82}%`, bottom: `${c.y * 82}%`, transform: 'translate(-50%, 50%)' }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${c.highlight ? 'bg-bubs-pink text-white scale-125' : 'bg-bubs-border text-bubs-brown'}`}>
                  {c.name.charAt(0)}
                </div>
                <span className={`text-[10px] mt-0.5 whitespace-nowrap ${c.highlight ? 'font-bold text-bubs-pink' : 'text-bubs-brown/70'}`}>
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 10: Team */}
      <Slide>
        <SlideHeader title={TEAM.heading} subtitle={TEAM.subheading} />
        <div className="flex items-center justify-center gap-8 flex-1">
          {TEAM.members.map(m => (
            <div key={m.id} className="bg-white rounded-xl p-5 border border-bubs-border text-center w-[200px]">
              <div className="w-14 h-14 rounded-full bg-bubs-pink/10 mx-auto mb-3 flex items-center justify-center text-xl text-bubs-pink font-bold">
                {m.name.charAt(0)}
              </div>
              <h3 className="font-bold text-bubs-brown text-sm">{m.name}</h3>
              <div className="text-xs text-bubs-pink font-medium">{m.role}</div>
              <p className="text-[10px] text-bubs-brown/60 mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 11: Roadmap */}
      <Slide>
        <SlideHeader title={ROADMAP.heading} subtitle={ROADMAP.subheading} />
        <div className="flex gap-4 flex-1">
          {ROADMAP.phases.map(phase => (
            <div key={phase.id} className="flex-1">
              <div className="rounded-lg px-4 py-2 text-center mb-3" style={{ backgroundColor: phase.color + '18', border: `2px solid ${phase.color}` }}>
                <span className="font-bold text-xs uppercase tracking-wider" style={{ color: phase.color }}>{phase.label}</span>
              </div>
              {phase.items.map(item => (
                <div key={item.id} className="bg-white rounded-lg p-3 border border-bubs-border mb-2">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phase.color }} />
                    <h4 className="font-bold text-xs text-bubs-brown">{item.title}</h4>
                  </div>
                  <p className="text-[10px] text-bubs-brown/60">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Slide>

      {/* 12: The Ask */}
      <Slide>
        <SlideHeader title={THE_ASK.heading} subtitle={THE_ASK.subheading} />
        <div className="flex flex-col items-center flex-1 justify-center">
          <div className="bg-bubs-pink text-white rounded-xl px-10 py-6 text-center mb-6">
            <div className="text-xs uppercase tracking-wider text-white/70">Raising</div>
            <div className="text-4xl font-extrabold">{THE_ASK.amount}</div>
            <div className="text-sm text-white/70">Friends & Family Round</div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-xl mb-6">
            {THE_ASK.allocation.map(a => (
              <div key={a.id} className="bg-white rounded-xl p-3 border border-bubs-border">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-xs text-bubs-brown">{a.label}</span>
                  <span className="font-bold text-xs text-bubs-pink">{a.percent}%</span>
                </div>
                <div className="w-full h-1.5 bg-bubs-border rounded-full overflow-hidden mb-1">
                  <div className="h-full bg-bubs-pink rounded-full" style={{ width: `${a.percent}%` }} />
                </div>
                <p className="text-[10px] text-bubs-brown/60">{a.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-bubs-brown mb-2">{THE_ASK.cta}</p>
          <span className="text-sm text-bubs-pink">{THE_ASK.contact.email} · {BRAND.website}</span>
        </div>
      </Slide>
    </div>
  )
}
