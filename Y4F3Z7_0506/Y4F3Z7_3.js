const remove = $("#remove");
const clear  = $("#clear");

remove.click(() => {
    $("#box").remove();
});

clear.click(() => {
    $("#box").empty();
});