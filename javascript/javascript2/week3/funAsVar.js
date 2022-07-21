//exe-1 Create an array with 3 items. All items should be functions. 
//Iterate through the array and call all the functions.
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
const getSum = () => a + b;
const getDivide = () => (a / b).toFixed(2);
const getMultiply = () => a * b;
const array = [getSum(), getDivide(), getMultiply()];
const total = array.map(el => el);

console.log(total)
//exe-2 Create a function as a const and try creating a function normally. Call both functions.

const myConstFun = () => {
    console.log("Hello how are you ?")
};
myConstFun(); // we cant declare function as variable before initializing;
myNormalFun();
function myNormalFun() {
    console.log("Hello how are you ?")
}

//exe-3 Create an object that has a key whose value is a function. Try calling this function.
const generateName = () => "Manisha";
const genLuckyNum = () => Math.floor(Math.random() * 100);
const object = {
    name: generateName(),
    lucyNum: genLuckyNum(),
};
let result = `${object.name} has a Lucky no ${object.lucyNum}`;
console.log(result)
