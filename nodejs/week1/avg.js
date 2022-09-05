// console.log(process.argv);
const myArgs = process.argv.slice(2)

let lengthOfArr = 0;
myArgs.map(number => {
    if (Number(number) ){
        lengthOfArr ++
    }
});

const sum = myArgs.reduce((a, b) => {
  return ((Number(a) || 0) + (Number(b) || 0) / lengthOfArr).toFixed(2)
}, 0); 

sum > 0
  ? console.log(`Average: ${sum}`)
  : console.log(`Please enter valid numbers`)

// node avg.js 13 7 4  shows 7.99
//node avg.js 1 two hello 4 shows 2.50
//node avg.js shows 0
