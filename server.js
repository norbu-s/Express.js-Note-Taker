// Required NPM packages.
const express = require('express');
const bodyParser= require('body-parser')
const app = express();

//initial port.
const PORT = process.env.PORT || 8080;

//Creating an express server
const app =express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlToutes')(app);

//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  