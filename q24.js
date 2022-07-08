// Given 3 digits a, b, and c. The task is to find all the possible combinations from these digits.
// Examples:
// Input: [1, 2, 3]
// Output:
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

const userinput=require("readline-sync")
let a=userinput.questionInt("Enter the number :- ")
let b=userinput.questionInt("Enter the number :- ")
let c=userinput.questionInt("Enter the number :- ")
let input=[]
input.push(a,b,c)
console.log(input)
for(i of input){
    for (j of input){
        for (k of input){
            if (i!=j && j!=k && k!=i){
                console.log(i,j,k)
            }
        }
    }
}