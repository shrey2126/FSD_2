import validator from "validator";

// Example: Validating an email address
const email = 'user@example.com';
if (validator.isEmail(email)) {
    console.log(`${email} is a valid email.`);
} else {
    console.log(`${email} is not a valid email.`);
}

// Example: Validating a URL
const url = 'https://www.example.com';
if (validator.isURL(url)) {
    console.log(`${url} is a valid URL.`);
} else {
    console.log(`${url} is not a valid URL.`);
}

// Example: Validating an IP address
const ip = '192.168.0.1';
if (validator.isIP(ip)) {
    console.log(`${ip} is a valid IP address.`);
} else {
    console.log(`${ip} is not a valid IP address.`);
}

// Example: Checking if a string is a valid credit card number
const creditCard = '4111111111111111';
if (validator.isCreditCard(creditCard)) {
    console.log(`${creditCard} is a valid credit card number.`);
} else {
    console.log(`${creditCard} is not a valid credit card number.`);
}

// Example: Sanitize a string
const dirtyString = '<script>alert("Hello")</script>';
const sanitizedString = validator.escape(dirtyString);
console.log('Sanitized String:', sanitizedString);  // Outputs: &lt;script&gt;alert(&quot;Hello&quot;)&lt;/script&gt;
