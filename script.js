document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var seekBar = document.getElementById('seekBar');

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    video.addEventListener('timeupdate', function() {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    seekBar.addEventListener('input', function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });
});
