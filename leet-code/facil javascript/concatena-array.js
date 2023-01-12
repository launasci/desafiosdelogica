var getConcatenation = function(nums) {
    const duplicaArray = nums
    const concatArray = [].concat(duplicaArray, nums)
    return concatArray
};

console.log(getConcatenation([1, 2, 3]))