'use strict';

const express = require('express');
const router = express.Router();
// class
const Food = require('../models/food.js');
//new obj from the class
const thingInstance = new Food(); 


router.get('/food', getfood);
router.get('/food/:id', getOnefood);
router.post('/food', createfood);
router.put('/food/:id', updatefood);
router.delete('/food/:id', deletefood);


function getfood(req, res) {
  // get all items
  let items = thingInstance.get();
  res.status(200).json(items);
}

function getOnefood(req, res) {
  let id = parseInt(req.params.id); 
  let oneItem = thingInstance.get(id);
  res.status(200).json(oneItem);
}

function createfood(req, res) {
  
  let obj = req.body;
  let newItem = thingInstance.create(obj);
  res.status(201).json(newItem);
}

function updatefood(req, res) {
  let id = parseInt(req.params.id);
  const obj = req.body;
  let updatedThing = thingInstance.update(id, obj);
  res.status(200).json(updatedThing);
}

function deletefood(req, res) {
  let id = parseInt(req.params.id);
  let deleted = thingInstance.delete(id);
  let msg = deleted ? 'Item is deleted': 'Item was not Found';
  let statusCode = deleted ? 202 : 204;
  res.status(statusCode).json({
    msg: msg,
    deleted: deleted,
  });
}


module.exports = router;