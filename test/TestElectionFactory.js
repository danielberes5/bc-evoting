var ElectionFactory = artifacts.require("ElectionFactory");

contract('ElectionFactory', function(accounts) {

    let electionFactoryInstance;

    it("Bárki készíthet új szavazó szerződést", function () {
        return ElectionFactory.deployed().then(function (instance) {
            electionFactoryInstance = instance;
            electionFactoryInstance.createNewElection("Ez egy kérdés?", 1956);
            return electionFactoryInstance.electionAddresses.call(1956).then(function (address) {
                console.log("Létrehozott szavzó szerzűdés címe", address);
                assert.notEqual(address, "0x00", "Az új szavazó szerződés nem jött létre");
            });
        });

    });
});
