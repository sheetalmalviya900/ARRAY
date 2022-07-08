const userinput=require("readline-sync")
N=userinput.questionInt("Enter the length of matrix :- ")

matrix=[]
for(i=1;i<=N;i++){
    matrix_row=[]
    for(j=1;j<=N;j++){
        const userinput=require("readline-sync");
        number=userinput.questionInt("Enter the number :- ")
        matrix_row.push(number)
    }
    matrix.push(matrix_row)
}
console.log("Matrix is .......\n")
str=""
for(i=0;i<N;i++){
    for(j=0;j<N;j++){
        str+=(matrix[i][j])+" "
    }
    str+="\n"
}
console.log(str)
sumd1=0
sumd2=0
for(i=0;i<N;i++){
    for(j=0;j<N;j++){
        if(i==j){
            sumd1+=matrix[i][j]
        }        if(i+j==N-1){
            sumd2=sumd2+matrix[i][j]
        }
    }
}
if(sumd1 != sumd2){
    f=1
}
else{
    for(i=0;i<N;i++){
        sumrow=0
        sumrcolumn=0
        for(j=0;j<N;j++){
            sumrow=sumrow+matrix[i][j]
            sumrcolumn=sumrcolumn+matrix[j][i]
        }
        if (sumrow!=sumd1){
            f=1
        }
        else if(sumrcolumn!=sumd1){
            f=1
        }
        else{
            f=0
        }
    }
}
if(f==0){
    console.log("Matrix is magic square")
}
else if(f==1){
    console.log("Matrix is not a magic square")
}