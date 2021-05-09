'use strict';

const express = require('express');
const router = express.Router();
// class


const Clothes = require('../models/data-collection-class');

const clothesitem = require('../models/clothes');
const { async } = require('rsvp');

const clothesInstance = new Clothes(clothesitem); 

router.get('/clothes', getclothes);
router.get('/clothes/:id', getOneclothes);
router.post('/clothes', createclothes);
router.put('/clothes/:id', updateclothes);
router.delete('/clothes/:id', deleteclothes);


async function getclothes(req, res) {
  // get all items
  let items =await clothesInstance.get();
  res.status(200).json(items);
}

async function getOneclothes(req, res) {
  let id = req.params.id; 
  let oneItem = await clothesInstance.get(id);
  res.status(200).json(oneItem);
}

async function createclothes(req, res) {
  
  let obj = req.body;
  let newItem =await clothesInstance.create(obj);
  res.status(201).json(newItem);
}

async function updateclothes(req, res) {
  let id = req.params.id;
  const obj = req.body;
  let updatedThing =await clothesInstance.update(id, obj);
  res.status(200).json(updatedThing);
}

async function deleteclothes(req, res) {
  let id = req.params.id;
  let deleted = await clothesInstance.delete(id);
  let msg = deleted ? 'Item is deleted': 'Item was not Found';
  let statusCode = deleted ? 202 : 204;
  res.status(statusCode).json({
    msg: msg,
    deleted: deleted,
  });
}


module.exports = router;