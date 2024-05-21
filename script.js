document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    var audio = document.getElementById('audioElement'); // Ensure this is defined correctly
    var playPauseBtn = document.getElementById('playPauseBtn');
    var seekBar = document.getElementById('seekBar');
    var resolutionBtn = document.getElementById('resolutionBtn');
    var isHighResolution = true;

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            audio.play(); // Make sure audio plays along with the video
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            audio.pause(); // Ensure audio pauses along with the video
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

    resolutionBtn.addEventListener('click', function() {
        if (isHighResolution) {
            video.width = 854;
            video.height = 480;
            resolutionBtn.textContent = 'Switch to HD';
        } else {
            video.width = 1280;
            video.height = 720;
            resolutionBtn.textContent = 'Change Resolution';
        }
        isHighResolution = !isHighResolution;
    });

    video.addEventListener('ended', function() {
        audio.pause();
        audio.currentTime = 0; // reset the audio to the start
        playPauseBtn.textContent = 'Play';
        seekBar.value = 0; // reset the seek bar
    });
});