
console.log("hello world");
var age;
var gender;
var AI;
var simple;

function calculate() {
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    AI = document.getElementById("AI").value;
    console.log('calculate');
    console.log(document.getElementById("gender").value);
    console.log(document.getElementById("age").value);
    if (AI <= 100000) {
        document.getElementById("amt").value ="you are tax free";

    }
    else if ((AI > 100000)&&(AI <= 300000)) {
        if (gender === "female") {
            simple = AI * 0.05;
            document.getElementById("amt").value = simple;
        }
        else if ((age > 60)||(age < 18)) {
            simple = AI * 0.03;
            document.getElementById("amt").value = simple;
        }
        else if ((AI > 100000)&&(AI <= 300000)) {
            simple = AI * 0.04;
            document.getElementById("amt").value = simple;
        }
    }
    else if (AI > 500000) {
        simple = AI * 0.8;
        document.getElementById("amt").value = simple

    }

}
function printwhile(){
    let x = 10;
    while(a<20)
    
    console.log(x) 
    i++
}
