const calculateBonus=(salary)=>{
    if (salary>=40000){
        return salary*10/100;
    }
    else {
        return salary*5/100;
    }
}
const calculateTax=(salary)=>{
    return salary*5/100;
}

const calculateNetSalary=(salary,bonusCallback,taxCallback)=>{
    let netSalary=salary+bonusCallback(salary)-taxCallback(salary);
    return netSalary;
}

const  generatePayslip=(name,salary,callback)=>{
    let bonus=calculateBonus(salary);
    let tax=calculateTax(salary)
    let netSalary=callback(salary,calculateBonus,calculateTax);

    console.log(`Employee: ${name}`);
    console.log(`Basic Salary: ${salary}`);
    console.log(`Bonus: ${bonus}`);
    console.log(`Tax: ${tax}`);
    console.log(`Net Salary: Rs. ${netSalary}`);
    
}

generatePayslip("Nischal",50000,calculateNetSalary)