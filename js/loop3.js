const arr1 = [45, 4, 9, 16, 25]

const arr2 = arr1.map((el, index) => {console.log(el, index); return el * 2})
console.log(arr2)

// filter
console.log(arr1.filter(el => el > 20))
// reduce
console.log(arr1.reduce((acc, el) => acc + el, 0))
console.log(arr1.reduce((acc, el) => acc * el, 1))

console.log(arr1.every((el) => el > 1))  // true
console.log(arr1.some((el) => el > 45))  // true

console.log(arr1.find((el) => el = 45))  // 45
console.log(arr1.findIndex((el) => el == 45))  // 45
console.log(arr1.find((el) => el == 7))  // undefined
console.log(arr1.findIndex((el) => el == 7))  // -1

// if (arr1.findIndex((el) => el == 7) != -1)

console.log(arr1.sort((a, b) => a - b))  // [4, 9, 16, 25, 45]
console.log(arr1.sort((a, b) => b - a))  // [45, 25, 16, 9, 4]

console.log(arr1.reverse())  // 


