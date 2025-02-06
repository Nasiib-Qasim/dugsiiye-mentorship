
let video_player = document.querySelector("#video-player");



video_player.controls = false;


const progress_container = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const volume = document.querySelector("#volume");
const durationBtn = document.querySelector("#duration-time");
const currentBtn = document.querySelector("#current-time");
const previewbtn = document.querySelector("#preview");
const playsbtn = document.querySelector("#plays");
const nextbtn = document.querySelector("#next");
const speed_btn = document.querySelector("#speed");
let videoPlayer = document.querySelector("#video-player");



let video = [
    {title:"arsenal vs man city" , src:"nasiib.mp4"},
    {title:"dance" , src:"dance.mp4"},
    {title:"dugsiiye" , src:"rocks.mp4"}
]

let isPlaying = false;
let videosIndex = 0;
let speed = 1;

function loadVideos(videos){
    videoPlayer.src = videos.src;
}

loadVideos(video[videosIndex])

function playVideo(){
    playsbtn.querySelector("i").classList.remove("fa-play");
    playsbtn.querySelector("i").classList.add("fa-pause");
    videoPlayer.play();
    isPlaying = true;
}

function pauseVideo(){
    playsbtn.querySelector("i").classList.remove("fa-pause");
    playsbtn.querySelector("i").classList.add("fa-play");
    videoPlayer.pause();
    isPlaying = false;
}
playsbtn.addEventListener("click",function(){
    if(isPlaying){
        pauseVideo();
    }else{
        playVideo();
    }
})

// updateprogress();

function updateprogress(e){
    const {duration,currentTime} = e.srcElement;
    if(isNaN(duration)){
        return
    }
    const progressPercent = (currentTime / duration )*100;
    // console.log(progressPercent);

    progress.style.width = `${progressPercent}%`;


    let durationMinutes = Math.floor(duration /60);
    let durationSeconds = Math.floor(duration % 60);
    if(durationSeconds <10){
        durationSeconds = `0${durationSeconds}`;
    }

    durationBtn.textContent = `${durationMinutes}:${durationSeconds}`;


    let currentMinutes = Math.floor(currentTime/60);
    let currentSecond = Math.floor(currentTime % 60);
    if(currentSecond <10){
        currentSecond = `0${currentSecond}`;
    }
    currentBtn.textContent = `${currentMinutes}:${currentSecond}`;
    videoPlayer.playbackRate = speed;
}
videoPlayer.addEventListener("timeupdate", updateprogress)





nextbtn.addEventListener("click",function(){
    nextVideos();
})

function nextVideos(){
    pauseVideo();
    videosIndex++;
    if(videosIndex >video.length -1){
        videosIndex = 0;
    }
    loadVideos(video[videosIndex]);
    playVideo();

}

previewbtn.addEventListener("click",function(){
    previewVideo();
})

function previewVideo(){
    pauseVideo();
    videosIndex--;
    if(videosIndex <0){
        videosIndex = video.length -1;
    }
    loadVideos(video[videosIndex]);
    playVideo();
}

volume.addEventListener("input",function(e){
    videoPlayer.volume = e.target.value;
})

speed_btn.addEventListener("change",function(e){
    speed = e.target.value;
    videoPlayer.playbackRate = speed;
})


progress_container.addEventListener("click",setProgress)

function setProgress(e){

    let width = this.clientWidth;
    let clickX = e.offsetX;

    let duration = videoPlayer.duration;
   if(isNaN(duration)){
    return
   }

   let newtime = (clickX / width) * duration;
   videoPlayer.currentTime = newtime;
}
