import { Edge } from "reactflow";

export const edges: Edge[] = [
	{
		id: "e1-2",
		source: "1",
		sourceHandle: "a",
		target: "2",
		type: "direct",
		animated: true,
		style: { stroke: "green" },
	},
	{
		id: "e1-3",
		source: "1",
		sourceHandle: "b",
		target: "3",
		animated: true,
		style: { stroke: "red" },
		type: "directWithLabel",
	},
];
