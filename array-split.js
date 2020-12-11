const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part = nums.slice(2, 5);
console.log(part);

const removed = nums.splice(2, 2);
console.log(removed);

const together1 = nums.join(' ');
console.log(together1);

const together2 = nums.join(' , ');
console.log(together2);