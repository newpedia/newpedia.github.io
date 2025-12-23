<?php
include 'config.php';
include 'auth.php';

if (isset($_POST['simpan'])) {
    $stmt = $pdo->prepare("INSERT INTO artikel (judul, isi) VALUES (?,?)");
    $stmt->execute([$_POST['judul'], $_POST['isi']]);
    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-4">

<h3>Tambah Artikel</h3>
<form method="post">
<input class="form-control mb-2" name="judul" placeholder="Judul" required>
<textarea class="form-control mb-3" name="isi" rows="5" required></textarea>
<button class="btn btn-primary" name="simpan">Simpan</button>
</form>

</body>
</html>
