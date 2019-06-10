var utils = require("../utils");

var assert = require('assert');

// it('should return -1 when the value is not present', function() {
//   assert.equal([1,2,3].indexOf(4), -1);
// });

// xit('should fail', function() {
//       assert.equal(true, false);
// });

// it('should fail', function() {
//       assert.equal(true, false);
// });

describe('Pass', function() {
  it('should return -1 when the value is not present', function() {
    assert.equal([1,2,3].indexOf(4), -1);
  });
});

describe('fail on second', function() {
  it('should pass', function() {
    assert.equal(true, true);
    assert.equal(true, false);
  });
});

describe('pass', function() {
  it('show passes', function() {
    assert.equal(utils.showcase(), 1);
  });
});
    
//      it('show fail2', function() {
//       assert.equal(utils.showcase(), 2);
//     });
    
//     it('show fail3', function() {
//       assert.equal(utils.showcase(), 3);
//     });
//   });
// });
