// [[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
// List with maximum length of lists:
// (3, [13, 15, 17])
// List with minimum length of lists:
// (1, [0])

// list=[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
// max_length=list[0].length
// min_length=list[0].length
// max_list=list[0]
// min_list=list[0]
// for (i  of list){
//     if (i.length>max_length){
//         max_length=i.length
//         max_list=i
//     }
//     else if(i.length<min_length){
//         min_length=i.length
//         min_list=i
//     }
// }
// console.log((max_length,max_list),(min_length,min_list))

list=[4,7,3,5,09,6,9]
for (var i=1;i<list.length;i++){
    console.log(list[0-i]);
}