# Custom Video Player Project

## Introduction
This repository hosts a custom video player developed as a personal project aimed at learning how to build video players from scratch. The player is designed with simplicity and functionality in mind, allowing users to embed it on multiple pages via iframes or use it in fullscreen mode on its native page.

## Features
- **Embeddable Video Player:** Easily integrate the video player into your web pages using iframes.
- **Fullscreen Support:** Experience videos in fullscreen on the native page without any additional configuration.
- **End of Video Overlay:** An overlay appears when the video reaches the end, enhancing the user experience.
- **Replay Functionality:** Users can replay the video directly from the overlay, making it convenient to watch the video again without needing to reload or scroll.

## Audio Control
The player includes a feature to mute/unmute audio. By default, the audio is active, but you can easily control this by uncommenting the 'audio.pause();` line in the JavaScript file to mute the audio.

## Usage
To use the video player in your project, simply embed the player using the provided iframe syntax on your desired page. For fullscreen usage, direct users to the native page of the video player.

```html
<!-- Example of embedding the video player using iframe -->
<iframe src="path_to_video_player.html" width="640" height="360" frameborder="0" allowfullscreen></iframe>
```

## Deleted & Removed
- /audios
- /videos

