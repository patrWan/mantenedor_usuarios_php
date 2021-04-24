/** carga inicial de la tabla y acciones*/
/**VARIABLES  */
var username = "";
var email = "";
var nombres = "";
var ap_paterno = "";
var ap_materno = "";
var email_validate = false;

var type_alert = "alert-info";
var type_backgorund = "bg-primary text-white";
var type_button = "btn-primary";

document.addEventListener("DOMContentLoaded", function () {
  var table = $("#table_id").DataTable({
    language: {
      url: "../library/datatable_trad.json",
    },
    responsive: true,
    ajax: {
      url: "http://localhost/Test_conocimientos/Usuario/get_usuarios",
      method: "POST",
      dataSrc: "",
    },
    columns: [
      { data: "usuario" },
      { data: "nombres" },
      { data: "ap_paterno" },
      { data: "ap_materno" },
      { data: "email" },
      { data: "id_perfil" },
      { data: "estado" },
      {
        defaultContent: `
                          <div>
                           <button class='btn btn-warning button_edit'><i class="bi bi-pencil-square"></i></button>
                           <button class='btn btn-danger button_eliminar'><i class="bi bi-trash-fill"></i></button>
                          </div>
                      `,
      },
    ],
  });

  /** acciones */

  var type_action = "";

  var id_usuario = "";

  var email_validate = false;

  /** BOTON AGREGAR */
  $(document).on("click", "#agregar_usuario", function () {
    reset_form();
    setting_modal(
      "Agregar Usuario",
      "bg-primary text-white",
      "btn-primary",
      "Agregar"
    );
    type_action = "";
  });

  /** BOTON EDITAR */
  $(document).on("click", ".button_edit", function () {
    type_action = "edit";
    reset_form();
    setting_modal(
      "Editar Usuario",
      "bg-warning text-dark",
      "btn-warning",
      "Editar"
    );

    $(".button_save").prop("disabled", false);

    $("#exampleModal").modal("show");

    id_usuario = table.row($(this).parents("tr")).data().id_usuario;
    username = table.row($(this).parents("tr")).data().usuario;
    nombres = table.row($(this).parents("tr")).data().nombres;
    ap_paterno = table.row($(this).parents("tr")).data().ap_paterno;
    ap_materno = table.row($(this).parents("tr")).data().ap_materno;
    email = table.row($(this).parents("tr")).data().email;

    var perfil_usuario;

    validate_form(email);

    if (table.row($(this).parents("tr")).data().id_perfil == "Administrador") {
      perfil_usuario = "1";
    } else if (
      table.row($(this).parents("tr")).data().id_perfil == "Usuario Normal"
    ) {
      perfil_usuario = "2";
    } else {
      perfil_usuario = "3";
    }
    var estado = table.row($(this).parents("tr")).data().estado;
    if (table.row($(this).parents("tr")).data().estado == "Activo") {
      estado = "1";
    } else {
      estado = "2";
    }

    $("#txt_usuario").val(username).prop("disabled", true);
    $("#txt_nombres").val(nombres);
    $("#txt_ap_paterno").val(ap_paterno);
    $("#txt_ap_materno").val(ap_materno);
    $("#txt_email").val(email);
    $("#select_perfil").val(perfil_usuario);
    $("#select_estado").val(estado);
  });

  /** BOTON ELIMINAR */
  $(document).on("click", ".button_eliminar", function () {
    setting_modal(
      "Eliminar Usuario",
      "bg-danger text-white",
      "btn-danger",
      "Eliminar"
    );

    id_usuario = table.row($(this).parents("tr")).data().id_usuario;

    type_action = "delete";
    $(".button_save").prop("disabled", false);

    $("#exampleModal").modal("show");
    username = table.row($(this).parents("tr")).data().usuario;
    nombres = table.row($(this).parents("tr")).data().nombres;
    ap_paterno = table.row($(this).parents("tr")).data().ap_paterno;
    ap_materno = table.row($(this).parents("tr")).data().ap_materno;
    email = table.row($(this).parents("tr")).data().email;
    var perfil_usuario;

    validate_form(email);

    if (table.row($(this).parents("tr")).data().id_perfil == "Administrador") {
      perfil_usuario = "1";
    } else if (
      table.row($(this).parents("tr")).data().id_perfil == "Usuario Normal"
    ) {
      perfil_usuario = "2";
    } else {
      perfil_usuario = "3";
    }
    var estado = table.row($(this).parents("tr")).data().estado;
    if (table.row($(this).parents("tr")).data().estado == "Activo") {
      estado = "1";
    } else {
      estado = "2";
    }

    $("#txt_usuario").val(username).prop("disabled", true);
    $("#txt_nombres").val(nombres).prop("disabled", true);
    $("#txt_ap_paterno").val(ap_paterno).prop("disabled", true);
    $("#txt_ap_materno").val(ap_materno).prop("disabled", true);
    $("#txt_email").val(email).prop("disabled", true);
    $("#select_perfil").val(perfil_usuario).prop("disabled", true);
    $("#select_estado").val(estado).prop("disabled", true);
  });

  /** BOTON VOLVER */
  $(document).on("click", ".button_volver", function () {
    $("#user_add_form").trigger("reset");
    $("#txt_usuario").prop("disabled", false);
    $("#label_error_usuario").text("");
    $("#label_error_email").slideUp(500);
    $("#label_error_nombres").slideUp(500);
    $("#label_error_ap_paterno").slideUp(500);
    $("#label_error_ap_materno").slideUp(500);

    $(".button_save").prop("disabled", true);

    username = "";
    email = "";
    nombres = "";
    ap_paterno = "";
    ap_materno = "";
    email_validate = false;
  });

  $(document).on("click", "#confirm_delete", function () {
    const postData = {
      usuario: $("#txt_usuario").val(),
      nombres: $("#txt_nombres").val(),
      ap_paterno: $("#txt_ap_paterno").val(),
      ap_materno: $("#txt_ap_materno").val(),
      email: $("#txt_email").val(),
      perfil: $("#select_perfil").val(),
      estado: $("#select_estado").val(),
      id_usuario: id_usuario,
    };

    $.post(
      "http://localhost/Test_conocimientos/Usuario/delete_usuario",
      postData,
      function (response) {
        console.log("res => " + response);
        table.ajax.reload();
        /**
         * cerrar modal
         * limpiar formulario
         * mandar mensaje */
        $("#exampleModal").modal("hide");
        $("#user_add_form").trigger("reset");
        $("#alert_error").addClass("alert-success");
        $(".alert_title").text("Éxito: ");
        $(".alert_men").text(response);
        $("#confirm_modal").modal("hide");
      }
    );
    $("#alert_error").removeClass(type_alert);
    type_alert = "alert-danger";
    $("#alert_error").addClass(type_alert);

    $("#alert_error").slideDown(500);
    setTimeout(function () {
      $("#alert_error").slideUp(500);
    }, 3000);
  });

 /** agregar, modificar, eliminar usuarios */
  $("#user_add_form").submit(function (e) {
    console.log("AA!");

    const postData = {
      usuario: $("#txt_usuario").val(),
      nombres: $("#txt_nombres").val(),
      ap_paterno: $("#txt_ap_paterno").val(),
      ap_materno: $("#txt_ap_materno").val(),
      email: $("#txt_email").val(),
      perfil: $("#select_perfil").val(),
      estado: $("#select_estado").val(),
      id_usuario: id_usuario,
    };

    console.log(postData);
    if (type_action === "edit") {
      console.log("ACTION EDIT ON !!!");

      $.post(
        "http://localhost/Test_conocimientos/Usuario/edit_usuario",
        postData,
        function (response) {
          console.log("res => " + response);
          table.ajax.reload();
          /**
           * cerrar modal
           * limpiar formulario
           * mandar mensaje */
          $("#exampleModal").modal("hide");
          $("#user_add_form").trigger("reset");
          $("#alert_error").removeClass(type_alert);
          type_alert = "alert-warning";
          $("#alert_error").addClass(type_alert);
          $(".alert_title").text("Éxito: ");
          $(".alert_men").text(response);
        }
      );

      type_action = "";

      $("#alert_error").slideDown(500);
      setTimeout(function () {
        $("#alert_error").slideUp(500);
      }, 3000);
    } else if (type_action === "delete") {
      console.log("ACTION DELETE ON !!!");
      $("#confirm_modal").modal("show");
    } else {
      console.log("ACTION ADD!!!");
      $.post(
        "http://localhost/Test_conocimientos/Usuario/add_usuario",
        postData,
        function (response) {
          console.log("res => " + response);
          table.ajax.reload();
          /**
           * cerrar modal
           * limpiar formulario
           * mandar mensaje */
          if(response === "A ocurrido un error intentelo de nuevo."){
            $("#alert_error").removeClass(type_alert);
            type_alert = "alert-danger";
            $("#alert_error").addClass(type_alert);
            $(".alert_title").text("Error: ");
            $(".alert_men").text(response);
          }else{
            $("#alert_error").removeClass(type_alert);
            type_alert = "alert-success";
            $("#alert_error").addClass(type_alert);
            $(".alert_title").text("Éxito: ");
            $(".alert_men").text(response);
          }
          $("#exampleModal").modal("hide");
          $("#user_add_form").trigger("reset");
        }
      );

      type_action = "";

      $("#alert_error").slideDown(500);
      setTimeout(function () {
        $("#alert_error").slideUp(500);
      }, 3000);
    }

    e.preventDefault();
  });
});

