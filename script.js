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
let search_left=document.querySelector(".search-left-panel");
search_left.addEventListener("click", (e) => { 
    e.stopImmediatePropagation();
    let search_title = document.querySelector(".title-rightpanel")
    search_title.innerHTML= "Browse all"
    let search_leftPanel= document.querySelector(".search-header-leftPanel");
    search_leftPanel.classList.remove("hidden");

    let search_containers = document.querySelector(".container-search-click")
    search_containers.classList.remove("hidden");

    let photos_artists = document.querySelectorAll(".photos-cards");
    for (let index = 0; index < photos_artists.length; index++) {
        const element = photos_artists[index];
        element.classList.add("hidden");
    }

    let photos_albums = document.querySelectorAll(".photos-albums");
    for (let index = 0; index < photos_albums.length; index++) {
        const element = photos_albums[index];
        element.classList.add("hidden");
    }
}
);

//rightpanel show photos ******
// Back button 
let back_button_left = document.querySelector(".back-button")
back_button_left.addEventListener("click", (element) => {
    let photos_invisible_artists = document.querySelectorAll(".photos-cards-invisible");
    for (let index = 0; index < photos_invisible_artists.length; index++) {
        const element = photos_invisible_artists[index];
        element.classList.add("hidden");
    }

    let search_leftPanel= document.querySelector(".search-header-leftPanel");
    search_leftPanel.classList.add("hidden");

    let search_containers = document.querySelector(".container-search-click")
    search_containers.classList.add("hidden");

    let photos_artists = document.querySelectorAll(".photos-cards");
    for (let index = 0; index < photos_artists.length; index++) {
        const element = photos_artists[index];
        element.classList.remove("hidden");
    }

    //2nd row

    let photos_albums = document.querySelectorAll(".photos-albums");
    for (let index = 0; index < photos_albums.length; index++) {
        const element = photos_albums[index];
        element.classList.remove("hidden");
        element.classList.add("w-[19.1%]");
    }

    let photos_invisible_albums = document.querySelectorAll(".photos-albums-invisible");
    for (let index = 0; index < photos_invisible_albums.length; index++) {
        const element = photos_invisible_albums[index];
        element.classList.add("hidden")
    }

    let main_body_right_side_2ndrow= document.querySelector(".container2-albums");
    main_body_right_side_2ndrow.classList.remove("hidden");

    //1st row 
    let main_body_right_side_1strow= document.querySelector(".content-right-1strow");
    main_body_right_side_1strow.classList.remove("hidden");

    // 3rd row
    let main_body_right_side_3rdrow= document.querySelector(".Feature-title");
    main_body_right_side_3rdrow.classList.remove("hidden");

    let photos_features = document.querySelectorAll(".photos-features");
    for (let index = 0; index < photos_features.length; index++) {
        const element = photos_features[index];
        element.classList.remove("hidden");
    }
}
)


// FIRST PHOTOS INVISIBLE
let show_photos= document.querySelector(".show-all-right-panel");
show_photos.addEventListener("click", (element) => {
    let photos_container_artists = document.getElementById("containers-photos");
    photos_container_artists.classList.add("flex-wrap");
    let main_body_right_side= document.getElementById("main-content-right-panel");
    main_body_right_side.classList.add("overflow-y-hidden" ,"scrollable");
    let photos_invisible_artists = document.querySelectorAll(".photos-cards-invisible");
    for (let index = 0; index < photos_invisible_artists.length; index++) {
        const element = photos_invisible_artists[index];
        element.classList.remove("hidden");
        element.classList.add("opacity-100");
    }

    //2nd row
    let photos_albums = document.querySelectorAll(".photos-albums");
    for (let index = 0; index < photos_albums.length; index++) {
        const element = photos_albums[index];
        element.classList.add("hidden");
    }

    let main_body_right_side_2ndrow= document.querySelector(".container2-albums");
    main_body_right_side_2ndrow.classList.add("hidden");

    //3rd row
    let main_body_right_side_3rdrow= document.querySelector(".Feature-title");
    main_body_right_side_3rdrow.classList.add("hidden");

    let photos_features = document.querySelectorAll(".photos-features");
    for (let index = 0; index < photos_features.length; index++) {
        const element = photos_features[index];
        element.classList.add("hidden");
    }

}
);

// Second photos invisible
let show_albums = document.querySelector(".show-all-right-panel-albums");
show_albums.addEventListener("click", (element) => {
    
    let photos_artists = document.querySelectorAll(".photos-cards");
    for (let index = 0; index < photos_artists.length; index++) {
        const element = photos_artists[index];
        element.classList.add("hidden");
    }

    let photos_features = document.querySelectorAll(".photos-features");
    for (let index = 0; index < photos_features.length; index++) {
        const element = photos_features[index];
        element.classList.add("hidden");
    }

    let photos_albums = document.querySelectorAll(".photos-albums");
    for (let index = 0; index < photos_albums.length; index++) {
        const element = photos_albums[index];
        element.classList.add("w-[25%]");
    }

    let photos_invisible_albums = document.querySelectorAll(".photos-albums-invisible");
    for (let index = 0; index < photos_invisible_albums.length; index++) {
        const element = photos_invisible_albums[index];
        element.classList.remove("hidden");
        element.classList.add("w-[25%]");
    }

    let main_body_right_side_1strow= document.querySelector(".content-right-1strow");
    main_body_right_side_1strow.classList.add("hidden");

    // let main_body_right_side_2ndrow= document.querySelector(".container2-albums");
    // main_body_right_side_2ndrow.classList.remove("hidden");

    let main_body_right_side_3rdrow= document.querySelector(".Feature-title");
    main_body_right_side_3rdrow.classList.add("hidden");
}
);















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