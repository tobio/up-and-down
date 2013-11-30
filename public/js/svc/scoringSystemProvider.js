define(['../upanddown'], function(module) {
    var systems = [{
        title: 'Basic'
    }, {
        title: 'Ben\'s scoring'
    }];
    
    module.factory('ScoringSystemProvider', function() {
        return {
            available: systems
        };
    });
});