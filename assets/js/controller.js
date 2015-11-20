archiveApp.controller('photos',['$scope', 'photoFactory', function($scope,photoFactory){
          
          $scope.photos = [];
          $scope.animate = false;
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
                //console.log(img_link + " + " + img_title);
              });
              $scope.photos = photo_items;
            }).error(function(data){
              console.log(data.status);
            });
          }

          $scope.findIndex = function(elemid){
            //console.log(elemid);

            var clickedItem = $scope.photos[elemid];
            var elemTitle = $scope.photos[elemid].description;
            var elemSrc = $scope.photos[elemid].isShownBy[9].__text;
            //console.log(clickedItem);
            angular.element('.overlay .h2_title').text(elemTitle);
            angular.element('.overlay #elemPhoto').attr('src', elemSrc);

            angular.element('.overlay').addClass('active');
            angular.element('body').addClass('noscroll');
            $scope.animate = true;
          }

          $scope.closeOverlay = function() {
            $scope.animate = false;
            angular.element('body').removeClass('noscroll');
            angular.element('.overlay').removeClass('active');
          }
        }]);