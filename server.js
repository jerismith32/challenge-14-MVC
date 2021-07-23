const path = require('path');
//express.static() is a built-in Express.js middleware function to take all of the contents of a folder and serve them as static assets.
//Useful for front-end specific files like images, style sheets, JS files
app.use(express.static(path.join(__dirname, 'public')));
