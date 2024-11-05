<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min første webside</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    nav {
        background-color: #333;
        color: white;
        padding: 10px;
    }
    nav ul {
        list-style-type: none;
        padding: 0;
    }
    nav ul li {
        display: inline;
        margin-right: 20px;
    }
    nav a {
        color: white;
        text-decoration: none;
    }
    nav a:hover {
        text-decoration: underline;
    }
    div {
        margin-top: 20px;
    }
</style>

</head>
<body>
    <nav>
        <ul>
            <li><a href="#home">Hjem</a></li>
            <li><a href="#about">Om oss</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
    </nav>
    <div id="home">
        <h1>Velkommen til min første webside!</h1>
        <p>Dette er min første side, laget fra bunnen av.</p>
    </div>
    <div id="about">
        <h2>Om oss</h2>
        <p>Vi er et lite selskap som jobber med webutvikling.</p>
    </div>
    <div id="contact">
        <h2>Kontakt</h2>
        <p>Du kan kontakte oss på e-post: info@minside.no</p>
    </div>
</body>

</html>
