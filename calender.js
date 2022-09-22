function calc() {
    var year = document.getElementById("text").value;
    var month = document.getElementById("int_month").value;
    console.log(month);

    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        document.getElementById("year").innerHTML = year + " is a leap year";
        document.getElementById("day").innerHTML = "Total days in " + year + "is 366";

        if (month == "jan") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "feb") {
            document.getElementById("month").innerHTML = "Total no of days = 29";
        }
        else if (month == "mar") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "apr") {
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }
        else if (month == "may") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "june") {
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }
        else if (month == "july") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "aug") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "sept") {
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }
        else if (month == "oct") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "nov") {
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }
        else if (month == "dec") {
            document.getElementById("month").innerHTML = "Total no of days = 31";

        }
    }

    else {
        document.getElementById("year").innerHTML = year + " is a non-leap year";
        document.getElementById("day").innerHTML = "Total days in " + year + " is 365";

        if (month == "jan") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "feb") {
            document.getElementById("month").innerHTML = "Total no of days = 28";
        }
        else if (month == "mar") {
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
        else if (month == "apr") {
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }     
        else if (month == "may"){
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }   
        else if (month == "june"){
            document.getElementById("month").innerHTML = "Total no of days = 30";
        } 
        else if (month == "july"){
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }  
        else if (month == "aug"){
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }  
        else if (month == "sept"){
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }  
        else if (month == "oct"){
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }  
        else if (month == "nov"){
            document.getElementById("month").innerHTML = "Total no of days = 30";
        }           
        else if (month == "dec"){
            document.getElementById("month").innerHTML = "Total no of days = 31";
        }
    }
}