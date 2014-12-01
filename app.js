;(function(){

    var syringeApp = angular.module('syringeApp', ['ngMap', 'reviewData'])


    //Search Bar Control. Currently stores data...
    syringeApp.controller('SearchCtrl', ['$scope', 'reviews', function($scope, reviews){
        $scope.data = reviews;    
    }]);

})();