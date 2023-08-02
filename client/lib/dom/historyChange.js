import { getNode } from "./getNode.js";


export function historyChange(node){
  if (typeof node ==='string') node = getNode(node)
  node.addEventListener('click', () => {
    window.history.back();
  });

}