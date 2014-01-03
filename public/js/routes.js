define(['upanddown', 'ctrl/newGame', 'ctrl/bidding'], function(module) {
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/new', {
                templateUrl: '/new-game.html',
                controller: 'NewGameCtrl'
            }).
            when('/bid', {
                templateUrl: '/bidding.html',
                controller: 'BiddingCtrl'
            }).
            when('/play', {
                templateUrl: '/play.html',
                controller: 'PlayCtrl'
            }).
            otherwise({
                templateUrl: '/home.html',
            })
    }]);
});