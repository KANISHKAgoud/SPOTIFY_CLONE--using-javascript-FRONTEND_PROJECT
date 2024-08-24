console.log("java script starts from here!!")

async function getsongs() {
    let f =await fetch (`/Songs/songs_folder/`)
    let response = await f.text();
    let div = document.createElement("div")
    div.innerHTML = response 
    let anchor = div.getElementsByTagName ("a");
    let songs=[]
    for (let index = 0; index < anchor.length; index++) {
        const element = anchor[index];
        if (element.href.endsWith("mp3"))
        {
            songs.push(element)
        }
    }

    
    return songs;
}



//PLAYING THE SONGS 
let currentAudio = null;
let currentButton = null; 

async function playsongs(songs) {
    let allplaybuttons = document.body.querySelectorAll(".playbutton");

    for (let index = 0; index < allplaybuttons.length; index++) {
        let element = allplaybuttons[index];

        element.addEventListener("click", () => {

            if (currentAudio && currentButton === element) {
                if (!currentAudio.paused) {
                    currentAudio.pause();
                    element.querySelector("i").classList.remove("fa-pause");
                    element.querySelector("i").classList.add("fa-play");

                    let mainPlayButton = document.querySelector(".mainplay-button");
                    mainPlayButton.classList.remove("fa-circle-pause");
                    mainPlayButton.classList.add("fa-circle-play");
                }
                else {
                    currentAudio.play();
                    element.querySelector("i").classList.remove("fa-play");
                    element.querySelector("i").classList.add("fa-pause");

                    let mainPlayButton = document.querySelector(".mainplay-button");
                    mainPlayButton.classList.remove("fa-circle-play");
                    mainPlayButton.classList.add("fa-circle-pause");
                }

            }

            else {
                if (currentAudio && !currentAudio.paused) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;

                    let prevButton = currentButton;
                    if (prevButton) {
                        prevButton.querySelector("i").classList.remove("fa-pause");
                        prevButton.querySelector("i").classList.add("fa-play");
                    }
                }

                currentAudio = new Audio(songs[index]);
                let songName = extractSongName(songs[index]);
                document.querySelector(".nameOf-song").textContent = songName;

                currentAudio.addEventListener("loadedmetadata", () => {
                    updateTimespan();
                    resetProgressBar();
                });

                currentAudio.addEventListener("timeupdate", () => {
                    updateTimespan();
                    updateProgressBar();
                });

                currentAudio.play();
                currentButton = element;

                element.querySelector("i").classList.remove("fa-play");
                element.querySelector("i").classList.add("fa-pause");

                let mainPlayButton = document.querySelector(".mainplay-button");
                mainPlayButton.classList.remove("fa-circle-play");
                mainPlayButton.classList.add("fa-circle-pause");
            }
        });

       
    }

    // Add control for the main play button
    let mainPlayButton = document.querySelector(".mainplay-button");
    mainPlayButton.addEventListener("click", () => {
        if (currentAudio) {
            if (currentAudio.paused) {
                currentAudio.play();
                mainPlayButton.classList.remove("fa-circle-play");
                mainPlayButton.classList.add("fa-circle-pause");
                

                if (currentButton) {
                    currentButton.querySelector("i").classList.remove("fa-play");
                    currentButton.querySelector("i").classList.add("fa-pause");
                }
            }
            else {
                currentAudio.pause();
                mainPlayButton.classList.remove("fa-circle-pause");
                mainPlayButton.classList.add("fa-circle-play");

                if (currentButton) {
                    currentButton.querySelector("i").classList.remove("fa-pause");
                    currentButton.querySelector("i").classList.add("fa-play");
                }
            }
        }
    });

    

    document.querySelector(".bar-bottom").addEventListener("click", (e) => {
        let pointer = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = `${pointer}%`;
        document.querySelector(".progress-bar").style.width = `${pointer}%`
        currentAudio.currentTime = ((currentAudio.duration) * pointer) / 100
    }
    )

}

