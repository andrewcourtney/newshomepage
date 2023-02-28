document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        const siteMenu = document.querySelector('.nav--primary');
        const siteMenuToggleOpen = document.querySelector('.toggle.open');
        const siteMenuToggleClose = document.querySelector('.toggle.close');
        const siteMenuOverlay = document.querySelector('.overlay');

        siteMenuToggleOpen.addEventListener('click', function () {
            siteMenuOverlay.classList.add('fadeIn', 'visible');
            siteMenu.setAttribute('style', `transform: translate(-300px, 0)`);
        });

        siteMenuToggleClose.addEventListener('click', function () {
            siteMenuOverlay.classList.remove('fadeIn', 'visible');
            siteMenu.setAttribute('style', `transform: translate(0, 0)`);
        });

        siteMenuOverlay.addEventListener('click', function () {
            siteMenuOverlay.classList.remove('fadeIn', 'visible');
            siteMenu.setAttribute('style', `transform: translate(0, 0)`);
        });
    }
}