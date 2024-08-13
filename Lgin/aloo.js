
var int = document.querySelector(".int")
var int1 = document.querySelector(".int1")
var para1 = document.querySelector(".para1")
var para2 = document.querySelector(".para2")

function submit(){
    var a=int.value
    var b=int1.value
    if(a=='HI' && b=='123'){
        window.location.href='Home.html'
    }
    else if(a=='HI'&& b!='123'){
        para2.style.display='block'

    }
    else if(a!='HI' && b=='123'){
        para1.style.display='block'
    }
    else{
        para2.style.display='block'
        para1.style.display='block'

    }
}