function updateProgressBar() {
    const progressBar = document.querySelector(".progress-bar");
    const circle = document.querySelector(".circle");

    // Calculate the percentage of the song played
    const percentagePlayed = (currentAudio.currentTime / currentAudio.duration) * 100;

    // Update the circle's position based on the percentage played
    circle.style.left = `${percentagePlayed}%`;
    progressBar.style.width = `${percentagePlayed}%`;
}

function resetProgressBar() {
    const circle = document.querySelector(".circle");
    const progressBar = document.querySelector(".progress-bar");
    circle.style.left = "0%";  // Reset to start
    progressBar.style.width = "0%";
}

function extractSongName(song) {
    if (typeof song === "string") {
        return song.split("/Songs/songs_folder/")[1].replaceAll("%20", " ").replaceAll("(PagalWorld.com.sb)", "").replaceAll("_64", "").replaceAll("_", "").replaceAll(".mp3", "").replaceAll("-(Pagal-World.Com.In)", "").replaceAll("-(PagalSongs.Com.IN)", "").replaceAll(`-Ft.-Jitul-Boro-320kbps(PaglaWorld.com.cm)`, "").replaceAll(`(PaglaWorld.com.cm)`, "")
    }

    return "Unknown Song";
}

function updateTimespan() {
    const currentTime = formatTime(currentAudio.currentTime);
    const duration = formatTime(currentAudio.duration);
    document.querySelector(".timespan").textContent = `${currentTime} / ${duration}`;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}







// LEFT PANEL STARTS FROM HERE  *****

