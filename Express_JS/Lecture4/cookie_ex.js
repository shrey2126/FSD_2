var expr = require("express");
var cp = require("cookie-parser");
var app = expr();

app.use(cp());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/cookie_ex.html");
});

app.get("/next", (req, res, next) => {
    const response = {
        u: req.query.uname,
        p: req.query.pwd
    };
    res.cookie("uname", response.u);
    res.cookie("password",response.p);
    next();
});

app.get("/next", (req, res) => {
    console.log(req.cookies); // You WILL see the cookie in the server console
    res.json(req.cookies); // Send the cookies as JSON to the client
});

app.listen(3002, () => {
    console.log("Server listening on port 3002");
});

// Server listening on port 3002
// {
//   _xsrf: '2|674dcc89|02abc6a6e485c175e436749a213ed3d6|1744886395',
//   'username-localhost-8888': '2|1:0|10:1745810601|23:username-localhost-8888|44:OTAzZjg4MWZkODdhNDhhNWJiNzVjNTE5ZmM0M2MyODU=|0d40ffcf95d0a4ca93459e1854fe22697d48606f544eada7c44e36bce91641bd',
//   mycookies: 'express',
//   username: 'xyz',
//   uname: 'Shrey'
// }
// {
//   _xsrf: '2|674dcc89|02abc6a6e485c175e436749a213ed3d6|1744886395',
//   'username-localhost-8888': '2|1:0|10:1745810601|23:username-localhost-8888|44:OTAzZjg4MWZkODdhNDhhNWJiNzVjNTE5ZmM0M2MyODU=|0d40ffcf95d0a4ca93459e1854fe22697d48606f544eada7c44e36bce91641bd',
//   mycookies: 'express',
//   username: 'xyz',
//   uname: 'Shrey',
//   password: '1234'
// }