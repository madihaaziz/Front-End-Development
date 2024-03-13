// let Data="Secret Information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("Data: ",Data);
//     }
// }
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         Data='new value';
//         // console.log("Admin can edit the data.");
//     }
// }
// let st1=new User("Madiha","madiha@gmail.com");
// let st2=new User("Ayan","ayan@gmail.com");

// let admin1=new Admin("XYZ","xyz@gmail.com");


let a=6
let b=7

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
try{
    console.log("a+b=",a+c);
}
catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);