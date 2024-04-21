$(document).ready(function() {
   console.log('Y4F3Z7_0415/3.js');     
   $("div#infobox").hide();    
});

$("h1").mouseleave(function(event) {
    alert(`Az egér az ${event.pageX}, ${event.pageY} koordinátán hagyta el a címsort`);
});

$("b#click").click(function() {
    $(this).parent().parent().hide();
});

$("b#click2").dblclick(function() {
    $(this).parent().parent().hide();
});

$("form#form").submit(function(event) {
    event.preventDefault();
    alert("Form elküldve");
});

$("button#join").mouseenter(function() {
    $("div#infobox").show();
});

$("button#join").mouseleave(function() {
    $("div#infobox").hide();
});

$("input").mouseenter(function() {
    $(this).css("border", "2px solid red");
});

$("input").mouseleave(function() {
    $(this).css("border", "");
});

$("input").focus(function() {
    $(this).css("background-color", "yellow");
});

$("input").blur(function() {
    $(this).css("background-color", "");
});
