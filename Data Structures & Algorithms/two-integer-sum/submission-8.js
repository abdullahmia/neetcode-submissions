class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const objs = {};
        for (let i = 0; i < nums.length; i++) {
            objs[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (objs[diff] !== undefined && objs[diff] !== i) {
                return [objs[diff], i];
            }
        }

        return []

        // for (let i = 0; i<nums.length; i++) {
        //     for (let j = i+1; j<nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j];
        //         }
        //     }
        // }
    }
}
