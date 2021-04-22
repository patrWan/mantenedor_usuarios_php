<?php 
class ErrorController extends Controllers{
    public function __construct(){
        parent::__construct();
    }

    public function error($url){
        $this->view->Render($this, "error", $url);
    }
}
?>