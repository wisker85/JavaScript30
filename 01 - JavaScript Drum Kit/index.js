const tasti = document.querySelectorAll(".key");

tasti.forEach( x => {
    x.addEventListener("click", () => {
        x.classList.add("playing");
        const audio = this.document.querySelector(`audio[data-key="${x.dataset.key}"]`);
        audio.currentTime = 0;
        audio.play();
    });
    
});

function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const tasto = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio && !tasto) return;
    tasto.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach( key => {
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
