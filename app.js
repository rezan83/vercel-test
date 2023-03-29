import express from 'express';
import router from './router.js';

// const router = require('./router.js')
const app = express();
app.use(express.json());
const port = 3001;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router);

// app.get('/fruits', (req, res) => {
//   res.json(fruits);
// });

// app.get('/fruits/:id', (req, res) => {
//   const id = +req.params.id;
//   const oneFruit = fruits.find(f => f.id === id);
//   res.json(oneFruit);
// });

// app.delete('/fruits/:id', (req, res) => {
//   const id = +req.params.id;
//   fruits = fruits.filter(f => f.id !== id);
//   res.status(200).json({ message: 'successfully deleted' });
// });

// app.put('/fruits/:id', (req, res) => {
//   const id = +req.params.id;
//   const oneFruit = req.body;
//   fruits = fruits.map(f => {
//     if (f.id === id) {
//       return {...f, ...oneFruit};
//     }
//     return f;
//   });
//   res.status(200).json({ message: 'successfully updated' } );
// });

// app.post('/fruits', (req, res) => {
//   const oneFruit = req.body;
//   fruits.push(oneFruit);
//   res.status(201).json({ message: 'successfully added' });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
