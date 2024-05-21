document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var video = document.getElementById('videoElement');
    var audio = document.getElementById('audioElement');
    var replaybutton = document.getElementById('replaybutton');
    var playPauseBtn = document.getElementById('playPauseBtn');

    // Hide overlay initially
    overlay.style.display = 'none';

    function showOverlay() {
        overlay.style.display = 'flex';
    }

    video.addEventListener('ended', function() {
        showOverlay();
        playPauseBtn.textContent = 'Play';
        seekBar.value = 0; // Reset seek bar to the start
    });

    video.addEventListener('play', function() {
        overlay.style.display = 'none';
    });

    // Handling the replay functionality
    replaybutton.addEventListener('click', function() {
        video.currentTime = 0; // Reset video to start
        audio.currentTime = 0; // Synchronize audio to start with video
        video.play();
        //audio.play();
        playPauseBtn.textContent = 'Pause'; // Update button text to 'Pause'
        overlay.style.display = 'none'; // Ensure overlay is hidden on replay
    });

    // Block right-clicking on the video element
    video.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // Allow right-click on controls
    document.querySelector('.controls').addEventListener('contextmenu', function(event) {
        event.stopPropagation(); // Allows right-click on controls only
    }, true);
});