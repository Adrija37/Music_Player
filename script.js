
const songs = [
    {
        name: "Song 1",
        path: "songs/song1.mp3"
    },
    {
        name: "Song 2",
        path: "songs/song2.mp3"
    },
    {
        name: "Song 3",
        path: "songs/song3.mp3"
    }
];

let songIndex = 0;

const audio = new Audio(songs[songIndex].path);

const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const progress = document.querySelector(".progress");
const songTitle = document.getElementById("song-title");

let isPlaying = false;

playBtn.addEventListener("click", () => {

    if(!isPlaying){

        audio.play();
        isPlaying = true;
        playBtn.innerText = "⏸";

    }
    else{

        audio.pause();
        isPlaying = false;
        playBtn.innerText = "▶";
    }

});

nextBtn.addEventListener("click", () => {

    songIndex++;

    if(songIndex >= songs.length){
        songIndex = 0;
    }

    changeSong();

});

prevBtn.addEventListener("click", () => {

    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    changeSong();

});

function changeSong(){

    audio.src = songs[songIndex].path;

    songTitle.innerText = songs[songIndex].name;

    audio.play();

    isPlaying = true;

    playBtn.innerText = "⏸";
}

audio.addEventListener("timeupdate", () => {

    const progressPercent =
        (audio.currentTime / audio.duration) * 100;

    progress.style.width = progressPercent + "%";
});