//search button
let search_left = document.querySelector(".search-left-panel");
search_left.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    let search_title = document.querySelector(".title-rightpanel")
    search_title.innerHTML = "Browse all"
    let search_leftPanel = document.querySelector(".search-header-leftPanel");
    search_leftPanel.classList.remove("hidden");

    let search_containers = document.querySelector(".container-search-click")
    search_containers.classList.remove("hidden");

    //responsive

    let right_header_backsymbols = document.querySelector(".right-header-backsymbols")

    if (window.matchMedia("(max-width: 704px)").matches) {

        if (right_header_backsymbols) {
            right_header_backsymbols.classList.add("hidden");
        }

    }


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

    let main_body_right_side_2ndrow = document.querySelector(".container2-albums");
    main_body_right_side_2ndrow.classList.add("hidden");

    //3rd row 
    let main_body_right_side_3rdrow = document.querySelector(".Feature-title");
    main_body_right_side_3rdrow.classList.add("hidden");

    let photos_features = document.querySelectorAll(".photos-features");
    for (let index = 0; index < photos_features.length; index++) {
        const element = photos_features[index];
        element.classList.add("hidden");
    }

    //back button
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.add("font-extrabold")
    back_button_left.classList.add("text-white")
    back_button_left.classList.add("text-xl")

    //HOME button
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.add("font-extrabold")
    home_button_left.classList.add("text-white")
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

    let search_leftPanel = document.querySelector(".search-header-leftPanel");
    search_leftPanel.classList.add("hidden");

    let search_containers = document.querySelector(".container-search-click")
    search_containers.classList.add("hidden");

    let photos_artists = document.querySelectorAll(".photos-cards");
    for (let index = 0; index < photos_artists.length; index++) {
        const element = photos_artists[index];
        element.classList.remove("hidden");
    }

    let right_header_backsymbols = document.querySelector(".right-header-backsymbols")
    right_header_backsymbols.classList.remove("hidden");

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

    let main_body_right_side_2ndrow = document.querySelector(".container2-albums");
    main_body_right_side_2ndrow.classList.remove("hidden");

    //1st row 
    let main_body_right_side_1strow = document.querySelector(".content-right-1strow");
    main_body_right_side_1strow.classList.remove("hidden");

    // 3rd row
    let main_body_right_side_3rdrow = document.querySelector(".Feature-title");
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

    let search_leftPanel = document.querySelector(".search-header-leftPanel");
    search_leftPanel.classList.add("hidden");

    let search_containers = document.querySelector(".container-search-click")
    search_containers.classList.add("hidden");

    let photos_artists = document.querySelectorAll(".photos-cards");
    for (let index = 0; index < photos_artists.length; index++) {
        const element = photos_artists[index];
        element.classList.remove("hidden");
    }

    //responsive for the artists photos
    let photos_invisible_responsive1 = document.querySelector('.photos-card-invisible-responsive');
    let photos_invisible_responsive2 = document.querySelector('.photos-card-invisible-responsive2');
    let photos_invisible_responsive3 = document.querySelector('.photos-card-invisible-responsive3');

    let photos_albums_invisible_responsive1 = document.querySelector(".albums1-responsive")
    let photos_albums_invisible_responsive2 = document.querySelector(".albums2-responsive")
    let photos_albums_invisible_responsive3 = document.querySelector(".albums3-responsive")

    if (window.matchMedia("(max-width: 1226px)").matches) {
        if (photos_invisible_responsive1) {
            photos_invisible_responsive1.classList.add('hidden');
            photos_invisible_responsive1.style.display = '';
        }

        let photos_cards = document.querySelectorAll(".photos-cards");
        for (let index = 0; index < photos_cards.length; index++) {
            let card = photos_cards[index];
            card.style.width = '25%';
            card.style.height = '28vh';
        }

        if (photos_albums_invisible_responsive1) {
            photos_albums_invisible_responsive1.classList.add('hidden');
            photos_albums_invisible_responsive1.style.display = '';
        }
    }

    if (window.matchMedia("(max-width: 743px)").matches) {
        if (photos_invisible_responsive1) {
            photos_invisible_responsive1.classList.add('hidden');
            photos_invisible_responsive1.style.display = '';
        }

        if (photos_invisible_responsive2) {
            photos_invisible_responsive2.classList.add('hidden');
            photos_invisible_responsive2.style.display = '';
        }

        let photos_cards = document.querySelectorAll(".photos-cards");
        for (let index = 0; index < photos_cards.length; index++) {
            let card = photos_cards[index];
            card.style.width = '32%';
            card.style.height = '28vh';
        }

        if (photos_albums_invisible_responsive2) {
            photos_albums_invisible_responsive2.classList.add('hidden');
            photos_albums_invisible_responsive2.style.display = '';
        }

    }

    if (window.matchMedia("(max-width: 610px)").matches) {
        if (photos_invisible_responsive3) {
            photos_invisible_responsive3.classList.add('hidden');
            photos_invisible_responsive3.style.display = '';
        }

        let photos_cards = document.querySelectorAll(".photos-cards");
        for (let index = 0; index < photos_cards.length; index++) {
            let card = photos_cards[index];
            card.style.width = '48%';
            card.style.height = '30vh';
        }

        if (photos_albums_invisible_responsive3) {
            photos_albums_invisible_responsive3.classList.add('hidden');
            photos_albums_invisible_responsive3.style.display = '';

        }
    }


    //2nd row

    let photos_albums = document.querySelectorAll(".photos-albums");
    for (let index = 0; index < photos_albums.length; index++) {
        const element = photos_albums[index];
        element.classList.remove("hidden");
        element.classList.add("w-[17.5%]");
    }

    let photos_invisible_albums = document.querySelectorAll(".photos-albums-invisible");
    for (let index = 0; index < photos_invisible_albums.length; index++) {
        const element = photos_invisible_albums[index];
        element.classList.add("hidden")
    }

    let main_body_right_side_2ndrow = document.querySelector(".container2-albums");
    main_body_right_side_2ndrow.classList.remove("hidden");

    //1st row 
    let main_body_right_side_1strow = document.querySelector(".content-right-1strow");
    main_body_right_side_1strow.classList.remove("hidden");

    // 3rd row
    let main_body_right_side_3rdrow = document.querySelector(".Feature-title");
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

//HAMBURGER BUTTON
let hamburger = document.querySelector('.responsive-hamburger')

