let TakeLength = 28;

 console.log("\n1.Feet to inch \n2.Inch to feet \n3.Feet to meter \n4.meter to feet" );
 let num = 2;
 console.log(num);

 switch (num)
 {
    case 1 :
        console.log("Feet to inch = " +TakeLength*12);
        break;
    case 2 :
        console.log("Inch to feet = " +TakeLength/12);
        break;
    case 3 :
        console.log("Feet to meter = " +TakeLength/3.281);
        break;
    case 4:
        console.log("Meter to feet = " +TakeLength*3.281);
        break;
    default :
        console.log("Wrong choice ");
        break;           

 }