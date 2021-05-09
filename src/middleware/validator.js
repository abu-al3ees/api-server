'use strict';

module.exports = (req, res, next)=> {
  if(req.query){
    let pass = req.query.name;
    if(pass){
      next();
    }else{
      next('something went wrong in the name');
    }}else{
    next('something went wrong with query');
  }
};