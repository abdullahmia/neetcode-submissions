class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newArr = Array.from(new Set(nums));
        return nums.length > newArr.length;
    }
}
