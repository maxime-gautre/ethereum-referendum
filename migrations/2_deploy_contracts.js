var Referendum = artifacts.require("./Referendum.sol");

module.exports = function(deployer) {
  deployer.deploy(Referendum, "First question ?");
  deployer.deploy(Referendum, "Second question ?");
};
