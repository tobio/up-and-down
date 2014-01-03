require.config({
    paths: {
        angular: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min',
        domReady: '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',
        text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text.min',
        ngRoute: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-route',
        ngAnimate: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-animate',
        ngBootstrap: '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.9.0/ui-bootstrap-tpls'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngRoute: {
            deps: ['angular']
        },
        ngAnimate: {
            deps: ['angular']
        },
        ngBootstrap: {
            deps: ['angular']
        }
    }
});

require(
['angular', 'domReady!', 'upanddown', 'routes'], 
function(angular, doc) {
    angular.bootstrap(doc, ['upanddown']);
});