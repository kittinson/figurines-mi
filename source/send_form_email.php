<?php
if(isset($_POST['email'])) {


    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "hype.figurines@mail.ru";
    $email_subject = "Заказ с сайта";

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }


    // validation expected data exists
    if( !isset($_POST['contact_type']) ||
        !isset($_POST['instagram'])
        ) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }



    // $name = $_POST['name']; // required
    // $phone = $_POST['phone']; // not required
    // $email = $_POST['email']; // required
    // $country = $_POST['country']; // required
    // $city = $_POST['city']; // required
    // $address = $_POST['address']; // required
    $contact_type = $_POST['contact_type']; // not required
    $instagram = $_POST['instagram']; // required
    // $telegram = $_POST['telegram']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  // if(!preg_match($email_exp,$email)) {
  //   $error_message .= 'Похоже, Email неверный. Введи настоящий. ;)<br />';
  // }

    $string_exp = "/^[A-Za-z .'-]+$/";

  // if(!preg_match($string_exp,$name)) {
  //   $error_message .= 'Твоё полное имя нужно нам, чтобы оформить доставку. Пожалуйста, введи реальные данные.<br />';
  // }


  if(strlen($error_message) > 0) {
    died($error_message);
  }

    $email_message = "Детали заказа.\n\n";


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }



    // $email_message .= "Имя: ".clean_string($name)."\n";
    // $email_message .= "Телефон: ".clean_string($phone)."\n";
    // $email_message .= "Email: ".clean_string($email)."\n";
    // $email_message .= "Страна: ".clean_string($country)."\n";
    // $email_message .= "Город: ".clean_string($city)."\n";
    // $email_message .= "Адрес: ".clean_string($address)."\n";
    $email_message .= "Вариант: ".clean_string($contact_type)."\n";
    $email_message .= "Контакт: ".clean_string($instagram)."\n";
    // $email_message .= "Телеграм: ".clean_string($telegram)."\n";


// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- include your own success html here -->

Thank you for contacting us. We will be in touch with you very soon.

<?php

}
?>
