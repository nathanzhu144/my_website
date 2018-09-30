var index_1 = 0;
red_roulette_one();
var index_2 = 0;
black_roulette_one();

var index_3 = 0;
black_roulette_two();
var index_4 = 0;
green_roulette_one();

//Requires: a class name tag for which class to make a slide show of
//Modifies: Nothing.
//Effects:  This function is in charge of the top left slide show in photos
function red_roulette_one(){
    var i;
    var x = document.getElementsByClassName("my_photos_red");

    //Making all of the slides disappear
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }

    //Displays one of the pictures, depending on index
    x[index_1 % x.length].style.display = "block";

    index_1++;

    //Testing out printing of two pictures at once
    //x[(index + 3) % x.length].style.display = "block";

    //Every 4 seconds, call function again
    setTimeout(red_roulette_one, 2000);
}

//Requires: a class name tag for which class to make a slide show of
//Modifies: Nothing.
//Effects:  This function is in charge of the  top right slide show in photos
function black_roulette_one(){
    var i;
    var x = document.getElementsByClassName("my_photos_black");

    //Making all of the slides disappear
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }

    //Displays one of the pictures, depending on index
    x[index_2 % x.length].style.display = "block";

    index_2++;

    //Testing out printing of two pictures at once
    //x[(index + 3) % x.length].style.display = "block";

    //Every 4 seconds, call function again
    setTimeout(black_roulette_one, 3000);
}

//Requires: a class name tag for which class to make a slide show of
//Modifies: Nothing.
//Effects:  This function is in charge of the  bottom left of slide show in photos
function black_roulette_two(){
    var i;
    var x = document.getElementsByClassName("my_photos_black_two");

    //Making all of the slides disappear
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }

    //Displays one of the pictures, depending on index
    x[index_3 % x.length].style.display = "block";

    index_3++;

    //Testing out printing of two pictures at once
    //x[(index + 3) % x.length].style.display = "block";

    //Every 4 seconds, call function again
    setTimeout(black_roulette_two, 3000);
}

//Requires: a class name tag for which class to make a slide show of
//Modifies: Nothing.
//Effects:  This function is in charge of the  top right slide show in photos
function green_roulette_one(){
    var i;
    var x = document.getElementsByClassName("my_photos_green");

    //Making all of the slides disappear
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }

    //Displays one of the pictures, depending on index
    x[index_4 % x.length].style.display = "block";

    index_4++;

    //Testing out printing of two pictures at once
    //x[(index + 3) % x.length].style.display = "block";

    //Every 4 seconds, call function again
    setTimeout(green_roulette_one, 3000);
}