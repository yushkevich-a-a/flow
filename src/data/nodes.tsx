import { Node } from "reactflow";

export const nodes: Node[] = [
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
		data: { label: "Node 1" },
		position: { x: 100, y: 125 },
		style: { backgroundColor: "#ff0072", color: "white" },
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
		position: { x: 100, y: 125 },
		style: {
			backgroundColor: "rgba(255, 255, 255, 0.5)",
			color: "white",
			width: 200,
			height: 200,
		},
	},
	{
		id: "5",
		data: { label: "child 2" },
		position: { x: 10, y: 10 },
		draggable: false,
		style: { backgroundColor: "#ffa7f8", color: "white" },
		parentNode: "4",
		extent: "parent",
	},
	{
		id: "6",
		data: { label: "child 3" },
		position: { x: 40, y: 40 },
		style: { backgroundColor: "#9993ff", color: "white" },
		parentNode: "4",
		// extent: "parent",
	},
];
