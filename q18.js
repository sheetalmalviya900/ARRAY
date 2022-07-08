// For example, if we give 9119  the function should return  811181,
//  as the  square of 9 is 81 and square of 1  is 1.

const userinput=require("readline-sync");
let number=userinput.question("Enter the number :- ")
square_number=""
for (i of number){
    square_number+=i*i
}
console.log(square_number)