document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var video = document.getElementById('videoElement');
    var audio = document.getElementById('audioElement');
    var replaybutton = document.getElementById('replaybutton');
    var seekBar = document.getElementById('seekBar');
    var playPauseBtn = document.getElementById('playPauseBtn');

    // Hide overlay initially
    overlay.style.display = 'none';

    function showOverlay() {
        overlay.style.display = 'flex';
    }

    video.addEventListener('ended', function() {
        showOverlay();
        playPauseBtn.textContent = 'Play'; // Change play button to 'Play'
        seekBar.value = 0; // Reset seek bar
    });

    video.addEventListener('play', function() {
        overlay.style.display = 'none';
    });

    // Handling the replay functionality
    replaybutton.addEventListener('click', function() {
        video.currentTime = 0; // Reset video to start
        video.play();
        audio.currentTime = 0; // Synchronize audio to start with video
        audio.play();
        playPauseBtn.textContent = 'Pause'; // Update button text to 'Pause'
    });
});
