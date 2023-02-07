let word = "naman";
let bag = "";
for(let i=word.length-1; i>=0; i++){ // word.length should be word.length-1
    bag = bag + word[i];
}
if(bag==word){
    console.log("Palindrom");
}else{
    console.log("Not Palindrome");
}