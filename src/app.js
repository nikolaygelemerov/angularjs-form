var MainApp = angular.module('mainModule', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(false);

        $routeProvider
            .when('/', {
                templateUrl: './views/homeController.html',
                controller: 'HomeController'
            })
            .when('/form', {
                templateUrl: './views/formController.html',
                controller: 'FormController'
            })
            .otherwise({
                redirectTo: '/'
            })
        ;
    })
    .controller('MainController', function ($scope, $location) {

        $scope.goToForm = function () {
            $location.path('form');
        };

    })
;