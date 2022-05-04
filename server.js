const express = require('express');
const mongodb = require('./db/connect');
const routes = require('./routes/contacts');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app
.use(bodyParser.json())
.use('/contacts', routes);

// only listen if mongodb connected successfully
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
