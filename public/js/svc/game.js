define(['./hand'], function(Hand) {
    function Game(players, scoring) {
        var initialDealer,
            dealerIndex,
            that = this;
        
        initialDealer = players.filter(function(p) {
            return p.dealer
        })[0] || players[0];
        
        dealerIndex = players.indexOf(initialDealer);
        
        this.players = players;
        this.scoring = scoring;
        this.remainingHands = [
            7,6,5,4,3,2,1,1,2,3,4,5,6,7
        ].map(function(tricks) {
            var hand = new Hand(that, players[dealerIndex], dealerIndex, tricks);
                
            dealerIndex = (dealerIndex + 1) % players.length;
            
            return hand;
        }).reverse();
        
        this.nextHand();        
    }
    
    Game.prototype.nextHand = function() {
        this.thisHand = this.remainingHands.pop();
        this.thisHand.start();
    };
    
    return Game;
});