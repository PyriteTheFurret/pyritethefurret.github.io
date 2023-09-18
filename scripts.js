
var currentTab = 0;

const musicData = [
    //Fractured
    [
        {
            "Name":"Fractured"
        },
        {
            "Title":"Not Okay",
            "Album": "Fractured",
            "Tags":["Lyrical"],
            "Source":"assets/audio/fractured-01-not-okay.mp3"
        },
        {
            "Title":"Childhood Memories",
            "Album": "Fractured",
            "Tags":["Instrumental"],
            "Source":"assets/audio/fractured-02-childhood-memories-instrumental.mp3"
        },
        {
            "Title":"Radio",
            "Album": "Fractured",
            "Tags":["Lyrical"],
            "Source":"assets/audio/fractured-03-radio.mp3"
        },
        {
            "Title":"Were They Really?",
            "Album": "Fractured",
            "Tags":["Instrumental", "WIP"],
            "Source":"assets/audio/fractured-04-were-they-really-wip.mp3"
        },
        {
            "Title":"Antagonist",
            "Album": "Fractured",
            "Tags":["Instrumental"],
            "Source":"assets/audio/fractured-06-antagonist.mp3"
        },
        {
            "Title":"Dysfunction Junction",
            "Album": "Fractured",
            "Tags":["Instrumental", "WIP"],
            "Source":"assets/audio/fractured-07-dysfunction-junction-instrumental.mp3"
        },
        {
            "Title":"Fractured",
            "Album": "Fractured",
            "Tags":["Lyrical", "WIP"],
            "Source":"assets/audio/fractured-09-fractured-wip.mp3"
        },
        {
            "Title":"To Deal With Death",
            "Album": "Fractured",
            "Tags":["Instrumental"],
            "Source":"assets/audio/fractured-10-to-deal-with-death-wip.mp3"
        }
    ],
    //Cerulean
    [
        {
            "Name":"Cerulean"
        },
        {
            "Title":"Title Screen",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-00-title-screen.mp3"
        },
        {
            "Title":"Lost to the Waves",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-01-lost-to-the-waves.mp3"
        },
        {
            "Title":"Torrents of Torment",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-02-torrents-of-torment.mp3"
        },
        {
            "Title":"Scoundrels!",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-03-scoundrels.mp3"
        },
        {
            "Title":"Cold Before the Storm",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-04-cold-before-the-storm.mp3"
        },
        {
            "Title":"Meltdown",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-05-meltdown.mp3"
        },
        {
            "Title":"Scorching Memories",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-06-scorching-memories.mp3"
        },
        {
            "Title":"Up in Flames",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-07-up-in-flames.mp3"
        },
        {
            "Title":"Depressing-Ass Plains",
            "Album": "Cerulean",
            "Tags":["Instrumental", "WIP"],
            "Source":"assets/audio/cerulean-08-depressing-ass-plains-wip.mp3"
        },
        {
            "Title":"Buy!",
            "Album": "Cerulean",
            "Tags":["Instrumental"],
            "Source":"assets/audio/cerulean-buy.mp3"
        }
    ],
    //Misc. Original Songs
    [
        {
            "Name":"Misc. Original Songs"
        },
        {
            "Title":"Don't Have the Heart",
            "Album": "none",
            "Tags":["Instrumental"],
            "Source":"assets/audio/dont-have-the-heart.mp3"
        },
        {
            "Title":"Hidden Cavern",
            "Album": "none",
            "Tags":["Instrumental"],
            "Source":"assets/audio/hidden-cavern.mp3"
        },
        {
            "Title":"The Beast of Desolation",
            "Album": "none",
            "Tags":["Instrumental"],
            "Source":"assets/audio/the-beast-of-desolation.mp3"
        }
    ],
    //Remixes
    [
        {
            "Name":"Remixes"
        },
        {
            "Title":"Don't Ever Forget... (Remix)",
            "Album": "none",
            "Tags":["Remix", "Instrumental"],
            "Source":"assets/audio/dont-ever-forget-remix.mp3"
        },
        {
            "Title":"In The Morning Sun (Remix)",
            "Album": "none",
            "Tags":["Remix", "Instrumental"],
            "Source":"assets/audio/in-the-morning-sun-remix.mp3"
        },
        {
            "Title":"It Sees Everything (Remix)",
            "Album": "none",
            "Tags":["Remix", "Instrumental"],
            "Source":"assets/audio/it-sees-everything-remix.mp3"
        },
        {
            "Title":"Threat - Outskirts (Remix)",
            "Album": "none",
            "Tags":["Remix", "Instrumental"],
            "Source":"assets/audio/outskirts-threat-remix.mp3"
        },
        {
            "Title":"Scattered and Lost (Remix)",
            "Album": "none",
            "Tags":["Remix", "Instrumental", "WIP"],
            "Source":"assets/audio/scattered-and-lost-remix-wip.mp3"
        }
    ]
];

