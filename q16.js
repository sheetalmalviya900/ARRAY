// Count unique values inside a list.
// input_list = [1, 2, 2, 5, 8, 4, 4, 8]
// Count = 5 #because [1,2,5,8,4] are unique values.

input_list = [1, 2, 2, 5, 8, 4, 4, 8]
count=0
for ( j of input_list){
    if (!unique.includes(j)){
        unique.push(j)
    }
}
console.log(unique.length)
