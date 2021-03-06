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
    const source = document.createElement('source');
    player.setAttribute('controls', '');
    player.setAttribute('autoplay', '');
    source.setAttribute('src', publicDir + src);
    source.setAttribute('type', 'audio/mpeg');
    player.append(source);

    return player;
}

export default playSound;
