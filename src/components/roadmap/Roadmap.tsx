import React, { useEffect, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  type Node,
  type Edge,
} from 'react-flow-renderer';
import dagre from 'dagre';
import TopicNode from './TopicNode';
import TopicModal from './TopicModal';

export interface Topic {
  id: string;
  title: string;
  summary?: string;
  links?: { title: string; url: string }[];
  status: 'not-started' | 'in-progress' | 'completed';
  category: 'main' | 'tier' | 'beginner' | 'intermediate' | 'advanced';
  dependencies: string[];
}

interface RoadmapProps {
  topics: Topic[];
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const nodeWidth = 160, nodeHeight = 60;

function layout(nodes: Node[], edges: Edge[]) {
  dagreGraph.setGraph({ rankdir: 'LR', ranksep: 100, nodesep: 50 });
  nodes.forEach(n => dagreGraph.setNode(n.id, { width: nodeWidth, height: nodeHeight }));
  edges.forEach(e => dagreGraph.setEdge(e.source, e.target));
  dagre.layout(dagreGraph);

  return {
    nodes: nodes.map(n => {
      const { x, y } = dagreGraph.node(n.id)!;
      return { ...n, position: { x: x - nodeWidth/2, y: y - nodeHeight/2 } };
    }),
    edges,
  };
}

const Roadmap: React.FC<RoadmapProps> = ({ topics }) => {
  // build nodes & edges from topics
  const initialNodes: Node[] = topics.map(t => ({
    id: t.id,
    type: 'topic',
    data: { topic: t },
    position: { x: 0, y: 0 },
  }));
  const initialEdges: Edge[] = topics.flatMap(t =>
    t.dependencies.map(dep => ({
      id: `e-${dep}-${t.id}`,
      source: dep,
      target: t.id,
      animated: false,
      style: {
        stroke:
          t.category === 'beginner' ? '#10B981' :
          t.category === 'intermediate' ? '#8B5CF6' :
          t.category === 'advanced' ? '#EF4444' :
          '#374151',
        strokeDasharray: t.category === 'beginner' ? '5,5' : '0',
        strokeWidth: t.category === 'main' || t.category === 'tier' ? 3 : 2,
      },
    }))
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [openTopic, setOpenTopic] = useState<Topic| null>(null);

  // one‑time layout
  useEffect(() => {
    const { nodes: ln, edges: le } = layout(initialNodes, initialEdges);
    setNodes(ln);
    setEdges(le);
  }, [setNodes, setEdges, topics]);

  // click handler
  const onNodeClick = (_: any, node: Node) => setOpenTopic((node.data as any).topic);
  
  return (
    <ReactFlowProvider>
      <div className="flex justify-center">
        <div className="h-[900px] w-[900px]">
            <ReactFlow
            nodes={nodes}
            edges={edges}
            style={{ backgroundColor: '#ffff' }}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            fitView
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={true}
            zoomOnScroll={true}
            zoomOnPinch={true}
            panOnScroll={true}
            panOnDrag={true}
            zoomOnDoubleClick={false}
            defaultZoom={1}
            nodeTypes={{ topic: TopicNode }}
            >
            <Background gap={24} color="#1A1A1D" />
            <Controls showInteractive={true} />
            </ReactFlow>
        </div>
      </div>
    
        {/* Topic Modal */}

      {openTopic && (
        <TopicModal
          topic={openTopic}
          onClose={() => setOpenTopic(null)}
          onStatusChange={(status) => {
            // Optionally update the topic status here or lift state up as needed
            setOpenTopic({ ...openTopic, status });
          }}
        />
      )}
    </ReactFlowProvider>
  );
};

export default Roadmap;
