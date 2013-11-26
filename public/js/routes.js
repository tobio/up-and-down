define(['upanddown'], function(module) {
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/new', {
                templateUrl: '/new-game.html',
                controller: 'NewGameCtrl'
            }).
            otherwise({
                templateUrl: '/home.html',
            })
    }]);
});