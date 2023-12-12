// Adds up positive integers from 1-n
function addNums(n) {

  let ret=0;

  for(let i=0;i<=n;i++)
  {
    ret+=i;
  }

  return ret;
  // Fill this in

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {

  let ret=0;

  for(let i=1;i<=n;i++)
  {
    ret +=addNums(i);
  }

  return ret;
  // Fill this in

}



module.exports = [addNums, addManyNums];
