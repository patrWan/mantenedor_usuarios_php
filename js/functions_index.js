var i = 5;

function test(){
    return i;
}

document.getElementById("iniciar_sesion").addEventListener("click", function(event){
    event.preventDefault();
    console.log("Iniciar sesion !!!");
        var usuario = $("#txt_usuario").val();
        var password = $("#txt_password").val();
        console.log("=> "+usuario);
        console.log("=> "+password);
        var URL = "http://localhost/Test_conocimientos/Index/IniciarSesion";
        console.log("URL => "+ URL);

        $.ajax({
            url : URL,
            type : 'POST',
            data : {usuario, password},
            success : function(response){
                //let users = JSON.parse(response);
                console.log("RESPONSE => ", response);
                if(response === "true"){
                    location.href = "http://localhost/Test_conocimientos/Usuario/Index?stauts=1";
                }else{
                    console.log("NO MATCH")
                    $('#alert_error').slideDown(500);
                    setTimeout(function() { 
                        $('#alert_error').slideUp(500); 
                    }, 3000);
                }
            }
        })
});


var username = "";
var password = "";

document.getElementById("txt_usuario").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_usuario").val());
    username = value_without_space;
    
    
    console.log("usuario => "+username);

    if(username.length > 3  && password.length > 3 && username.trim() !== "" && password.trim() !== ""){
        $("#iniciar_sesion").prop('disabled', false)
    }else{
        $("#iniciar_sesion").prop('disabled', true)
    }

    if(username.length <= 3){
        console.log(username.length);
        $("#label_error_usuario").slideDown(500);
        $("#label_error_usuario").text("El usuario debe ser mayor a 3 caracteres");
    }else{
        $("#label_error_usuario").slideUp(500);
    }
});

document.getElementById("txt_password").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_password").val());
    password = value_without_space;

    password = $("#txt_password").val();

    if(username.length > 3  && password.length > 3){
        console.log("usuario invalido");
        $("#iniciar_sesion").prop('disabled', false)
    }else{
        $("#iniciar_sesion").prop('disabled', true)
    }

    if(password.length <= 3){
        console.log(username.length);
        $("#label_error_password").slideDown(500);
        $("#label_error_password").text("La contraseña debe ser mayor a 3 caracteres");
    }else{
        $("#label_error_password").slideUp(500);
    }
});