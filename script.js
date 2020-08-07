const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
        videoElement.play();
        }
    } catch (error){
        //catch error
    }
}

button.addEventListener("click", async () => {
    // Disable button 
    button.disabled = true ;
    // start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled  = false;
});


// API //
// https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
// article //
// https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/