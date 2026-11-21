const getFoodPrice =(food)=>{
    food=food.toLowerCase().trim();
    switch (food){
        case "burger": return 250 ;break;
        case "pizza" : return 500; break;
        case "bomo" : return 150; break;
        case "bhowmine": return 180; break;
        default: return 0;
    }
}
const calculateServiceCharge =(total)=>{
    let serviceCharge=total *5/100;
    return serviceCharge;
}
const calculateOrder=(foodName,quantity,getFoodPriceCallback)=>{
    let price=getFoodPriceCallback(foodName);
    let total=price *quantity;
    return total;
}
const generateReceipt=(customerName,foodName,quantity,calculateOrderCallback)=>{
    let total=calculateOrderCallback(foodName,quantity,getFoodPrice);
    let serviceCharge=calculateServiceCharge(total);
    let finalAmt=total+serviceCharge;
    console.log(`Customer: ${customerName}`);
    console.log(`Food: ${foodName}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Food Amount: ${total}`);
    console.log(`Service Charge: Rs. ${serviceCharge}`);
    console.log(`Final Amount: Rs. ${finalAmt}`);
    
}
generateReceipt("Suman","Pizza","2",calculateOrder);