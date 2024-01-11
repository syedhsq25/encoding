import readlineSync from "readline-sync"
import base64decoding from "./decoding.js";
import base64encoding  from "./encoding.js";
import clc from "cli-color"
import loading  from "loading-cli"
import  Color  from "cli-color";
// import cliSpinners from "cli-spinners";
function main(){
    console.clear()
console.log(clc.redBright("----------------------------------------------"));
console.log("\t Base64 Encoding and Decoding")
console.log("----------------------------------------------");
const options=["Exit","Encoding", "Decoding"]
options.forEach((ele,i)=> {

    console.log(`Press ${i} for ${ele}`)

});
const option=readlineSync.questionInt("Enter your option : ")
switch(option){
    case 0:
    console.log("Thank you for pressing 0, bye bye")
    return;
    case 1:
    base64encoding()
    break;
    case 2:
    base64decoding()    
    break;
    default:
                // console.log(clc.bgGreen("Invalid Input please try again."))
                const load =loading(
                    {

                        "text":"Hello , invalid input "
                       , "interval": 100
                        ,   
                        "frames":["😁", "😄", "😂", "😁", "😄", "😂"],
                        color:"yellow"
                    }
                ).start()
                // console.log(cliSpinners.dots)
        return setTimeout(() => {
            load.stop()
            main();            
        }, 3500);
    }

        const repeat=readlineSync.question("Do you want to continue? (yes/no)")
        if(repeat=="yes"||repeat=="YES"||repeat=="Y"||repeat=="Yes"||repeat=="y")
        {
            return main()
        }
        console.log("ADios bye bye ")
}



main();