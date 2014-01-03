define([], function() {
    function BidPlay(title, nextRoute, $scope, GameManager, $location) {
        var that = this, oldSet,
            game = GameManager.current.game;
        
        if(!game) {
            $location.path('/');
            return;
        }
        
        $scope.title = title;
        $scope.hand = game.thisHand;
        $scope.activeIndex = 0;
        
        $scope.$watch('activeIndex', function(newValue) {
             if(newValue === game.players.length) {
                 $location.path(nextRoute);
             }
        });
                        
        $scope.distanceFromDealer = function(player) {
            return $scope.hand.playerOrder(player);
        };
            
        $scope.getTrickClass = function(player, tricks) {
            return that.getSelected(player) === tricks ? 
                'btn-primary' : 'btn-default';
        };
        
        oldSet = $scope.set;
        $scope.set = function(player, tricks, index) {
            oldSet.call(this, player, tricks, index);
            
            if(index == $scope.activeIndex) {
                $scope.activeIndex++;
            }
        };
    } 
    
    return BidPlay;
});