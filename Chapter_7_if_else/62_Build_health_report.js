let percentage =95;

if(percentage===100)
{
console.log("Green Build");
}
else if(percentage>=90 && percentage<=99)

{
console.log("Stable (investigate failures)");
}
else if(percentage>=70 && percentage<=89)
{
console.log("Unstable");
}
else if(percentage<70)
{
console.log("Broken Build (block deployment)");
}
