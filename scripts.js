document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    const sidebarImage = document.getElementById('sidebar-image');
    const logoImage = document.getElementById('logo-image');

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('sidebar-open');
    });

    sidebarImage.addEventListener('click', function() {
        window.location.href = 'musicplayer.html';
    });

    logoImage.addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const volumeControl = document.getElementById('volume');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});
