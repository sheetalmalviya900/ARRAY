// Given a List, extract all elements whose frequency is greater than K.
// Input: test_list = [4, 6, 4, 3, 3, 4, 3, 4, 3, 8], K = 3
// Output: [4, 3]
// Explanation: Both elements occur 4 times.
// Input: test_list = [4, 6, 4, 3, 3, 4, 3, 4, 6, 6], K = 2
// Output: [4, 3, 6]
// Explanation: Occur 4, 3, and 3 times respectively.


test_list = [4, 6, 4, 3, 3, 4, 3, 4, 3, 8]
const userinput=require("readline-sync")
k=userinput.questionInt("Enter the number :- ")
output=[]
for (i of test_list){
    count=0
    for (j of test_list){
        if(i==j){
            count+=1
        }
    }
    if (count>=k){
        if(!output.includes(i)){
            output.push(i)
        }
    }
}
console.log(output)