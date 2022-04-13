const gameBar = (isGameRuning) => {
    const gameBarId = "gameBar";

    if (isGameRuning) {
        const gameBar = document.createElement("div");
        const aleks = document.createElement("div");
        const toni = document.createElement("div");
        const misko = document.createElement("div");
        const hanning = document.createElement("div");
        const bayoMoy = document.createElement("div");

        gameBar.setAttribute("id", gameBarId);
        aleks.setAttribute("class", "player aleks invincible");
        toni.setAttribute("class", "player toni invincible");
        misko.setAttribute("class", "player misko invincible");
        hanning.setAttribute("class", "player hanning invincible");
        bayoMoy.setAttribute("class", "player bayoMoy invincible");

        gameBar.append(aleks);
        gameBar.append(toni);
        gameBar.append(misko);
        gameBar.append(hanning);
        gameBar.append(bayoMoy);

        document.querySelector('body').prepend(gameBar);
    }
};

export default gameBar;