define(['../upanddown', '../svc/gameMgr'], function(module) {
    module.controller('PlayCtrl', function() {});
    module.controller('BiddingCtrl', [
        '$scope',
        'GameManager',
        '$location',
        function($scope, GameManager, $location) {
            var game = GameManager.current.game;
            
            if(!game) {
                $location.path('/');
                return;
            }
            
            $scope.hand = game.thisHand;
            $scope.biddingIndex = 0;
            
            $scope.$watch('biddingIndex', function(newValue) {
                 if(newValue === game.players.length) {
                     $location.path('/play');
                 }
            });
                            
            $scope.distanceFromDealer = function(player) {
                return $scope.hand.playerOrder(player);
            };
            
            $scope.getAvailableBids = function(player) {
                return $scope.hand.getAvailableBids(player);
            };
            
            $scope.bid = function(player, tricks, index) {
                $scope.hand.bid(player, tricks);
                
                if(index == $scope.biddingIndex) {
                    $scope.biddingIndex++;
                }
            };
            
            $scope.getBidClass = function(player, tricks) {
                return $scope.hand.getBid(player) === tricks ? 
                    'btn-primary' : 'btn-default';
            };
        }]);
});