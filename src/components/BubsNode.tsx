import { Handle, Position } from '@xyflow/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BubsNode({ data, selected }: { data: any; selected?: boolean }) {
  const variant = data.variant as string

  // ── Logo node ─────────────────────────────────────────────
  if (variant === 'logo') {
    return (
      <div className="flex flex-col items-center">
        <img
          src={import.meta.env.BASE_URL + 'logo-light-theme.png'}
          alt="Hello BUBS"
          className="w-48 h-auto"
        />
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Heading (title slide) ─────────────────────────────────
  if (variant === 'heading') {
    return (
      <div className="text-center max-w-lg">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <h1 className="text-4xl font-extrabold text-bubs-brown mb-3">{data.title}</h1>
        <p className="text-lg text-bubs-brown/70">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Link button ───────────────────────────────────────────
  if (variant === 'link') {
    return (
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border-2 border-bubs-border rounded-xl px-6 py-3 text-center hover:border-bubs-pink hover:shadow-lg transition-all cursor-pointer"
      >
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <span className="text-bubs-brown font-semibold">{data.title}</span>
      </a>
    )
  }

  // ── CTA text ──────────────────────────────────────────────
  if (variant === 'cta') {
    return (
      <div className="text-center">
        <p className="text-bubs-brown/50 text-sm animate-pulse">{data.title}</p>
      </div>
    )
  }

  // ── Section header ────────────────────────────────────────
  if (variant === 'section-header') {
    return (
      <div className="text-center max-w-xl">
        <h2 className="text-3xl font-bold text-bubs-brown mb-2">{data.title}</h2>
        <p className="text-bubs-brown/60">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Card (problem pain points, generic) ───────────────────
  if (variant === 'card') {
    return (
      <div
        className={`bg-white rounded-2xl p-5 border-2 min-w-[280px] max-w-[320px] transition-all duration-200 hover:scale-[1.03] ${
          selected ? 'border-bubs-pink shadow-lg shadow-bubs-pink/10' : 'border-bubs-border'
        }`}
      >
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="text-3xl mb-3">{data.icon}</div>
        <h3 className="text-lg font-bold text-bubs-brown mb-2">{data.title}</h3>
        <p className="text-sm text-bubs-brown/70 leading-relaxed">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Market circle (TAM/SAM/SOM) ───────────────────────────
  if (variant === 'market-circle') {
    const sizeMap: Record<string, string> = {
      large: 'w-72 h-72',
      medium: 'w-52 h-52',
      small: 'w-36 h-36',
    }
    const bgMap: Record<string, string> = {
      large: 'bg-bubs-pink/10 border-bubs-pink/30',
      medium: 'bg-bubs-pink/20 border-bubs-pink/50',
      small: 'bg-bubs-pink/40 border-bubs-pink',
    }
    const delay = typeof data.stagger === 'number' ? `${(data.stagger as number) * 0.4}s` : '0s'
    return (
      <div
        className={`${sizeMap[data.size]} ${bgMap[data.size]} rounded-full border-2 flex flex-col items-center justify-center text-center animate-scaleIn`}
        style={{ animationDelay: delay }}
      >
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="text-xs font-bold text-bubs-pink uppercase tracking-wider">{data.label}</div>
        <div className="text-2xl font-extrabold text-bubs-brown">{data.value}</div>
        <div className="text-xs text-bubs-brown/60 max-w-[80%]">{data.description}</div>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Stat ──────────────────────────────────────────────────
  if (variant === 'stat') {
    const delay = typeof data.stagger === 'number' ? `${(data.stagger as number) * 0.4}s` : '0s'
    return (
      <div
        className="bg-white rounded-xl p-4 border border-bubs-border text-center min-w-[160px] animate-popIn"
        style={{ animationDelay: delay }}
      >
        <div className="text-3xl font-extrabold text-bubs-pink">{data.value}</div>
        <div className="text-sm text-bubs-brown/70 mt-1">{data.label}</div>
      </div>
    )
  }

  // ── Core (solution center) ────────────────────────────────
  if (variant === 'core') {
    return (
      <div className="bg-bubs-pink text-white rounded-2xl p-6 text-center min-w-[220px] shadow-lg shadow-bubs-pink/20">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <h3 className="text-xl font-bold mb-1">{data.title}</h3>
        <p className="text-sm text-white/80">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Feature card ──────────────────────────────────────────
  if (variant === 'feature') {
    return (
      <div
        className={`bg-white rounded-2xl p-5 border-2 min-w-[280px] max-w-[320px] transition-all duration-200 hover:scale-[1.03] ${
          selected ? 'border-bubs-pink shadow-lg' : 'border-bubs-border'
        }`}
      >
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="text-2xl mb-2">{data.icon}</div>
        <h3 className="text-base font-bold text-bubs-brown mb-1">{data.title}</h3>
        <p className="text-sm text-bubs-brown/70">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Step (user journey) ───────────────────────────────────
  if (variant === 'step') {
    const highlighted = selected || data.autoHighlight
    return (
      <div
        className={`bg-white rounded-2xl p-4 border-2 w-[130px] text-center transition-all duration-500 hover:scale-105 ${
          highlighted
            ? 'border-bubs-pink shadow-lg shadow-bubs-pink/15 scale-105'
            : 'border-bubs-border opacity-60'
        }`}
      >
        <Handle type="target" position={Position.Left} className="opacity-0" />
        <div className="text-xs font-bold text-bubs-pink mb-1">Step {data.stepNumber}</div>
        <div className="text-2xl mb-1">{data.icon}</div>
        <h4 className="text-sm font-bold text-bubs-brown">{data.title}</h4>
        <p className="text-xs text-bubs-brown/60 mt-1">{data.description}</p>
        <Handle type="source" position={Position.Right} className="opacity-0" />
      </div>
    )
  }

  // ── Actor (marketplace model) ─────────────────────────────
  if (variant === 'actor') {
    return (
      <div className="bg-white rounded-2xl p-5 border-2 border-bubs-border min-w-[200px] max-w-[220px]">
        <Handle type="target" position={Position.Left} className="opacity-0" />
        <h3 className="text-base font-bold text-bubs-brown mb-3">{data.title}</h3>
        <ul className="space-y-1.5">
          {(data.actions as string[]).map((a: string, i: number) => (
            <li key={i} className="text-xs text-bubs-brown/70 flex items-start gap-1.5">
              <span className="text-bubs-pink mt-0.5">•</span> {a}
            </li>
          ))}
        </ul>
        <Handle type="source" position={Position.Right} className="opacity-0" />
      </div>
    )
  }

  // ── Escrow node ───────────────────────────────────────────
  if (variant === 'escrow-node') {
    return (
      <div className="bg-emerald-50 rounded-2xl p-5 border-2 border-emerald-300 min-w-[200px] max-w-[260px]">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <h3 className="text-base font-bold text-emerald-800 mb-3">{data.title}</h3>
        <ul className="space-y-1.5">
          {(data.actions as string[]).map((a: string, i: number) => (
            <li key={i} className="text-xs text-emerald-700 flex items-start gap-1.5">
              <span className="text-emerald-500 mt-0.5">✓</span> {a}
            </li>
          ))}
        </ul>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Tech layer header ─────────────────────────────────────
  if (variant === 'tech-layer') {
    return (
      <div className="bg-bubs-pink/10 rounded-xl px-5 py-3 border border-bubs-pink/30 min-w-[180px] text-center cursor-pointer hover:bg-bubs-pink/20 transition-all">
        <Handle type="target" position={Position.Left} className="opacity-0" />
        <span className="font-bold text-bubs-pink text-sm uppercase tracking-wider">{data.label}</span>
        {data.hint && (
          <div className="text-[10px] text-bubs-brown/40 mt-1">{data.hint as string}</div>
        )}
        <Handle type="source" position={Position.Right} className="opacity-0" />
      </div>
    )
  }

  // ── Tech item ─────────────────────────────────────────────
  if (variant === 'tech-item') {
    return (
      <div className="bg-white rounded-xl p-4 border border-bubs-border min-w-[180px] animate-popIn">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="font-bold text-bubs-brown text-sm">{data.name}</div>
        <div className="text-xs text-bubs-brown/60">{data.detail}</div>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Metric ────────────────────────────────────────────────
  if (variant === 'metric') {
    return (
      <div
        className={`bg-white rounded-2xl p-5 border-2 min-w-[180px] text-center transition-all duration-200 hover:scale-105 ${
          selected ? 'border-bubs-pink shadow-lg' : 'border-bubs-border'
        }`}
      >
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="text-2xl mb-2">{data.icon}</div>
        <div className="text-3xl font-extrabold text-bubs-pink">{data.value}</div>
        <div className="text-sm text-bubs-brown/70 mt-1">{data.label}</div>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Revenue stream ────────────────────────────────────────
  if (variant === 'revenue-stream') {
    return (
      <div
        className={`bg-white rounded-2xl p-5 border-2 min-w-[280px] max-w-[320px] transition-all duration-200 hover:scale-[1.03] ${
          selected ? 'border-bubs-pink shadow-lg' : 'border-bubs-border'
        }`}
      >
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{data.icon}</span>
          <div>
            <h3 className="text-base font-bold text-bubs-brown">{data.title}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                data.status === 'Active'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              {data.status}
            </span>
          </div>
        </div>
        <p className="text-sm text-bubs-brown/70">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Competition plot ──────────────────────────────────────
  if (variant === 'competition-plot') {
    const competitors = data.competitors as Array<{
      id: string; name: string; x: number; y: number; highlight?: boolean
    }>
    // Sort: non-highlighted by x position (left→right), highlighted (BUBS) always last
    const sorted = [...competitors].sort((a, b) => {
      if (a.highlight) return 1
      if (b.highlight) return -1
      return a.x - b.x
    })
    return (
      <div className="bg-white rounded-2xl p-6 border border-bubs-border" style={{ width: 620, height: 420 }}>
        {/* Axes */}
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-8 right-0 h-px bg-bubs-border" />
          <div className="absolute bottom-0 left-8 top-0 w-px bg-bubs-border" />
          <div className="absolute bottom-[-24px] left-1/2 text-xs text-bubs-brown/60">{data.axes.x}</div>
          <div className="absolute top-1/2 left-[-8px] text-xs text-bubs-brown/60 -rotate-90 origin-center whitespace-nowrap">{data.axes.y}</div>

          {sorted.map((c, i) => (
            <div
              key={c.id}
              className={`absolute flex flex-col items-center ${
                c.highlight ? 'animate-plotDropBubs' : 'animate-plotDrop'
              }`}
              style={{
                left: `${8 + c.x * 85}%`,
                bottom: `${c.y * 85}%`,
                animationDelay: `${c.highlight ? (sorted.length - 1) * 0.5 + 0.3 : i * 0.5}s`,
              }}
            >
              <div
                className={`rounded-full flex items-center justify-center font-bold ${
                  c.highlight
                    ? 'w-14 h-14 text-sm bg-bubs-pink text-white shadow-xl shadow-bubs-pink/40'
                    : 'w-10 h-10 text-xs bg-bubs-border text-bubs-brown'
                }`}
              >
                {c.name.charAt(0)}
              </div>
              <span
                className={`text-xs mt-1 whitespace-nowrap ${
                  c.highlight ? 'font-bold text-bubs-pink text-sm' : 'text-bubs-brown/70'
                }`}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── Team member ───────────────────────────────────────────
  if (variant === 'team-member') {
    return (
      <div className="bg-white rounded-2xl p-5 border-2 border-bubs-border min-w-[200px] max-w-[240px] text-center">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="w-16 h-16 rounded-full bg-bubs-pink/10 mx-auto mb-3 flex items-center justify-center text-2xl text-bubs-pink font-bold">
          {(data.name as string).charAt(0)}
        </div>
        <h3 className="font-bold text-bubs-brown">{data.name}</h3>
        <div className="text-sm text-bubs-pink font-medium">{data.role}</div>
        <p className="text-xs text-bubs-brown/60 mt-2">{data.bio}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Roadmap phase header ──────────────────────────────────
  if (variant === 'roadmap-phase') {
    return (
      <div
        className="rounded-xl px-6 py-3 text-center min-w-[200px]"
        style={{ backgroundColor: data.color + '18', border: `2px solid ${data.color}` }}
      >
        <Handle type="target" position={Position.Left} className="opacity-0" />
        <span className="font-bold text-sm uppercase tracking-wider" style={{ color: data.color }}>
          {data.label}
        </span>
        <Handle type="source" position={Position.Right} className="opacity-0" />
      </div>
    )
  }

  // ── Roadmap item ──────────────────────────────────────────
  if (variant === 'roadmap-item') {
    return (
      <div className="bg-white rounded-xl p-4 border border-bubs-border min-w-[200px] max-w-[240px]">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }} />
          <h4 className="font-bold text-sm text-bubs-brown">{data.title}</h4>
        </div>
        <p className="text-xs text-bubs-brown/60">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Ask amount ────────────────────────────────────────────
  if (variant === 'ask-amount') {
    return (
      <div className="bg-bubs-pink text-white rounded-2xl p-8 text-center shadow-lg shadow-bubs-pink/20">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Raising</div>
        <div className="text-5xl font-extrabold">{data.amount}</div>
        <div className="text-sm text-white/70 mt-2">Friends & Family Round</div>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Allocation ────────────────────────────────────────────
  if (variant === 'allocation') {
    return (
      <div className="bg-white rounded-2xl p-5 border-2 border-bubs-border min-w-[280px] max-w-[320px]">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl font-extrabold text-bubs-pink">{data.percent}%</div>
          <h3 className="font-bold text-bubs-brown">{data.label}</h3>
        </div>
        <div className="w-full h-2 bg-bubs-border rounded-full overflow-hidden mb-2">
          <div className="h-full bg-bubs-pink rounded-full" style={{ width: `${data.percent}%` }} />
        </div>
        <p className="text-sm text-bubs-brown/70">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="opacity-0" />
      </div>
    )
  }

  // ── Ask CTA ───────────────────────────────────────────────
  if (variant === 'ask-cta') {
    return (
      <div className="text-center max-w-md">
        <Handle type="target" position={Position.Top} className="opacity-0" />
        <p className="text-lg font-semibold text-bubs-brown mb-3">{data.cta}</p>
        <div className="flex gap-4 justify-center">
          <a
            href={`mailto:${data.contact.email}`}
            className="bg-bubs-pink text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-bubs-pink-dark transition-colors"
          >
            {data.contact.email}
          </a>
          <a
            href={data.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-bubs-pink text-bubs-pink px-6 py-2 rounded-full text-sm font-semibold hover:bg-bubs-pink hover:text-white transition-colors"
          >
            Visit Website
          </a>
        </div>
      </div>
    )
  }

  // ── Fallback ──────────────────────────────────────────────
  return (
    <div className="bg-white rounded-xl p-4 border border-bubs-border">
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="text-bubs-brown">{data.title || 'Node'}</div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}
