// List product excluding duplicates.
// List = [6,1,3,5,6,3,1]
// Output: 60

list = [6,1,3,5,6,3,1]
arr=[]
for (k of list){
    if(!arr.includes(k)){
        arr.push(k)
    }
}
product=1
for (i of arr){
    product*=i
}
console.log(product)