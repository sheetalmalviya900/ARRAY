// Write a Python program to sum two or more lists, the lengths of the lists may be different. 
// Original list:
// [[1, 2, 4], [2, 4, 4], [1, 2]]
// Sum said lists with different lengths:
// [4, 8, 8]
// Original list:
// [[1], [2, 4, 4], [1, 2], [4]]
// Sum said lists with different lengths:
// [8, 6, 4]

list=[[1, 2, 4], [2, 4, 4], [1, 2]]
list1=[]
for (i in list){
    for (j in list[i]){
        if(i==0){
        list1.splice(j,1,list[i][j])
        }
        else{
            list1.splice(j,1,list1[j]+list[i][j])
        }
    }
}
console.log(list1)