var app = angular.module('myApp', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl: './app/components/home/homeView.html',
                controller: 'HomeController'
            })

            .when('/series/:seriesId', {
                templateUrl: './app/components/series/series.html',
                controller: 'SeriesController'
            })

            .otherwise({
                redirectTo: '/home'
            });
    }]);