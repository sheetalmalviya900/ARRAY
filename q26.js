// Write a Python program to check if a given string contains an element, which is present in a list. 
// The original string and list:
// https://www.w3resource.com/python-exercises/list/
// ['.com', '.edu', '.tv']
// Check if https://www.w3resource.com/python-exercises/list/ contains an element, which is present in the list ['.com', '.edu', '.tv']
// True
// The original string and list: https://www.w3resource.net
// https://www.w3resource.net
// ['.com', '.edu', '.tv']
// Check if https://www.w3resource.net contains an element, which is present in the list ['.com', '.edu', '.tv']
// False 


let str="https://www.w3resource.com/python-exercises/list/"

let list1=['.com', '.edu', '.tv']
for (i of list1){
    if (str.includes(i)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}