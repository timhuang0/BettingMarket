var Betting = artifacts.require("./Betting.sol");
var BettingMarket = artifacts.require("./BettingMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(Betting);
  deployer.deploy(BettingMarket);
};
