import { CustomEdge } from "./CustomEdge";
import { DirectEdge } from "./DirectEdge";
import { LabelEdges } from "./LabelEdge";

export const edgesTypes = { 
  direct: DirectEdge,
  directWithLabel: LabelEdges,
  customEdge: CustomEdge,
 };