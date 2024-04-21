$(document).ready(function(){
    $("#k1").click(function(){
        $("ul li:first-child").hide();
        $("ul li:first-child a").removeAttr("href");
        $("footer a").removeAttr('href');
    });

    

    $("#k2").click(function(){
        $("ul li:first-child").hide();
        $("ul li:first-child a").removeAttr("href");
        $("footer a").removeAttr('href')
        $("#k2").hide();
       
    });

    $("#k3").click(function(){
        $("header").hide();
        $("ul li:first-child").hide();
        $("ul li:first-child a").removeAttr("href");
        $("footer a").removeAttr('href')
        $("header").removeAttr('href')
    });

    $("#k4").click(function(){
        $("ul li:lt(2)").hide();
        $("ul li:first-child").hide();
        $("ul li:first-child a").removeAttr("href");
        $("footer a").removeAttr('href')
    });

    $("#k5").click(function(){
        $("ul li:first-child").hide();
        $("ul li:first-child a").removeAttr("href");
        $("footer a").removeAttr('href')
        $("table tr:odd").hide();
    });

});