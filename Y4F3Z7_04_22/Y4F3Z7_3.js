$("#text").click(function () {
    $("div.box").append("Mérnökinformatikus");
});

$("#btn").click(function () {
    $("#btn").prepend("PTI ");
});

$("#newBtn").click(function () {
    $("body").append($("<button>ME GEIK-PTI</button>"));
});

$("#header").click(function () {
    $("body").prepend($("<h1>jQuery feladat</h1>"));
});

$("#h2").click(function () {
    $("h1").after($("<h2>HTML metódusok</h2>"));
});

$("#formHeader").click(function () {
    $("form").before($("<h2>ŰRLAP-CNY8MP</h2>"));
});