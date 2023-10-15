let song=document.getElementById("song");
let progress=document.getElementById("progress");
let s=document.getElementsByClassName("play-pause")[0];
let icon=document.getElementById("icon");
song.onloadedmetadata=function(){
   progress.max=song.duration;
   progress.value=song.currentTime;
}
function playsong(){
   if(icon.classList.contains("fa-play")){
    song.play();
    icon.classList.remove("fa-play");icon.classList.add("fa-pause");
   }
   else{
      song.pause();
      icon.classList.remove("fa-pause");icon.classList.add("fa-play");

   }
   
}
if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime;
    }, 100);
}
progress.onchange=function(){
    song.play();song.currentTime=progress.value;
    icon.classList.remove("fa-play");icon.classList.add("fa-pause");
}

