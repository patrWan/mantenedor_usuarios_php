<?php
 class Controllers{
    public function __construct(){
        $this->view = new Views();
        $this->loadClassModel();
        $this->db = new Connection();
    }

    public function loadClassModel(){
        $array = explode("Controller", get_class($this)); 
        $model = $array[0];
        $path = "model/".$model.".php";

        if(file_exists($path)){
            require $path;
            $this->model = new $model();
        }
    }
 }
?>