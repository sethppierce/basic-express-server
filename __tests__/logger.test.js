'use strict';

const logger = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('adds a timestamp', () => {
    logger(req, res, next);

    expect(req.timestamp).toBeTruthy();
    expect(req.timestamp).toBeInstanceOf(Date);
    expect(typeof(req.timestamp)).toEqual('object');
  });

  it('logs as expected', () => {
    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith('logged at ', req.timestamp);
  });

  it('calls next as expected', () => {
    logger(req, res, next);

    expect(next).toHaveBeenCalledWith();
    expect(next).not.toHaveBeenCalledWith('this should fail');
  });
});
