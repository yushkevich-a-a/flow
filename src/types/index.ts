export type TNode = {
	id: string;
	position: { x: number; y: number };
	data: { label: any };
  type?: string;
  style: any;
};

export type TEdge = {
	id: string;
	source: string;
  sourceHandle: string;
	target: string;
	animated: boolean;
	style: any;
	type?: string;
};
