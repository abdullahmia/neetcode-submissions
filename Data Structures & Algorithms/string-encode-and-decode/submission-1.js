class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return "";
        let str = "";
        for (const s of strs) {
            str += s.length + '#' + s;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {


        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] != "#") {
                j++;
            } 
            const len = parseInt(str.slice(i, j));
            res.push(str.slice(j+1, j+1+len));
            i = j + 1 + len;
        }

        return res;
    }
}
