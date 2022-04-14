import {playMusic, playSound} from "./playSound";

const gameBar = (isGameRuning) => {
    const gameBarId = "gameBar";

    if (isGameRuning) {
        const gameBar = document.createElement("div");
        // const aleks = document.createElement("div");
        // const toni = document.createElement("div");
        // const misko = document.createElement("div");
        // const hanning = document.createElement("div");
        // const bayoMoj = document.createElement("div");
        const player = playMusic('Invader - Dance with the dead.mp4');

        gameBar.setAttribute("id", gameBarId);
        // aleks.setAttribute("class", "player aleks invincible");
        // toni.setAttribute("class", "player toni invincible");
        // misko.setAttribute("class", "player misko invincible");
        // hanning.setAttribute("class", "player hanning invincible");
        // bayoMoj.setAttribute("class", "player bayoMoj invincible");

        // gameBar.append(aleks);
        // gameBar.append(toni);
        // gameBar.append(misko);
        // gameBar.append(hanning);
        // gameBar.append(bayoMoj);
        gameBar.append(player);

        document.querySelector('body').prepend(gameBar);
    }
};

export default gameBar;