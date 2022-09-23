let img = document.getElementsByClassName('focus-img');
for (var i = 0; i<img.length; i++){
    img[i].addEventListener('mouseover', focusimgp(i));
    img[i].addEventListener('mouseout', focusimgm(i));
}

function focusimgp(i){
    return function(){
        img[i].animate(
                    {"transform": "scale(1.20)"},
                    {duration: 300});
        setTimeout(function(){img[i].style.transform = "scale(1.20)"},
        280)
        }
    }

function focusimgm(i){
    return function(){
        img[i].animate(
                    {"transform": "scale(1.00)"},
                    {duration: 300});
        setTimeout(function(){img[i].style.transform = "scale(1.00)"},
        280)}
    }

let animtopblocklet = document.getElementById('animtopblock');
let animtopbuttonlet = document.getElementById('animtopbutton');

let chevronup = document.getElementById('chevup');
let chevrondown = document.getElementById('chevdown');

animtopbuttonlet.addEventListener('click', animtopheight);
function animtopheight(){
    $( "#animtopblock").animate({
        "height": ["toggle", "swing"],
        "padding-top": ["toggle", "swing"],
        "padding-bottom": ["toggle", "swing"]
    },
        {duration: 700}
    );
    setTimeout(function(){
        if (animtopblocklet.style.display !== 'none'){
        chevronup.style.display = 'inline';
        chevrondown.style.display = 'none';}
        else {
        chevronup.style.display = 'none';
        chevrondown.style.display = 'inline';}
    },715)
}