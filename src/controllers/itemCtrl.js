
const Item = require('../models/itemModel');

let items = [
  new Item(1, 'Item 1'),
  new Item(2, 'Item 2'),
  new Item(3, 'Item 3'),
];

const getItems = (req, res) => {
  res.json(items);
};

const addItem = (req, res) => {
  const { name } = req.body;
  const newItem = new Item(Date.now(), name);
  items.push(newItem);
  res.status(201).json(newItem);
};

const getItemById = (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

module.exports = { getItems, addItem, getItemById };
