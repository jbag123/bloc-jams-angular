(function() {
  function recordSong(Metric, $rootScope) {
    return {
      templateUrl: '/templates/directives/record_song.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
        scope.callService = function(song) {
          Metric.registerSongPlay(song);
          console.log(song);
        }
        scope.listSongs = function() {
          Metric.listSongsPlayed();
        }
      }
    };
  }

  angular
    .module('blocJams')
    .directive('recordSong', ['Metric', '$rootScope', recordSong]);
})();
