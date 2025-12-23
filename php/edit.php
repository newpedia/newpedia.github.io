<?php
include 'config.php';
$id = $_GET['id'];

$data = mysqli_query($conn, "SELECT * FROM artikel WHERE id=$id");
$row  = mysqli_fetch_assoc($data);

if (isset($_POST['update'])) {
    $judul = $_POST['judul'];
    $isi   = $_POST['isi'];

    mysqli_query($conn, "UPDATE artikel SET judul='$judul', isi='$isi' WHERE id=$id");
    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html>
<body>

<h2>Edit Artikel</h2>
<form method="post">
    <input type="text" name="judul" value="<?= $row['judul']; ?>" required><br><br>
    <textarea name="isi" rows="5" required><?= $row['isi']; ?></textarea><br><br>
    <button name="update">Update</button>
</form>

</body>
</html>
