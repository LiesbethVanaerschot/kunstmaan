archiveApp.controller('photos',function($scope,photoFactory){
          
          $scope.photos = [];
          loadPhotos();
          
          function loadPhotos(){
            photoFactory.getPhotos().success(function(data){
              photos  = x2js.xml_str2json(data);
              console.log(photos.rss.channel.item);
              $scope.photos = photos.rss.channel.item;
            });
            }
        });