
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root;

    const stack: TreeNode[] = [root];
   
    while (stack.length > 0) {
        const node = stack.pop()!; // DFS: Last In, First Out
       
        // Swap left and right children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
       
        // Push children to stack (DFS order)
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
   
    return root;
}



// invertTree([1,2,3,4,5,6,7])

