(function() {
        function CollectionCtrl() {
                // create an empty array
                this.albums = [];
                // loop 12 times
                for (var i = 0; i < 12; i++) {
                        // push copies of albumPicasso to the empty array
                        this.albums.push(angular.copy(albumPicasso));
                }
        }
        angular
                .module('blocJams')
                .controller('CollectionCtrl', CollectionCtrl);
})();
