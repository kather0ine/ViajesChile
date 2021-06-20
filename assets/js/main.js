$(function(){
    
//popover

    $('[data-toggle="popover"]').popover()
});

//Evento CSS
$("#destacados").click(function(){
    $(this).css({
        "color": "yellow",
    });
  
  });

//Selector de clase
$(".card-img-top, .boton").click(function () {
    $(".card-body").toggle("slow")
  })
