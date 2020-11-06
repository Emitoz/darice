const wishBtn = document.querySelector('#wish-btn');
const myModal = document.querySelector('.my-modal');
const genie = document.querySelector('#genie');
const result = document.querySelector('#result');
const closeBtn = document.querySelector('#close');

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