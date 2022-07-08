var numbers=[50, 40, 23, 70, 56, 12, 5, 10,91, 7]
var max=0;
var second_max=0;
for (var i=0;i<numbers.length; i++){
    if (max<numbers[i]){
        second_max=max
        max=numbers[i];
    }
    else if (second_max<numbers[i]){
        second_max=numbers[i];
    }
}
console.log(second_max);