<?php
  $link = mysqli_connect("localhost", "test", "", "test");

  if (mysqli_connect_error()){
    die("Could not connect to database");
  }

  $query = "SELECT * FROM users";

  if ($result = mysqli_query($link, $query)) {

    $row = mysqli_fetch_array($result);

    print_r($row); 

  } else {
    echo "It failed";
  }

 ?>
