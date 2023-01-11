# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

# Example 1:

# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2]
# Example 2:

# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [9,4]
# Explanation: [4,9] is also accepted.
 
# Constraints:

# 1 <= nums1.length, nums2.length <= 1000
# 0 <= nums1[i], nums2[i] <= 1000

class Solution:
    def intersection(self, nums1, nums2):
        contador = 0
        incidencias = []
        for number in range(len(nums1)):
          for number_dois in range(len(nums2)):
            if nums1[number] == nums2[number_dois]:
              if nums1[number] not in incidencias:
                  incidencias.append(nums1[number])
        print(incidencias)

a = Solution()
a.intersection([1,2,2,1],[2,2])