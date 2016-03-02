var app = angular.module('myApp', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

            .when('/series', {
                templateUrl: './app/components/home/homeView.html',
                controller: 'HomeController'
            })

            .when('/series/:seriesId', {
                templateUrl: './app/components/series/series.html',
                controller: 'SeriesController'
            })

            .otherwise({
                redirectTo: '/series'
            });
    }]);