/** LISTENERS INPUTS */
document
  .getElementById("txt_usuario")
  .addEventListener("keyup", function (event) {
    var value_without_space = $.trim($("#txt_usuario").val());
    username = value_without_space;

    validate_form(email);

    compare_length(
      username,
      "#label_error_usuario",
      "*usuario debe ser mayor a 3 caracteres",
      4
    );
  });

document
  .getElementById("txt_email")
  .addEventListener("keyup", function (event) {
    var value_without_space = $.trim($("#txt_email").val());
    email = value_without_space;

    validate_form(email);
  });

document
  .getElementById("txt_nombres")
  .addEventListener("keyup", function (event) {
    var value_without_space = $.trim($("#txt_nombres").val());
    nombres = value_without_space;

    validate_form(email);

    compare_length(nombres, "#label_error_nombres", "*nombres es requerido", 1);
  });

document
  .getElementById("txt_ap_paterno")
  .addEventListener("keyup", function (event) {
    var value_without_space = $.trim($("#txt_ap_paterno").val());
    ap_paterno = value_without_space;

    validate_form(email);

    compare_length(
      ap_paterno,
      "#label_error_ap_paterno",
      "*apellido paterno es requerido",
      1
    );
  });

document
  .getElementById("txt_ap_materno")
  .addEventListener("keyup", function (event) {
    var value_without_space = $.trim($("#txt_ap_materno").val());
    ap_materno = value_without_space;
    console.log(ap_materno.length);
    validate_form(email);

    compare_length(
      ap_materno,
      "#label_error_ap_materno",
      "*apellido materno es requerido",
      1
    );
  });

