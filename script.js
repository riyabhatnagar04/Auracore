function handleLightToggle(toggle) {
    const status = document.getElementById("lightStatus");
    if (toggle.checked) {
        status.textContent = "On";
        console.log("Light turned ON");
    } else {
        status.textContent = "Off";
        console.log("Light turned OFF");
    }
}

function adjustTemp(action) {
    console.log("Temperature action:", action);
}

function playMusic() {
    console.log("Music: Play");
}

function pauseMusic() {
    console.log("Music: Pause");
}

function nextTrack() {
    console.log("Music: Next Track");
}
let currentTemp = 78;

function adjustTemp(action) {
    if (action === 'increase') {
        currentTemp++;
    } else if (action === 'decrease') {
        currentTemp--;
    }

    document.getElementById("temperatureDisplay").textContent = `${currentTemp}°F`;
}
const songs = [
    " Unicorn Karaoke Disaster",
    " Chicken Dance Symphony",
    " Pickle Beats Volume 3",
    " Duckstep Drops",
    " Banana Vibes Forever",
    " Cheesy Love Ballad",
    " Grandma's Disco Fever",
    " Rocket Lullaby Remix"
];

let currentSongIndex = -1;
let isPlaying = false;

function togglePlayPause() {
    if (!isPlaying) {
        // Start playing random song if nothing is selected
        if (currentSongIndex === -1) {
            currentSongIndex = Math.floor(Math.random() * songs.length);
        }
        isPlaying = true;
        updateSongDisplay();
        console.log("Playing:", songs[currentSongIndex]);
    } else {
        isPlaying = false;
        updateSongDisplay("(Paused)");
        console.log("Music paused");
    }
}

function stopMusic() {
    isPlaying = false;
    currentSongIndex = -1;
    updateSongDisplay("No song playing");
    console.log("Music stopped");
}

function nextTrack() {
    if (songs.length === 0) return;

    // Choose a new random song that's not the current one
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * songs.length);
    } while (nextIndex === currentSongIndex);

    currentSongIndex = nextIndex;
    isPlaying = true;
    updateSongDisplay();
    console.log("Next song:", songs[currentSongIndex]);
}

function updateSongDisplay(suffix = "") {
    const songDisplay = document.getElementById("songDisplay");
    if (currentSongIndex >= 0) {
        songDisplay.textContent = songs[currentSongIndex] + " " + suffix;
    } else {
        songDisplay.textContent = suffix || "No song playing";
    }
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js").then(reg => {
            console.log("Service Worker registered ✅", reg);
        }).catch(err => {
            console.error("Service Worker registration failed ❌", err);
        });
    });
}



