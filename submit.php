<?php
if(isset($_POST['inputText'])) {

  //Nastavení informací o odesílateli
  $name = $_POST['name'];
  $email = $_POST['email'];

  //Nastavení informací o příjemci
  $to = "j.tuzar@centrum.cz";
  $subject = "Zpráva z formuláře na webu";

  //Nastavení zprávy
  $message = "
  <html>
  <head>
  <title>Zpráva z formuláře na webu</title>
  </head>
  <body>
  <p>Toto jsou informace o odesílateli:</p>
  <table>
  <tr>
  <th>Jméno:</th>
  <td>$name</td>
  </tr>
  <tr>
  <th>Email:</th>
  <td>$email</td>
  </tr>
  </table>
  <br>
  <p>Toto je zpráva, kterou odeslal uživatel:</p>
  <p>".nl2br($_POST['inputText'])."</p>
  </body>
  </html>
  ";

  //Nastavení hlaviček
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $name <$email>\r\n";
  $headers .= "Content-type: text/html\r\n";

  //Odeslání emailu
  mail($to, $subject, $message, $headers);

  //Zpráva o úspěšném odeslání formuláře
  echo "Formulář byl úspěšně odeslán.";
}
?>
