const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

 // console.time("Timer 1");

  let ret=[];
  for(let i=1;i<=10;i++)
  {
       startTime = Date.now();
       ret.push(addNums(i*increment));
       endTime = Date.now();
       console.log(`${endTime - startTime}`);


       //console.timeLog("Timer 1");
  }

  //console.timeEnd("Timer 1");

  return ret;

  // Your code here

}


function addManyNums10Timing(increment) {

  let ret=[];
 // console.time("Timer 1");
  for(let i=1;i<=10;i++)
  {
       startTime = Date.now();
       ret.push(addManyNums(i*increment));
       //console.timeLog("Timer 1");
       endTime = Date.now();
       console.log(`${endTime - startTime}`);
  }

  //console.timeEnd("Timer 1");


  return ret;
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
