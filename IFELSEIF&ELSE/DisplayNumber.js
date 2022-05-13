let number = 1111;

if (number>=1 && number<=9)
{
 console.log("Unit");
}
else if (number>=10 && number<=99) 
{
console.log("Ten");
}
else if (number>=100 && number<=999)
{
    console.log("Hundreds");
}
else if (number>=1000 && number<=9999) 
{
   console.log("Thousand");
}
else if (number>=10000 && number<=99999) 
{
   console.log("Ten thousand");
}
else if (number>=100000 && number<=999999)
{
console.log("One hundred thousand");
}
else
{
    console.log("Please enter between 1 to 999999");
}