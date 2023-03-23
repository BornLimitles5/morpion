const video = document.createElement('video');
video.src = 'your_video_url.mp4';
video.autoplay = true;
video.loop = true;
video.muted = true;
video.style.position = 'fixed';
video.style.top = 0;
video.style.left = 0;
video.style.width = '100%';
video.style.height = 'auto';
video.style.zIndex = '-1';
video.setAttribute("disablePictureInPicture" , "");

const soundEffect = new Audio('mixkit-game-ball-tap-2073.wav');
soundEffect.preload = 'auto';
const soundEffect2 = new Audio('mixkit-select-click-1109.wav');
soundEffect2.preload = 'auto';
const winMusic = new Audio('Victory! (Trainer)[Pokémon Diamond & Pearl].mp3');
winMusic.preload = 'auto'
const winMusic2 = new Audio('Victory! (Trainer)[Pokémon Black & White].mp3');
winMusic2.preload = 'auto'
const drawMusic = new Audio('Lake Verity Remastered ► Pokémon Brilliant Diamond & Shining Pearl.mp3');
drawMusic.preload = 'auto'

let soundMuted = true;

function toggleSound() {
  if (soundMuted) {
    soundEffect.muted = false;
    soundEffect2.muted = false;
    winMusic.muted = false;
    winMusic2.muted = false;
    drawMusic.muted = false;
    soundMuted = false;
  } else {
    soundEffect.muted = true;
    soundEffect2.muted = true;
    winMusic.muted = true;
    winMusic2.muted = true;
    drawMusic.muted = true;
    soundMuted = true;
  }
}

let videoPaused = false;

function toggleVideo() {
  if (videoPaused) {
    video.play();
    videoPaused = false;
  } else {
    video.pause();
    videoPaused = true;
  }
}

const soundButton = document.createElement('button');
soundButton.innerHTML = 'Mute Sound';
soundButton.addEventListener('click', toggleSound);

const videoButton = document.createElement('button');
videoButton.innerHTML = 'Pause Video';
videoButton.addEventListener('click', toggleVideo);

const buttonContainer = document.createElement('div');
buttonContainer.appendChild(soundButton);
buttonContainer.appendChild(videoButton);
document.body.appendChild(buttonContainer);
