const calculateDelivery =(distance)=>{
    if (distance<=2) return 30;
    else return distance*15;
}

const checkFreeDelivery=(orderAmount)=>{
    if (orderAmount>=1000) return true;
    else return false;
}

const processOrder= (customer,distance,orderAmount,calculateDeliveryCallbak)=>{
    let deliveryCharge=0;
    if (checkFreeDelivery(orderAmount)){
        deliveryCharge=0;
    }
    else{
        deliveryCharge=calculateDeliveryCallbak(distance);
    }
    console.log(`Customer: ${customer}`);
    console.log(`Order Amount: Rs. ${orderAmount}`);
    console.log(`Distance: ${distance} km`);
    console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
    
}

processOrder("Shyam",3,999,calculateDelivery);