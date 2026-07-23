class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let items = new Set();
        for (const num of nums) {
            if (items.has(num)) {
                return true;
            }

            items.add(num);
        }
        return false;
    }
}