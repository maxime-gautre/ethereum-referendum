var Referendum = artifacts.require("./Referendum.sol");

function getScore(result) {
  return result.map(function (el) {
    return el.c[0]
  })
}
contract('Referendum', function (accounts) {
  it("should initialize the result to zero", function () {
    return Referendum.deployed().then(function (instance) {
      return instance.getResult.call();
    }).then(function (result) {
      assert.deepEqual(getScore(result), [0, 0, 0], "result not empty");
    });
  });

  it("should authorize vote", function() {
    var referendum;
    return Referendum.deployed().then(function (instance) {
      referendum = instance;
      return referendum.sayYes({from: accounts[0]})
    }).then(function () {
      return referendum.sayNo({from: accounts[1]});
    }).then(function () {
      return referendum.getResult.call();
    }).then(function (result) {
      assert.deepEqual(getScore(result), [1, 1, 2], "votes not count");
    });
  });
});

// previous state are clear before each contract
contract('Referendum', function (accounts) {

  it("should not authorize to vote twice", function () {
    var referendum;
    return Referendum.deployed().then(function (instance) {
      referendum = instance;
      return referendum.sayYes({from: accounts[1]})
    }).then(function () {
      return referendum.sayNo({from: accounts[1]});
    }).then(function () {
      return referendum.getResult.call();
    }).then(function (result) {
      assert.deepEqual(getScore(result), [1, 0, 1], "votes not count");
    });
  })
});