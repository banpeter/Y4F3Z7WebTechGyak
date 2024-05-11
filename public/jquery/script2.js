$(document).ready(function() {
    // AJAX kérés a szerverhez a JSON fájlért
    $.ajax({
        url: '/data',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Tömb inicializálása az adatokhoz
            var employeesHTML = '';

            // JSON adatok feldolgozása és HTML-be való konvertálása
            $.each(data.employees, function(index, employee) {
                employeesHTML += '<div>';
                employeesHTML += '<h2>' + employee.name + '</h2>';
                employeesHTML += '<p>Position: ' + employee.position + '</p>';
                employeesHTML += '<p>Department: ' + employee.department + '</p>';
                employeesHTML += '<p>Skills: ' + employee.skills.join(', ') + '</p>';
                employeesHTML += '</div>';
            });

            // Az összes felhasználói adat megjelenítése a weboldalon
            $('#json-data').html(employeesHTML);

            // Tömb inicializálása az osztályokhoz
            var departmentsHTML = '';

            // JSON adatok feldolgozása és HTML-be való konvertálása
            $.each(data.departments, function(departmentName, department) {
                departmentsHTML += '<div>';
                departmentsHTML += '<h2>' + departmentName + '</h2>';
                departmentsHTML += '<p>Location: ' + department.location + '</p>';
                departmentsHTML += '<p>Head: ' + department.head + '</p>';
                departmentsHTML += '<p>Team Lead: ' + department.team_lead + '</p>';
                if (department.projects) {
                    departmentsHTML += '<p>Projects: ' + department.projects.join(', ') + '</p>';
                }
                if (department.campaigns) {
                    departmentsHTML += '<p>Campaigns: ' + department.campaigns.join(', ') + '</p>';
                }
                departmentsHTML += '</div>';
            });

            // Az összes osztály adat megjelenítése a weboldalon
            $('#json-data-data').html(departmentsHTML);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
});
