```javascript
const playBtn = document.getElementById("play-btn");
const progress = document.querySelector(".progress");

let isPlaying = false;
let width = 0;
let interval;

playBtn.addEventListener("click", () => {

    if(!isPlaying){

        isPlaying = true;
        playBtn.innerText = "Pause";

        interval = setInterval(() => {

            width++;

            if(width > 100){
                width = 0;
            }

            progress.style.width = width + "%";

        }, 100);

    }
    else{

        isPlaying = false;
        playBtn.innerText = "Play";

        clearInterval(interval);
    }

});
```
