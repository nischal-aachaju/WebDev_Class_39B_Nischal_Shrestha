let a=1,b=2,c=1;

if (a>=b){
    if (a>=c){
        console.log(`${a} is largest number`);
    }
    else {
        console.log(`${c} is largest number`);
    }
}
else if (b>=a){
    if (b>=c){
         console.log(`${b} is largest number`);
    }
    else {
         console.log(`${c} is largest number`);
    }
}
else {
     console.log(`${c} is largest number`);
}