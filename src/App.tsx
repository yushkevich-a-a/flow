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
import { useStore } from "./store";
import { useShallow } from "zustand/react/shallow";
import { RFState } from "./store/store";

const selector = (state: RFState) => ({ ...state });

export default function App() {
	const {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		addNode,
		updateNodeColor,
	} = useStore(useShallow(selector));

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
							<button onClick={addNode}>Add node</button>
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
