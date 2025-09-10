// Time: O(n + L), where n is the number of strings and L is total characters (because you loop over strings and also scan every character).
// Space: O(n + L), since you store an array of n strings and each string’s characters
// class Solution{
//     /**
//      * @param {string[]} strs
//      * @returns {string}
//      */
//     encode(strs:string[]) {
//         let encodeStr = []
//         for(let i = 0; i < strs.length;i++){
//             let temp = strs[i].length + "#" + strs[i]
//             encodeStr.push(temp)
//         }
//         return encodeStr.join('')
//     }
//     /**
//      * @param {string} str
//      * @returns {string[]}
//      */
//     decode(str:string) {
//         let solution = []
//         // for loop
//         for(let i = 0; i < str.length;i++){
//             // get lenght # to string until #
//             let regexIsNumber = /^\d+$/
//             let tempLenghtString = ""
//             // you have string position and next string lenght start position
//             while(regexIsNumber.test(str[i])){
//                 tempLenghtString = tempLenghtString + str[i]
//                 i++
//             }
//             let tempLenghtStringToNumber = Number(tempLenghtString);
//             let currenString = str.slice(i+1, tempLenghtStringToNumber + i + 1)
//             solution.push(currenString);
//             // move index to start of next length
//             i = tempLenghtStringToNumber + i; 
//         }
//         return solution
//     }
// }
// const sol = new EncodeDecode()
// // const encodeResult = sol.encode(["neet","code","love","you"])
// const encodeResult = sol.encode(["1,23","45,6","7,8,9"])
// console.log(encodeResult)
// const decideResult = sol.decode(encodeResult);
// console.log(decideResult)
// // Time complexity: O(L)
// // Space complexity: O(L)
// // Optimized solution
// class Codec {
//   encode(strs: string[]): string {
//     return strs.map(s => s.length + "#" + s).join("");
//   }
//   decode(str: string): string[] {
//     const res: string[] = [];
//     let i = 0;
//     while (i < str.length) {
//       // find length prefix
//       let j = i;
//       while (str[j] !== "#") j++;
//       const len = Number(str.slice(i, j));
//       // extract word
//       res.push(str.slice(j + 1, j + 1 + len));
//       i = j + 1 + len; // move to next length
//     }
//     return res;
//   }
// }
