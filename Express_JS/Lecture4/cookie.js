var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/', function(req, res) {
   res.cookie('mycookies', 'express')
   res.send('cookie set');
   //to see the cookie in console
   console.log('cookies:' ,req.cookies)
//    cookies: {
//     _xsrf: '2|674dcc89|02abc6a6e485c175e436749a213ed3d6|1744886395',
//     'username-localhost-8888': '2|1:0|10:1745810601|23:username-localhost-8888|44:OTAzZjg4MWZkODdhNDhhNWJiNzVjNTE5ZmM0M2MyODU=|0d40ffcf95d0a4ca93459e1854fe22697d48606f544eada7c44e36bce91641bd',
//     mycookies: 'express'
//   }
//   cookies: {
//     _xsrf: '2|674dcc89|02abc6a6e485c175e436749a213ed3d6|1744886395',
//     'username-localhost-8888': '2|1:0|10:1745810601|23:username-localhost-8888|44:OTAzZjg4MWZkODdhNDhhNWJiNzVjNTE5ZmM0M2MyODU=|0d40ffcf95d0a4ca93459e1854fe22697d48606f544eada7c44e36bce91641bd',
//     mycookies: 'express'
//   }
//   cookies: {
//     _xsrf: '2|674dcc89|02abc6a6e485c175e436749a213ed3d6|1744886395',
//     'username-localhost-8888': '2|1:0|10:1745810601|23:username-localhost-8888|44:OTAzZjg4MWZkODdhNDhhNWJiNzVjNTE5ZmM0M2MyODU=|0d40ffcf95d0a4ca93459e1854fe22697d48606f544eada7c44e36bce91641bd',
//     mycookies: 'express'
//   }
 });
app.listen(3000, function(err, message) {
    console.log("server start......")
});
