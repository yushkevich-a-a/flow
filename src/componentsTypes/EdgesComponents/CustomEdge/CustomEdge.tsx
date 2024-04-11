import {
	BaseEdge,
	EdgeLabelRenderer,
	EdgeText,
	getBezierPath,
} from "reactflow";

export function CustomEdge({ id, data, ...props }: any) {
	const [edgePath, labelX, labelY] = getBezierPath(props);

	return (
		<>
			<BaseEdge path={edgePath} {...props} />
			<EdgeText
				x={labelX}
				y={labelY}
				label={"label"}
				labelStyle={{ fill: "white" }}
				labelShowBg
				labelBgStyle={{ fill: "red" }}
				labelBgPadding={[10, 10]}
				labelBgBorderRadius={2}
			/>
			{/* <EdgeLabelRenderer></EdgeLabelRenderer> */}
		</>
	);
}
