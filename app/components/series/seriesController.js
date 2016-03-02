var app = angular.module('myApp');

app.controller('SeriesController', ['$scope', 'imdbApi', '$routeParams', function ($scope, imdbApi, $routeParams) {

    imdbApi.getSpecificSeries($routeParams.seriesId, function (err, res) {
        if(err){
            $scope.status = "NOT FOUND";
        }

        var item = res.data;
        item.imgLink = item.imgLink.substring(0, item.imgLink.indexOf('_V1') + 3);
        item.imgLink += "_SY900.jpg";

        $scope.series = res.data;
    });
}]);

