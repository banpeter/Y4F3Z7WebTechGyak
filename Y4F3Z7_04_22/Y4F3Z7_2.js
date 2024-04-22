$(document).ready(function(){
    $("#start").click(function(){
        $("div").animate({
            left: '300px',
            width: '300px',
            fontSize: '12px'
        },2000);
        $("div").animate({
           
            width: '500px',
            fontSize: '30px'
        },2000);
        $("div").animate({
           
            top: '500px',
            width: '300px',
            height: '10%'
       },2000);
       $("div").animate({
            left: '0px',
            opacity: '0.4'
          
      },2000);
      $("div").animate({
        opacity: '1',
        top:'250px',
        fontSize: '12px',
       
          
      },2000, function(){alert("VÉGE!");});
     
    });
    
    });

    $(document).ready(function(){
  $("#rejt").click(function(){
    $("p.hide").hide();
    $("div").animate({
            top:'110px'
          
      },2000, function(){alert("Bekezdések elrejtése");});

  });
  
  $(document).ready(function(){
    $("#toggle").click(function(){
     
        $("div").animate({left: '+=250px'});
    },2000);
    });



});