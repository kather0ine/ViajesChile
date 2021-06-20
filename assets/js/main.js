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

//tooltip
$('[data-toggle="tooltip"]').tooltip();    
  

$("#chile").click(function () {
    alert("¡Estás en el mejor lugar para elegir tu próximo destino!");
  })
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
  
      })
