let count=0;
let min=0;
let milli=0;
let sec=0;
let clear=0;
let flag=false;
function timer(){
    count++;

min=Math.floor((count/100)/60);
sec=Math.floor((count/100)-(min*60));
milli=Math.floor(count-(sec*100)- (min*6000));

document.querySelector("#minutes").innerText=zerotime(min)+" :";
document.querySelector("#seconds").innerText=zerotime(sec)+" :";

document.querySelector("#milliseconds").innerText=milli;
};
//Click on start btn
let startbtn=document.getElementById("Start");
    startbtn.addEventListener('click',function(){
        if(!flag){
        clear=setInterval(timer,10); 
        flag=true;
        document.querySelector("#go").innerHTML="Stop Now Bitch";

        }
    });
          
    
function zerotime(count){
    if(count<=9){
        return "0"+count;
    }
    else{
        return count;
    }
}

//Click on Stop btn
let stopbtn=document.querySelector('#Stop');
stopbtn.addEventListener("click",function(){
clearInterval(clear);
document.querySelector("#go").innerHTML="Reset kr ";

});
// //Click on Reset btn
let Resetbtn=document.querySelector("#Reset");
Resetbtn.addEventListener("click",function(){
    clearInterval(clear);
     count=0;
 min=0;
milli=0;
 sec=0;
 clear=0;
 flag=false;

 document.querySelector("#go").innerHTML="GO!";

document.querySelector("#minutes").innerText="00 :";
document.querySelector("#seconds").innerText="00 :";

document.querySelector("#milliseconds").innerText="00";
});
