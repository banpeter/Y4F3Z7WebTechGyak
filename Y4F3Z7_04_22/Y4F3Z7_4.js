$("#calc").click(function() {
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());
    
    var op = $("input[name='op']:checked").val();

    var result = 0;

    switch (op) {
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'mul':
            result = a * b;
            break;
        case 'div':
            result = a / b;
            break;
    }

    $("#result").text("Eredmény: " + result);
});