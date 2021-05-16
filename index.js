import cameraConfig from './cameraConfig.js'
import Cam from './cam.js'

//https://simpl.info/getusermedia/sources/
//6304ec23cf0fd74e00f2fb1b4ffe1c324d5d7e7bf04fb574b70dc50fbcb8c7c2

// const userMedia = {
//   video: { deviceId: { exact: "6304ec23cf0fd74e00f2fb1b4ffe1c324d5d7e7bf04fb574b70dc50fbcb8c7c2" } }
// };

const userMedia = {
  video: cameraConfig || true
};


// Using webcam in browser
navigator.mediaDevices.getUserMedia(userMedia).then(setStream);

async function setStream(stream) {
  const devices = await navigator.mediaDevices.enumerateDevices();
  Cam.video.srcObject = stream;
}

// Start Controlling Cam
Cam.init()

// Keyboard Events
window.addEventListener('keydown', (e) => {
  if (Cam.controls[e.key]) {
    Cam.controls[e.key]()
  }
})