define([], function() {    
    function sumNonDealerBids(bids, dealer) {        
        function accumulator(sum, currentPlayer) {
            return currentPlayer === dealer ? 
                sum : 
                sum + bids[currentPlayer];
        }
        
        return Object.keys(bids).reduce(accumulator, 0);
    };
    
    function Hand(game, dealer, dealerIndex, tricks) {
        this.game = game;
        this.dealer = dealer;
        this.dealerIndex = dealerIndex;
        this.tricks = tricks;
        this.bids = {};
    }
    
    Hand.prototype.getAvailableBids = function(player) {
        var bids = [], 
            tricks = this.tricks,
            disallowed;
        
        if(player === this.dealer) {
            disallowed = tricks - sumNonDealerBids(this.bids, this.dealer.name);
        }
        
        for(var i = 0; i <= tricks; i++) {
            if(i !== disallowed) bids.push(i);
        }
        
        return bids;
    };
    
    Hand.prototype.start = function() {
        this.dealer.dealer = true;  
    };
    
    Hand.prototype.done = function() {
        this.dealer.dealer = false;
    }
    
    Hand.prototype.playerOrder = function(player) {        
        var playerIndex = this.game.players.indexOf(player);
        
        if(playerIndex <= this.dealerIndex) {
            playerIndex += this.game.players.length;
        }
        
        return playerIndex - this.dealerIndex;
    };
    
    Hand.prototype.bid = function(player, tricks) {
        this.bids[player.name] = tricks;  
    };
    
    Hand.prototype.getBid = function(player) {
        return this.bids[player.name];
    }
    
    return Hand;
});