
let a = [1,2,3]
let b = [1,2,3]
let isEqual =" "


if(a.length === b.length)
{
  for(let i=0; i<a.length ;i++)
    {
          if (a[i]===b[i])
          {
       isEqual ='arrays are equal'
          }

      else {
    isEqual ='arrays are not equal'
  }

          
}
  console.log(isEqual)
}

else{
console.log("The array are different length")}