<?php
class Views {
    public function Render ($controllers, $view, $model){

        $array = explode("Controller", get_class($controllers));

        $controller = $array[0];
        require VIEWS.$view.".php";

    }
}
?>