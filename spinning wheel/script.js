
(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'none';
        deg = Math.floor(1000 + Math.random() * 1000);
        wheel.style.transition = 'all 3s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    });

    wheel.addEventListener('transitionend', () => {
        // and you can press startbutton when wheel stop
        startButton.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    })
})();
