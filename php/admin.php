<?php
include 'config.php';
include 'auth.php';

$stmt = $pdo->query("SELECT * FROM artikel ORDER BY id DESC");
?>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<title>Newpedia Admin</title>
</head>
<body>

<nav class="navbar navbar-dark bg-dark">
<div class="container">
<span class="navbar-brand">Newpedia Admin</span>
<a href="logout.php" class="btn btn-danger btn-sm">Logout</a>
</div>
</nav>

<div class="container mt-4">
<a href="tambah.php" class="btn btn-success mb-3">+ Artikel</a>

<?php while ($row = $stmt->fetch()): ?>
<div class="card mb-3 shadow-sm">
<div class="card-body">
<h5><?= $row['judul'] ?></h5>
<p><?= nl2br($row['isi']) ?></p>
<a href="edit.php?id=<?= $row['id'] ?>" class="btn btn-warning btn-sm">Edit</a>
<a href="hapus.php?id=<?= $row['id'] ?>" class="btn btn-danger btn-sm"
onclick="return confirm('Hapus?')">Hapus</a>
</div>
</div>
<?php endwhile; ?>
</div>

</body>
</html>
