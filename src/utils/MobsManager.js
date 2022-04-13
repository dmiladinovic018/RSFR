class MobsManager {
    static invokeRandomMob = () => {
        const mob = document.createElement("div");
        const mobsClasses = [
            'aleks',
            'toni',
            'misko',
            'hanning',
            'baya'
        ];

        mob.setAttribute("class", 'mob ' + mobsClasses[this.getRandomPosition(0, 5)]);
        mob.style.left = this.getRandomPosition(1, 90) + '%';
        mob.style.top = '0px';

        document.querySelector('body').prepend(mob);
    };

    static getRandomPosition = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static moveMobs = () => {
        const mobs = document.querySelectorAll('.mob');
        mobs.forEach((mob) => {
            const currentOffset = Number(mob.style.top.split('px')[0]);
            mob.style.top = (currentOffset + 25) + 'px';
        });
    }
}

export default MobsManager;
