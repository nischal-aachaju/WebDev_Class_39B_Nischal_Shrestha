let isLoggedIn=true;
let role="admin";

if (!isLoggedIn){
    console.log("Please Logged In");
}
else if (isLoggedIn && role==="admin"){
    console.log("Welcome, Admin"); 
}
else if (isLoggedIn && role) {
    console.log("welcome, User");
    
}