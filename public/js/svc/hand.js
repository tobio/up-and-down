define([], function() {   
    function sumNonDealerEntries(results, dealer, type) {       
        function accumulator(sum, currentPlayer) {
            var result = results[currentPlayer][type];
            
            return currentPlayer === dealer ? 
                sum : 
                sum + result || 0;
        }
        
        return Object.keys(results).reduce(accumulator, 0);
        
    }
    function sumNonDealerBids(results, dealer) {    
        return sumNonDealerEntries(results, dealer, 'bid');
    };
    
    function sumNonDealerTricks(results, dealer) {        
        return sumNonDealerEntries(results, dealer, 'won');
    };
    
    function Hand(game, dealer, dealerIndex, tricks) {
        this.game = game;
        this.dealer = dealer;
        this.dealerIndex = dealerIndex;
        this.tricks = tricks;
        this.results = {};
    }
    
    Hand.prototype.getAvailableBids = function(player) {
        var bids = [], 
            tricks = this.tricks,
            disallowed;
        
        if(player === this.dealer) {
            disallowed = tricks - sumNonDealerBids(this.results, this.dealer.name);
        }
        
        for(var i = 0; i <= tricks; i++) {
            if(i !== disallowed) bids.push(i);
        }
        
        return bids;
    };
    
    Hand.prototype.getAvailableTricks = function(player) {
        var bids = [], 
            tricks = this.tricks,
            remaining;
        
        if(player === this.dealer) {
            remaining = tricks - sumNonDealerTricks(this.results, this.dealer.name);
            
            return [ remaining ];
        }
        
        for(var i = 0; i <= tricks; i++) {
            bids.push(i);
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
        this.results[player.name] = { bid: tricks };  
    };
    
    Hand.prototype.getBid = function(player) {
        return getResult(this.results, player, 'bid');
    };
    
    Hand.prototype.won = function(player, tricks) {
        var result = this.results[player.name];
        
        result.won = tricks;
        result.score = this.game.scoring.score(result.bid, result.won);
    };
    
    Hand.prototype.getWon = function(player) {
        return getResult(this.results, player, 'won');
    };
    
    function getResult(results, player, type) {
        var result = results[player.name];
        
        return result && result[type];
    }
    
    return Hand;
});