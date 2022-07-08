// take two userinput starting and endindg and print positive number

const userinput=require("readline-sync")
let start=userinput.questionInt(" ")
let end=userinput.questionInt(" ")
let str=""
for( var i=start;i<=end;i++){
    if (i>=0){
        str+=i+" "
    }
}
console.log(str)