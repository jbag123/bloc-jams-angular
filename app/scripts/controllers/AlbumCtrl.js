(function() {
        function AlbumCtrl() {
                // create an empty array
                this.albumData = albumPicasso;
        }
        angular
                .module('blocJams')
                .controller('AlbumCtrl', AlbumCtrl);
})();
