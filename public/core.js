// public/core.js
var syringeApp = angular.module('syringeApp', ['ngMap']);

syringeApp.factory('Pharmacy', ['$http', function($http) {
        return {
            get: function() {
                return $http.get('/api/pharmacy');
            },
            create: function(pharmdata) {
                return $http.post('/api/pharmacy', pharmdata);
            },
            delete: function(id) {
                return $http.delete('/api/pharmacy/' + id);
            }
        }
    }]);

syringeApp.controller('SearchCtrl', ['$scope', '$http', 'Pharmacy', function($scope, $http, Pharmacy){
    $scope.data = {};
    
    $scope.ratings = [
        {rate: '5'},
        {rate: '4'},
        {rate: '3'},
        {rate: '2'},
        {rate: '1'}];

    //GET ==============================
    //when landing on the front page, get all todos and show them
    Pharmacy.get()
        .success(function(inputs){
            $scope.pharmdata = inputs;
        })

    //CREATE ================================
    //upon creation of a new todo
    $scope.createPharm = function() {
        //validate the data to ensure something is there
        //else nothing happens
        if(!$.isEmptyObject($scope.data)){
            //Calls the create function from our service (promise object)
            Pharmacy.create($scope.data)
                .success(function(inputs){
                    $scope.data = {}
                    $scope.pharmdata = inputs;
                });
        }
    };

    //DELETE ================================
    //delete todo on click
    $scope.deletePharm = function(id) {
        Pharmacy.delete(id)
            .success(function(inputs){
                $scope.pharmdata = inputs;
            });
    };
    
    //CENTER MAP ========================
    $scope.centerMap = function(addr) {
        var geocoder = new google.maps.Geocoder()
        var lat, long;
        geocoder.geocode({'address': addr},function(results, status){
            $scope.map.setCenter({
                lat: results[0].geometry.location.k,
                lng: results[0].geometry.location.B});
        });
    };
    
    //HIGHLIGHT DIV ======================
    $scope.highlightDiv = function($index) {
        if($scope.selectedIndex == $index)
            $scope.selectedIndex = -1;
        else
            $scope.selectedIndex = $index;
    };
    
    $scope.high = function(location){
        console.log(location)
    };

}]);