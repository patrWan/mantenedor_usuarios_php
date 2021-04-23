document.getElementById("cerrar_sesion").addEventListener("click", function(event){
    event.preventDefault();
    console.log("cerrar sesion");

    var URL = "http://localhost/Test_conocimientos/Usuario/CerrarSesion";
        console.log("URL => "+ URL);

        $.ajax({
            url : URL,
            type : 'POST',
            success : function(response){
                console.log("RESPONSE => ", response);
                location.href = "http://localhost/Test_conocimientos/";
            }
        })
});

document.addEventListener("DOMContentLoaded",function(){
    var table;
    $.ajax({
        url : "http://localhost/Test_conocimientos/Usuario/get_usuarios",
        type : 'POST',
        dataType : 'json',
        success : function(response){
           table = $('#table_id').DataTable({
                "targets": -1,
                data : response,
                columns : [
                    {'data' : 'usuario'},
                    {'data' : 'nombres'},
                    {'data' : 'ap_paterno'},
                    {'data' : 'ap_materno'},
                    {'data' : 'email'},
                    {'data' : 'id_perfil'},
                    {'data' : 'estado'},
                    {'defaultContent' : `
                        <div>
                         <button class='btn btn-warning button_edit'>Editar</button>
                         <button class='btn btn-danger button_eliminar'>Eliminar</button>
                        </div>
                    `},
                ]
            });
        }
    })

    $(document).on('click', '.button_edit', function(){
        var id_usuario = table.row( $(this).parents('tr') ).data().id_usuario;
        console.log(id_usuario);
    });

    $(document).on('click', '.button_eliminar', function(){
        var id_usuario = table.row( $(this).parents('tr') ).data().id_usuario;
        console.log(id_usuario);
    });

    $(document).on('click', '.button_crear', function(){
        console.log("Crear usuario");
    });

    $(document).on('click', '.button_save', function(){
        console.log("Guardar usuario");

        const postData = {
            usuario : $('#txt_usuario').val(),
            nombres : $('#txt_nombres').val(),
            ap_paterno : $('#txt_ap_paterno').val(),
            ap_materno : $('#txt_ap_materno').val(),
            email : $('#txt_email').val(),
            perfil : $('#select_perfil').val(),
            estado : $('#select_estado').val(),
        }
        console.log(postData);
        $.post("http://localhost/Test_conocimientos/Usuario/add_usuario", postData, function(response){
            console.log(response);
        });
    });

});



var username = "";
var email = "";
var nombres = "";
var ap_paterno = "";
var ap_materno = "";
var email_validate = false;

document.getElementById("txt_usuario").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_usuario").val());
    username = value_without_space;

    validate_form();

    if(username.length <= 3){
        console.log(username.length);
        $("#label_error_usuario").slideDown(500);
        $("#label_error_usuario").text("*usuario debe ser mayor a 3 caracteres");
    }else{
        $("#label_error_usuario").slideUp(500);
    }
});

document.getElementById("txt_email").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_email").val());
    email = value_without_space;

    validate_form();

    if(email.length <= 3){
        $("#label_error_email").slideDown(500);
        $("#label_error_email").text("*email debe ser mayor a 3 caracteres");
    }else{
    }

    expr = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if ( !expr.test(email) ){
        $("#label_error_email").slideDown(500);
        $("#label_error_email").text("*ingrese un email valido");
        $(".button_save").prop('disabled', true)
    }
    else{
        $("#label_error_email").slideUp(500);
        email_validate = true;
    }
});

document.getElementById("txt_nombres").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_nombres").val());
    nombres = value_without_space;
    console.log(nombres);
    validate_form();

    if(nombres.length < 1){
        $("#label_error_nombres").slideDown(500);
        $("#label_error_nombres").text("*nombre es requerido");
    }else{
        $("#label_error_nombres").slideUp(500);
    }
});

document.getElementById("txt_ap_paterno").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_ap_paterno").val());
    ap_paterno = value_without_space;

    validate_form();

    if(ap_paterno.length < 1){
        $("#label_error_ap_paterno").slideDown(500);
        $("#label_error_ap_paterno").text("*apellido paterno es requerido");
    }else{
        $("#label_error_ap_paterno").slideUp(500);
    }
});

document.getElementById("txt_ap_materno").addEventListener("keyup", function(event){
    var value_without_space = $.trim($("#txt_ap_materno").val());
    ap_materno = value_without_space;

    validate_form();

    if(ap_materno.length < 1){
        $("#label_error_ap_materno").slideDown(500);
        $("#label_error_ap_materno").text("*apellido materno es requerido");
    }else{
        $("#label_error_ap_materno").slideUp(500);
    }
});

        
function validate_form (){
    if(username.length > 3 && email_validate == true && nombres.length > 0 && ap_paterno.length > 0 && ap_materno.length > 0){
        $(".button_save").prop('disabled', false)
    }else{
        $(".button_save").prop('disabled', true)
    }
}