'use strict';

const express = require('express');
const router = express.Router();
// class
const Clothes = require('../models/clothes.js');
//new obj from the class
const clothesInstance = new Clothes(); 


router.get('/clothes', getclothes);
router.get('/clothes/:id', getOneclothes);
router.post('/food', createclothes);
router.put('/food/:id', updateclothes);
router.delete('/food/:id', deleteclothes);


function getclothes(req, res) {
  // get all items
  let items = clothesInstance.get();
  res.status(200).json(items);
}

function getOneclothes(req, res) {
  let id = parseInt(req.params.id); 
  let oneItem = clothesInstance.get(id);
  res.status(200).json(oneItem);
}

function createclothes(req, res) {
  
  let obj = req.body;
  let newItem = clothesInstance.create(obj);
  res.status(201).json(newItem);
}

function updateclothes(req, res) {
  let id = parseInt(req.params.id);
  const obj = req.body;
  let updatedThing = clothesInstance.update(id, obj);
  res.status(200).json(updatedThing);
}

function deleteclothes(req, res) {
  let id = parseInt(req.params.id);
  let deleted = clothesInstance.delete(id);
  let msg = deleted ? 'Item is deleted': 'Item was not Found';
  let statusCode = deleted ? 202 : 204;
  res.status(statusCode).json({
    msg: msg,
    deleted: deleted,
  });
}


module.exports = router;