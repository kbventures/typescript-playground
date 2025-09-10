var Solution = /** @class */ (function () {
    function Solution() {
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    Solution.prototype.encode = function (strs) {
        var encodedData = "";
        if (strs.length == 0) {
            return encodedData;
        }
        for (var i = 0; i < strs.length; i++) {
            var temp = strs[i].length + "#" + strs[i];
            encodedData = encodedData + temp;
        }
        // console.log(encodedData)
        return encodedData;
    };
    /**
     * @param {string} str
     * @returns {string[]}
     */
    Solution.prototype.decode = function (str) {
        var currNumberStr = "";
        var i = 0;
        var result = [];
        // Traverse delimieted words
        while (i) {
            console.log("sanity check");
            // Add assemble current length
            if (str[i] !== "#") {
                currNumberStr = currNumberStr + str[i];
                i++;
                continue;
            }
            console.log(currNumberStr);
            // Length of the word
            var tempWrdNum = Number(currNumberStr);
            var start = i + 1;
            var end = i + tempWrdNum;
            var tempWord = str.slice(start, end);
            result.push(tempWord);
            i = start;
            currNumberStr = "";
        }
        return result;
    };
    return Solution;
}());
var encoderDecoder = new Solution();
// encoderDecoder(["new"],["notnew"],["ho"]);
