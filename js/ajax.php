<?php
header('Content-Type: application/json');

$data = array();

if(empty($_POST)) {
  $data['status'] = 'error';
  $data['message'] = 'No data received';
  echo json_encode($data);
  exit;
}

$type = $_POST['type'];
$name = $_POST['name'];
$telephone = $_POST['telephone'];
$privacy_policy = $_POST['privacy_policy'];

// Validate form data
if(empty($name)  empty($telephone)  !isset($privacy_policy)) {
  $data['status'] = 'error';
  $data['message'] = 'Name, telephone and privacy policy fields are required';
  echo json_encode($data);
  exit;
}

// Process form data
// ...

// Respond to client
$data['status'] = 'success';
$data['message'] = 'Form submitted successfully';
echo json_encode($data);
exit;
?>