const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post('/', (req, res) => {
  const { pageUrl } = req.body;
  const locationData = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const visitedPage = { pageUrl, locationData };

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error occurred while reading the database.' });
      return;
    }

    let visitedPages = [];
    if (data && data.trim() !== '') { // check if data is not empty
      try {
        visitedPages = JSON.parse(data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error occurred while parsing the database.' });
        return;
      }
    }

    visitedPages.push(visitedPage);

    fs.writeFile('db.json', JSON.stringify(visitedPages), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error occurred while writing to the database.' });
        return;
      }

      res.json({ message: 'Page visit recorded successfully.' });
    });
  });
});

app.listen(8080, () => {
  console.log('Server started on port 8080.');
});

/////////////////// html  //////////
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <a href="#" onclick="recordPageVisit('bicycles.html')">bicycles</a>

    <a href="#" onclick="recordPageVisit('storage.html')">cars</a>

    <script>
        async function recordPageVisit(pageUrl) {
            const data = { pageUrl };
            const response = await fetch('http://localhost:8080', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            const result = await response.json();
            console.log(result.message);
        }
    </script>
</body>
</html>
