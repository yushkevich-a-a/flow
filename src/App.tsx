import React, { useCallback, useEffect } from "react";
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

import { nodes as initialNodes } from "./node";

import "reactflow/dist/style.css";
import { TextUpdaterNode } from "./componentsTypes/TextUpdateNode";
import { BGWrapper } from "./background/BGWrapper";

type TNode = {
	id: string;
	position: { x: number; y: number };
	data: { label: string };
};
type TEdge = {
	id: string;
	source: string;
	target: string;
	animated: boolean;
	style: any;
	type?: string;
};

const nodeTypes = { textUpdater: TextUpdaterNode };

const initialEdges: TEdge[] = [
	{
		id: "e1-2",
		source: "1",
		target: "2",
		animated: true,
		style: { stroke: "green" },
	},
	{
		id: "e1-3",
		source: "1",
		target: "3",
		animated: true,
		style: { stroke: "red" },
		type: "step",
	},
];

export default function App() {
	const [nodes, setNodes] = useNodesState(initialNodes as TNode[]);
	const [edges, setEdges] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(connection: any) =>
			setEdges((eds) => {
				console.log("добавление новой связи");
				const data = addEdge({ ...connection, animated: true }, eds);
				return data;
			}),
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
			>
				<Panel children={<Controls />} position={"bottom-left"} />

				<MiniMap />
				<Background variant={BackgroundVariant.Dots} gap={16} size={1} />
			</ReactFlow>
		</BGWrapper>
	);
}
