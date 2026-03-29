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

// Filter out hidden nodes and their edges
function visibleSlice(allNodes: Node[], allEdges: import('@xyflow/react').Edge[]) {
  const visible = allNodes.filter(n => !n.data.hidden)
  const visibleIds = new Set(visible.map(n => n.id))
  const edges = allEdges.filter(e => visibleIds.has(e.source) && visibleIds.has(e.target))
  return { nodes: visible, edges }
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideNodes, setSlideNodes] = useState(slides[0].nodes)
  const [slideEdges, setSlideEdges] = useState(slides[0].edges)
  const filtered = visibleSlice(slideNodes, slideEdges)
  const [nodes, setNodes, onNodesChange] = useNodesState(filtered.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(filtered.edges)
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedLayers, setExpandedLayers] = useState<Set<string>>(new Set())

  // Check mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Sync visible nodes when slideNodes change
  useEffect(() => {
    const { nodes: vn, edges: ve } = visibleSlice(slideNodes, slideEdges)
    setNodes(vn)
    setEdges(ve)
  }, [slideNodes, slideEdges, setNodes, setEdges])

  // Navigate to slide
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return
    setCurrentSlide(index)
    setSlideNodes(slides[index].nodes)
    setSlideEdges(slides[index].edges)
    setSelectedNode(null)
    setExpandedLayers(new Set())
  }, [])

  // Handle tech layer toggle
  const handleNodeClick = useCallback((_e: React.MouseEvent, node: Node) => {
    setSelectedNode(node)

    // Tech layer expand/collapse
    if (node.data.variant === 'tech-layer' && node.data.layerId) {
      const layerId = node.data.layerId as string
      setExpandedLayers(prev => {
        const next = new Set(prev)
        if (next.has(layerId)) {
          next.delete(layerId)
        } else {
          next.add(layerId)
        }
        return next
      })
    }
  }, [])

  // Update tech item visibility and layer hints when layers toggle
  useEffect(() => {
    if (currentSlide !== 6) return // only tech stack slide
    setSlideNodes(prev => prev.map(node => {
      if (node.data.variant === 'tech-item' && node.data.parentLayer) {
        return {
          ...node,
          data: { ...node.data, hidden: !expandedLayers.has(node.data.parentLayer as string) },
        }
      }
      if (node.data.variant === 'tech-layer' && node.data.layerId) {
        const isExpanded = expandedLayers.has(node.data.layerId as string)
        return {
          ...node,
          data: { ...node.data, hint: isExpanded ? 'click to collapse' : `click to reveal` },
        }
      }
      return node
    }))
  }, [expandedLayers, currentSlide])

  // Auto-highlight user journey steps (slide 4)
  useEffect(() => {
    if (currentSlide !== 4) return
    const stepNodes = slideNodes.filter(n => n.data.variant === 'step')
    if (stepNodes.length === 0) return

    // Start all steps unhighlighted
    setSlideNodes(prev => prev.map(n => {
      if (n.data.variant !== 'step') return n
      return { ...n, data: { ...n.data, autoHighlight: false } }
    }))
    setSelectedNode(null)

    let step = 0
    const timer = setInterval(() => {
      if (step < stepNodes.length) {
        const node = stepNodes[step]
        setSelectedNode(node)
        const currentStep = step
        setSlideNodes(prev => prev.map(n => {
          if (n.data.variant !== 'step') return n
          const idx = stepNodes.findIndex(s => s.id === n.id)
          return {
            ...n,
            data: { ...n.data, autoHighlight: idx <= currentStep },
          }
        }))
        step++
      } else {
        clearInterval(timer)
      }
    }, 1500)

    return () => clearInterval(timer)
  }, [currentSlide, slideNodes.length]) // eslint-disable-line react-hooks/exhaustive-deps

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
        onNodeClick={handleNodeClick}
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
