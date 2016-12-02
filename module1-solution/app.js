(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = ""

        $scope.checkIfTooMuch = function () {
            if ($scope.lunchItems == "" || $scope.lunchItems == " ")
                $scope.message = 'Please enter data first';
            else {
                var lunchItems = $scope.lunchItems.split(',');
                if (lunchItems.length <= 3)
                    $scope.message = 'Enjoy!';
                else
                    $scope.message = 'Too much!';
            }
        };
    }
})();