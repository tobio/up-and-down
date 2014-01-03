define(['upanddown', 'ctrl/newGame', 'ctrl/bidding', 'ctrl/play'], function(module) {
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/new', {
                templateUrl: '/new-game.html',
                controller: 'NewGameCtrl'
            }).
            when('/bid', {
                templateUrl: '/bidPlay.html',
                controller: 'BiddingCtrl'
            }).
            when('/play', {
                templateUrl: '/bidPlay.html',
                controller: 'PlayCtrl'
            }).
            otherwise({
                templateUrl: '/home.html',
            })
    }]);
});