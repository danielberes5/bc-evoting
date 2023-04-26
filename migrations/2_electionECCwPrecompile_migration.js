var Election = artifacts.require("./ElectionECCwPrecompile.sol");
var preCompiles = artifacts.require("./eccPrecompiles.sol");

module.exports = function(deployer) {
    deployer.deploy(preCompiles);

    deployer.link(preCompiles, Election);
    deployer.deploy(Election, "Is it a question?");
};
