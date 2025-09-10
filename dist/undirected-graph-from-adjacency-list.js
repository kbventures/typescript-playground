var _Node = /** @class */ (function () {
    function _Node(val, neighbors) {
        if (val === void 0) { val = 0; }
        if (neighbors === void 0) { neighbors = []; }
        this.val = val;
        this.neighbors = neighbors;
    }
    return _Node;
}());
function buildGraph(adjList) {
    var _a;
    if (adjList.length === 0)
        return null;
    var nodes = new Map();
    // Create all nodes
    for (var i = 0; i < adjList.length; i++) {
        var nodeVal = i + 1;
        nodes.set(nodeVal, new _Node(nodeVal));
    }
    // Connect neighbors bidirectionally
    for (var i = 0; i < adjList.length; i++) {
        var nodeVal = i + 1;
        var node = nodes.get(nodeVal);
        for (var _i = 0, _b = adjList[i]; _i < _b.length; _i++) {
            var neighborVal = _b[_i];
            var neighbor = nodes.get(neighborVal);
            // Add each connection if not already added
            if (!node.neighbors.includes(neighbor)) {
                node.neighbors.push(neighbor);
            }
            if (!neighbor.neighbors.includes(node)) {
                neighbor.neighbors.push(node);
            }
        }
    }
    return (_a = nodes.get(1)) !== null && _a !== void 0 ? _a : null;
}
// Raw adjacency list representing a graph but not a working undirected graph
// We can utilize this to create a real graph adjacency list
var input = [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3]
];
var clonedStartNode = buildGraph(input);
