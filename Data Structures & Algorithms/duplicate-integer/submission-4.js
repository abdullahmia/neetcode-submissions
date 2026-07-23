class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let values = new Set();
        for (let i = 0; i<nums.length;i++) {
            if (values.has(nums[i])) {
                return true;
            } else {
                values.add(nums[i])
            }
        }

        return false;
    }
}
