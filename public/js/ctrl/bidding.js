define(['../upanddown', '../svc/gameMgr', './bidPlay'], function(module, mgr, BidPlay) {
    module.controller('BiddingCtrl', [
        '$scope',
        'GameManager',
        '$location',
        function($scope, GameManager, $location) {
            $scope.tricks = function() {
                return $scope.hand.getAvailableBids(this.player);
            };
            
            $scope.set = function(player, tricks) {
                $scope.hand.bid(player, tricks);
            };
            
            this.getSelected = function(player) {
                return $scope.hand.getBid(player);
            };
            
            BidPlay.call(this, 'Enter bids', '/play', $scope, GameManager, $location);
        }]);
});