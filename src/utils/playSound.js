const publicDir = window.location.origin + '/';

export const playSound = (src) => {
    const audio = new Audio(publicDir + src);
    audio.play();
}

export const hitSound = () => {
    const damageSounds = [
        'Helmet.mp3',
        'Ouch.mp3'
    ];
    playSound(damageSounds[Math.floor(Math.random() * (1 + 1))]);
}