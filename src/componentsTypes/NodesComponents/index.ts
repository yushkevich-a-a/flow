import { NodeCounter } from "../NodeCounter";
import { ColorChooserNode } from "./ColorChooserNode";
import { CustomNode } from "./CustomNode";
import { TextUpdaterNode } from "./TextUpdateNode";

export const nodeTypes = { 
  textUpdater: TextUpdaterNode,
  customNode: CustomNode,
  colorChooserNode: ColorChooserNode,
  nodeCounter: NodeCounter,
 };