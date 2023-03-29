import express from 'express';
const router = express.Router();

let fruits = [
  { id: 1, name: 'Apple', count: 2 },
  { id: 2, name: 'Orange', count: 3 }
];

router.get('/fruits', (req, res) => {
  res.json(fruits);
});

router.get('/fruits/:id', (req, res) => {
  const id = +req.params.id;
  const oneFruit = fruits.find(f => f.id === id);
  if (!oneFruit) {
    return res.status(404).json({ message: 'sorry not found' });
  }
  res.json(oneFruit);
});

router.delete('/fruits/:id', (req, res) => {
  const id = +req.params.id;
  const oneFruitFound = fruits.find(f => f.id === id);
  if (!oneFruitFound) {
    return res.status(404).json({ message: 'sorry not found' });
  }
  fruits = fruits.filter(f => f.id !== id);
  res.status(200).json({ message: 'successfully deleted' });
});

router.put('/fruits/:id', (req, res) => {
  const id = +req.params.id;
  const oneFruit = req.body;
  const oneFruitFound = fruits.find(f => f.id === id);
  if (!oneFruitFound) {
    return res.status(404).json({ message: 'sorry not found' });
  }
  fruits = fruits.map(f => {
    if (f.id === id) {
      return { ...f, ...oneFruit };
    }
    return f;
  });
  res.status(200).json({ message: 'successfully updated' });
});

router.post('/fruits', (req, res) => {
  const oneFruit = req.body;
  fruits.push(oneFruit);
  res.status(201).json({ message: 'successfully added' });
});

router.use((req, res) => {
  res.status(404).json({ message: 'sorry not found' });
});

export default router;
