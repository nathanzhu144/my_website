var index = 0;
roulette();

function roulette(){
    var i;
    var x = document.getElementsByClassName("mySlides");

    //Making all of the slides disappear
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }
    
    index++;

    x[index % x.length].style.display = "block";
    x[(index + 1) % x.length].style.display = "block";
    setTimeout(roulette, 4000);
}