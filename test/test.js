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
});