<?php
require "inc/config.php";
require "inc/session.php";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $stmt = $pdo->prepare("INSERT INTO users (name,email) VALUES (?,?)");
    $stmt->execute([$_POST['name'], $_POST['email']]);
    header("location: users.php");
}
?>
<form method="post">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <button>Simpan</button>
</form>
