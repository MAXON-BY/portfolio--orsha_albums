<?php

$frm_name  = "Хозяин, надо перезвонить!";
$recepient = "max_on.89@mail.ru";
$sitename  = "Выпускные альбомы - Я ВЫПУСКНИК.РФ";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$email= trim($_post["email"]);

$message = '
            <p>Заявка: '.$frm_name.'</p>
            <p>Контактное лицо: '.$name.'</p>
            <p>Телефон: '.$tel.'</p>
            <p>E-mail: '.$email.'</p>
        ';


mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
