
function calculate() {
    let name = document.getElementById("name").value;
    document.getElementById("s").innerHTML=  name;
    
    let RollNo = document.getElementById("rollno").value;
    document.getElementById("h").innerHTML =   RollNo;

    let Section = document.getElementById("sec").value;
    document.getElementById("e").innerHTML=   Section;

    let Standard = document.getElementById("std").value;
    document.getElementById("i").innerHTML=  Standard;


    let mark = document.getElementById("total").value;

    switch (true) {
        case mark > 450:
            document.getElementById("demo").innerHTML = "Excellent grade";
            console.log("excellent grade");
            break;
        case mark > 400:
            document.getElementById("demo").innerHTML = "Super grade";
            console.log("super");
            break;
        case mark > 300:
            document.getElementById("demo").innerHTML = "Good grade";
            console.log("good");
            break;
        case mark > 200:
            document.getElementById("demo").innerHTML = "Fair grade";
            console.log("fair");
            break;
        case mark > 100:
            document.getElementById("demo").innerHTML = "Fail grade";
            console.log("fail");
        default:
            console.log("unknown value");
    }


}

