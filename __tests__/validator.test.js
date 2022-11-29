'use strict';

const validator = require('../src/middleware/validator');

describe('logger middleware', () => {
  let req = {query: {}};
  let res = {};
  let next = jest.fn();

  it('calls next as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('No Name inputted');
    expect(next).not.toHaveBeenCalledWith('this should fail');
  });

});
