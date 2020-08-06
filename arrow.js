// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(5);
console.log(result);

const resutl2 = add(4, 5);
console.log(resutl2);

const result3 = give5();
console.log(result3);

const result4 = doMath(4, 6);
console.log(result3);
