/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let length = 0;

    for(let i of s){
        const idx = arr.indexOf(i)
        if (idx !== -1){
            arr = arr.slice(idx + 1);
        }
        
        // arrLengthes.push(arr.length);
        // arr.length = 0;
        // arr.push(i);
        arr.push(i);
        length = Math.max(length, arr.length);
    
    }

    return length
};
