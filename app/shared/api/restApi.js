"use strict";
class RestApi {


    constructor($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
    }

    sendGet(path, callback) {
        this._sendRequest({
            method: 'GET',
            url: this._baseUrl + path
        }, callback);
    }

    sendPost(path, payLoad, callback) {
        this._sendRequest({
            method: 'POST',
            url: this._baseUrl + path,
            data: payLoad
        }, callback);
    }

    _sendRequest(options, callback) {
        this.$http(options).then(function successCallback(response) {
            callback(null, response);
        }, function errorCallback(response) {
            callback(response, null);
        });
    }

    set baseUrl(baseUrl) {
        this._baseUrl = baseUrl;
    }

    get baseUrl() {
        return this._baseUrl;
    }
}