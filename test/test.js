var utils = require("../utils");

var assert = require('assert');
describe('TEST', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  
  describe('equal to 1', function() {
    it('show be 1', function() {
      assert.equal(utils.showcase(), 1);
    });
  });
  
  describe('this one fails', function() {
    it('show fail1', function() {
      assert.equal(utils.showcase(), 2);
    });
    
     it('show fail2', function() {
      assert.equal(utils.showcase(), 3);
    });
  });
});
