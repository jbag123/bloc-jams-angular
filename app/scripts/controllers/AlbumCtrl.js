(function() {
        function AlbumCtrl() {
                // create an empty array
                this.albumData = [];
                // loop 12 times
                for (var i = 0; i < 12; i++) {
                        // push copies of albumPicasso to the empty array
                        this.albumData.push(angular.copy(albumPicasso));
                }
        }
        angular
                .module('blocJams')
                .controller('AlbumCtrl', AlbumCtrl);
})();
