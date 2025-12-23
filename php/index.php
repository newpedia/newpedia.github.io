<?php
// index.php - Newpedia

$title = "Newpedia";
$description = "Portal pengetahuan sederhana berbasis PHP";
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title><?= $title; ?></title>
    <meta name="description" content="<?= $description; ?>">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f7fa;
            margin: 0;
            padding: 0;
        }
        header {
            background: #1e293b;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        main {
            padding: 20px;
        }
        footer {
            background: #e5e7eb;
            text-align: center;
            padding: 10px;
            font-size: 14px;
        }
    </style>
</head>
<body>

<header>
    <h1><?= $title; ?></h1>
    <p><?= $description; ?></p>
</header>

<main>
    <h2>Selamat datang di Newpedia</h2>
    <p>Ini adalah contoh halaman PHP sederhana.</p>
</main>
<a href="tambah.php">+ Tambah Artikel</a>
<hr>

<?php while ($row = mysqli_fetch_assoc($data)) : ?>
    <h3><?= $row['judul']; ?></h3>
    <p><?= nl2br($row['isi']); ?></p>
    <a href="edit.php?id=<?= $row['id']; ?>">Edit</a> |
    <a href="hapus.php?id=<?= $row['id']; ?>" onclick="return confirm('Hapus data?')">Hapus</a>
    <hr>
<?php endwhile; ?>
<footer>
    &copy; <?= date("Y"); ?> Newpedia
</footer>

</body>
</html>
