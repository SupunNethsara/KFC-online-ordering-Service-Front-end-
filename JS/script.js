let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

const toolclip =document.querySelector(".toolclip");
const navmenu =document.querySelector(".nav-menu");

toolclip.addEventListener("click" ,() =>{
  toolclip.classList.toggle("active");
  navmenu.classList.toggle("active");
})
document.querySelectorAll(".one").forEach(n=>n.addEventListener("click",()=>{
  toolclip.classList.remove("active");
  navmenu.classList.remove("active");
}))


// Menubar Down And  up

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#cart-close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

// cart working
if(document.readyState=="loading"){
  document.addEventListener("DOMContentLoaded",ready);
  
}else{
  ready();
}

//making Fucnction
function ready(){
  //remove Items From Cart
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for(var i=0 ; i< removeCartButtons.length;i++ ){
    var button =removeCartButtons[i]
    button.addEventListener('click' ,removeCartItem)
  }
}

//qauntity Change

var qauntityInputs =document.getElementsByClassName('cart-quantity');
for (var i=0 ;i <qauntityInputs.length;i++){
  var input =qauntityInputs[i];
  input.addEventListener("change",quantitychanged);
}

//Add To Cart

var addCart =document.getElementsByClassName('add-cart');
for(var i=0 ; i < addCart.length;i++ ){
  var button = addCart[i];
  button.addEventListener("click",addCartClicked);
}


//remove Items From Cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//qauntity Change
function quantitychanged(event){
  var input = event.target;
  if(isNaN(input.value) || input.value<=0){
    input.value =1;
  }
  updatetotal();
}
//Add Cart
function addCartClicked(event){
  var button =event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
  var productImg=ctImg = shopProducts.getElementsByClassName("product-image")[0].src;
  console.log(title,price,productImg);
}
function addProducToCart(title,price,productImg){
  var  cartShopBox =document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = document.getElementsByClassName("cart-product-title");
  for(var i=0 ; i < cartItemsNames.length;i++ ){
   if(cartItemsNames[i].innerText == title){
      alert("You have already add this item to cart");
      return;
      
    }
  }





var cartBoxContent =` <img src="images/0301.png" alt="" class="cart-img">
                              <div class="detail-box">
                                  <div class="cart-product-title">Zinger Burger With Cheese</div>
                                  <div class="cart-price">Rs.990.00</div>
                                  <input type="number" class="cart-quantity" value="1" placeholder="0">

                              </div>
                              <!--Remove-->
                              <i class="fa-solid fa-trash cart-remove"></i>`;
                              
                             cartShopBox.innerHTML = cartBoxContent;
                              cartItems.append(cartShopBox);
                              cartShopBox
                              .getElementsByClassName("cart-remove")[0]
                              .addEventListener("click",removeCartItem);
                              cartShopBox
                              .getElementsByClassName("cart-quantity")[0]
                              .addEventListener("change",quantitychanged);
}



//update  Total
function updatetotal(){
var cartContent = document.getElementsByClassName('cart-content')[0];
var cartBoxes = cartContent.getElementsByClassName('cart-box');
var total=0;
for(var i =0 ; i< cartBoxes.length;i++){
  var cartBox=cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName('cart-price')[0];
  var quantityElement =cartBox.getElementsByClassName('cart-quantity')[0];
  var price =parseFloat(priceElement.innerText.replace("Rs",""));
  var quantity =quantityElement.value;
 total= total + price * quantity;

 //If price Contain some cents value

 total = Math.round(total * 100) /100;

 document.getElementsByClassName('total-price')[0].innerText ="Rs"+ total;
}
}


//button//

var btn_diva =document.getElementById("btn_diva");
var btn_divb =document.getElementById("btn_divb");
var btn_divc =document.getElementById("btn_divc");
var btn_divd =document.getElementById("btn_divd");
var btn_dive =document.getElementById("btn_dive");
var btn_divf =document.getElementById("btn_divf");
var shop_content=document.getElementById("diva");
var shop_content=document.getElementById("divb");
var shop_content=document.getElementById("divc");
var shop_content=document.getElementById("divd");
var shop_content=document.getElementById("dive");
var shop_content=document.getElementById("divf");


btn_diva.addEventListener('click', ()=>{
  diva.style.display='block';
  divb.style.display='none';
  divc.style.display='none';
  divd.style.display='none';
  dive.style.display='none';
  divf.style.display='none';

});

btn_divb.addEventListener('click', ()=>{
  diva.style.display='none';
  divb.style.display='block';
  divc.style.display='none';
  divd.style.display='none';
  dive.style.display='none';
  divf.style.display='none';

});

btn_divc.addEventListener('click', ()=>{
  diva.style.display='none';
  divb.style.display='none';
  divc.style.display='block';
  divd.style.display='none';
  dive.style.display='none';
  divf.style.display='none';

});
btn_divd.addEventListener('click', ()=>{
  diva.style.display='none';
  divb.style.display='none';
  divc.style.display='none';
  divd.style.display='block';
  dive.style.display='none';
  divf.style.display='none';

});
btn_dive.addEventListener('click', ()=>{
  diva.style.display='none';
  divb.style.display='none';
  divc.style.display='none';
  divd.style.display='none';
  dive.style.display='block';
  divf.style.display='none';

});
btn_divf.addEventListener('click', ()=>{
  diva.style.display='none';
  divb.style.display='none';
  divc.style.display='none';
  divd.style.display='none';
  dive.style.display='none';
  divf.style.display='block';

});
