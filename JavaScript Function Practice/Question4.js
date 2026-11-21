const getTicketPrice =(age)=>{
    if (age<12) return 150;
    else if (age <=17) return 200;
    else if (age <60) return 300;
    else return 200;
}
const calculateTotal =(price,quantity)=>{
    let totalPrice=price*quantity;
    return totalPrice;
}
const applyDiscount=(total, quantity)=>{
    let discount=0;
    if (quantity>=5){
        discount= total*10/100;
    }
    return discount;
}
const bookTicket =(name,age,quantity)=>{

    let price=getTicketPrice(age);
    let total=calculateTotal(price,quantity);
    let Discount=applyDiscount(total,quantity);
    let totalAfterDiscount=total -Discount;
    console.log(`Customer: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Tickets: ${quantity}`);
    console.log(`Total Before Discount: ${total}`);
    console.log(`Discount: ${Discount}`);
    console.log(`Final Amount: ${totalAfterDiscount}`);
}

bookTicket("Nischal",20,5)