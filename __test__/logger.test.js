'use strict';
const logger = require('../src/middleware/logger.js');
// spy on calling the console log or not

describe('Logger middleware', ()=> {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  
  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
    
 
  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  it('logs the output', ()=> {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
    
});