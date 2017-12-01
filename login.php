<?php
// echo "hii";
	$link = mysqli_connect("localhost", "root", "", "demo_db");

	if($link === false)
	{
		die("ERROR: Could not connect. ".mysqli_connect_error());
	}
	if(isset($_POST['name']) and isset($_POST['email']) and isset($_POST['contact']) and isset($_POST['gender']))
	{
		  $name= $_POST['name'];
		  $email= $_POST['email'];
		  $contact= $_POST['contact'];
		  $gender= $_POST['gender'];

		  $sql= "INSERT INTO login(Name, Email, Contact, Gender) VALUES('$name', '$email', '$contact', '$gender')";

		 if(mysqli_query($link, $sql)){
		 echo "Records created successfully.";
 		}
 		else{
 			echo "ERROR: Could not able to execute $sql".mysqli_error($link);
 		}
		mysqli_close($link);
	}
?>

