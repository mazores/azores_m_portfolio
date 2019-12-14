<?php 
// var_dump($_POST['name']);
// var_dump($_GET);
if(empty($_POST)){
    echo 'no...';
    exit;
}
//Validate all data
$name = '';
$email = '';
$message = '';
$recipient = 'mikkaazores@gmail.com';

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r","\n","%0a","%0d"),'',$_POST['email']);
    $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['message'])){
    $message = $_POST['message'];
}

//Send out email
$headers = array(
    'From'=>'noreply@test.ca',
    'Reply-To'=>$name.'<'.$email.'>'
);

if(mail($recipient, $message, $headers)){
    echo '<p>Thank you for contacting us, '.$name.'</p>';
}else{
    echo '<p>We are sorry but the email did not go through</p>';
}