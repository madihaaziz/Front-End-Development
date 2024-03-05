// for(let i=1;i<=5;i++){
//     console.log("Madiha Aziz");
// }

//sum of numbers
//let sum=0;
//let n=prompt("Enter the number");
// for(let i=1;i<=n;i++){
//     sum+=i;
// }

//let i=10;
// while(i<=n){
//     sum+=i;
//     i++;
// }
// console.log("Sum = ",sum);

// do{
//     console.log("Madiha Aziz");
//     i++;
// }while(i<=5);

//for-of loop
// let str="MadihaAziz";
// let len=0;
// for(let i of str){
//     console.log("i = ",i);
//     len+=1;
// }

// console.log(len);

//for-in loop
// let stu={
//     name:"Madiha Aziz",
//     age:21,
//     cgpa:8.8,
//     isPass:true,
// };

// for(let i in stu){
//     console.log("key = ",i," value = ",stu[i]);
// }


// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Practice Question

// let gameNum="21";
// let guess=prompt("Guess the number");
// while(guess!==gameNum)
// {
//     guess=prompt("Wrong Choice! Enter Again");
// }
// console.log("You Guess is right");

//Template Literals

// let str="Madiha Aziz";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// let ss=`This is a template literals`;
// console.log(ss);
// let stu={
//         name:"Madiha Aziz",
//         age:21,
//         cgpa:8.8,
//         isPass:true,
//     };
// let tl=`Name:${stu.name} Age:${stu.age} CGPA:${stu.cgpa}`;
// console.log(tl);


let str=prompt("Enter your full name");
let len=str.length;
let username="@"+str+len;
console.log(username);