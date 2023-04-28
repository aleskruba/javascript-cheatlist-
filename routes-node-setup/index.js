const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/posts', async (req, res) => {
    const { default: fetch } = await import('node-fetch');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    res.render('posts', { posts });
  });


app.get('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const { default: fetch } = await import('node-fetch');
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();
  res.render('post', { post });
});

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
