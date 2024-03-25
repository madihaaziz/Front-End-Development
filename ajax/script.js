let fetchbtn=document.getElementById("fetch");
fetchbtn.addEventListener('click',buttonclickHandler)

function buttonclickHandler(){
    //Instantiate the XHR object
    const xhr=new XMLHttpRequest();
    //Open the XHR object
    xhr.open('GET','madiha.txt',true);
    //What to do on progress(Optional)
    xhr.onprogress=function(){
        console.log('On Progress');
    }
    //What to do when response is ready
    xhr.onload=function(){
        if(this.status==200){
            console.log(this.responseText);
        }
        else{
            console.error("Some Error Occures");
        }
    }

    //send the request
    xhr.send();
}

