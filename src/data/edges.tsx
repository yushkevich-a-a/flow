import { Edge, MarkerType } from "reactflow";

export const edges: Edge[] = [
	{
		id: "e1-2",
		source: "1",
		sourceHandle: "a",
		target: "2",
		type: "customEdge",
		animated: true,
		markerEnd: {
			type: MarkerType.ArrowClosed,
		},
		style: { stroke: "green" },
	},
	{
		id: "e1-3",
		source: "1",
		sourceHandle: "b",
		target: "3",
		animated: true,
		markerEnd: {
			type: MarkerType.Arrow,
		},
		style: { stroke: "red" },
		type: "directWithLabel",
	},
];
