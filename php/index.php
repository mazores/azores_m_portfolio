<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Karla:700|Poppins:700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <title>Contact Form</title>
</head>
<body>
    <section id="contact" class="panel">
	    <h1 class="section-title">
	        Contact
	    </h1>

	    <div class="contactCont">
	        <section class="contactFormContainer">
	            <form action="data/contact.php" method="post">
	                <input id="name" type="text" name="name" placeholder="Name">
	                <input id="email" type="email" name="email" placeholder="E-mail">
	                <textarea id="message" name="message" placeholder="Message"></textarea>
	                
	                <input type="submit" value="Submit" class="button">
	            </form>
	        </section>
	    </div>
        </section>
</body>
</html>