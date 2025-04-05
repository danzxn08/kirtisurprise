function showMedia(index) {
    const file = "../media/" + mediaFiles[index]; // Use correct relative path
    captionElement.innerText = captions[index];

    if (file.endsWith(".mp4")) {
        videoPlayer.src = file;
        videoPlayer.style.display = "block";
        imagePlayer.style.display = "none";
        videoPlayer.load();  // Ensures the video reloads properly
    } else {
        imagePlayer.src = file;
        imagePlayer.style.display = "block";
        videoPlayer.style.display = "none";
    }
}
