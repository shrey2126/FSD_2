var exp = require('express');
var app = exp();
var path = require('path');
const bp = require("body-parser");
const url = bp.urlencoded({ extended: true });

// Middleware to parse POST data
app.use(url);

// Serve static files
var staticpath = path.join(__dirname, '../public');
app.use(exp.static(staticpath, { index: 'calculate.html' }));

// Handle POST request and perform calculation
app.post('/calc', (req, res) => {
    res.set("content-type", "text/html");

    // Extract the numbers and formula from the form data
    var n1 = parseInt(req.body.n1);
    var n2 = parseInt(req.body.n2);

    // Validation: Check if numbers are greater than 0
    if (n1 > 0 && n2 > 0) {
        // Perform the calculation based on the selected formula
        if (req.body.formula == "addition") {
            var a = n1 + n2;
            res.write("<h1>Addition is : " + a + "</h1>");
        }
        else if (req.body.formula == "subtraction") {
            var s = n1 - n2;
            res.write("<h1>Subtraction is : " + s + "</h1>");
        }
        else if (req.body.formula == "multi") {
            var m = n1 * n2;
            res.write("<h1>Multiplication is : " + m + "</h1>");
        }
        else if (req.body.formula == "div") {
            if (n2 === 0) {
                res.write("<h1>Division by zero is not allowed.</h1>");
            } else {
                var d = n1 / n2;
                res.write("<h1>Division is : " + d + "</h1>");
            }
        }
        else {
            res.write("<h1>You have not selected any formula.</h1>");
        }
    } else {
        res.write("<h1>Please enter valid numbers greater than 0.</h1>");
    }

    // End the response
    res.send();
});

// Start the server
app.listen(5017, () => {
    console.log("Server is running on http://localhost:5017");
});
