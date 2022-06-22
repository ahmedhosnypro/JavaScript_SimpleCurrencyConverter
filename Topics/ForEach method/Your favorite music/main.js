const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic() {
    music.forEach(function (v, i, arr) {
        console.log(`My favorite music is ${v} choosing from ${arr}`);
    });
}