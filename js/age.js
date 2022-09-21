
Math.random();
let age=Math.floor(Math.random() * 20);
console.log(age)

if(age>0 && age<2)
{
  console.log("infant")
}
if(age>=2 && age<5)
{
  console.log("toddler")
}
if(age>=5 && age<13)
{
  console.log("child")
}
if(age>=13 && age<21)
{
  console.log("preteen")
}