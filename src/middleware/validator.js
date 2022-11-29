'use strict';

module.exports = (req, res, next) => {
  if(req.query.name) {
    res.status(200).send({'name': req.query.name});
  }else{
    next('No Name inputted');
  }
};
