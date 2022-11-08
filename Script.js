//For show more details button
function ShowMore1() {
    document.getElementById("b1").innerHTML = " ";
    document.getElementById("dd1").innerHTML = "- I love working on small game development projects in my free time with friends";
    document.getElementById("dd2").innerHTML = "- I enjoy swimming in my pool during the summer, it's also one of the main ways I exercise";
    document.getElementById("dd3").innerHTML = "- I like to take computers apart, upgrade them, and make my own modifications";
}


//For the change color button, changes all the colors to a random color 
function Colorize() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    var items = document.getElementsByClassName("BG");
    for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "#" + randomColor;
    }

    var items2 = document.getElementsByClassName("TXT");
    for (var i = 0; i < items2.length; i++) {
        items2[i].style.color = "#" + randomColor;
    }

    var items3 = document.getElementsByClassName("BR");
    for (var i = 0; i < items3.length; i++) {
        items3[i].style = "border-top: 4px solid #" + randomColor;
    }
    window.alert("The site color should be changed! If it did not change, please try again.")
}