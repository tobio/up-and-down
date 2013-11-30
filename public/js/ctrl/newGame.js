define(['../upanddown', '../dir/player', '../svc/scoringSystemProvider'], function(module) {
    module.controller('NewGameCtrl', [
        '$scope', 
        '$timeout',
        'ScoringSystemProvider',
        function($scope, $timeout, ScoringSystemProvider) {
            $scope.players = []; 
            $scope.blank = {};
            $scope.scoringSystems = ScoringSystemProvider.available;
            $scope.selectedScoringSystem = $scope.scoringSystems[0];
            
            function flashError(times, on) {
                $scope.errorClass = on ? 'panel-danger' : '';
                
                if(times > 0) {
                    times = on ? times - 1 : times;
                    $timeout(flashError.bind(null, times, !on), 300);
                }
            }
            
            $scope.add = function(player) {
                $scope.blank = {};
                
                $scope.players.push(player);
                
                return true;
            };
            
            $scope.remove = function(player) {
                $scope.players.splice($scope.players.indexOf(player), 1);
            };
            
            $scope.start = function() {
                if(!$scope.players.length) flashError(2, true);
            };
        }
    ]);
});