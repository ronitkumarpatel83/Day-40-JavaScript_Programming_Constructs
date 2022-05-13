 let Read = 23;

 for (let i = 2; i<=Read/2 ; i++)
 {
     
    let output = (Read%i)
    if (output == 0)
    {
        console.log("Not prime number");
        break;
    }
    else 
    {
        console.log("Prime Number");
        break;
    }

 }