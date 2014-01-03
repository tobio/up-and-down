define(['../upanddown'], function(module) {
    var systems = [{
        title: 'Basic',
        score: function(bid, won) {
            return Math.abs(bid - won);
        }
    }, {
        title: 'Ben\'s scoring',
        score: function(bid, won) {
            return won + (bid === won ? 10 : 0);
        }
    }];
    
    module.factory('ScoringSystemProvider', function() {
        return {
            available: systems
        };
    });
});