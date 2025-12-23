<?php
include 'config.php';

if (isset($_POST['simpan'])) {
    $judul = $_POST['judul'];
    $isi   = $_POST['isi'];

    mysqli_query($conn, "INSERT INTO artikel VALUES(NULL,'$judul','$isi',NOW())");
    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html>
<body>

<h2>Tambah Artikel</h2>
<form method="post">
    <input type="text" name="judul" placeholder="Judul" required><br><br>
    <textarea name="isi" placeholder="Isi artikel" rows="5" required></textarea><br><br>
    <button name="simpan">Simpan</button>
</form>

</body>
</html>
