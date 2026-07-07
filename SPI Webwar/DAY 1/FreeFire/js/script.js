
function openVideo(src){
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("ffVideo");

    video.src = src;
    modal.style.display = "flex";
    video.play();
}

function closeVideo(){
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("ffVideo");

    video.pause();
    video.src = "./";
    modal.style.display = "none";
}
