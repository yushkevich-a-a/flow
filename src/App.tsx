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
	HandleType,
} from "reactflow";

import "reactflow/dist/style.css";
import { BGWrapper } from "./background/BGWrapper";
// import { TEdge, TNode } from "./types";
import { nodeTypes } from "./componentsTypes/NodesComponents";
import { edgesTypes } from "./componentsTypes";
import { useStore } from "./store";
import { useShallow } from "zustand/react/shallow";
import { RFState } from "./store/store";

const selector = (state: RFState) => ({ ...state });

export default function App() {
	const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
		useStore(useShallow(selector));

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
				// panOnDrag={[1, 6]}
				// nodeDragThreshold={20}
				panOnScroll
				// selectionOnDrag
				// preventScrolling
				snapToGrid
				snapGrid={[8, 8]}
				//  при включенном параметре ломается
				//  позиционирование внутри родительского элемента
				// nodeExtent={[
				// 	[0, 0],
				// 	[1920, 1080],
				// ]}
				selectionMode={SelectionMode.Partial}
				onSelectionChange={(params) => console.log("onSelectionChange", params)}
				onSelectionDragStart={(_, nodes) =>
					console.log("onSelectionDragStart", nodes)
				}
				onSelectionDrag={(_, nodes) => console.log("onSelectionDrag", nodes)}
				onSelectionDragStop={(_, nodes) =>
					console.log("onSelectionDragStop", nodes)
				}
				onSelectionStart={() => console.log("onSelectionStart")}
				onSelectionEnd={() => console.log("onSelectionEnd")}
				onSelectionContextMenu={(_, nodes) =>
					console.log("onSelectionContextMenu", nodes)
				}
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
