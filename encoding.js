import readlineSync from "readline-sync"

 function base64encoding(){
    console.log("implementing encoding")
    let inputString= readlineSync.question("Enter the string : ")
    let sp= inputString.split("")
    console.log(sp)
    sp.forEach(ele => {
        
    });

}
export default base64encoding