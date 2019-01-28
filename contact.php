<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "vietbachdo@mail.com";
  $headers = "From my Website: ".$mailFrom;
  $txt = "e-mail from ".$name."".$surname.".\n\n".$message;
  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");
}







 ?>
