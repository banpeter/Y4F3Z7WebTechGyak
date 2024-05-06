$(document).ready(function() {
    // AJAX hívás a JSON fájlhoz
    $.ajax({
        url: 'BP_orarend.json',
        dataType: 'json',
        success: function(data) {
            // JSON adatok megjelenítése
            displayOrarend(data);
        },
        error: function(xhr, status, error) {
            console.error('Hiba történt az AJAX hívás során:', status, error);
        }
    });

    // Függvény a JSON adatok megjelenítésére
    function displayOrarend(data) {
        var orarendDiv = $('#orarend');
        var html = '<h2>Órarend</h2>';
        html += '<ul>';
        // Minden kurzus objektum megjelenítése
        $.each(data, function(index, kurzus) {
            html += '<li>';
            html += '<strong>' + kurzus.nev + '</strong><br>';
            html += 'Ora: ' + kurzus.ora + '<br>';
            html += 'Nap: ' + kurzus.nap + '<br>';
            html += '</li>';
        });
        html += '</ul>';
        // HTML hozzáadása a div-hez
        orarendDiv.html(html);
    }
});

$(document).ready(function() {
    $("#betoltButton").click(function() {
        $.ajax({
            url: 'XY_orarend1obj.json',
            dataType: 'json',
            success: function(data) {
                // Töröljük a TERÜLET div tartalmát, hogy elkerüljük a duplikációt
                $('#TERÜLET').empty();

                // JSON fájl tartalmának megjelenítése a TERÜLET div-ben
                $('#TERÜLET').append('<h2>' + data.kurzus.nev + '</h2>');
                $('#TERÜLET').append('<p>Kurzus kódja: ' + data.kurzus.kod + '</p>');
                $('#TERÜLET').append('<p>Kurzus típusa: ' + data.kurzus.tipus + '</p>');
            },
            error: function() {
                alert('Hiba történt a fájl betöltése során.');
            }
        });
    });
});