function switchTab(index) {
    document.getElementById("tabSelection" + currentTab).style.color = "#ffffff";
    document.getElementById("tabSelection" + currentTab).style.backgroundColor = "#000000";
    document.getElementById("tab" + currentTab).style.display = "none";
    currentTab = index;
    document.getElementById("tabSelection" + currentTab).style.color = "#000000";
    document.getElementById("tabSelection" + currentTab).style.backgroundColor = "#ffffff";
    document.getElementById("tab" + currentTab).style.display = "inline";
}

// ----- Music Player Stuff ----- //

var currentAlbum = 0;
var currentSong = 1;

var jamPlayer = document.getElementById("theJams");
var jamSource = document.getElementById("srcJams");

//Purpose: Switch between albums and songs on the music player.
//Called by: The previous and next buttons on the music player.
//Arguments: btnId, an int from -2 to 1
function changeMusicPlayer(btnId) {
    //Pause the currently playing song, if it's playing
    if (!jamPlayer.paused) {var jamsPaused = false;jamPlayer.pause();}
    else var jamsPaused = true;
    //Switch for the btnId variable
    switch (btnId) {
        case -2:
            //Previous album
            if (currentAlbum == 0) currentAlbum = musicData.length - 1;
            else currentAlbum--;
            break;
        case -1:
            //Next album
            if (currentAlbum == musicData.length - 1) currentAlbum = 0;
            else currentAlbum++;
            break;
        case 0:
            //Previous song
            if (currentSong == 1) currentSong = musicData[currentAlbum].length - 1;
            else currentSong--;
            break;
        case 1:
            //Next song
            if (currentSong == musicData[currentAlbum].length - 1) currentSong = 1;
            else currentSong++;
            break;
        default:
            //Throw a fit (an error) or do nothing. Your choice, Pyrite.
    }
    //If the album is being changed, change the album-related labels
    if (btnId < 0) {
        document.getElementById("btnAlbumLabel").textContent = "(" + (currentAlbum + 1) + "/" + musicData.length + ") " + musicData[currentAlbum][0]["Name"];
        currentSong = 1;
    }
    //Update the song label, as well as the track title, album, and tags labels
    document.getElementById("btnSongLabel").textContent = "(" + currentSong + "/" + (musicData[currentAlbum].length - 1) + ") " + musicData[currentAlbum][currentSong]["Title"];
    document.getElementById("strongSongName").textContent = musicData[currentAlbum][currentSong]["Title"];
    document.getElementById("spanAlbumName").textContent = musicData[currentAlbum][currentSong]["Album"];
    document.getElementById("spanTags").textContent = musicData[currentAlbum][currentSong]["Tags"].join(", ");
    //Update the audio player's song
    jamSource.src = musicData[currentAlbum][currentSong]["Source"];
    jamPlayer.load();
    if (!jamsPaused) jamPlayer.play();
}

document.addEventListener("keydown",(ev) => {
    if (currentTab == 2) {
        switch (ev.key) {
            case " ":
                if (jamPlayer.paused) jamPlayer.play();
                else jamPlayer.pause();
                break;
            case "k":
                changeMusicPlayer(-2);
                break;
            case "i":
                changeMusicPlayer(-1);
                break;
            case "j":
                changeMusicPlayer(0);
                break;
            case "l":
                changeMusicPlayer(1);
                break;
            default:
                //Do nothing
        }
    }
});
