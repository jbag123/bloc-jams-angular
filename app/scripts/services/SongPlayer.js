(function() {
        function SongPlayer($rootScope, Fixtures) {
                var SongPlayer = {};

                /**
                *@desc stores album information in the currentAlbum variable
                *@type {object}
                */
                var currentAlbum = Fixtures.getAlbum();

                var currentBuzzObject = null;

                /**
                * @function setSong
                * @desc Stops currently playing song and loads new audio file as currentBuzzObject
                * @param {Object} song
                */
                var setSong = function(song) {
                    if (currentBuzzObject) {
                        currentBuzzObject.stop();
                        SongPlayer.currentSong.playing = null;
                    }
                    /**
                    * @desc Buzz object audio file
                    * @type {Object}
                    */
                    currentBuzzObject = new buzz.sound(song.audioUrl, {
                        formats: ['mp3'],
                        preload: true
                    });

                    currentBuzzObject.bind('timeupdate', function() {
                            $rootScope.$apply(function() {
                                    SongPlayer.currentTime = currentBuzzObject.getTime();
                            });
                    });

                    SongPlayer.currentSong = song;
                };

                /**
                * @function playSong
                * @desc plays current buzz object and sets the playing property of the song object to true
                * @param {Object} song
                */
                var playSong = function(song) {
                        currentBuzzObject.play();
                        song.playing = true;
                }

                /**
                * @function stopSong
                * @desc stops current buzz object and sets the playing property of the song object to false
                * @param {Object} song
                */
                var stopSong = function(song) {
                        currentBuzzObject.stop();
                        song.playing = false;
                }

                /**
                *@function getSongIndex
                *@desc retrieve index of song
                *@param {object} song
                */
                var getSongIndex = function(song) {
                        return currentAlbum.songs.indexOf(song);
                }

                /**
                * @desc Active song object from list of songs
                * @type {Object}
                */
                SongPlayer.currentSong = null;

                /**
                *@desc Current playback time (in seconds) of currently playing song
                *@type {Number}
                */
                SongPlayer.currentTime = null;

                /**
                * @function SongPlayer.play
                * @desc if the current song is not the on clicked on set and play the song else if it is the one clicked on and buss object is paused play the song
                * @param {Object} song
                */
                SongPlayer.play = function(song) {
                        song = song || SongPlayer.currentSong;
                        if (SongPlayer.currentSong !== song) {
                                setSong(song);
                                playSong(song);
                        } else if (SongPlayer.currentSong === song) {
                                if (currentBuzzObject.isPaused()) {
                                        playSong(song);
                                }
                        }
                };

                /**
                * @function SongPlayer.pause
                * @desc pause the buzz object and show the play button
                * @param {Object} song
                */
                SongPlayer.pause = function(song) {
                        song = song || SongPlayer.currentSong;
                        stopSong(song);
                };

                /**
                * @function SongPlayer.previous
                * @desc move the song index back one place / if the song index is on the first song it goes back reset index to first song
                * @param
                */
                SongPlayer.previous = function() {
                        /**
                        * @desc retrieve current song index
                        * @type {Object}
                        */
                        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                        currentSongIndex--;

                        if (currentSongIndex < 0) {
                                currentBuzzObject.stop();
                                SongPlayer.currentSong.playing = null;
                        } else  {
                                var song = currentAlbum.songs[currentSongIndex];
                                setSong(song);
                                playSong(song);
                        }
                };

                /**
                * @function SongPlayer.next
                * @desc move the song index forward one place / if the song index is on the last song it goes back reset index to first song
                * @param
                */
                SongPlayer.next = function() {
                /**
                * @desc retrieve current song index
                * @type {Object}
                */
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex++;

                if (currentSongIndex > currentAlbum.songs.length - 1) {
                        currentBuzzObject.stop();
                        SongPlayer.currentSong.playing = null;
                } else  {
                        var song = currentAlbum.songs[currentSongIndex];
                        setSong(song);
                        playSong(song);
                }
                };
                /**
                * @function setCurrentTime
                * @desc Set current time (in seconds) of currently playing song
                * @param {Number} time
                */
                SongPlayer.setCurrentTime = function(time) {
                    if (currentBuzzObject) {
                        currentBuzzObject.setTime(time);
                    }
                };

                return SongPlayer;
        }

        angular
            .module('blocJams')
            .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
    })();
