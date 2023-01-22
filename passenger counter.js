let count =document.getElementById('count');
let inc =document.getElementById('inc');
let save =document.getElementById('save');
let scount =document.getElementById('scount');


let counter =0
function incf(){
    counter +=1
    count.innerText=counter

};


function savef(){
    let strr=counter + " - "
    scount.textContent += strr
    count.innerText=0
    counter=0
    

}