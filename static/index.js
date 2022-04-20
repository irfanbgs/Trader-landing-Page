console.log("in the index js")
let masterPlay = document.getElementById('playPodcast');
let songs = new Audio('/static/1.mp3')
masterPlay.addEventListener('click',()=>{
    songs.play();
    console.log("Image clicked")
})