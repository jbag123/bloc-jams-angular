(function() {
  function Metric($rootScope, Fixtures) {
    $rootScope.songPlays = [];

    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerSongPlay: function(songObj) {
        // Add time to event register
        var album = Fixtures.getAlbum();
        songObj['title'] = album.title;
        $rootScope.songPlays.push(songObj);
        console.log(songObj);
      },
      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
            songs.push(song);
        });
        console.log(songs);
      }
    };
  }

  angular
    .module('blocJams')
    .service('Metric', ['Fixtures','$rootScope', Metric]);
})();
