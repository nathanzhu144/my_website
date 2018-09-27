var index = 0;
roulette();

function roulette(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }

    index++;

    if(index > x.length){
        index = 1;
    }

    x[index - 1].style.display = "block";
    setTimeout(roulette, 3000);
}