$(document).ready(function() {
    $('#myForm').submit(function(event) {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var model = $('#products').val().trim();
        var error = false;
        
        if (name === '') {
            $('#name').addClass('error');
            $("#name").val("Kérlek add meg a neved!");
            error = true;
        } else {
            $('#name').removeClass('error');
        }

        if (model === '') {
            $('#products').addClass('error');
            $("#products").val("Kérlek add meg a modelt");
            error = true;
        } else {
            $('#products').removeClass('error');
        }
        
        if (email === '') {
            $('#email').addClass('error');
            $("#email").val("Kérlek add meg az email címed!");
            error = true;
        } else {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                $('#email').addClass('error');
                $("#email").val("Hibás formátum!");
                error = true;
            } else {
                $('#email').removeClass('error');
            }
        }
        
        if (error) {
            event.preventDefault();
        }
        else{
            alert("Elküldve");
            event.preventDefault();
        }
    });
    
    $('#name, #email').on('input', function() {
        $(this).removeClass('error');
    });
});