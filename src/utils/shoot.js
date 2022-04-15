import {hitSound, playSound} from "./playSound";

const shoot = (event, isGameRuning) => {
    if (!isGameRuning) {
        return false;
    }
    const target = event.target;
    const damagedClassName = 'damaged';
    const destroyedClassName = 'destroyed';

    if (target.classList.contains('invincible')) {
        return false;
    }

    if (!target.classList.contains(damagedClassName)) {
        target.classList.add(damagedClassName);
        if (target.classList.contains('mob')) {
            hitSound();
        }
    } else {
        target.classList.add(destroyedClassName);
        if (target.classList.contains('mob')) {
            hitSound();
            playSound('Headshot.mp3');
        }
    }
};

export default shoot;
