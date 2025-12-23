<?php
if (!isset($_SESSION['admin_logged'])) {
    header("location: login.php");
    exit;
}
