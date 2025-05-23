<?php
// Включаем вывод ошибок
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<h1>PHP Debug Information</h1>";

// Информация о PHP
echo "<h2>PHP Info</h2>";
echo "<p>PHP Version: " . phpversion() . "</p>";
echo "<p>Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
echo "<p>Server Name: " . $_SERVER['SERVER_NAME'] . "</p>";
echo "<p>Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "</p>";
echo "<p>Script Filename: " . $_SERVER['SCRIPT_FILENAME'] . "</p>";

// Проверка функций
echo "<h2>Function Availability</h2>";
$functions = ['mail', 'file_put_contents', 'json_encode', 'curl_init'];
foreach ($functions as $function) {
    echo "<p>$function: " . (function_exists($function) ? "Available" : "Not Available") . "</p>";
}

// Проверка расширений
echo "<h2>Extension Availability</h2>";
$extensions = ['openssl', 'mbstring', 'curl', 'json'];
foreach ($extensions as $ext) {
    echo "<p>$ext: " . (extension_loaded($ext) ? "Loaded" : "Not Loaded") . "</p>";
}

// Проверка прав на запись
echo "<h2>Write Permissions</h2>";
$test_file = 'test_write.txt';
$result = @file_put_contents($test_file, 'Test write');
echo "<p>Write to file: " . ($result !== false ? "Success ($result bytes)" : "Failed") . "</p>";
if ($result !== false) {
    echo "<p>File content: " . file_get_contents($test_file) . "</p>";
    unlink($test_file);
    echo "<p>File deleted: " . (!file_exists($test_file) ? "Success" : "Failed") . "</p>";
}

// Проверка директорий
echo "<h2>Directory Check</h2>";
$directories = ['.', 'files', 'files/phpmailer', 'files/phpmailer/src'];
foreach ($directories as $dir) {
    echo "<p>$dir: " . (is_dir($dir) ? "Exists" : "Does Not Exist") . "</p>";
    if (is_dir($dir)) {
        echo "<p>$dir is writable: " . (is_writable($dir) ? "Yes" : "No") . "</p>";
    }
}

// Проверка файла лога
echo "<h2>Log File Check</h2>";
$log_file = 'form_log.txt';
if (file_exists($log_file)) {
    echo "<p>Log file exists: Yes</p>";
    echo "<p>Log file is writable: " . (is_writable($log_file) ? "Yes" : "No") . "</p>";
    echo "<p>Log file size: " . filesize($log_file) . " bytes</p>";
    echo "<p>Last 10 lines of log:</p>";
    echo "<pre>";
    $log_content = file_get_contents($log_file);
    $lines = explode("\n", $log_content);
    $last_lines = array_slice($lines, -10);
    foreach ($last_lines as $line) {
        echo htmlspecialchars($line) . "\n";
    }
    echo "</pre>";
} else {
    echo "<p>Log file exists: No</p>";
    $result = @file_put_contents($log_file, date('Y-m-d H:i:s') . " - Test log entry\n");
    echo "<p>Created log file: " . ($result !== false ? "Success" : "Failed") . "</p>";
}

// Проверка файлов PHPMailer
echo "<h2>PHPMailer Files Check</h2>";
$phpmailer_files = [
    'files/phpmailer/src/Exception.php',
    'files/phpmailer/src/PHPMailer.php',
    'files/phpmailer/src/SMTP.php'
];
foreach ($phpmailer_files as $file) {
    echo "<p>$file: " . (file_exists($file) ? "Exists" : "Does Not Exist") . "</p>";
    if (file_exists($file)) {
        echo "<p>$file is readable: " . (is_readable($file) ? "Yes" : "No") . "</p>";
        echo "<p>$file size: " . filesize($file) . " bytes</p>";
    }
}

// Проверка файла send.php
echo "<h2>send.php Check</h2>";
if (file_exists('send.php')) {
    echo "<p>send.php exists: Yes</p>";
    echo "<p>send.php is readable: " . (is_readable('send.php') ? "Yes" : "No") . "</p>";
    echo "<p>send.php size: " . filesize('send.php') . " bytes</p>";
    echo "<p>First 20 lines of send.php:</p>";
    echo "<pre>";
    $send_content = file_get_contents('send.php');
    $lines = explode("\n", $send_content);
    $first_lines = array_slice($lines, 0, 20);
    foreach ($first_lines as $line) {
        echo htmlspecialchars($line) . "\n";
    }
    echo "</pre>";
} else {
    echo "<p>send.php exists: No</p>";
}

// Проверка временной папки
echo "<h2>Temporary Directory Check</h2>";
$temp_dir = sys_get_temp_dir();
echo "<p>Temporary directory: $temp_dir</p>";
echo "<p>Temporary directory is writable: " . (is_writable($temp_dir) ? "Yes" : "No") . "</p>";

// Проверка конфигурации PHP
echo "<h2>PHP Configuration</h2>";
$config_values = [
    'upload_max_filesize', 'post_max_size', 'max_execution_time',
    'max_input_time', 'memory_limit', 'display_errors', 'log_errors',
    'error_log', 'allow_url_fopen', 'default_socket_timeout'
];
foreach ($config_values as $value) {
    echo "<p>$value: " . ini_get($value) . "</p>";
}
