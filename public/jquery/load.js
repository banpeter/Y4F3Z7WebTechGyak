$(document).ready(function() {
    $.ajax({
        url: '/users', // Node.js szerveren a users útvonalra érkező kérésre válaszol
        dataType: 'json',
        success: function(data) {
            var users = '';
            $.each(data, function(key, value) {
                users += '<div>';
                users += '<h2>' + value.name + '</h2>';
                users += '<p>Age: ' + value.age + '</p>';
                users += '<p>City: ' + value.city + '</p>';
                users += '</div>';
            });
            $('#users').html(users);
        },
        error: function(xhr, status, error) {
            console.error(status, error); // Hibák kiírása a konzolba
        }
    });
});