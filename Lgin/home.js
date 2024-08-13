var sidenavbar=document.querySelector(".sidenavbar")
var a=document.querySelector(".full")
function show(){
    sidenavbar.style.display="block"

}
function cl(){
    sidenavbar.style.display="none"

}
var cart=document.querySelector(".cart")
function cartopen(){
    cart.style.display='block'
    a.style.filter='blur(2px)'
    cart.style.zIndex='0'
}
function cartclose(){
    cart.style.display="none"
    a.style.filter='blur(0px)'

}
    // add to cart
var added=document.querySelector('.jolly')
var buy=document.querySelector('.buy')
var elem=document.querySelector('.elem')
function ad(a){
    var lstitem=document.createElement('li')
    lstitem.textContent=a.textContent
    added.append(lstitem)
    buy.style.display='block'
    elem.style.display='none'

    // adding popup add to cart
    var div1 = document.querySelector('.car')

        div1.style.display='inline-block'
        setTimeout (function(){
            div1.style.display='none'
        },1000);





}