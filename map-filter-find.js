var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const squire = numbers.map(x => x*x);
console.log(squire);

const filter = numbers.filter(x => x>5);
console.log(filter);

const find = numbers.find(x => x>5);
console.log(find);