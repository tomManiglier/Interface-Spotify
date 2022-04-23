// Caroussel
const annonce = document.querySelector('.annonce');
const artist = document.querySelector('#artist');
const single = document.querySelector('#single');
const cover = document.querySelector('#cover');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

next.addEventListener('click', () => {
    annonce.style.background = "#3d8914";
    artist.innerHTML = "Rarin";
    single.innerHTML = "GTA 2";
    cover.src = "img/cover-annonce2.jpg";
    prev.style.height = "8px";
    prev.style.width = "8px";
    next.style.height = "10px";
    next.style.width = "10px";
});

prev.addEventListener('click', () => {
    annonce.style.background = "#6078eb";
    artist.innerHTML = "Josh A";
    single.innerHTML = "All Time Low";
    cover.src = "img/cover-annonce1.jpg";
    next.style.height = "8px";
    next.style.width = "8px";
    prev.style.height = "10px";
    prev.style.width = "10px";
});