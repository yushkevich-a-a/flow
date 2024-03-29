import { useCallback } from "react";
import ReactFlow, {
	addEdge,
	useEdgesState,
	useNodesState,
	Background,
	MiniMap,
	Controls,
	BackgroundVariant,
	applyNodeChanges,
	applyEdgeChanges,
	SelectionMode,
	Panel,
} from "reactflow";

import "reactflow/dist/style.css";
import { BGWrapper } from "./background/BGWrapper";
// import { TEdge, TNode } from "./types";
import { nodes as initialNodes, edges as initialEdges } from "./data";
import { nodeTypes } from "./componentsTypes/NodesComponents";
import { edgesTypes } from "./componentsTypes";

export default function App() {
	const [nodes, setNodes] = useNodesState(initialNodes);
	const [edges, setEdges] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(connection: any) =>
			setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
		[setEdges]
	);

	const onNodesChange = useCallback(
		(changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);

	const onEdgesChange = useCallback(
		(connection: any) => setEdges((eds) => applyEdgeChanges(connection, eds)),
		[setEdges]
	);

	return (
		<BGWrapper>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				panOnScroll
				selectionOnDrag
				panOnDrag={[1, 6]}
				selectionMode={SelectionMode.Partial}
				nodeTypes={nodeTypes}
				edgeTypes={edgesTypes}
			>
				<Panel children={<Controls />} position={"bottom-left"} />

				{/* <MiniMap /> */}
				<Background variant={BackgroundVariant.Dots} gap={16} size={1} />
			</ReactFlow>
		</BGWrapper>
	);
}
