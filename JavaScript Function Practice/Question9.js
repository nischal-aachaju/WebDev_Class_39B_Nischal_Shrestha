const calculateBonus =(amount)=>{
    if (amount>=1000) return amount*0.15;
    else if (amount >=500) return amount*0.1;
    else if (amount>=100) return amount*0.05;
    else return 0;
}
const calculateTotalBalance =(amount,bonus)=>{
    let totalBalance=amount+bonus;
    return totalBalance;
}
const recharge=(number,amount,calculateTotalBalanceCallback)=>{
    let bonus=calculateBonus(amount);
    let total=calculateTotalBalanceCallback(amount,bonus);
    console.log(`Mobile Number: ${number}`);
    console.log(`Recharge Amount: Rs. ${amount}`);
    console.log(`Bonus Received: Rs. ${bonus}`);
    console.log(`Total Balance: Rs. ${total}`);    
}

recharge (9817332190,500,calculateTotalBalance);