var img = document.getElementById("image");
var gif = document.getElementById("gif");
var giff = document.getElementById("giff");



img.addEventListener("animationend", gif1) 
function gif1(){
    gif.style.display = 'flex';
    
}

gif.addEventListener("animationend", gif2)
function gif2(){
    giff.style.display = 'flex';
}