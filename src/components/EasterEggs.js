import {useEffect, useState} from 'react'
import keyBinding from "../utils/keyBinding";
import gameBar from "../utils/gameBar";
import shoot from "../utils/shoot";
import MobsManager from "../utils/MobsManager";

const EasterEggs = () => {
    const [isGameRuning, runGame] = useState(false);
    const [invokeMobs, setInvokeMobs] = useState('');

    const body = document.querySelector('body');
    const gameClassName = 'easterGameRuning';

    useEffect(() => {
        isGameRuning ? runEasterGame() : exitEasterGame();
    }, [isGameRuning]);

    keyBinding(isGameRuning, runGame);

    const runEasterGame = () => {
        body.classList.add(gameClassName);
        gameBar(isGameRuning);

        let invoker = setInterval(
            () => {
                MobsManager.invokeRandomMob();
                MobsManager.moveMobs();
            }, 500
        );
        setInvokeMobs(invoker);

        document.addEventListener('click', (event) => {
            event.preventDefault();
            shoot(event, isGameRuning);
        });
    }

    const exitEasterGame = () => {
        const gameBar = document.querySelector('#gameBar');
        const mobs = document.querySelectorAll('.mob');

        body.classList.remove(gameClassName)
        clearInterval(invokeMobs);

        if (gameBar) {
            gameBar.remove();
        }
        if (mobs.length > 0) {
            mobs.forEach((mob) => {
                mob.remove();
            });
        }
    }
}

export default EasterEggs;
