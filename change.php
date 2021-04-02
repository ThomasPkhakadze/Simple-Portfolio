<?php
    if(isset($_POST["list"])){
        $content = $_POST["list"];
        $fp = fopen("index.html", "w");
        fwrite($content, $fp);
        fclose($fp);
        echo $content;
    }
?>