hamburger.addEventListener("click", () => {
    let leftPanel = document.querySelector('.left-panel');
    let rightPanel = document.querySelector('.right-panel');
    let leftPanel_box = document.querySelector('.left-box-two');

    leftPanel.classList.toggle('active');
    rightPanel.classList.toggle('shrink');

    let back_element_hamburger = document.createElement("div")
    back_element_hamburger.innerHTML = back_element_hamburger.innerHTML + `<i class="fa-solid fa-circle-chevron-left"></i> back`
    back_element_hamburger.setAttribute("text", "sm");
    back_element_hamburger.setAttribute("text", "white");
    back_element_hamburger.setAttribute("text", "right");
    back_element_hamburger.classList.remove("right-14")
    back_element_hamburger.classList.remove("relative")
    document.querySelector(".image-logo").after(back_element_hamburger)
    // leftPanel.querySelector(".image-logo")

    back_element_hamburger.addEventListener("click", () => {
        leftPanel.classList.remove('active');
        rightPanel.classList.remove('shrink');
        back_element_hamburger.remove();
    })

    if (window.matchMedia("(max-width: 466px)").matches) {
        if (back_element_hamburger) {
            back_element_hamburger.classList.add("relative")
            back_element_hamburger.classList.add("right-14")
        }
    }
}
)



