define(['../upanddown', './game'], function(module, Game) {    
    function GameManager($location) {
        this.current = {};
        this.$l = $location;
    }
    
    GameManager.prototype.startGame = function(players, scoring) {
        this.current.game = new Game(players, scoring);
                
        this.$l.path('/bid');
    };
    
    module.service('GameManager', [
        '$location',
        GameManager
    ]);
});