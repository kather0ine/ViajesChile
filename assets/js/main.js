alert("vamo q c puede");

$(document).ready(function(){
    //$('[data-toggle="tooltip"]').tooltip();  

$("a").on('click', function(){
    if (this.hash !== "") {
        var hash= this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top}, 900, function() 
            {
            window.location.hash = hash;

        });
    }
});
})

