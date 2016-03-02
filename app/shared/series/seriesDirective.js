var app = angular.module("myApp");

app.directive('seriesShort', function () {
    return {
        restrict: 'E',
        templateUrl: './app/shared/series/html/my-series-short.html',
        replace:true
    };
});

app.directive('seriesLong', function () {
    return {
        restrict: 'E',
        templateUrl: './app/shared/series/html/my-series-long.html',
        replace:true
    };
});