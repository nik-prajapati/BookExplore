<?php

error_reporting(E_ALL);
ini_set('disply_errors', 1);

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods:*');


$con = mysqli_connect("localhost", "root", "", "bookexplore");


if ($con) {

  header('Content-Type: application/json');


  $method = $_SERVER['REQUEST_METHOD'];


  switch ($method) {

    case "GET":

      $path = explode('/', $_SERVER['REQUEST_URI']);
      $query = "";
      if (isset($path[3]) && is_numeric($path[3])) {
        $query = "SELECT * FROM bookdetails where id=$path[3]";
      } else {
        $query = "SELECT * FROM bookdetails";
      }
      $stmt = $con->prepare($query);
      $stmt->execute();

      $resultSet = $stmt->get_result();
      $data = $resultSet->fetch_all(MYSQLI_ASSOC);

      echo json_encode($data);
      break;

    case "POST":

      $userData = json_decode(file_get_contents("php://input"));

      $id = $userData->id;
      $title = $userData->title;
      $year = $userData->year;
      $descp = $userData->descp;
      if($descp=="")
        $descp="No description Found !";

      try {
        $result = mysqli_query($con, "insert into bookdetails (id,title,year,description) values ('$id','$title','$year','$descp')");
        echo json_encode(["Success" => "User Added Successfully !!"]);
      }
      //catch exception
      catch (Exception $e) {
        echo json_encode(["Message" => $e->getMessage()]);
      }

      break;

    case "PUT":

      $userData = json_decode(file_get_contents("php://input"));

      $id = $userData->id;
      $title = $userData->title;
      $year = $userData->year;
      $description = $userData->description;

      

      try {
        $result = mysqli_query($con, "UPDATE `bookdetails` SET `title` = '$title',`year` = '$year' ,`description` = '$description'  WHERE `id` = '$id'");
        echo json_encode(["Success" => "Updated Successfully !!"]);
      }
      //catch exception
      catch (Exception $e) {
        echo json_encode(["Message" => $e->getMessage()]);
      }

      break;

    case "DELETE":
      $path = explode('/', $_SERVER['REQUEST_URI']);
      $query = "";
      if (isset($path[3]) && is_numeric($path[3])) {
        try {
          $query = "Delete FROM bookdetails where id='$path[3]'";

          $stmt = $con->prepare($query);
          $stmt->execute();
          echo json_encode(["Success" => "Deleted SuccessFully"]);
        } catch (Exception $e) {
          echo json_encode(["Message" => $e->getMessage()]);
        }
      }
      break;




  }
} else
  echo "not connected";
?>