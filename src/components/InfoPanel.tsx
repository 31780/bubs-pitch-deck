import type { Node } from '@xyflow/react'

interface Props {
  node: Node | null
  onClose: () => void
}

export default function InfoPanel({ node, onClose }: Props) {
  if (!node) return null

  const d = node.data as Record<string, unknown>
  const variant = d.variant as string

  // Skip nodes that don't benefit from a detail panel
  if (['logo', 'heading', 'cta', 'section-header', 'competition-plot'].includes(variant)) {
    return null
  }

  return (
    <div className="absolute top-4 right-4 w-80 max-h-[calc(100vh-2rem)] overflow-y-auto info-panel rounded-2xl p-5 z-50 animate-slideIn no-print">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-bubs-brown/40 hover:text-bubs-pink transition-colors text-lg"
      >
        ✕
      </button>

      {d.icon && <div className="text-3xl mb-3">{d.icon as string}</div>}
      {d.title && <h3 className="text-xl font-bold text-bubs-brown mb-2">{d.title as string}</h3>}
      {d.name && <h3 className="text-xl font-bold text-bubs-brown mb-1">{d.name as string}</h3>}
      {d.role && <div className="text-sm text-bubs-pink font-medium mb-2">{d.role as string}</div>}
      {d.description && (
        <p className="text-sm text-bubs-brown/70 leading-relaxed mb-3">{d.description as string}</p>
      )}
      {d.bio && (
        <p className="text-sm text-bubs-brown/70 leading-relaxed mb-3">{d.bio as string}</p>
      )}
      {d.value && (
        <div className="text-3xl font-extrabold text-bubs-pink mb-1">{d.value as string}</div>
      )}
      {d.label && variant !== 'allocation' && (
        <div className="text-sm text-bubs-brown/60 mb-3">{d.label as string}</div>
      )}
      {d.detail && (
        <div className="text-sm text-bubs-brown/60">{d.detail as string}</div>
      )}
      {d.status && (
        <span
          className={`inline-block text-xs px-3 py-1 rounded-full mt-2 ${
            d.status === 'Active'
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {d.status as string}
        </span>
      )}
      {d.percent != null && (
        <div className="mt-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-bubs-brown">{d.label as string}</span>
            <span className="font-bold text-bubs-pink">{d.percent as number}%</span>
          </div>
          <div className="w-full h-2 bg-bubs-border rounded-full overflow-hidden">
            <div className="h-full bg-bubs-pink rounded-full" style={{ width: `${d.percent as number}%` }} />
          </div>
        </div>
      )}
      {d.actions && (
        <ul className="mt-3 space-y-1.5">
          {(d.actions as string[]).map((a, i) => (
            <li key={i} className="text-sm text-bubs-brown/70 flex items-start gap-2">
              <span className="text-bubs-pink mt-0.5">•</span> {a}
            </li>
          ))}
        </ul>
      )}
      {d.url && (
        <a
          href={d.url as string}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-bubs-pink hover:underline"
        >
          Open link →
        </a>
      )}
    </div>
  )
}
