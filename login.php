<?php
// Start a session
session_start();

// Check if the user is already logged in
if (isset($_SESSION['username'])) {
  header('Location: dashboard.php');
  exit;
}

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get the username and password from the form
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Connect to the database
  $conn = new mysqli('localhost', 'username', 'password', 'database_name');

  // Check if the connection was successful
  if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
  }

  // Query the database to check if the user exists and the password is correct
  $stmt = $conn->prepare('SELECT id FROM users WHERE username = ? AND password = ?');
  $stmt->bind_param('ss', $username, hash('sha256', $password));
  $stmt->execute();
  $stmt->store_result();

  // If the query returned a row, the login was successful
  if ($stmt->num_rows > 0) {
    $_SESSION['username'] = $username;
    header('Location: dashboard.php');
    exit;
  } else {
    $error = 'Invalid username or password';
  }

  // Close the statement and the connection
  $stmt->close();
  $conn->close();
}
?>
