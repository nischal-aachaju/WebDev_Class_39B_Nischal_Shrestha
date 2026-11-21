const calculateBill =(units)=>{
    let price=0;
    let rate =0;
    if (units<=20){
        rate =5;
        price=units*rate;
        return price;
    }
    if (units<=50){
        rate=7;
        price=20*5+(units-20)*rate;
        return price;
    }
    if (units>50){
        rate=10;
        price=20*5+ 30*7+ (units-50)*rate;
        return price;
    }
}

const displayBill=(name,units,action)=>{
    let price=action(units);
    console.log(`Customer: ${name}`);
    console.log(`Units Consumed: ${units}`);
    console.log(`Total Electricity Bill: Rs. ${price}`);
}

displayBill("Niscal",15,calculateBill)