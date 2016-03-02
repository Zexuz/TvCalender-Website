"use strict";
class ImdbApi extends RestApi {


    constructor($http, baseUrl) {
        super($http, baseUrl);
    }

    getAllSeries(callback) {
        this.sendGet("/Series", callback);
    }

    getSpecificSeries(id, callback) {
        this.sendGet("/Series/" + id, callback);
    }
}


var app = angular.module('myApp');
app.factory('imdbApi', ['$http', function ($http) {
    return new ImdbApi($http, "http://localhost:8080/api/ImdbService/v1");
}]);

