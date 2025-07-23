const dbtn= document.getElementById("b1");
const rbtn= document.getElementById("b2");
const ibtn= document.getElementById("b3");
const countLabel= document.getElementById("contLable");
let count=0;


ibtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
dbtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}

rbtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}






