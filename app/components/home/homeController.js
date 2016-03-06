var app = angular.module('myApp');

app.controller('HomeController', ['$scope', 'imdbApi', function ($scope, imdbApi) {
    imdbApi.getAllSeries(function (err, res) {
        if (err)
            return $scope.allSeries = err;

        res.data.forEach(function (item) {
            item.imgLink = item.imgLink.substring(0,item.imgLink.indexOf('_V1')+3);
            item.imgLink += "_SX300.jpg";
        });

        console.log(res.data);
        $scope.allSeries = res.data;

    });

}]);
