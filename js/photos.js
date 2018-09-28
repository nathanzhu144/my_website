var index = 0;
roulette("my_photos");

//Requires: a class name tag for which class to make a slide show of
//Modifies: Nothing.
//Effects:  This function is in charge of the slide show on the main page.
function roulette(class_name){
    var i;
    var x = document.getElementsByClassName(class_name);

    //Making all of the slides disappear
    for(i = 0; i < x.length; ++i){
        x[i].style.display = "none";
    }
    
    index++;

    //Displays one of the pictures, depending on index
    x[index % x.length].style.display = "block";

    //Testing out printing of two pictures at once
    //x[(index + 3) % x.length].style.display = "block";

    //Every 4 seconds, call function again
    setTimeout(roulette, 2000);
}