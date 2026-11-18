let amount=49;
let discount=null;
let finalAmt=null;

if (amount >=100){
discount=20;
finalAmt=amount-amount*discount/100;
}
else if (amount >=50 ){
discount=10;
finalAmt=amount-amount*discount/100; 
}
else{
discount=0;
finalAmt=amount-amount*discount/100; 
}
console.log(finalAmt);
