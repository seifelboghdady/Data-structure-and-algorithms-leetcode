/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let right = 0, left = 1
for(left; left<nums.length; left++){
    //compare if [right] != [left]
    if(nums[left] !== nums[right]){
        right ++; //increment to right
        nums[right] = nums[left] //copy left to right
    }
}
//return new lenght
return right +1
};