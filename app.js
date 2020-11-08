const wishBtn = document.querySelector('#wish-btn');
const myModal = document.querySelector('.my-modal');
const genie = document.querySelector('#genie');
const result = document.querySelector('#result');
const closeBtn = document.querySelector('#close');
const music = document.querySelector('#music');
const musicButton = document.querySelector('#music-button');

wishBtn.addEventListener('click', (e) => {
    myModal.style.display = "block";
    waitForGenie();
    genie.style.display = "block";
    result.style.display = "none";
});

closeBtn.addEventListener('click', (e) => {
    myModal.style.display = "none";
});

const waitForGenie = () => {
    setTimeout(() => {
        genie.style.display = "none";
        result.style.display = "block";
    }, 2000);
}

musicButton.addEventListener('click', (e) => {
    if(music.paused || music.ended){
        music.volume = 0.6;
        music.play();
        musicButton.style.background = 'crimson';
        musicButton.innerHTML = 'stop music';
    } else {
        music.pause();
        musicButton.style.background = '#15c593';
        musicButton.innerHTML = 'play music';
    }
});