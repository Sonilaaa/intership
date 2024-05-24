const myfunction=(a,b,c)=>{
    var sum=a+b+c;
    console.log(sum);
};
myfunction(2,3,4);


const findmygrade=(percentage)=>{
if(percentage>=90){
    console.log("A");
}
else if(percentage>=80) {
console.log("B");
}
else if(percentage>=70) {
    console.log("C")
}
};
findmygrade(90);

const license=(age)=>{
    if(age>=18){
        console.log("eligible");
    }else{
   
        console.log("illigible");
    }  
}
license(29);

const erroehandler=()=>{
try{
    dadalert("welcome fellow geek! ");
}catch(err){
console.log("404 error");
}
}
 erroehandler();

 const intro2019={
        name:"sonila sharma",
        age:18,
        height:"5.4",
        weight:"48",
    };

    const newintro={...intro2019,age:22,height:"5.6",weight:"54"}
    console.log(intro2019);
    console.log(newintro);
 
