import React from "react";

import {
	BaseEdge,
	EdgeLabelRenderer,
	getStraightPath,
	useReactFlow,
} from "reactflow";

export function LabelEdges({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
}: {
	id: string;
	sourceX: number;
	sourceY: number;
	targetX: number;
	targetY: number;
}) {
	const { setEdges } = useReactFlow();
	const [edgePath, labelX, labelY] = getStraightPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
	});

	return (
		<>
			<BaseEdge id={id} path={edgePath} markerEnd="arrow" />
			<EdgeLabelRenderer>
				<button
					style={{
						position: "absolute",
						transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
						pointerEvents: "all",
					}}
					className="nodrag nopan"
					onClick={() => setEdges((edges) => edges.filter((e) => e.id !== id))}
				>
					delete
				</button>
			</EdgeLabelRenderer>
		</>
	);
}
