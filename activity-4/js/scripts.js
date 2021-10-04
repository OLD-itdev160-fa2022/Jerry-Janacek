//Welcome message
var user = 'Jerry';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest atom reviews';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 20;
var studentDiscount = .1;
var studentPrice = price - (price * studentDiscount);
var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);