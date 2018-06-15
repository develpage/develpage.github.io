<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$comm = $_POST['comment'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$mail = htmlspecialchars($mail);
$comm = htmlspecialchars($comm);

$name = urldecode($name);
$phone = urldecode($phone);
$mail = urldecode($mail);
$comm = urldecode($comm);

$name = trim($name);
$phone = trim($phone);
$mail = trim($mail);
$comm = trim($comm);

if (mail("looter-987@yandex.ru", "Комментарий", "ФИО:" . $name . "Телефон: " .&phone . "E-mail: ".$mail . "Комментарий" . $comm  ,"From: example2@mail.ru \r\n"))
 { 
    echo "сообщение успешно отправлено"; 

} else { 

    echo "при отправке сообщения возникли ошибки"; 

}

?>