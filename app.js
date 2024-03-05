const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Save the World, Afiq the Handsome Saved Bryan Too!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
