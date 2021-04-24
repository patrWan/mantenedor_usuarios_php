<?php
    require_once './model/Conexion.php';
    class UsuarioController extends Controllers{
        public function __construct(){
            parent::__construct();
        }

        public function Index(){
            $this->view->Render($this, "Usuario", null);
            //$this->model->get_usuario();
        }

        public function CerrarSesion(){
            session_start();
            session_destroy();

            echo 'Sesión cerrada exitosamente.';
        }

        public function get_usuarios(){
            $this->model->get_usuario();
        }

        public function add_usuario(){
            $this->model->add_usuario();
        }

        public function edit_usuario(){
            $this->model->edit_usuario();
        }

        public function delete_usuario(){
            $this->model->delete_usuario();
        }

        
    }
?>