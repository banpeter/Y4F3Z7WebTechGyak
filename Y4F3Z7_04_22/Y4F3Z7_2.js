$("#text").click(function () {
    alert($("div.box").text());
});

$("#html").click(function () {
    alert($("div.box").html());
});

let jelentkezett = false;

$("#value").click(function () {
    if (jelentkezett)
        alert("Jelenkezés");
    else
        alert($("#nev").val());
});

$("#param").click(function () {
    alert($("#param").attr("data"));
    //alert($("join").attr("type"));
    //alert($("a").attr("href"));
});

$("#join").click(function () {
    jelentkezett = true;
});