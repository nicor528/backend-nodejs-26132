const array1 = [1,2]
const array2 = [3,4]

const array3 = [...array1, ...array2, 5] // [1,2,3,4,5]
const array4 = [array1, array2] // [[1,2], [3,4]]

console.log(array3)
console.log(array4)