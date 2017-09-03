(function() {
        function SongPlayer() {
                var SongPlayer = {};

                var currentSong = null;
                var currentBuzzObject = null;

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
                * @function setSong
                * @desc Stops currently playing song and loads new audio file as currentBuzzObject
                * @param {Object} song
                */
                var setSong = function(song) {
                    if (currentBuzzObject) {
                        currentBuzzObject.stop();
                        currentSong.playing = null;
                    }
                    /**
                    * @desc Buzz object audio file
                    * @type {Object}
                    */
                    currentBuzzObject = new buzz.sound(song.audioUrl, {
                        formats: ['mp3'],
                        preload: true
                    });

                    currentSong = song;
                };

                /**
                * @function SongPlayer.play
                * @desc if the current song is not the on clicked on set and play the song else if it is the one clicked on and buss object is paused play the song
                * @param {Object} song
                */
                SongPlayer.play = function(song) {
                        if (currentSong !== song) {
                                setSong(song);
                                playSong(song);
                        } else if (currentSong === song) {
                                if (currentBuzzObject.isPaused()) {
                                        currentBuzzObject.play();
                                }
                        }
                };

                /**
                * @function SongPlayer.pause
                * @desc pause the buzz object and show the play button
                * @param {Object} song
                */
                SongPlayer.pause = function(song) {
                        currentBuzzObject.pause();
                        song.playing = false;
                };

                return SongPlayer;
        }

        angular
            .module('blocJams')
            .factory('SongPlayer', SongPlayer);
    })();
