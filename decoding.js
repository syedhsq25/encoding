import readlineSync from "readline-sync"
function base64decoding(){
let inputStr= readlineSync.question("enter the encoded string : ");
let counterofPads=inputStr.split("=").length-1;
inputStr = inputStr.split("=")[0];
console.log("the entered string is : ",inputStr)
let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
inputStr = inputStr.split("").map(char=>base64.indexOf(char));
console.log(inputStr);
inputStr=  inputStr.map( dec=>{
    dec.toString(2)
    while(dec.length < 6){
         dec="0" + dec;
    }
    return dec;
}
);
console.log(inputStr);

inputStr=inputStr.join("");
console.log(inputStr)
if(counterofPads==1){
    inputStr=inputStr.slice(0,inputStr.length-2)
}
if(counterofPads==2){
    
    inputStr=inputStr.slice(0,inputStr.length-4)
}
console.log(inputStr)
const bin8Bit=[]
for(let i = 0 ; i<inputStr.length;i=i+8){
    bin8Bit.push(inputStr.slice(i,i+8));

}
console.log(bin8Bit);
const dec8Bit=bin8Bit.map(bin=>parseInt(bin,2));
console.log(dec8Bit)
const finalStr=dec8Bit.map(dec=>String.fromCharCode(dec)).join("");
console.log(`the base 64 of decoded strnig fo r ${inputStr} is : ${finalStr}`)
}
export default base64decoding
