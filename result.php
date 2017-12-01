<?php

	$link = mysqli_connect("localhost", "root", "", "demo_db");

	if($link === false)
	{
		die("ERROR: Could not connect. ".mysqli_connect_error());
	}
	$name = $_GET['name'];
	// echo $name;
	$result = mysqli_query($link,"SELECT * FROM login WHERE Name='$name'");

	echo "<table border='1'>
	<tr>
	<th>ID</th>
	<th>Name</th>
	<th>Email</th>
	<th>Contact</th>
	<th>Gender</th>
	</tr>";

	while($row = mysqli_fetch_array($result))
	{
	echo "<tr>";
	echo "<td>" . $row['ID'] . "</td>";
	echo "<td>" . $row['Name'] . "</td>";
	echo "<td>" . $row['Email'] . "</td>";
	echo "<td>" . $row['Contact'] . "</td>";
	echo "<td>" . $row['Gender'] . "</td>";
	echo "</tr>";
	}
	echo "</table>";
?>