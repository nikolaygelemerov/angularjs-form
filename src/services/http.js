MainApp.factory('httpService', ['$http',
    function ($http) {
        return {
            requests: {
                get: get,
                post: post
            }
        };

        //url, postData
        function post(url, postData) {
            return $http({
                method: 'POST',
                url: url,
                data: postData
            });
        }

        //url, params(optional)
        function get(url) {
            return $http({
                method: 'GET',
                url: url
            });
        }

    }]);
