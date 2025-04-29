var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(req, res) {
  // Set cookies
  res.cookie('username', 'xyz');
  res.cookie('lastname', 'PQR');

    // Set cookies with expiration times
    // res.cookie('username', 'xyz', { maxAge: 30 * 60 * 1000 }); // Expires in 30 minutes
    // res.cookie('lastname', 'PQR', { expires: new Date(Date.now() + 24 * 60 * 60 * 1000) }); // Expires in 24 hours

  // Log cookies to the console
  console.log('Username:', req.cookies.username);
  console.log('Lastname:', req.cookies.lastname);

  // Clear the 'lastname' cookie
  res.clearCookie('lastname');
  //when we use expiration time concept,dont write this syntax

  // Send a response
  res.send('Cookies set and lastname cleared!');
});
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

//Output:
// Username: xyz
// Lastname: undefined