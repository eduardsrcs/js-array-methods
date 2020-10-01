const arr1 = [45, 4, 9, 16, 25]

const arr2 = arr1.map((el, index) => {console.log(el, index); return el * 2})
console.log(arr2)

// filter
console.log(arr1.filter(el => el > 20))

console.log(arr1.reduce((acc, el) => acc + el), 0)

