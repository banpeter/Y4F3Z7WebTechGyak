$(document).ready(function() {
    // AJAX kérés a szerverhez a JSON fájlért
    $.ajax({
        url: '/data',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Tömb inicializálása az adatokhoz
            var users = '';

            // JSON adatok feldolgozása és HTML-be való konvertálása
            $.each(data, function(index, value) {
                users += '<div>';
                users += '<h2>' + value.name + '</h2>';
                users += '<p>Age: ' + value.age + '</p>';
                users += '<p>City: ' + value.city + '</p>';
                users += '</div>';
            });

            // Az összes felhasználói adat megjelenítése a weboldalon
            $('#json-data').html(users);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
});



ó