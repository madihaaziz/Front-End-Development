/*function myFunction(a,b){
    let s=a+b;
    //console.log(s);
    return s;
}
let val=myFunction(2,5);
console.log(val);*/

/*Arrow function
const arrowFunc=(a,b)=>{
    return a*b;
};
let val=arrowFunc(4,5);
console.log(val);
const printHello=()=>{
    console.log("Hello");
}
printHello();*/

/*Practice1 Pass a string and count the number of vowels:
function countVowels(a){
    let c=0;
    for(let i of a){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            c+=1;
        }
    }
    return c;
}
let str=prompt("Enter the string");
let val=countVowels(str);
console.log(val);

const countVowels=(str)=>{
    let c=0;
    for(let i of str){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            c+=1;
        }
    }
    return c;
}
let val=countVowels("hello");
console.log(val);*/

/*forEach loop in Arrays:
Practice2 Calculate the square of each number in the array:
let arr=[1,2,3,4,5];
let calcSquare=(num)=>{
    console.log(num**2);
}
arr.forEach((calcSquare));*/

/*Map->Create a new array with the results of some operation
arr.map(callbackFnx(value,index,arrat))
let arr=[1,2,3,4];
let newArr=arr.map((val)=>{
    return val**2;
});
console.log(newArr);*/

/*Filter->Creates a new array of 
elements that give true for a condition/filter
let num=[1,2,3,4,5,6,7,8];
let evenArr=num.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);*/

/*Reduce->Performs some operations and reduces the array to a single value.
It returns that single value
const arr=[1,2,3,4];
const output=arr.reduce((res,curr)=>{ 
    //res->1,curr->2 add both and store the value in res
    //return res+curr;
    return res>curr?res:curr;
});
console.log(output);*/

/*Practice3: Student who scored 90+
const marks=[78,93,89,92,79,90,91];
const output=marks.filter((val)=>{
    return val>=90;
});
console.log(output);*/

/*Practice4: Create an array nd use reduce method to perform various functions:
let n=prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
const sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);
const product=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(product);*/


