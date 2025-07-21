const PI=3.14159;
let r;
let c;

document.getElementById(`mySubmit`).onclick=function() {
    r=document.getElementById(`mytext`).value;
    r=Number(r);
    c=2*PI*r;
    document.getElementById(`myp`).textContent=`Circumference of the circle is: ${c}`
}


