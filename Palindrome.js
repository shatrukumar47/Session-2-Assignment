let word = "naman";
let bag = "";
for(let i=word.length; i>=0; i++){
    bag = bag + word[i];
}
if(bag==word){
    console.log("Palindrom");
}else{
    console.log("Not Palindrome");
}