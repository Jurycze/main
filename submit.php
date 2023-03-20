<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $inputText = $_POST['inputText'];

  // Construct the message to send to Discord
  $message = "New message from $name ($email):\n$inputText";

  // Set up cURL to send the message to the webhook
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array('content' => $message)));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

  // Send the message to the webhook
  $response = curl_exec($ch);

  // Close cURL
  curl_close($ch);

  // Redirect the user back to the form page
  header('Location: index.html');
  exit();
}

?>
