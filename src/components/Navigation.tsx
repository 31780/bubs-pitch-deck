import { SLIDE_TITLES } from '../constants/content'

interface Props {
  currentSlide: number
  onNavigate: (index: number) => void
  total: number
}

export default function Navigation({ currentSlide, onNavigate, total }: Props) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 no-print">
      <div className="info-panel rounded-2xl px-4 py-3 flex items-center gap-3">
        {/* Previous */}
        <button
          onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="text-bubs-brown/60 hover:text-bubs-pink disabled:opacity-30 transition-colors text-lg"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              title={SLIDE_TITLES[i]}
              className={`slide-dot w-2.5 h-2.5 rounded-full transition-all ${
                i === currentSlide
                  ? 'bg-bubs-pink scale-125'
                  : 'bg-bubs-border hover:bg-bubs-brown/30'
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => onNavigate(Math.min(total - 1, currentSlide + 1))}
          disabled={currentSlide === total - 1}
          className="text-bubs-brown/60 hover:text-bubs-pink disabled:opacity-30 transition-colors text-lg"
        >
          →
        </button>

        {/* Slide label */}
        <div className="text-xs text-bubs-brown/50 ml-2 min-w-[60px]">
          {currentSlide + 1}/{total} · {SLIDE_TITLES[currentSlide]}
        </div>
      </div>
    </div>
  )
}
