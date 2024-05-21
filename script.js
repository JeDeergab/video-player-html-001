document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    var audio = document.getElementById('audioElement'); // get the audio element
    var playPauseBtn = document.getElementById('playPauseBtn');
    var seekBar = document.getElementById('seekBar');

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            audio.play(); // play audio when video plays
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            audio.pause(); // pause audio when video pauses
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

    seekBar.addEventListener('change', function() {
        var time = video.duration * (seekBar.value / 100);
        audio.currentTime = time; // sync audio position with video position only after user changes the seek bar
    });

    video.addEventListener('ended', function() {
        audio.pause();
        audio.currentTime = 0; // reset the audio to the start
        playPauseBtn.textContent = 'Play';
        seekBar.value = 0; // reset the seek bar
    });
});
