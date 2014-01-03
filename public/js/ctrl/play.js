define(['../upanddown', '../svc/gameMgr', './bidPlay'], function(module, mgr, BidPlay) {
    module.controller('PlayCtrl', [
        '$scope',
        'GameManager',
        '$location',
        function($scope, GameManager, $location) {
            $scope.tricks = function() {
                return $scope.hand.getAvailableTricks(this.player);
            };
            
            $scope.set = function(player, tricks) {
                $scope.hand.won(player, tricks);
            };
            
            this.getSelected = function(player) {
                return $scope.hand.getWon(player);    
            };
            
            BidPlay.call(this, 'Enter tricks won', '/scorecard', $scope, GameManager, $location);
        }]);
});