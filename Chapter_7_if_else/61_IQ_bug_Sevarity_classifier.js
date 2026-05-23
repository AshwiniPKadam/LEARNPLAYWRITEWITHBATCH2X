let impactScore=1;
if(impactScore>=9 && impactScore<=10)
{
    console.log("Bug severity is Critical (block release)");
}
else if(impactScore>=7 && impactScore<=8)
 {
    console.log("Bug severity is High");
}
else if(impactScore>=4 && impactScore<=6)
 {
    console.log("Bug severity is Medium");
} 
else if(impactScore>=1 && impactScore<=3)
 {
    console.log("Bug severity is low");
}     
else
    {
      console.log("Invalid score");  
    } 