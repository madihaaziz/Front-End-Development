// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
//     resolve(123);
// });


function getData(dataID,getNextData){
    //2s
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("Success");
            if(getNextData()){
                getNextData();
            }
        },5000);
    })
}

//Callback Hell
/*getData(1,()=>{
    console.log("getting data2....");
    getData(2,()=>{
        console.log("getting data3....");
        getData(3,()=>{
            console.log("getting data3....");
            getData(4)
        });
    });
});
*/
