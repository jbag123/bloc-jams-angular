(function() {
  function Metric($rootScope, $location) {
    $rootScope.songPlays = [];
    $rootScope.pageLoad = [];

    return {
      // Function that records a song object by pushing it to the $rootScope array
      registerSongPlay: function(songObj) {
        songObj['time'] = new Date();
        $rootScope.songPlays.push(songObj['time']);
        $rootScope.songPlays.push(songObj['title']);
      },
      // function that lists songs from the $rootScope array
      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
            songs.push(song);
        });
        return songs;
      },
     // function that records page loads (song and album)
     registerPageLoad: function() {
       var pages = [];
       var searchObject = $location.search();
       // add count of that page load to array
       $rootScope.pageLoad.push(searchObject.slug);
       console.log($rootScope.pageLoad);
       pages.push(searchObject.slug);
       // return array
       return pages;
     }
    };
  }

  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', '$location', Metric]);
})();
