define(['../upanddown', '../dir/player'], function(module) {
    module.controller('NewGameCtrl', ['$scope', function($scope) {
        $scope.players = []; 
        $scope.blank = {};
        $scope.scoringSystems = [{ // Get this list from a provider
            name: 'Basic'
        }, {
            name: 'Ben\'s scoring'
        }];
        $scope.selectedScoringSystem = $scope.scoringSystems[0];
        
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