(function() {
  function recordSong(Metric) {
    return {
      templateUrl: '/templates/directives/record_song.html',
      replace: true,
      restrict: 'E',
      scope: true,
      link: function(scope, element, attributes) {
        scope.callService = function(song) {
          Metric.registerSongPlay(song);
        }
      }
    };
  }

  angular
    .module('blocJams')
    .directive('recordSong', ['Metric', recordSong]);
})();
