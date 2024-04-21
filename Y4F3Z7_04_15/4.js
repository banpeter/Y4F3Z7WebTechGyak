$(document).ready(function() {
   console.log('Y4F3Z7_0415/4.js');         
});

$("button#hide").click(function() {
    $("p.hide").hide();
});

$("button#show").click(function() {
    $("p.hide").show();
});

$("button#toggle").click(function() {
    $("p.hide").toggle();
});

$("form#form").submit(function(event) {
    event.preventDefault();
    alert("Form elküldve");
});

$("button#t01").click(function() {
    $("form#form").css("opacity", "0.1");
});

$("button#t05").click(function() {
    $("form#form").css("opacity", "0.5");
});

$("button#t08").click(function() {
    $("form#form").css("opacity", "0.8");
});

$("button#formhide").click(function() {
    $("form#form").hide();
});

$("button#formshow").click(function() {
    $("form#form").show();
});

$("button#formtoggle").click(function() {
    $("form#form").toggle();
});
