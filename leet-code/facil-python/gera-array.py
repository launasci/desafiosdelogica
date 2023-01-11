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