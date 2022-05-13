let a = 50;
let b =20;
let c = 40;

let op1 = a+b*c;
let op2 = c+a/b;
let op3 = a%b+c;
let op4 = a*b+c;
console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);

if(op1>op2 && op1>op3 && op1>op4)
{
    console.log("Maxmum is : "+op1);
}
else if(op2>op3 && op2>op4)
{
    console.log("Maxmum is : "+op2);
}
else if(op3>op4)
{
    console.log("Maxmum is : "+op3);
}
else
{
    console.log("Maxmum is : "+op4);
}
if(op1<op2 && op1<op3 && op1<op4)
{
    console.log("Minimum is : "+op1);
}
else if(op2<op3 && op2<op4)
{
    console.log("Minimum is : "+op2);
}
else if(op3<op4)
{
    console.log("Minimum is : "+op3);
}
else
{
    console.log("Minimum is : "+op4);
}