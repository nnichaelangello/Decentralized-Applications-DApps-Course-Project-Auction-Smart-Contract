let Auction = artifacts.require("./Auction.sol");

let auctionInstance;

contract('AuctionContract', function (accounts) {
  // Test case 1: Contract deployment
  it("Contract deployment", function() {
    return Auction.deployed().then(function (instance) {
      auctionInstance = instance;
      assert(auctionInstance !== undefined, 'Auction contract should be defined');
    });
  });

  // Test case 2: Register bidders
  it("Should set bidders", function() {
    return auctionInstance.register({from: accounts[1]}).then(function(result) {
      return auctionInstance.getPersonDetails(0);
    }).then(function(result) {
      assert.equal(result[2], accounts[1], 'bidder address set');
    });
  });

  // Test case 3: Should NOT allow to bid more than remaining tokens
  it("Should NOT allow to bid more than remaining tokens", function() {
    return auctionInstance.bid(0, 6, {from: accounts[1]})
    .then(function (result) {
      throw("Failed to check remaining tokens less than count");
    }).catch(function (e) {
      if (e === "Failed to check remaining tokens less than count") {
        assert(false, "Bid should fail if tokens are insufficient");
      } else {
        assert(true, "Bid correctly failed due to insufficient tokens");
      }
    });
  });

  // Test case 4: Should NOT allow non-owner to reveal winners
  it("Should NOT allow non owner to reveal winners", function() {
    return auctionInstance.revealWinners({from: accounts[1]})
    .then(function (instance) {
      throw("Failed to check owner in reveal winners");
    }).catch(function (e) {
      if (e === "Failed to check owner in reveal winners") {
        assert(false, "Non-owner should not be able to reveal winners");
      } else {
        assert(true, "Non-owner correctly failed to reveal winners");
      }
    });
  });

  // Test case 5: Should set winners
  it("Should set winners", function() {
    return auctionInstance.register({from: accounts[2]})
    .then(function(result) {
      return auctionInstance.register({from: accounts[3]});
    }).then(function() {
      return auctionInstance.register({from: accounts[4]});
    }).then(function() {
      return auctionInstance.bid(0, 5, {from: accounts[2]});
    }).then(function() {
      return auctionInstance.bid(1, 5, {from: accounts[3]});
    }).then(function() {
      return auctionInstance.bid(2, 5, {from: accounts[4]});
    }).then(function() {
      return auctionInstance.revealWinners({from: accounts[0]});
    }).then(function() {
      return auctionInstance.winners(0);
    }).then(function(result) {
      assert.notEqual(result, '0x0000000000000000000000000000000000000000', 'Winner for item 0 should be set');
      return auctionInstance.winners(1);
    }).then(function(result) {
      assert.notEqual(result, '0x0000000000000000000000000000000000000000', 'Winner for item 1 should be set');
      return auctionInstance.winners(2);
    }).then(function(result) {
      assert.notEqual(result, '0x0000000000000000000000000000000000000000', 'Winner for item 2 should be set');
    });
  });
});