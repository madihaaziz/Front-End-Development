/*let marks=[98,75,34,56,67];
// console.log(marks);
console.log(marks.length);*/

/*
Printing element of Arrays:

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

while(i<marks.length){
    console.log(marks[i]);
    i+=1;
}

let i=0
do{
    console.log(marks[i]);
    i+=1;
}while(i<marks.length);
*/

/*let cities=["Mumbai","Varanasi","Kolkata","Bengaluru","Agra","Lucknow"];
for(let city of cities){
    console.log(city.toUpperCase());
}*/

/*Practice1:
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i of marks){
    sum+=i;
}
console.log(sum);
let avg=sum/marks.length;
console.log(`Average marks = ${avg}`);*/


/*Practice2:
let price=[250,645,300,900,50]
for(let i of price){
    i=i-0.1*i;
    console.log(i);
}*/

/*let food=["Potato","Apple","Litchi","Tomato"];
food.push("Chips","Burger","Paneer");
console.log(food);
food.pop();
console.log(food);
let price=[250,645,300,900,50]
console.log(price.splice(2,2,101,103));

let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
arr.splice(2,0,104);
arr.splice(3,1,101);
console.log(arr);*/

/*Practice3:*/
let company=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];

company.shift()
console.log(company);
company.splice(1,1,'Ola')
console.log(company);
company.push('Amazon')
console.log(company);

