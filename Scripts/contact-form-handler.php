<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];



	$email_from = 'PHI@website.ca';

	$email_subject = "Contact Us Submission";

	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Message: $message.\n";

	$to = "policinghomelesscv19.utsc@utoronto.ca";

	$headers = "FROM: $email_from\r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: Contact.html");
?>