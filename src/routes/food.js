'use strict';

const express = require('express');
const router = express.Router();
// class

//new obj from the class

const Food = require('../models/data-collection-class');
const fooditem = require('../models/food');

const thingInstance = new Food(fooditem); 


router.get('/food', getfood);
router.get('/food/:id', getOnefood);
router.post('/food', createfood);
router.put('/food/:id', updatefood);
router.delete('/food/:id', deletefood);


async function getfood(req, res) {
  // get all items
  let items = await thingInstance.get();
  res.status(200).json(items);
}

async function getOnefood(req, res)  {
  let id = req.params.id; 
  let oneItem = await thingInstance.get(id);
  res.status(200).json(oneItem);
}

async function createfood(req, res) {
  
  let obj = req.body;
  let newItem = await thingInstance.create(obj);
  res.status(201).json(newItem);
}

async function updatefood(req, res) {
  let id = req.params.id;
  const obj = req.body;
  let updatedThing =await thingInstance.update(id, obj);
  res.status(200).json(updatedThing);
}

async function deletefood(req, res) {
  let id = req.params.id;
  let deleted = await thingInstance.delete(id);
  let msg = deleted ? 'Item is deleted': 'Item was not Found';
  let statusCode = deleted ? 202 : 204;
  res.status(statusCode).json({
    msg: msg,
    deleted: deleted,
  });
}


module.exports = router;