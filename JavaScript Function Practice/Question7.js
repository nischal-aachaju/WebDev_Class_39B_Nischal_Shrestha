const validateWithdrawal=(amount,balance)=>{
    if (amount<500) return false;
    else if (amount < balance){
        if (amount%500==0){
            return true;
        }
        return false;
    }
    else return false;
}


const withdrawMoney= (amount,balance,validateWithdrawlCallback)=>{
    console.log(`Account Balance: ${balance}`);
    console.log((`Withdrawl Amount: Rs. ${amount}`));

    if (!validateWithdrawlCallback(amount,balance)){
        console.log("Withdrawl Failed!");
        console.log(`Available Balance: ${balance}`);
        return;
    }
    let transactionFee=25;
    balance=balance-amount-transactionFee;
    console.log("Withdrawl Successful!");
    console.log(`Transaction Fee: Rs. ${transactionFee}`);
    console.log(`Remaining Balance: Rs. ${balance}`);
  
}

withdrawMoney(1000,-10000,validateWithdrawal);