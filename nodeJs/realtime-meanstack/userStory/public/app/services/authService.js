/**
 * Created by Truong on 25-Apr-16.
 */
angular.module('authService', [])
    .factory('Auth', function ($http, $q, AuthToken) {
        var authFactory = {};
        authFactory.login = function (username, password) {
            return $http.post('/api/login', {
                username: username,
                password: password
            })
                .success(function (data) {
                    if (data.success)
                        AuthToken.setToken(data.token);
                    return data;
                })
                .error(function (err) {
                    console.log("Error api/login : " + err);
                });
        };

        authFactory.logout = function () {
            AuthToken.setToken();
        };

        authFactory.isLoggedIn = function () {
            return AuthToken.getToken();
        };

        authFactory.getUser = function () {
            if (AuthToken.getToken()) {
                return $http.get('/api/me')
                    .success(function (success) {
                        console.log("Success /api/me : " + success.id);
                    })
                    .error(function (err) {
                        console.log("Error : " + err.message);
                    });
            }
            else {
                return $q.reject({message: "User has no token"});
            }
        };

        return authFactory;
    })
    .factory('AuthToken', function ($window) {
        var authTokenFactory = {};

        authTokenFactory.getToken = function () {
            return $window.localStorage.getItem('token');
        };

        authTokenFactory.setToken = function (token) {
            if (token)
                return $window.localStorage.setItem('token', token);
            else
                return $window.localStorage.removeItem('token');
        };

        return authTokenFactory;
    })
    .factory('AuthInterceptor', function ($q, $location, AuthToken) {
        var interceptorFactory = {};

        interceptorFactory.request = function (config) {
            var token = AuthToken.getToken();

            if (token) {
                config.headers['x-access-token'] = token;
            }

            return config;
        };

        interceptorFactory.responseError = function (response) {
            if (response.status = 403)
                $location.path('/login');

            return $q.reject(response);
        };

        return interceptorFactory;
    });