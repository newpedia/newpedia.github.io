<?php
include 'config.php';

if (isset($_POST['login'])) {
    $stmt = $pdo->prepare("SELECT * FROM admin WHERE username=?");
    $stmt->execute([$_POST['username']]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($_POST['password'], $admin['password'])) {
        $_SESSION['admin'] = $admin['username'];
        header("Location: index.php");
    } else {
        $error = "Login gagal!";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<title>Login Admin</title>
</head>
<body class="bg-light">

<div class="container mt-5">
<div class="card col-md-4 mx-auto shadow">
<div class="card-body">
<h4 class="text-center">Login Admin</h4>

<?php if(isset($error)): ?>
<div class="alert alert-danger"><?= $error ?></div>
<?php endif; ?>

<form method="post">
<input class="form-control mb-2" name="username" placeholder="Username" required>
<input class="form-control mb-3" type="password" name="password" placeholder="Password" required>
<button class="btn btn-primary w-100" name="login">Login</button>
</form>
</div>
</div>
</div>

</body>
</html>
