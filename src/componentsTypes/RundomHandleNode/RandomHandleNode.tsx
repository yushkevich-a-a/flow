import { useCallback, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";

export const RandomHandleNode = (props: any) => {
	const updateNodeInternals = useUpdateNodeInternals();
	const [handleCount, setHandleCount] = useState(0);
	const randomizeHandleCount = useCallback(() => {
		setHandleCount(Math.floor(Math.random() * 10));
		updateNodeInternals(props.id);
	}, [props.id, updateNodeInternals]);

	return (
		<>
			{Array.from({ length: handleCount }).map((_, index) => (
				<Handle
					key={index}
					type="target"
					position={Position.Left}
					id={`handle-${index}`}
				/>
			))}

			<div>
				<button onClick={randomizeHandleCount}>Randomize handle count</button>
				<p>There are {handleCount} handles on this node.</p>
			</div>
		</>
	);
};
