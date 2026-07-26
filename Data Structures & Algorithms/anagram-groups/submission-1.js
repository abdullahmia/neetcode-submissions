class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let d = {};

        for (const s of strs) {
            let key = s.split("").sort().join("");
            if (!(key in d)) {
                d[key] = []
            }

            d[key].push(s);
        }

        return Object.values(d);
    }
}
