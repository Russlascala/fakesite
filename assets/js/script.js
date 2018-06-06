$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        //var initiate = document.getElementsByClassName("topImg");
        var iHeight = $(".topImg").height();
        //var imgHeight = height(initiate);
        if ($(document).scrollTop() > iHeight) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "#ddbbac"); // if yes, then change the color of class "navbar-fixed-top"to #ddbbac or maybe (#c48a80) 
            $(".navbar-fixed-top").css("padding-bottom", "18px");
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
})
