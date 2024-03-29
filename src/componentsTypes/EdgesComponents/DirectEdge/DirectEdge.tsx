import { BaseEdge, getStraightPath } from "reactflow";

type TProps = {
	id: string;
	sourceX: number;
	sourceY: number;
	targetX: number;
	targetY: number;
};

export function DirectEdge({ id, sourceX, sourceY, targetX, targetY }: TProps) {
	const [edgePath] = getStraightPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
	});

	return <BaseEdge id={id} path={edgePath} />;
}
