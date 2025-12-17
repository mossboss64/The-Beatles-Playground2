let r;
let currentAlbum = "abbey";

const audioPlayer = document.getElementById("album-song");
const beatleImage = document.getElementById("beatle-main");
let currentBeatleImage = beatleImage.src;

const albumTracks = {
  abbey: "audio/golden.ogg",
  sgt: "audio/daylife.ogg",
  hardday: "audio/dancewyou.ogg",
  help: "audio/hideloveaway.ogg",
  rs: "audio/in-my-life.ogg",
  white: "audio/julia.ogg",
  pls: "audio/secret.ogg",
  lib: "audio/longroad.ogg",
};

document.querySelector(".play-button").addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  audioPlayer.load();
  audioPlayer.play();

  currentBeatleImage = beatleImage.src;
  beatleImage.src = "images/vinyl.png";
  beatleImage.classList.add("vinyl");
});

document.querySelector(".pause-button").addEventListener("click", () => {
  audioPlayer.pause();
  beatleImage.classList.remove("vinyl");
  beatleImage.src = currentBeatleImage;
});

function setTheme(left, title, info, accent, text = "black") {
  document.querySelector(".beatlecol-left").style.backgroundColor = left;
  document.querySelector(".album-title").style.backgroundColor = title;
  document.querySelector(".info").style.background = info;
  document.querySelector(".info").style.color = text;
  document.documentElement.style.setProperty("--bg-accent", accent);
}

function resetVinyl(img) {
  beatleImage.classList.remove("vinyl");
  beatleImage.src = img;
}

function changeToAbbey() {
  resetVinyl("images/beatles/beatlesabbyroaderaa.png");
  setTheme("#cfcfcf", "#f5f2ea", "#cfcfcf", "#4caf50");
  currentAlbum = "abbey";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.abbey;
}

function changeToSgt() {
  resetVinyl("images/beatles/sgtpeppersbeatles1.png");
  setTheme(
    "#d7263d",
    "#fbb13c",
    "linear-gradient(180deg,#fbb13c,#d7263d)",
    "#d7263d"
  );
  currentAlbum = "sgt";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.sgt;
  document.querySelector(".album-title img").src =
    "images/titles/sgtpepperstitle.jpeg";
  document.querySelector(".info").textContent =
    "Sgt. Pepper’s Lonely Hearts Club Band (1967)";
}

function changeToHardDay() {
  resetVinyl("images/beatles/hard-days-night (1).png");
  setTheme("#0d1b2a", "white", "#0d1b2a", "#1b263b", "white");
  currentAlbum = "hardday";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.hardday;
  document.querySelector(".album-title img").src =
    "images/titles/harddaysnighttitle (1).png";
  document.querySelector(".info").textContent = "A Hard Day’s Night (1964)";
}

function changeToHelp() {
  resetVinyl("images/beatles/helpbeatlespiano1.png");
  setTheme("#1f6ae1", "#ffffff", "#1f6ae1", "#ffffff");
  currentAlbum = "help";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.help;
  document.querySelector(".album-title img").src =
    "images/titles/beatleshelp!.png";
  document.querySelector(".info").textContent = "Help! (1965)";
}

function changeToRS() {
  resetVinyl("images/beatles/1965rbbersoulbeatles.png");
  setTheme(
    "#6a4f3b",
    "#f1b27a",
    "linear-gradient(180deg,#f1b27a,#6a4f3b)",
    "#6a4f3b"
  );
  currentAlbum = "rs";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.rs;
  document.querySelector(".album-title img").src =
    "images/titles/rbbersoultitle (1).png";
  document.querySelector(".info").textContent = "Rubber Soul (1965)";
}

function changeToWhite() {
  resetVinyl("images/beatles/whitealbm1968beat1.png");
  setTheme("#ffffff", "#ffffff", "#e0e0e0", "#ffffff");
  currentAlbum = "white";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.white;
  document.querySelector(".album-title img").src =
    "images/titles/white-albm-title1.png";
  document.querySelector(".info").textContent =
    "The Beatles (White Album) (1968)";
}

function goToPls() {
  resetVinyl("images/beatles/1963beat.png");
  setTheme(
    "#2e2e2e",
    "#ffffff",
    "linear-gradient(180deg,#ffffff,#2e2e2e)",
    "#2e2e2e"
  );
  currentAlbum = "pls";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.pls;
  document.querySelector(".album-title img").src =
    "images/titles/plsplsmetitle.png";
  document.querySelector(".info").textContent = "Please Please Me (1963)";
}

function goToLIB() {
  resetVinyl("images/beatles/beatles-rooftopconcert.jpg");
  setTheme(
    "#1e1e1e",
    "#ffffff",
    "linear-gradient(180deg,#ffffff,#1e1e1e)",
    "#1e1e1e"
  );
  currentAlbum = "lib";
  audioPlayer.pause();
  audioPlayer.src = albumTracks.lib;

  document.querySelector(".album-title img").src =
    "images/titles/letitbetitle1.png";
  document.querySelector(".info").textContent = "Let It Be (1970)";
}

function randomizer() {
  r = Math.floor(Math.random() * 8) + 1;
  if (r == 1) changeToAbbey();
  if (r == 2) goToLIB();
  if (r == 3) goToPls();
  if (r == 4) changeToWhite();
  if (r == 5) changeToRS();
  if (r == 6) changeToHelp();
  if (r == 7) changeToHardDay();
  if (r == 8) changeToSgt();
}

//explorepage
document.querySelectorAll(".historyBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("explorePanel").hidden = true;
    const panelId = btn.getAttribute("data-panel");
    document.getElementById(panelId).hidden = false;
  });
});

document.querySelectorAll(".backBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.hidden = true;
    document.getElementById("explorePanel").hidden = false;
  });
});
