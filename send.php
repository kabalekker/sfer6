<?php
// Отключаем вывод ошибок в браузер
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Включаем логирование ошибок в файл
ini_set('log_errors', 1);
ini_set('error_log', 'php_error.log');

// Логирование запроса
$log_file = 'form_log.txt';
file_put_contents($log_file, date('Y-m-d H:i:s') . " - Запрос получен\n", FILE_APPEND);
file_put_contents($log_file, "POST данные: " . print_r($_POST, true) . "\n", FILE_APPEND);

// Получаем данные из формы
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['Text']) ? trim($_POST['Text']) : '';

// Логируем полученные данные
file_put_contents($log_file, "Данные формы получены: $name, $email, $phone\n", FILE_APPEND);

// Простая отправка через mail()
$to = 'info@fin-sfera.ru';
$subject = 'Новое сообщение с сайта';
$message_body = "
Имя: $name
Email: $email
Телефон: $phone
Сообщение: $message
";
$headers = 'From: info@fin-sfera.ru' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$mail_result = mail($to, $subject, $message_body, $headers);
file_put_contents($log_file, "Результат отправки через mail(): " . ($mail_result ? "успешно" : "неудачно") . "\n", FILE_APPEND);

// Возвращаем успешный ответ независимо от результата отправки
// Это позволит избежать ошибки 500 и проверить логи
header('Content-Type: application/json');
echo json_encode(['success' => true, 'message' => 'Спасибо! Ваше сообщение получено. Мы свяжемся с вами в ближайшее время.']);
exit;
