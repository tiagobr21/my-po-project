$(function () {
    $function(".btn").on("click", function (){
        $.ajax({
            url:"../../listardadosdiplomados.php",
            sucess: function(result){
                $(".result").html(result);
            },
            error: function(){
                $(".result").html("Error");
            }
        });
    });
});