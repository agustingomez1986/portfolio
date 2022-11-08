<?php
$name = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = 'Form: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Context-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su email es: " . $email . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";

$para = 'agustingomez1986@hotmail.com';
$asunto = "Asunto: " . $asunto . " \r\n";

mail($para, $asunto, utf8_decode($message), $header);
header("Location:index.html");
?>