(function(){

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
		.when('/list', {
			templateUrl: 'views/list.html',
			controller: 'ListController'
		})
		.when('/detail/:id', {
			templateUrl: 'views/detail.html',
			controller: 'DetailController'
		})
		.otherwise({
			redirectTo: '/list'
		});
});

myApp.controller('ListController', ['$scope','FlickrApi', 
	function ($scope, FlickrApi) {
	
		FlickrApi.then(function(data){
			$scope.posts = data;	
		});

}]);

myApp.controller('DetailController', ['$scope','FlickrApi', '$routeParams',
	function ($scope, FlickrApi, $routeParams) {
	
		FlickrApi.then(function(data){
			$scope.post = data;
			$scope.id = $routeParams.id;
		});

}]);

angular.module('myApp')
.factory('FlickrApi', ['$http', '$q', 
	function ($http, $q) {
	    var defer = $q.defer();
	
	    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
	      .then(function(result) {
	        defer.resolve(result.data.items);
	      });
	    return defer.promise;
	}]);

angular.module('myApp') //Filter created by Leeroy Brun http://stackoverflow.com/a/21254635
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
           return $sce.trustAsHtml(text);
        };
    }]);


})();