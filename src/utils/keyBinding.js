const keyBinding = (isGameRuning, runGame) => {
    let keysPressed = {};

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;

        if (keysPressed['Control'] && event.key === ' ') {
            runGame(true);
        }
    });

    document.addEventListener('keyup', (event) => {
        if (keysPressed['Escape'] && isGameRuning) {
            runGame(false);
        }

        delete keysPressed[event.key];
    });
};

export default keyBinding;