const publicDir = window.location.origin + '/sounds/';

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

export const playMusic = (src) => {
    const player = document.createElement('audio');
    player.setAttribute('src', src);

    return player;
}

export default playSound;
