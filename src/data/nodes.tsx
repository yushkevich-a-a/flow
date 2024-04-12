import { Node } from "reactflow";

export const nodes: Node[] = [
	{
		id: "112",
		type: "randomHandleNode",
		data: { label: "Input Node" },
		position: { x: 650, y: 25 },
		style: { backgroundColor: "#ffd321", color: "black" },
	},
	{
		id: "111",
		type: "nodeCounter",
		data: { label: "Input Node" },
		position: { x: 450, y: 25 },
		style: { backgroundColor: "#6ede87", color: "black" },
	},
	{
		id: "1",
		type: "textUpdater",
		data: { label: "Input Node" },
		position: { x: 250, y: 25 },
		style: { backgroundColor: "#6ede87", color: "black" },
	},

	{
		id: "2",
		// you can also pass a React component as a label
		type: "customNode",
		data: { label: "Node 1" },
		position: { x: 100, y: 125 },
		style: { backgroundColor: "#ff0072", color: "white", padding: "10px" },
	},
	{
		id: "3",
		type: "output",
		data: { label: "Node 2" },
		position: { x: 250, y: 250 },
		style: { backgroundColor: "#6865A5", color: "white" },
	},

	{
		id: "4",
		// you can also pass a React component as a label
		type: "output",
		data: { label: "Parent" },
		position: { x: 200, y: 250 },
		style: {
			backgroundColor: "rgba(255, 255, 255, 0.5)",
			color: "white",
			width: 200,
			height: 200,
		},
	},
	{
		id: "5",
		type: "output",
		data: { label: "child 2" },
		position: { x: 10, y: 10 },
		style: {
			backgroundColor: "rgba(255, 167, 248, 0.5)",
			color: "white",
			width: 100,
			height: 125,
		},
		parentNode: "4",
		extent: "parent",
	},
	{
		id: "6",
		data: { label: "child 3" },
		position: { x: 40, y: 160 },
		style: {
			backgroundColor: "#9993ff",
			color: "white",
		},
		parentNode: "4",
		extent: "parent",
	},
	{
		id: "7",
		data: { label: "child 3" },
		position: { x: 10, y: 10 },
		style: {
			backgroundColor: "#0d00ff",
			color: "white",
			width: 40,
			height: 40,
		},
		parentNode: "5",
		extent: "parent",
	},
	{
		id: "22",
		// you can also pass a React component as a label
		type: "colorChooserNode",
		data: { label: "Change Color", color: "#F6E05E" },
		position: { x: 10, y: 10 },
	},
];
