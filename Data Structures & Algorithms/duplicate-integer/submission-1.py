class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        length = len(nums)
        new_length = len(set((nums)))
        
        if length == new_length:
            return False
        else:
            return True
            

        