function calculator(actType){
    if(actType=='add'){
        num1=document.getElementById('num1').value;
        num2=document.getElementById('num2').value;
        result= +num1 + +num2;
        document.getElementById('result').value=result;
    }
  else if(actType=='sub'){
    num1=document.getElementById('num1').value;
    num2=document.getElementById('num2').value;
    result= +num1 - +num2;
    document.getElementById('result').value=result;
}
 else if(actType=='mul'){
    num1=document.getElementById('num1').value;
    num2=document.getElementById('num2').value;
    result= +num1  * +num2;
    document.getElementById('result').value=result;
}
else if(actType=='div'){
    num1=document.getElementById('num1').value;
    num2=document.getElementById('num2').value;
    result= +num1  / +num2;
    document.getElementById('result').value=result;

}
}


