class Solution:
    def getConcatenation(self, nums):
        copia_lista = nums
        for number in list(nums):
            copia_lista.append(number)
        return copia_lista


Solution().getConcatenation([1,2,3])