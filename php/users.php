<?php
require "inc/config.php";
require "inc/session.php";

$stmt = $pdo->query("SELECT * FROM users ORDER BY id DESC");
$users = $stmt->fetchAll();
?>
<!doctype html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
<h2>Users</h2>
<a href="users_add.php" class="btn btn-success mb-3">Tambah User</a>
<table class="table table-bordered">
<tr><th>ID</th><th>Name</th><th>Email</th><th>Aksi</th></tr>
<?php foreach($users as $u): ?>
<tr>
    <td><?= $u['id'] ?></td>
    <td><?= htmlspecialchars($u['name']) ?></td>
    <td><?= htmlspecialchars($u['email']) ?></td>
    <td>
        <a href="users_edit.php?id=<?= $u['id'] ?>" class="btn btn-sm btn-warning">Edit</a>
        <a href="users_delete.php?id=<?= $u['id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('Hapus?')">Delete</a>
    </td>
</tr>
<?php endforeach; ?>
</table>
</div>
</body>
</html>