// FIRST PHOTOS INVISIBLE
let show_photos = document.querySelector(".show-all-right-panel");
show_photos.addEventListener("click", (element) => {
    let photos_invisible_responsive1 = document.querySelector('.photos-card-invisible-responsive');
    let photos_invisible_responsive2 = document.querySelector('.photos-card-invisible-responsive2');
    let photos_invisible_responsive3 = document.querySelector('.photos-card-invisible-responsive3');

    let photos_container_artists = document.getElementById("containers-photos");
    photos_container_artists.classList.add("flex-wrap");

    let main_body_right_side = document.getElementById("main-content-right-panel");
    main_body_right_side.classList.add("overflow-y-hidden", "scrollable");

    let photos_invisible_artists = document.querySelectorAll(".photos-cards-invisible");
    for (let index = 0; index < photos_invisible_artists.length; index++) {
        const element = photos_invisible_artists[index];
        element.classList.remove("hidden");
        element.classList.add("opacity-100");
    }

    //responsive
    if (window.matchMedia("(max-width: 1226px)").matches) {
        if (photos_invisible_responsive1) {
            photos_invisible_responsive1.classList.remove('hidden');
            photos_invisible_responsive1.style.display = 'block';
            photos_invisible_responsive1.style.width = '30%';
            photos_invisible_responsive1.style.height = '37vh';
        }

        let photos_cards = document.querySelectorAll(".photos-cards");
        for (let index = 0; index < photos_cards.length; index++) {
            let card = photos_cards[index];
            card.style.width = '30%';
            card.style.height = '37vh';
        }

        for (let index = 0; index < photos_invisible_artists.length; index++) {
            const element = photos_invisible_artists[index];
            element.style.width = '30%';
            element.style.height = '37vh';
        }
    }

    if (window.matchMedia("(max-width: 743px)").matches) {
        if (photos_invisible_responsive1) {
            photos_invisible_responsive1.style.width = '32%';
            photos_invisible_responsive1.style.height = '30vh';
        }

        let photos_cards = document.querySelectorAll(".photos-cards");
        for (let index = 0; index < photos_cards.length; index++) {
            let card = photos_cards[index];
            card.style.width = '32%';
            card.style.height = '30vh';
        }

        for (let index = 0; index < photos_invisible_artists.length; index++) {
            const element = photos_invisible_artists[index];
            element.style.width = '32%';
            element.style.height = '30vh';
        }

        if (photos_invisible_responsive2) {
            photos_invisible_responsive2.classList.remove('hidden');
            photos_invisible_responsive2.style.display = 'block';
            photos_invisible_responsive2.style.width = '32%';
            photos_invisible_responsive2.style.height = '30vh';
        }
    }

    if (window.matchMedia("(max-width: 610px)").matches) {
        if (photos_invisible_responsive1) {
            photos_invisible_responsive1.style.width = '46%';
            photos_invisible_responsive1.style.height = '30vh';
        }

        let photos_cards = document.querySelectorAll(".photos-cards");
        for (let index = 0; index < photos_cards.length; index++) {
            let card = photos_cards[index];
            card.style.width = '46%';
            card.style.height = '30vh';
        }

        for (let index = 0; index < photos_invisible_artists.length; index++) {
            const element = photos_invisible_artists[index];
            element.style.width = '46%';
            element.style.height = '30vh';
        }

        if (photos_invisible_responsive3) {
            photos_invisible_responsive3.classList.remove('hidden');
            photos_invisible_responsive3.style.display = 'block';
            photos_invisible_responsive3.style.width = '46%';
            photos_invisible_responsive3.style.height = '30vh';
        }
    }

    //back button
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.add("font-extrabold")
    back_button_left.classList.add("text-white")
    back_button_left.classList.add("text-xl")

    //2nd row
    let photos_albums = document.querySelectorAll(".photos-albums");
    for (let index = 0; index < photos_albums.length; index++) {
        const element = photos_albums[index];
        element.classList.add("hidden");
    }

    let main_body_right_side_2ndrow = document.querySelector(".container2-albums");
    main_body_right_side_2ndrow.classList.add("hidden");

    //3rd row
    let main_body_right_side_3rdrow = document.querySelector(".Feature-title");
    main_body_right_side_3rdrow.classList.add("hidden");

    let photos_features = document.querySelectorAll(".photos-features");
    for (let index = 0; index < photos_features.length; index++) {
        const element = photos_features[index];
        element.classList.add("hidden");
    }

    //HOME button
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.add("font-extrabold")
    home_button_left.classList.add("text-white")
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

    let main_body_right_side_1strow = document.querySelector(".content-right-1strow");
    main_body_right_side_1strow.classList.add("hidden");

    let main_body_right_side_3rdrow = document.querySelector(".Feature-title");
    main_body_right_side_3rdrow.classList.add("hidden");

    //back button
    let back_button_left = document.querySelector(".back-button")
    back_button_left.classList.add("font-extrabold")
    back_button_left.classList.add("text-white")
    back_button_left.classList.add("text-xl")

    //HOME button
    let home_button_left = document.querySelector(".home-left-panel")
    home_button_left.classList.add("font-extrabold")
    home_button_left.classList.add("text-white")
    home_button_left.classList.add("text-3xl")

    //responsive
    let photos_albums_invisible_responsive1 = document.querySelector(".albums1-responsive")
    let photos_albums_invisible_responsive2 = document.querySelector(".albums2-responsive")
    let photos_albums_invisible_responsive3 = document.querySelector(".albums3-responsive")

    if (window.matchMedia("(max-width: 1226px)").matches) {
        if (photos_albums_invisible_responsive1) {
            photos_albums_invisible_responsive1.classList.remove('hidden');
            photos_albums_invisible_responsive1.style.display = 'block';
        }
    }

    if (window.matchMedia("(max-width: 743px)").matches) {
        let photos_invisible_albums = document.querySelectorAll(".photos-albums-invisible");
        for (let index = 0; index < photos_invisible_albums.length; index++) {
            const element = photos_invisible_albums[index];
            element.classList.remove("hidden");
            element.classList.add("w-[33%]");
        }

        if (photos_albums_invisible_responsive2) {
            photos_albums_invisible_responsive2.classList.remove('hidden');
            photos_albums_invisible_responsive2.style.display = 'block';
            photos_albums_invisible_responsive2.classList.add('w-33%');
        }
    }

    if (window.matchMedia("(max-width: 610px)").matches) {
        let photos_invisible_albums = document.querySelectorAll(".photos-albums-invisible");
        for (let index = 0; index < photos_invisible_albums.length; index++) {
            const element = photos_invisible_albums[index];
            element.classList.remove("hidden");
            element.classList.add("w-[50%]");
        }

        if (photos_albums_invisible_responsive3) {
            photos_albums_invisible_responsive3.classList.remove('hidden');
            photos_albums_invisible_responsive3.style.display = 'block';

        }
    }
}
);



async function main() {
    let songs = await getsongs();
    console.log(songs)
    await playsongs(songs)
    let songs_name = []
    let song_time = []

    for (let index = 0; index < songs.length; index++) {
        const element = songs[index];

        // const songPart = element.split("/Songs/")[1];
        songs_name.push(element.href.split("/Songs/songs_folder/")[1].replaceAll("%20", " ").replaceAll("(PagalWorld.com.sb)", "").replaceAll("_64", "").replaceAll("_", ""))

    }
    console.log(songs_name)
    console.log(song_time)


}
main()

//77, 849, 258
