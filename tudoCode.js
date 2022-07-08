const user_input=require("readline-sync");
let work=user_input.questionInt("how many work you will do in a day:-");
let new_list=[];
for(var i=1;i<=work;i++){
    let task_Name=user_input.question(`task ${i}...`);
    new_list.push(task_Name);
}
console.log(new_list);

work_complete=[]
let completed_works=user_input.questionInt("how many works have you done:-");
for(var i=1;i<=completed_works;i++){
    let work_Name=user_input.question("enter work name:-");
    work_complete.push(work_Name)
}

for(i in work_complete){
    for(j in new_list){
        if(work_complete[i]===new_list[j]){
            new_list.splice(j,1)
        }
    }
}
console.log(new_list)