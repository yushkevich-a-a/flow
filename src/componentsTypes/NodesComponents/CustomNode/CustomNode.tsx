import {
	Handle,
	NodeResizer,
	NodeToolbar,
	Position,
	useNodes,
} from "reactflow";

export const CustomNode = (props: any) => {
	const nodes = useNodes();
	return (
		<>
			<div id={props.id}>CustomNode</div>
			<NodeResizer minWidth={100} minHeight={30} isVisible={props.selected} />
			<NodeToolbar
				isVisible={props.data.toolbarVisible}
				position={props.data.toolbarPosition}
			>
				<button>delete</button>
				<button>copy</button>
				<button>expand</button>
			</NodeToolbar>
			<Handle type={"target"} id={"a"} position={Position.Top} />
			<Handle type={"source"} id={"s"} position={Position.Bottom} />
			<Handle type={"target"} id={"d"} position={Position.Left} />
			<Handle type={"source"} id={"f"} position={Position.Right} />
			<div>There are currently {nodes.length} nodes!</div>
		</>
	);
};
