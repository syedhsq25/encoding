import readlineSync from "readline-sync"

 function base64encoding(){
    console.log("implementing encoding")
    let inputString= readlineSync.question("Enter the string : ")
    let asciss= inputString.split("").map(char => char.charCodeAt());
    console.log(asciss)
    //convert the ascii to binary format
    asciss=asciss.map(num=>

        {
            num=num.toString(2);
            while(num.length<8){

                num="0"+num
            }
            return num;
        });
        console.log(asciss) //printing all the binary but separately.

        //merge all the binary numbers.

        asciss=asciss.join("")
        console.log(asciss) // printing the merged binary numbers
            const bin8it=[]
            for (let i=0;i<asciss.length;i=i+6)
{
            bin8it.push(asciss.slice(i,i+6));
}           
            // console.log(bin8it)
            let counter = 0;

        //adding all the hexadecimals into one big number.
            while(bin8it[bin8it.length-1].length<6){
                bin8it[bin8it.length-1]=bin8it[bin8it.length-1] + "0"
                counter +=1;
            }
                 
        console.log(bin8it)
        const bin64dec=bin8it.map(bin=>parseInt(bin,2));
        console.log(bin64dec)

        let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
       let final = bin64dec.map(dec=>base64[dec]);
            if(counter==2) final +=" =";
            if(counter==4) final += "=="
            console.log(final)
    };

    


export default base64encoding