<?php
// Connect to the database
$db_host = 'localhost';
$db_name = 'epc_db';
$db_user = 'username';
$db_pass = 'password';
$db_conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);

// Get the user input from the POST request
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password using the bcrypt algorithm
$hash = password_hash($password, PASSWORD_BCRYPT);

// Insert the new user data into the users table
$stmt = $db_conn->prepare('INSERT INTO users (name, email, password) VALUES (:name, :email, :password)');
$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $hash);
if ($stmt->execute()) {
  http_response_code(200);
} else {
  http_response_code(500);
}
?>
