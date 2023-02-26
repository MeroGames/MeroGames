<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Create New Account</title>
    <style>
      /* Add some styles for the form */
      form {
        width: 50%;
        margin: 0 auto;
      }
      input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }
      button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
      }
      button:hover {
        opacity: 0.8;
      }
      /* Add some styles for the error message */
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Create New Account</h1>
    <form method="post" action="signup.php">
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" required>
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required>
      <button type="submit">Sign Up</button>
    </form>
    <?php
      // Check if the form was submitted
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the values from the form
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Connect to the MySQL database
        $servername = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "epc";
        $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

        // Check if the connection was successful
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        // Check if the username already exists in the database
        $sql = "SELECT * FROM users WHERE username = '$username'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          echo "<p class='error'>This username is already taken. Please choose a different one.</p>";
        } else {
          // Insert the new user into the database
          $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
          if ($conn->query($sql) === TRUE) {
            echo "New account created successfully";
          } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
          }
        }

        // Close the connection
        $conn->close();
      }
    ?>
  </body>
</html>
