import { useState } from "react";
import ReactFlow, {
	Background,
	MiniMap,
	Controls,
	BackgroundVariant,
	Panel,
	Edge,
	ControlButton,
	useOnSelectionChange,
	ConnectionMode,
} from "reactflow";

import "reactflow/dist/style.css";
import { BGWrapper } from "./background/BGWrapper";
import { TEdge, TNode } from "./types";
import { nodeTypes } from "./componentsTypes/NodesComponents";
import { edgesTypes } from "./componentsTypes";
import { useStore } from "./store";
import { useShallow } from "zustand/react/shallow";
import { RFState } from "./store/store";

const selector = (state: RFState) => ({ ...state });

export default function App() {
	const [selectedNodes, setSelectedNodes] = useState<any[]>([]);
	const [selectedEdges, setSelectedEdges] = useState<any[]>([]);
	const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
		useStore(useShallow(selector));

	useOnSelectionChange({
		onChange: ({ nodes, edges }) => {
			setSelectedNodes(nodes.map((node) => node.id));
			setSelectedEdges(edges.map((edge) => edge.id));
		},
	});

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
				connectionMode={ConnectionMode.Loose}
				// panOnDrag={[1, 2]}
				// nodeDragThreshold={20}
				// selectionOnDrag
				// preventScrolling
				fitView
				snapToGrid
				snapGrid={[8, 8]}
				//  при включенном параметре ломается
				//  позиционирование внутри родительского элемента
				// nodeExtent={[
				// 	[0, 0],
				// 	[1920, 1080],
				// ]}
			>
				<Panel
					children={
						<Controls>
							<ControlButton onClick={addNode}>✨</ControlButton>
						</Controls>
					}
					position={"bottom-left"}
				/>

				{/* <MiniMap /> */}
				<Background variant={BackgroundVariant.Dots} gap={16} size={1} />
				<MiniMap
					nodeStrokeWidth={3}
					nodeColor={"#e70000"}
					nodeStrokeColor={"black"}
					nodeBorderRadius={10}
					pannable={true}
					zoomable={true}
					ariaLabel={"React Flow mini map"}
				/>
				<div>
					<p>Selected nodes: {selectedNodes.join(", ")}</p>
					<p>Selected edges: {selectedEdges.join(", ")}</p>
				</div>
			</ReactFlow>
		</BGWrapper>
	);
}
