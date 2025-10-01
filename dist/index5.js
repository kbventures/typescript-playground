// Build a undirected graph from adjacency list
var stuff;
(function (stuff) {
    var Node = /** @class */ (function () {
        function Node(val, neighbors) {
            if (neighbors === void 0) { neighbors = []; }
            this.val = val;
            this.neighbors = neighbors;
        }
        return Node;
    }());
    stuff.Node = Node;
})(stuff || (stuff = {}));
var list = [[1, 3], [2, 4], [1, 3], [2, 4]];
function buidlAdjList(l) {
    var _a;
    var newMap = new Map();
    for (var i = 0; i < l.length; i++) {
        newMap.set(i + 1, new stuff.Node(i + 1));
    }
    console.dir(newMap);
    for (var i = 0; i < l.length; i++) {
        for (var _i = 0, _b = l[i]; _i < _b.length; _i++) {
            var n = _b[_i];
            console.log(n);
            (_a = newMap.get(i + 1)) === null || _a === void 0 ? void 0 : _a.neighbors.push(newMap.get(n));
        }
    }
    return newMap;
}
var result = buidlAdjList(list);
console.dir(result);
