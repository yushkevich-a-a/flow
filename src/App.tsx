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
	Edge,
	useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";
import { BGWrapper } from "./background/BGWrapper";
// import { TEdge, TNode } from "./types";
import { nodes as initialNodes, edges as initialEdges } from "./data";
import { nodeTypes } from "./componentsTypes/NodesComponents";
import { edgesTypes } from "./componentsTypes";

let nodeId = 10;

export default function App() {
	const [nodes, setNodes] = useNodesState(initialNodes);
	const [edges, setEdges] = useEdgesState(initialEdges);
	const reactFlowInstance = useReactFlow();

	const onNodesChange = useCallback(
		(changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);

	const onEdgesChange = useCallback(
		(changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges]
	);

	const onConnect = useCallback(
		(connection: any) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);

	const onHandleAddNode = useCallback(() => {
		const id = `${++nodeId}`;
		const newNode = {
			id,
			position: {
				x: Math.random() * 500,
				y: Math.random() * 500,
			},
			data: {
				label: `Node ${id}`,
			},
		};
		reactFlowInstance.addNodes(newNode);
	}, []);

	return (
		<BGWrapper>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				nodeTypes={nodeTypes}
				edgeTypes={edgesTypes}
				onConnect={onConnect}
				panOnDrag={[1, 6]}
				panOnScroll
				selectionOnDrag
				fitView
				selectionMode={SelectionMode.Partial}
			>
				<Panel
					children={
						<Controls>
							<button onClick={onHandleAddNode}>Add node</button>
						</Controls>
					}
					position={"bottom-left"}
				/>

				{/* <MiniMap /> */}
				<Background variant={BackgroundVariant.Dots} gap={16} size={1} />
			</ReactFlow>
		</BGWrapper>
	);
}
