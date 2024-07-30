var slideimg =document.getElementById("slideimg");
var images=new Array(
    "images/lucas-andrade-3Uj0GwVmOeY-unsplash.jpg",
    "images/8.jpg",
    "images/15.jpg",
    "images/wp1939582-kfc-wallpapers.jpg"
);
var len=images.length;
var i=0;
function slider(){
    if(i>len-1){
        i=0;
    }
    slideimg.src=images[i];
    i++;
    setTimeout('slider()',3000)
}

/* cart */

var noti =document.querySelector('cart-icon');
var select =document.querySelector('.product-box');
var button =document.getElementsByTagName('button');

for(but of button){
    but.addEventListner('click',(e)=>{
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count',add+1);
        noti.classList.add('zero');
    })
}
