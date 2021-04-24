<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        session_start();
        if(!isset($_SESSION['user'])){
            header("Location: http://localhost/Test_conocimientos/");
        }else{
            $user = $_SESSION['user'];
        }
    ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap5.min.css">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
    
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="../css/usuario_styles.css">

    <title>Inicio</title>
</head>
<body> 
    <!-- Nav -->
    <nav id="nav_style">
        <div class="container-fluid" id="header_style">
            <a class="navbar-brand" href="#" >
                <i class="bi bi-bootstrap-fill icon"></i>
                <span class="title_text">TEST DE CONOCIMIENTOS</span>
            </a>
            
            <span class="usuario_text"><?php echo $user->nombres ." ". $user->ap_paterno ." ". $user->ap_materno ?></span>
        </div>
    </nav>
    <!-- Mantenedor -->
    <div class="container mantenedor">
            <div class="mantenedor_header">
                <span class="title_text">MANTENEDOR</span> <button type="submit" class="btn btn-danger btn-block" id="cerrar_sesion">CERRAR APLICACIÓN</button>
            </div>

            <div class="mantenedor_options">
                <div>
                    <button type="submit" class="btn btn-primary btn-block button_crear" id="agregar_usuario" data-bs-toggle="modal" data-bs-target="#exampleModal">AGREGAR USUARIO</button>
                </div>
            </div>

            <div class="alert alert-info" role="alert" id="alert_error" style="display : none;">
                <strong class="alert_title">Error:</strong> <span class="alert_men">Usuario o contraseña incorrectos.</span> 
            </div>

            <table id="table_id" class="table table-bordered" style="width:100%;">
                <thead class="table_head">
                    <tr class="bg-success bg-gradient text-white">
                        <th>Usuario</th>
                        <th>Nombres</th>
                        <th>A. Paterno</th>
                        <th>A. Materno</th>
                        <th>Email</th>
                        <th>Perfil Usuario</th>
                        <th>Estado</th>
                        <th>Opción</th>
                    </tr>
                </thead>
                <tbody> 
                </tbody>
            </table>
    </div>

    <!-- Modal -->

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header" id="modal_header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form action="" id="user_add_form">
                    <div class="mb-2">   
                        
                    </div>
                
                <div class="mb-3">
                    <label for="txt_usuario" class="form-label">Usuario: <span id="label_error_usuario" class="fs-7 font-weight-bold text-primary" style="display:none; font-size : 13px">usuario requerido</span></label>
                    <input type="text" class="form-control" id="txt_usuario" placeholder="ej: usuario5" maxlength="15">
                    
                </div>
                <div class="mb-3">
                        <label for="txt_nombres" class="form-label">Nombres: <span id="label_error_nombres" class="font-weight-bold text-primary" style="display:none; font-size : 13px">usuario requerido</span></label>
                        <input type="text" class="form-control" id="txt_nombres" placeholder="ej: Luis Daniel">
                </div>

                <div class="input-group mb-4" style="width : 100%;">
                    <div class="mb-3" style="width : 50%;">
                        <label for="txt_ap_paterno" class="form-label">Apellido paterno: <span id="label_error_ap_paterno" class="fs-7 font-weight-bold text-primary"  style="display:none; font-size : 13px">usuario requerido</span></label>
                        <input type="text" class="form-control" placeholder="ej: González" id="txt_ap_paterno" aria-label="Username">
                    </div>
                    <div class="mb-3" style="width : 50%;">
                        <label for="txt_ap_materno" class="form-label">Apellido materno: <span id="label_error_ap_materno" class="fs-7 font-weight-bold text-primary"  style="display:none; font-size : 13px">usuario requerido</span></label>
                        <input type="text" class="form-control" placeholder="ej: Leal" aria-label="Server" id="txt_ap_materno">   
                    </div>
                </div>
                <div class="input-group mb-4" style="width : 100%;">
                    <div class="mb-3" style="width : 50%;">
                        <div>   
                            
                        </div>  
                        <label for="txt_email" class="form-label">Email: <span id="label_error_email" class="fs-7 font-weight-bold text-primary"  style="display:none; font-size : 13px">email requerido</span></label>
                        <input type="text" class="form-control" placeholder="ej: micorreo@gmail.com" id="txt_email" aria-label="Username">
                    </div>
                    <div class="mb-3" style="width : 50%;">
                    <label for="select_perfil" class="form-label">Perfil:</label>
                        <select class="form-select" aria-label="Default select example" id="select_perfil">
                            <option value="1">Administrador</option>
                            <option value="2">Usuario Normal</option>
                            <option value="3">Supervisor</option>
                        </select> 
                    </div>
                </div>
                <div class="input-group mb-4" style="width : 100%;">
                    <div class="mb-3" style="width : 50%;">
                        <label for="select_estado" class="form-label">Estado:</label>
                        <select class="form-select" aria-label="Default select example" id="select_estado">
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                        </select> 
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary button_save" id="btn_action" disabled="true">Guardar</button>
                </form>
                <button type="button" class="btn btn-secondary button_volver" data-bs-dismiss="modal">Volver</button>
            </div>
            </div>
        </div> 
    </div>

    <!-- Modal Confirm-->
    <div class="modal slide" id="confirm_modal" tabindex="-1" role="dialog" aria-labelledby="confirm_modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="confirm_modal">Borrar Usuario Permanentemente</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            Después de borrar este usuario, este se borra de manera permanente. Esta acción no se puede deshacer.
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" id="confirm_delete">ELIMINAR</button>
        </div>
        </div>
    </div>
    </div>

    
        
    
    <script src="../js/jquery-3.6.0.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.24/fh-3.1.8/r-2.2.7/datatables.min.css"/>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.24/fh-3.1.8/r-2.2.7/datatables.min.js"></script>

    <script src="../js/functions_usuario.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    
</body>
</html>