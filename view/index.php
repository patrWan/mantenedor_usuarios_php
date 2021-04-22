<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
    
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="./css/index_styles.css">
    <title>Login</title>
</head>

<body>
    <div class="container contenedor_general">
        <div class="contenedor_login">

            <div class="contenedor_formulario p-5">
                <div class="alert alert-warning" role="alert" id="alert_error" style="display:none;">
                    <strong>Error:</strong> Usuario o contraseña incorrectos.
                </div>

                <div class="d-flex justify-content-center">
                    <span id="title_app">TEST CONOCIMIENTOS</span>
                </div>
                
                <div id="content_form">
                <form class="needs-validation" novalidate >
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                        </div>
                        <input type="text" class="form-control" id="txt_usuario" aria-describedby="emailHelp" placeholder="Usuario" maxlength="15" required>
                        <span id="label_error_usuario" class="fs-7 font-weight-bold text-primary" style="display:none;">usuario requerido</span>
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="bi bi-unlock-fill"></i></div>
                        </div>
                        <input type="password" class="form-control" id="txt_password" maxlength="10" placeholder="Contraseña" required>
                        <span id="label_error_password" class="fs-7 font-weight-bold text-primary" style="display:none;">contraseña requerida</span>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary btn-block" id="iniciar_sesion" disabled="true">INICIAR SESIÓN</button>
                    </div>
                        
                </form>
                </div>
                

                <div id="footer_form">
                    <p class="text-muted" id="footer_text">Patricio González Camilo</p>
                </div>
            </div>
        </div>
    </div>

    <script src="./js/functions_index.js"></script>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>
</html>