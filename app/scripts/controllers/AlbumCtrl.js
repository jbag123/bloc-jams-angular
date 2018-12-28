(function() {
        function AlbumCtrl($document, $rootScope, Metric, Fixtures, SongPlayer) {
            this.albumData = Fixtures.getAlbum();
            this.songPlayer = SongPlayer;
            this.metrics = $rootScope.songPlays;
            this.metric = Metric;
        }
        angular
            .module('blocJams')
            .controller('AlbumCtrl', ['$document', '$rootScope', 'Metric', 'Fixtures', 'SongPlayer', AlbumCtrl]);
})();
