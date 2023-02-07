let number = 11;
let count = 0;
for(let i=2; i<=number; i++){
    if(number%i===0){
        count++;
    }
}
if(count===1){
    console.log("Yes Prime");
}else{
    console.log("Not Prime");
}