import { useCallback, useState, useEffect } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import BubsNode from './components/BubsNode'
import InfoPanel from './components/InfoPanel'
import Navigation from './components/Navigation'
import MobileView from './components/MobileView'
import PrintView from './components/PrintView'
import { slides } from './data/slides'
import { SLIDE_TITLES } from './constants/content'
import type { Node } from '@xyflow/react'

const nodeTypes = { bubsNode: BubsNode }

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nodes, setNodes, onNodesChange] = useNodesState(slides[0].nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(slides[0].edges)
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Navigate to slide
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return
    setCurrentSlide(index)
    setNodes(slides[index].nodes)
    setEdges(slides[index].edges)
    setSelectedNode(null)
  }, [setNodes, setEdges])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goToSlide(Math.min(slides.length - 1, currentSlide + 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goToSlide(Math.max(0, currentSlide - 1))
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [currentSlide, goToSlide])

  // PDF export
  const handleExportPDF = useCallback(() => {
    alert('Tip: Set Layout to "Landscape" and check "Background graphics" for full color.')
    window.print()
  }, [])

  if (isMobile) {
    return <MobileView />
  }

  return (
    <div className="w-screen h-screen bg-bubs-cream">
      <PrintView />
      <div className="screen-only w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_e, node) => setSelectedNode(node)}
        onPaneClick={() => setSelectedNode(null)}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        minZoom={0.3}
        maxZoom={2}
        defaultEdgeOptions={{ type: 'smoothstep' }}
      >
        <Background color="#E8E4E0" gap={24} size={1} variant="dots" />
        <Controls showInteractive={false} />
      </ReactFlow>

      {/* Header */}
      <div className="absolute top-4 left-4 z-50 no-print">
        <div className="info-panel rounded-2xl p-4 flex items-center gap-3">
          <img
            src={import.meta.env.BASE_URL + 'logo-light-theme.png'}
            alt="BUBS"
            className="h-8"
          />
          <div>
            <div className="text-sm font-bold text-bubs-brown">
              {SLIDE_TITLES[currentSlide]}
            </div>
            <div className="text-xs text-bubs-brown/50">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>
        </div>
        <div className="info-panel rounded-xl p-2 mt-2 text-xs text-bubs-brown/50">
          <span className="text-bubs-brown/70">← →</span> Navigate ·{' '}
          <span className="text-bubs-brown/70">Click</span> nodes for details ·{' '}
          <span className="text-bubs-brown/70">Scroll</span> to zoom ·{' '}
          <button onClick={handleExportPDF} className="text-bubs-pink hover:underline">
            Export PDF (Landscape)
          </button>
        </div>
      </div>

      {/* Info panel */}
      <InfoPanel node={selectedNode} onClose={() => setSelectedNode(null)} />

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        onNavigate={goToSlide}
        total={slides.length}
      />
      </div>
    </div>
  )
}
