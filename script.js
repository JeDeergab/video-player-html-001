document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    var audio = document.getElementById('audioElement');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var seekBar = document.getElementById('seekBar');
    var wasPlayingBeforeSeek = false; // Variable to keep track of playback status before seeking

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    video.addEventListener('timeupdate', function() {
        if (!seekBar.isDragging) { // Only update seek bar if it's not being dragged
            var value = (100 / video.duration) * video.currentTime;
            seekBar.value = value;
        }
    });

    seekBar.addEventListener('mousedown', function() {
        wasPlayingBeforeSeek = !video.paused;
        video.pause();
        audio.pause();
    });

    seekBar.addEventListener('input', function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
        audio.currentTime = time; // Continuously update time, but do not play
    });

    seekBar.addEventListener('mouseup', function() {
        // Resume playing if the video was playing before seeking started
        if (wasPlayingBeforeSeek) {
            video.play();
            audio.play();
        }
    });

    video.addEventListener('ended', function() {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
        seekBar.value = 0;
    });
});


