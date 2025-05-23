<?php
/**
 * Обработчик формы обратной связи для сайта Fin-Sfera
 * Версия: 1.0.0
 */

// Отключаем вывод ошибок в браузер
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Включаем логирование
$log_file = 'form_log.txt';
file_put_contents($log_file, date('Y-m-d H:i:s') . " - Запрос на отправку формы получен\n", FILE_APPEND);

// Получаем данные из GET параметров
$name = isset($_GET['name']) ? urldecode($_GET['name']) : 'Не указано';
$email = isset($_GET['email']) ? urldecode($_GET['email']) : 'Не указано';
$phone = isset($_GET['phone']) ? urldecode($_GET['phone']) : 'Не указано';
$message = isset($_GET['message']) ? urldecode($_GET['message']) : 'Не указано';

// Логируем полученные данные
file_put_contents($log_file, "Данные формы: Имя=$name, Email=$email, Телефон=$phone\n", FILE_APPEND);

// Проверка на спам (простая защита)
if (preg_match('/https?:\/\//i', $name . $message)) {
    file_put_contents($log_file, "Обнаружен возможный спам, отправка отменена\n", FILE_APPEND);

    // Возвращаем успешный результат, но не отправляем письмо
    header('Content-Type: application/json');
    echo json_encode([
        'success' => true,
        'message' => 'Спасибо! Ваше сообщение отправлено.'
    ]);
    exit;
}

// Формируем письмо
$to = 'info@fin-sfera.ru';
$subject = 'Новое сообщение с сайта Fin-Sfera';
$message_body = "
Получено новое сообщение с формы обратной связи на сайте Fin-Sfera.

Информация о клиенте:
------------------------------------------
Имя: $name
Email: $email
Телефон: $phone
Сообщение: $message
------------------------------------------

Дата и время: " . date('Y-m-d H:i:s') . "
IP-адрес: " . $_SERVER['REMOTE_ADDR'] . "
";

// Заголовки письма
$headers = 'From: info@fin-sfera.ru' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion() . "\r\n" .
    'Content-Type: text/plain; charset=UTF-8';

// Отправляем письмо
$result = mail($to, $subject, $message_body, $headers);
file_put_contents($log_file, "Результат отправки: " . ($result ? "успешно" : "неудачно") . "\n", FILE_APPEND);

// Отправляем копию на дополнительный email, если нужно
$additional_email = ''; // Замените на нужный email, если требуется
if ($additional_email) {
    $result2 = mail($additional_email, $subject, $message_body, $headers);
    file_put_contents($log_file, "Результат отправки копии: " . ($result2 ? "успешно" : "неудачно") . "\n", FILE_APPEND);
}

// Всегда возвращаем успешный результат
header('Content-Type: application/json');
echo json_encode([
    'success' => true,
    'message' => 'Спасибо! Ваше сообщение отправлено.'
]);
