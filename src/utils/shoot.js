const playSound = (src) => {
    var audio = new Audio(src);
    audio.play();
}

const hitSound = () => {
    const damageSounds = [
        'Helmet.mp3',
        'Ouch.mp3'
    ];
    playSound(damageSounds[Math.floor(Math.random() * (1 + 1))]);
}

const shoot = (event, isGameRuning) => {
    if (!isGameRuning) {
        return false;
    }
    const target = event.target;
    const damagedClassName = 'damaged';
    const destroyedClassName = 'destroyed';

    if (!target.classList.contains('invincible')){
        if (!target.classList.contains(damagedClassName)) {
            target.classList.add(damagedClassName);
            if (target.classList.contains('mob')){
                hitSound();
            }
        } else {
            target.classList.add(destroyedClassName);
            if (target.classList.contains('mob')){
                hitSound();
                playSound('Headshot.mp3');
            }
        }
    }
};

export default shoot;
