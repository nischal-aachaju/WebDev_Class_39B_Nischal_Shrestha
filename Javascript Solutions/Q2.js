//Write a JavaScript program that takes the number of electricity units 
// consumed and calculates the bill according to these rules:

// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit
// Use if...else if...else.
let units=200;

if (units<0){
    console.log("Enter valid units");
}
else if (units<=50 ){
    console.log("Rs. 5 per unit");
    console.log("Total:"+(5*units));
}
else if ( units <=100){
    console.log("Rs. 7 per unit");
    console.log("Total:"+(7*units));
}
else if ( units <=200){
    console.log("Rs. 10 per unit");
    console.log("Total:"+(10*units));
}
else {
    console.log("Rs. 12 per unit");
    console.log("Total:"+(12*units));
}