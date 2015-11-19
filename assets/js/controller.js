archiveApp.controller('photos',['$scope', 'photoFactory', function($scope,photoFactory){
          
          $scope.photos = [];
          loadPhotos();
          
          function loadPhotos(){
            photoFactory.getPhotos().success(function(data){
              photos  = x2js.xml_str2json(data);
              photo_items = photos.rss.channel.item;
              //console.log(photos.rss.channel.item);
              photo_items.forEach(function(obj){
                //console.log(obj);
                var img_link = obj.isShownBy[9];
                var img_title = obj.description;
                var img_height;
                var img_width;
                console.log(img_link + " + " + img_title);
              });
              $scope.photos = photo_items;
            }).error(function(data){
              console.log(data.status);
            });
            }
        }]);