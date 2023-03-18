<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $inputText = $_POST['inputText'];

    $to = "j.tuzar@centrum.cz";
    $subject = "Nový návrh na webu";
    $body = "Jméno: $name\nEmail: $email\nNávrh: $inputText";

    mail($to, $subject, $body);
}
?>
