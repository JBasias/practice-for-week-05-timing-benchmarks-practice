const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {


  let ret=[];
  for(let i=1;i<=10;i++)
  {
       ret.push(addNums(i*increment));
  }

  return ret;
  // Fill this in

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {

  let ret=[];
  for(let i=1;i<=10;i++)
  {
       ret.push(addManyNums(i*increment));
  }

  return ret;

}

module.exports = [addNums10, addManyNums10];
