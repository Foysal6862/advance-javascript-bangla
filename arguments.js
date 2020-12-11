/* function sumArgs() {
    return [...arguments].reduce((acc,next)=>acc+next, 0)
};

console.log(sumArgs(1,2,3,4,5)); */

/* function sum() {
    var args = Array.prototype.slice.call(arguments);//Array.prototype.slice.call(arguments) === [...arguments]
    var sum = args.reduce(function(a, b) {
      return a + b;
    })
    return sum;
  }
  
  
  console.log(sum(1, 2)); // returns 3
  console.log(sum(1, 2, 3,10,10)); // returns 6 */
  
  /* function add(){
      return [...arguments].reduce((x, y) =>x + y, 0);
  }
  console.log(add(10, 20, 30, 40, 100)); */

  function add(...arguments){
      let sum = 0;
      for (let i of arguments) {
          sum =sum + i;
      }
      console.log(sum);
  }
  add(1,2,3)