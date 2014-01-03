define([
        '../upanddown', 
        '../dir/newPlayer', 
        '../svc/scoringSystemProvider',
        '../svc/gameMgr'
    ], 
function(module) {
    module.controller('NewGameCtrl', [
        '$scope', 
        '$timeout',
        'ScoringSystemProvider',
        'GameManager',
        function($scope, $timeout, ScoringSystemProvider, GameManager) {
            function reset() {
                $scope.players = []; 
                $scope.blank = {};
                $scope.scoringSystems = ScoringSystemProvider.available;
                $scope.selectedScoringSystem = $scope.scoringSystems[0];
                $scope.currentDealer = null;
            }
            
            function flashError(times, on) {
                $scope.errorClass = on ? 'panel-danger' : '';
                
                if(times > 0) {
                    times = on ? times - 1 : times;
                    $timeout(flashError.bind(null, times, !on), 300);
                }
            }
            
            $scope.add = function(player) {
                $scope.blank = {};
                
                if(!$scope.currentDealer) {
                    player.dealer = true;
                    $scope.currentDealer = player;
                }
                
                $scope.players.push(player);
                
                return true;
            };
            
            $scope.remove = function(player) {
                $scope.players.splice($scope.players.indexOf(player), 1);
            };
            
            $scope.setDealer = function(player) {
                $scope.currentDealer.dealer = false;
                
                player.dealer = true;
                $scope.currentDealer = player;
            }
            
            $scope.start = function() {
                if($scope.players.length < 3) {
                    flashError(2, true);
                    return;
                }
                
                GameManager.startGame($scope.players, $scope.selectedScoringSystem);                
                reset();
            };
            
            reset();
        }
    ]);
});