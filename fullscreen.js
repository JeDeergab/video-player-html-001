document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.querySelector('.video-player'); // Get the video player container
    var video = document.getElementById('videoElement');

    video.addEventListener('dblclick', function() {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
