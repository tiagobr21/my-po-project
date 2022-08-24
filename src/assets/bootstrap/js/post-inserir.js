$(document).ready(function() {
    $("#enviar").click(function() {
        var nome = $("#nome");
        var nomePost = nome.val();
        var email = $("#email");
        var emailPost = email.val();
        var telefone = $("#telefone");
        var telefonePost = telefone.val();    
        $.post("enviar.php", {nome: nomePost, email: emailPost, telefone: telefonePost},
        function(data){
         $("#resposta").html(data);
         }
         , "html");
    });
});