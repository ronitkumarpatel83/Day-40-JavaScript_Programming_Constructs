let count = 1;
let count2 = 0;

while((count2 < 11) && (count < 11))
{
    let num = Math.floor(Math.random()*10)%2;
    switch(num)
    {
        case 0:
            console.log("Heads ");
            count2++;
            break;
        case 1:
            console.log("Tails ");
            count++;
            break;
    }
}
console.log("Total number of Heads : "+count2);
console.log("Total number of Tails : "+count);