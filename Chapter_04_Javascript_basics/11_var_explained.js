var a=10;

//var is function scoped

console.log(a);

function printHello(){
    console.log("Hello Ashwini");
    var a=20;
    console.log(a);
    if(true)
    {
        var a=30;
        console.log(a);
    }
}

printHello();

