<?php

    require "config.php";
    
    $controller = "";
    $method = "";
    $params = "";

    $url = $_GET["url"] ?? "Index/Index/";
    $array_url = explode("/", $url);

    if(isset($array_url[0])){
        $controller = $array_url[0];
    }

    if(isset($array_url[1])){
        if($array_url[1] != ''){
            $method = $array_url[1];
        }
    }

    if(isset($array_url[2])){
        if($array_url[2] != ''){
            $params = $array_url[2];
        }
    }

    spl_autoload_register(function($class){
        // echo $class;
        if(file_exists(LBS.$class.".php")){
            require LBS.$class.".php";
        }
    });

    require 'controller/ErrorController.php';
    $error = new ErrorController();

    $controller = $controller."Controller";
    $controllerPath = "controller/".$controller.".php";

    if(file_exists($controllerPath)){

        require $controllerPath;
        $controller = new $controller();
        if(isset($method)){
            if(method_exists($controller, $method)){
                if(isset($params)){
                    $controller->{$method}($params);
                }else{
                    $controller->{$method}();
                }
            }else{
                $error->error($url);
            }
        }
    }else{
        $error->error($url);
    }

?>