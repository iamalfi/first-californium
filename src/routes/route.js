const express = require('express');
const router = express.Router();


// 1. Checkout session/nodejs-intro  on your local
// 2. Download the dependencies by running npm i (do this inside californium at your terminal)
// 3. Run the application by using command node index.js (do this inside src at your terminal) 
// 4. Send a request to your application by typing “localhost:3000/test-me” at chrome and press enter
// 5. You should be able to see “This is my first ever api!” on your browser tab

// Note : To stop your application from running , use Control + C shortcut at your terminal


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;