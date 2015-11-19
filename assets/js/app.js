var archiveApp = angular.module('photosApp',['masonry']);


archiveApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
          delete $httpProvider.defaults.headers.common["X-Requested-With"];
          $httpProvider.defaults.headers.common["Accept"] = "application/json";
          $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
          $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
          $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT, DELETE';
          //$httpProvider.defaults.headers.common['Access-Control-Request-Method'] = '*';
          $httpProvider.defaults.headers.common['Access-Control-Expose-Headers'] = 'json';
          $httpProvider.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    }
]);

/*archiveApp.service('imageService',['$q','$http',function($q,$http){
        this.getPhotos = function(){
            return $http.get("http://www.gahetna.nl/beeldbank-api/opensearch/?q=2.24.09");
          }
    }]);*/

