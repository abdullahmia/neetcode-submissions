class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let values = {};
        for (let i = 0; i < nums.length; i++) {
            if (values[nums[i]]) {
                values[nums[i]] = values[nums[i]] + 1;
            } else {
                values[nums[i]] = 1;
            }
        }
        let sortedArr = Object.entries(values).sort((a, b) => b[1] - a[1]).slice(0, k);
        return sortedArr.map(i => Number(i[0]))
    }
}
