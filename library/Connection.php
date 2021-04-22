<?php
class Connection {
    function __construct(){
        $this->db = new QueryManager("root", "160620", "test");
    }
}
?>