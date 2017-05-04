<?php
 $errors = '';
$myemail = 'info@dacu.com.ar';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
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
$email_subject = "Contacto desde Dacu.: $name";
$email_body = "Nos escribieron !! ".
"Estos son los datos de la persona:\n Nombre: $name \n ".
"Email: $email_address\n Mensaje: \n $message";
$headers = "From: Dacu. <$myemail\n>";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
//header('Location: /index-enviado.html#section6');
}
 
?>