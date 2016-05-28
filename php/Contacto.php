<?php
 $errors = '';
$myemail = 'info@buenpunto.com.ar';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']) ||
   empty($_POST['edad']) ||
   empty($_POST['tel']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$edad = $_POST['edad'];
$tel = $_POST['tel'];
$zona = $_POST['zona'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= 'El email que pusiste no existe. <br/><br/> Vuelve a intentarlo !
                                <a class="page-scroll Cero hvr-underline-from-center" href="index.html#section6">CONTACTO</a>';
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contacto desde Cuarta Letra : $name";
$email_body = "Nos escribieron !! ".
"Estos son los datos de la persona:\n Nombre: $name \n ".
"Email: $email_address\n Zona:  $zona\n  Edad:  $edad\n Tel:  $tel\n Mensaje: \n $message";
$headers = " From: Cuarta Letra <$myemail> \r\n";
$headers .= " Reply-To: $email_address \r\n";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
//header('Location: /index-enviado.html#section6');
}
 
?>