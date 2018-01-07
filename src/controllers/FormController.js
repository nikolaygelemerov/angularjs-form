MainApp.controller('FormController', ['$scope', 'httpService', function ($scope, httpService) {

    const URL = 'http://localhost:9000/form';

    $scope.registration = {
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: null,
        phone: null,
        password: '',
        retypePassword: ''
    };

    $scope.countries = [];

    $scope.fetchCountries = function() {
        httpService.requests.get(URL)
            .then(function(response) {
                if (response.data && response.data.length) {
                    $scope.countries = response.data;
                    $scope.registration.phoneCode = response.data[0].phoneCode;
                }
            })
            .catch(function(error) {
                console.error(error);
            })
    };

    $scope.submitForm = function() {
        httpService.requests.post(URL, $scope.registration)
            .then(function(response) {
                if (response.data && response.data.errorCode === 0) {
                    alert('Успешна Регистрация!')
                }
            })
            .catch(function(error) {
                console.error(error);
            });
    };

}]);