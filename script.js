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

let currentAudio = null;

async function playsongs(songs) {
    let allplaybuttons = document.body.querySelectorAll(".playbutton");

    for (let index = 0; index < allplaybuttons.length; index++) {
        let element = allplaybuttons[index];
        
        element.addEventListener("click", () => {
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0; 
                currentAudio = null; 

                element.querySelector("i").classList.remove("fa-pause");
                element.querySelector("i").classList.add("fa-play");
            } else {
                currentAudio = new Audio(songs[index]);
                currentAudio.play();

                element.querySelector("i").classList.remove("fa-play");
                element.querySelector("i").classList.add("fa-pause");
            }
        });
    }
}

// LEFT PANEL STARTS FROM HERE  *****

//search button
let search_left=document.querySelector(".search-left-panel");
search_left.addEventListener("click", (e) => { 
    e.stopImmediatePropagation();
    let search_title = document.querySelector(".title-rightpanel")
    search_title.innerHTML= "Browse all"
    let search_leftPanel= document.querySelector(".search-header-leftPanel");
    search_leftPanel.classList.remove("hidden");

    let search_containers = document.querySelector(".container-search-click")
    search_containers.classList.remove("hidden");


    //1st row
    let photos_artists = document.querySelectorAll(".photos-cards");
    for (let index = 0; index < photos_artists.length; index++) {
        const element = photos_artists[index];
        element.classList.add("hidden");
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

    //back button
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.add("font-extrabold")
    back_button_left.classList.add( "text-white")
    back_button_left.classList.add("text-xl")

    //HOME button
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.add("font-extrabold")
    home_button_left.classList.add( "text-white")
    home_button_left.classList.add("text-3xl")

}
);

//LIBRARY BUTTON
let LIBRARY_button_right = document.querySelector(".left-library")
LIBRARY_button_right.addEventListener("mouseover", (event) => {

    let library_hover = document.querySelector(".left_library_hover")
    library_hover.classList.add("opacity-100")
});

let LIBRARY_button_right_mouseout = document.querySelector(".left-library")
LIBRARY_button_right.addEventListener("mouseout", (event) => {

    let library_hover = document.querySelector(".left_library_hover")
    library_hover.classList.remove("opacity-100")
});


//HOME BUTTON
let HOME_button_right = document.querySelector(".home-left-panel")
HOME_button_right.addEventListener("click", (element) => {
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

    //back button back to original
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.remove("font-extrabold", "text-white", "text-xl")

    //home button back to original
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.remove("text-3xl")
}
)

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
    //back button back to original
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.remove("font-extrabold", "text-white", "text-xl")

    //home button back to original
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.remove("text-3xl")
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
    //back button
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.add("font-extrabold")
    back_button_left.classList.add( "text-white")
    back_button_left.classList.add("text-xl")

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

    //HOME button
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.add("font-extrabold")
    home_button_left.classList.add( "text-white")
    home_button_left.classList.add("text-3xl")

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

    //back button
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.add("font-extrabold")
    back_button_left.classList.add( "text-white")
    back_button_left.classList.add("text-xl")

    //HOME button
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.add("font-extrabold")
    home_button_left.classList.add( "text-white")
    home_button_left.classList.add("text-3xl")
}
);


async function main() {
    let songs = await getsongs();
    console.log(songs)
    await playsongs(songs)
    
}
main()
