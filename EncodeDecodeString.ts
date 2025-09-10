class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]):string {
        let encodedData= ""

        if(strs.length ==0){
            return encodedData
        }

        for(let i = 0; i< strs.length;i++){
            let temp = strs[i].length + "#" +strs[i];
            encodedData = encodedData + temp; 
        }
        // console.log(encodedData)
        return encodedData
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string) {

    let currNumberStr = ""
    let i = 0; 
    let result = []

    // Traverse delimieted words
    while(i){
        console.log("sanity check")
        // Add assemble current length
        if(str[i] !== "#"){
            currNumberStr = currNumberStr + str[i]
            i++
            continue; 
        } 
        console.log(currNumberStr)
            // Length of the word
            let tempWrdNum = Number(currNumberStr)
            let start = i + 1; 
            let end = i + tempWrdNum; 
            let tempWord = str.slice(start,end)
            result.push(tempWord)
            i = start; 
            currNumberStr = ""
    }
    return result; 
    }

}


const encoderDecoder = new Solution()

// encoderDecoder(["new"],["notnew"],["ho"]);
