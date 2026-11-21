const calculateAverage= (m1,m2,m3)=>{
    let totalMarks=m1+m2+m3;
    let average=totalMarks/3;
    return average;

}

const getDivision= (m1,m2,m3,average)=>{
    if (average >=70) return "First Division";
    else if (average >=60) return "Second Division";
    else if (average >=50) return "Third Division";
    else return "Fail"
}



const processResult = (name, m1, m2, m3, callback)=>{
    let averageMarks=calculateAverage(m1,m2,m3)
    let division =callback(m1,m2,m3,averageMarks);
    console.log(`Student: ${name}`);
    console.log(`Average: ${averageMarks}`);
    console.log(`Division: ${division}`);
}

processResult("Nischal", 60,59,61,getDivision)