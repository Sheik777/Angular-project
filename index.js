function keypressUpd(){
   document.getElementById("ter").style.backgroundColor="grey";
}

function changeBlue(){

   let age=document.getElementById("ter").value;
   let type = age > 18 ? "Adult" : "Child"
  document.getElementById("operator").innerHTML=type;
  document.getElementById("btn").style.color="blue";
 
  console.log(type);
}
function selectcity(){
   let city;
 city=  document.getElementById("city").value;
   console.log(city);
}
function changecolor(){
   document.getElementById("btn").style.backgroundColor="red";
}
function removecolor(){
   document.getElementById("btn").style.backgroundColor="white";
   
}



/*let isPowerON = true;
let isPowerOff = false;
if (isPowerON && isPowerOff) {

   console.log("switch ON the TV");

}
else {
   console.log("enjoy with frnds");
}

let text1= "hello world";
let text2= text1.toUpperCase();
console.log(text2);


let tex1= "HELLO WORLD";
let tex2= tex1.toLowerCase();
console.log(tex2);

let student= ["86","sheik","b","chennai","tamil nadu"]
console.log(student);

student.push("india");
console.log(student);

student.unshift("roll no");
console.log(student);

student.pop("india");
console.log(student);

student.shift("roll no");
console.log(student);'

*/
/*let string = "Doremon";
console.log(string.length);
console.log(string.charAt(3));
console.log(string.endsWith("v"));
console.log(string.includes("Dore"));
console.log(string.indexOf("e"));
console.log(string.repeat(2));
console.log(string.slice(2,5));
console.log(string.replace("mon","Nobita"));
console.log(string.split(4,7));
console.log(string.startsWith("Doremon"));
console.log(string.substring(2,5));
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log("     Doremon  ".trim()) ;
*/



/*for (let s=5;s>=0;s--){

   console.log("number y", s);
}
*/

/*for(y=5; y<=10; y++){
   console.log("number v",y);
}
*/
//...............for method............//

let animal=["lion","tiger","cheetah","leopard"];
for (let n = 0; n < animal.length; n++) {
console.log(animal[n]);
   
}
//...............for each method...............//
let car = ["lambo","bugatti","mustang","bently","rollsroyce"];

car.forEach(function(item,x){
   console.log(item);
})
//.............. array length..............// 
let dailyactivity=["eat","work","kdrama","sleep",];
console.log(dailyactivity.length);

//..............slice method.............//

let a=[1,2,3,4,5];

console.log(a.slice(2,4));

//............hosting............//

var arr=[1,2,3];
var js=arr.reverse();
console.log(js);

