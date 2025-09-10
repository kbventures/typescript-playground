var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function invertTree(root) {
    if (!root)
        return root;
    var stack = [root];
    while (stack.length > 0) {
        var node = stack.pop(); // DFS: Last In, First Out
        // Swap left and right children
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        // Push children to stack (DFS order)
        if (node.left)
            stack.push(node.left);
        if (node.right)
            stack.push(node.right);
    }
    return root;
}
// invertTree([1,2,3,4,5,6,7])
