angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FeedController2', ['$scope', function($http, $scope){

     var blogDiv = document.getElementById("feed2")

     var url = 'https://script.google.com/macros/s/AKfycbzWIxdrunh7gmGlnaMvuHI5XLgkYCniG8f3BG24zw9z3k6hjUg/exec?530361544232542208'
          feednami.load(url,function(result){
        if(result.error){
              console.log(result.error)
          }
    else{
      var entries = result.feed.entries

      for(var i = 0; i < entries.length; i++){
        
      var entry = entries[i]

      var div = document.createElement('div')
        div.setAttribute('class','entry')
        div.innerHTML = '<p class="title feed2"><a href="'+entry.link+'" target="_blank">'+entry.title+'</a></p>'

        blogDiv.appendChild(div)

      }
    }
  })

}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
