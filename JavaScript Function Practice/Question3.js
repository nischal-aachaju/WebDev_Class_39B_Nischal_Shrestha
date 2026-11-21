const calculateDiscount=(amount)=>{
    if (amount >=5000) return 20;
    else if (amount>=3000) return 15;
    else if (amount >=1000) return 10;
    else return 0;
}

const calculateFinalPrice=(amount,discount)=>{
let finalAmount =amount-amount*discount/100;
return finalAmount;
}

const  checkout =(customerName,amount,callback)=>{
    let discount=calculateDiscount(amount)
    let finalAmount=callback(amount,discount);
    console.log(`Customer: ${customerName} `);
    console.log(`Original Price: ${amount}`);
    console.log(`Discount: ${discount}`);
    console.log(`Final Price: ${finalAmount}`);
}

checkout ("Nischal",6000,calculateFinalPrice)