document
  .getElementById("cerrar_sesion")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cerrar sesion");

    var URL = "http://localhost/Test_conocimientos/Usuario/CerrarSesion";
    console.log("URL => " + URL);

    $.ajax({
      url: URL,
      type: "POST",
      success: function (response) {
        console.log("RESPONSE => ", response);
        location.href = "http://localhost/Test_conocimientos/";
      },
    });
  });

/** funciones */
function validate_form(email) {
  console.log(
    username.length +
      " " +
      email_validate +
      " " +
      nombres.length +
      " " +
      ap_paterno.length +
      " " +
      ap_materno.length
  );

  expr = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!expr.test(email)) {
    $("#label_error_email").slideDown(500);
    $("#label_error_email").text("*ingrese un email valido");
    $(".button_save").prop("disabled", true);
    email_validate = false;
  } else {
    $("#label_error_email").slideUp(500);
    email_validate = true;
  }

  if (
    username.length > 3 &&
    email_validate == true &&
    nombres.length > 0 &&
    ap_paterno.length > 0 &&
    ap_materno.length > 0
  ) {
    $(".button_save").prop("disabled", false);
  } else {
    $(".button_save").prop("disabled", true);
  }
}

function reset_form() {
  $("#txt_usuario").prop("disabled", false);
  $("#txt_nombres").prop("disabled", false);
  $("#txt_ap_paterno").prop("disabled", false);
  $("#txt_ap_materno").prop("disabled", false);
  $("#txt_email").prop("disabled", false);
  $("#select_perfil").prop("disabled", false);
  $("#select_estado").prop("disabled", false);
}

function compare_length(string, label_error, text_error, cond) {
  console.log(string + " " + label_error);
  if (string.length < cond) {
    $(label_error).slideDown(500);
    $(label_error).text(text_error);
  } else {
    $(label_error).slideUp(500);
  }
}

function setting_modal(title, bg_class, btn_class, btn_text) {
  $("#exampleModalLabel").text(title); //ej : Agregar Usuario

  $("#modal_header").removeClass(type_backgorund);
  type_backgorund = bg_class; //ej : bg-primary text-white"
  $("#modal_header").addClass(type_backgorund);

  $("#btn_action").removeClass(type_button);
  type_button = btn_class; //ej : btn-primary
  $("#btn_action").addClass(type_button);

  $("#btn_action").text(btn_text); //ej : Agregar
}
