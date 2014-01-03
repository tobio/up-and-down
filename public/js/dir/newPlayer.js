define(['../upanddown', 'text!./newPlayer.html'], function(module, template) {
    module.directive('udNewPlayer', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: template,
            scope: {
                player: '=',
                commit: '&',
                remove: '&',
                setDealer: '&'
            },
            link: function(scope, element, attributes) {
                function flashError(times, on) {
                    scope.errorClass = on ? 'has-error' : '';
                    
                    if(times > 0) {
                        times = on ? times - 1 : times;
                        $timeout(flashError.bind(null, times, !on), 300);
                    }
                }
                
                scope.editing = !scope.player.name;
                
                scope.edit = function() {
                    scope.editing = true;
                    
                    setTimeout(function() {
                        element.find('input')[0].focus();
                    }, 50);
                };
                scope.finalise = function(player) {
                    if(!scope.form.$valid) {
                        flashError(2, true);
                        return;
                    } 
                    
                    var commitResult = scope.commit({ player: player });                    
                    if(!commitResult) scope.editing = false;
                };
            }
        };
    }]);
});