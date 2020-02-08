const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client/dist'));
app.get('/data/:id', (req, res) => {
  const id = Number(req.path.slice(6)) - 1;
  db.getLocationInfo(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results[0]);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
