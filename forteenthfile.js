<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body style="margin: 0">
  <form onsubmit="handleFormSubmit(event)">
    <label for="username">Username</label>
    <input type="text" name="username" id="username" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
    <label for="phone">Phone No</label>
    <input type="tel" name="phone" id="phone" />
    <button type="submit">Submit</button>
  </form>
  <ul></ul>
</body>
<script src="index.js"></script>

</html>