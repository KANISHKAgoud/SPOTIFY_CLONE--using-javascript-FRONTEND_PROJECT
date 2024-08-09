console.log("java script starts from here!!")

async function getsongs()
{
    let f = await fetch("http://127.0.0.1:5500/SPOTIFY_CLONE--using-javascript-FRONTEND_PROJECT/songs/");
    let response = await f.text();
    let div= document.createElement("div")   
    div.innerHTML = response
    let anchor = div.getElementsByTagName("a")
    let songs=[]
    for (let index = 0; index < anchor.length; index++) {
        const element = anchor[index];
        if (element.href.endsWith("mp3"))
        {
            songs.push(element)
        }
    }
    return songs
}
    
async function main() {
    let songs = await getsongs();
    console.log(songs)
}
main()

// LEFT PANEL STARTS FROM HERE  *****
let search_left=document.getElementsByClassName("search-left-panel")
search_left= addEventListener("click", (e) => { 
    e.stopImmediatePropagation() 
    let search_leftPanel= document.createElement("input")
    // search_leftPanel.innerHTML= search_leftPanel.innerHTML + "type="text" placeholder="What do you want to play?" "
    search_leftPanel.setAttribute('type', 'text')
    search_leftPanel.setAttribute('placeholder', 'Enter your name')
    search_leftPanel.setAttribute('style', 'width: 100px; height: 50px;')
    document.querySelector(".right-header-backsymbols").append("div")
}
)

//rightpanel show photos ******

let show_photos= document.querySelector(".show-all-right-panel")
show_photos=addEventListener("click", (element) => {
    let photos_container_artists = document.getElementById("containers-photos")
    photos_container_artists.classList.add("flex-wrap")
    let main_body_right_side= document.getElementById("main-content-right-panel")
    main_body_right_side.classList.add("overflow-y-hidden" ,"scrollable")
    let photos_invisible_artists = document.querySelectorAll(".photos-cards-invisible")
    for (let index = 0; index < photos_invisible_artists.length; index++) {
        const element = photos_invisible_artists[index];
        element.classList.remove("hidden")
        element.classList.add("opacity-100")
    }
}
)















    // let allplaybuttons = document.body.querySelectorAll(".playbutton")
    // let currentAudio =null;
    // for (let index = 0; index < allplaybuttons.length; index++) {
    //     let element = allplaybuttons[index]
    //     element = addEventListener ("click", () => {
    //         // var audio= new Audio(songs[index]);
    //         // audio.addEventListener("loadeddata",() => {
    //         //     let duration = audion.duration
    //         //     console.log(duration)
    //         // }
    //         // )
    //         // audio.play();
    //         // if (currentAudio && !currentAudio.paused) {
    //         //     // Pause the currently playing audio
    //         //     currentAudio.pause();
    //         //     currentAudio.currentTime = 0; // Optional: reset the playback position to the start
    //         // }
    
    //         // // If the new audio is the same as the currently playing one, stop it
    //         // if (currentAudio === audio) {
    //         //     currentAudio = null; // Clear the current audio
    //         // } else {
    //         //     // Play the new audio and set it as the current audio
    //         //     audio.play();
    //         //     currentAudio = audio;
    //         // }
    //         if (currentAudio) {
    //             if (currentAudio.audioElement.paused) {
    //                 // If the current audio is paused, play it
    //                 currentAudio.audioElement.play();
    //             } else {
    //                 // Pause and reset the current audio
    //                 currentAudio.audioElement.pause();
    //                 currentAudio.audioElement.currentTime = 0;
    //                 currentAudio = null; // Clear the current audio
    //             }
    //         }
            
    //         // Create a new Audio object for the clicked button
    //         let audio = new Audio(songs[index]);
            
    //         // Set up the new audio instance
    //         audio.play();
            
    //         // Set the new audio as the current audio
    //         currentAudio = {
    //             audioElement: audio
    //         };
    //     })




    // let playbutton= addEventListener ("click", (e) => {
      
    // }
    // )

    // for (const element of allplaybutton) {
        //   if (if playbutton==true){
            
        //   } 
        // }

// playsongs()