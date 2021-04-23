<?php
    require_once './model/Conexion.php';

    class IndexController extends Controllers{

        public function __construct(){
            parent::__construct();
        }

        public function Index(){
            $this->view->Render($this, "Index", null);
        }

        public function IniciarSesion(){
            global $conn;
            $usuario = $_POST['usuario'];
            $password = $_POST['password'];
            
            $sql = "SELECT * FROM usuario WHERE usuario = '$usuario' AND clave = '$password'";
            
            //$stmt = mysqli_query($conn, $sql);

            $res = $conn->query($sql);

            

            $json = NULL;

            while ($obj = $res->fetch_object()) {
                $json[] = array(
                    'id_usuario' => $obj->id_usuario,
                    'id_perfil' => $obj->id_perfil,
                    'nombres' => $obj->nombres,
                    'ap_paterno' => $obj->ap_paterno,
                    'email' => $obj->email,
                    'id_estado' => $obj->id_estado
                );;

                session_start();
                $_SESSION['user'] = $obj;
                
            }

            $userExist = "false";

            if(!$json){
                $userExist = "false";
            }else{
                $jsonstring = json_encode($json);

                $userExist = "true";
            }

            echo $userExist; 

            
        }
    }
?>