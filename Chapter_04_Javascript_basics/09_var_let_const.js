var i=10;
let l=5;
const p=25.5;


var browser="Chrome";
var browser="Firefox";  //Redeclairation allowed
browser="edge";         //Reassignment allowed

console.log(browser);


//for functions
var testcases=["login","logout","signup"];
for(var i=0;i<=testcases.length-1;i++)
{
console.log("testcases running " +testcases[i]);
}

console.log("Looped counter leacked outside " + i);