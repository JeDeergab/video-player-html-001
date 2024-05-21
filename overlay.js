document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
	
    var video = document.getElementById('videoElement');
    var audio = document.getElementById('audioElement'); // get the audio element
	
    var replaybutton = document.getElementById('replaybutton');

    // Hide overlay initially
    overlay.style.display = 'none';

    // Function to show overlay
    function showOverlay() {
        overlay.style.display = 'flex';
    }

    // Event listener for video ending
    video.addEventListener('ended', function() {
        showOverlay();
    });

    // Optional: Hide overlay on video play
    video.addEventListener('play', function() {
        overlay.style.display = 'none';
    });
	
	// Replay button to play video and audio
	replaybutton.addEventListener('click', function() 
	{
        video.play();
        audio.play(); // play audio when video plays
	});

    video.addEventListener('ended', function() 
	{
        audio.pause();
        audio.currentTime = 0; // reset the audio to the start
        replaybutton.textContent = 'Replay';
        seekBar.value = 0; // reset the seek bar
    });
	
});
