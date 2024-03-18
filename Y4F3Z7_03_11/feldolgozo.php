



<!DOCTYPE html>

<html lang="hu">
    
    <head>
        <meta charset="UTF-8">
        <title>HTML 5 Űrlap</title>

    </head>




    <body  >
        
        <?php
            echo ("<strong>Név: </strong>" . $_POST['nev'] . "<br><br>");

            echo ("<strong>PIN kód: </strong>" . $_POST['kod'] . "<br><br>");

            echo ("<strong>Gyümölcs: </strong>" . $_POST['gyumolcs'] . "<br><br>");

            echo ("<strong>Életkor: </strong>" . $_POST['eletkor'] . "<br><br>");

            echo ("<strong>Lábméret: </strong>" . $_POST['labmeret'] . "<br><br>");

            echo ("<strong>Önbizalom: </strong>" . $_POST['onbizalom'] . "<br><br>");


        ?>
        <a href="urlap.html"> Vissza az űrlapra </a>
        
 

    </body>



</html>




















