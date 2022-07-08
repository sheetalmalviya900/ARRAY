// Find the First Maximum, Second maximum, Third maximum number from the List.

arr=[6,4,2,5,2,9,4,35,4,3]
max1=0
max2=0
max3=0
for (i of arr){
    if (i > max1){
        max3=max2
        max2=max1
        max1=i
    }
    else if(i > max2){
        max3=max2
        max2=i
    }
    else if(i>max3){
        max3=i
    }
}
console.log(max1,max2,max3)