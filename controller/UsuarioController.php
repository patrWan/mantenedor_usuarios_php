<?php
    class UsuarioController extends Controllers{
        public function __construct(){
            parent::__construct();
        }

        public function Index(){
            $this->view->Render($this, "Usuario", null);
        }

        
    }
?>