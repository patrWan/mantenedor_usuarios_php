<?php
    require_once 'Conexion.php';

    class Usuario{
        public $id;
        public $id_perfil;
        public $usuario;
        public $clave;
        public $nombres;
        public $ap_paterno;
        public $ap_materno;
        public $email;
        public $estado;

        public function __construct(){
            //cho "Clase Modelo";
        }

        public function get_usuario(){
            global $conn;

            $sql = "SELECT usuario.id_usuario, perfil.perfil , usuario.usuario, usuario.nombres, usuario.ap_paterno, usuario.ap_materno, usuario.email, estado.estado
            FROM usuario, perfil , estado
            WHERE usuario.id_perfil = perfil.id_perfil AND usuario.id_estado = estado.id_estado";

            $res = $conn->query($sql);

            while ($obj = $res->fetch_object()) {
                $json[] = array(
                    'id_usuario' => $obj->id_usuario,
                    'id_perfil' => $obj->perfil,
                    'usuario' => $obj->usuario,
                    'nombres' => $obj->nombres,
                    'ap_paterno' => $obj->ap_paterno,
                    'ap_materno' => $obj->ap_materno,
                    'email' => $obj->email,
                    'estado' => $obj->estado
                );
                
            }

            $jsonstring = json_encode($json);


            echo $jsonstring;
        }

        public function add_usuario(){
            global $conn;
            
            $usuario = $_POST['usuario'];
            $nombres = $_POST['nombres'];
            $ap_paterno =  $_POST['ap_paterno'];
            $ap_materno = $_POST['ap_materno'];
            $email = $_POST['email'];
            $perfil = $_POST['perfil'];
            $estado = $_POST['estado'];

            if($usuario === "" || $nombres === "" || $ap_paterno === "" || $ap_materno === "" || $email === ""){
                echo 'Tiene campos sin completar.';   
            }else{
                $sql = "INSERT INTO usuario VALUES (NULL, '$perfil', '$usuario', '123456', '$nombres', '$ap_paterno', '$ap_materno', '$email', '$estado')";

                $res = $conn->query($sql);

                if(!$res){
                    die("query failed");
                }

                echo "Usuario agregado";
            }

            

            
            
        }
        
    }
?>