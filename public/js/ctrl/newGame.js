define(['../upanddown', '../dir/player'], function(module) {
    module.controller('NewGameCtrl', ['$scope', function($scope) {
        $scope.players = []; 
        $scope.blank = {};
        
        $scope.add = function(player) {
            $scope.blank = {};
            
            $scope.players.push(player);
            
            return true;
        };
        
        $scope.remove = function(player) {
            $scope.players.splice($scope.players.indexOf(player), 1);
        };
    }]);
});