// function for removing preload animation after the load is finished
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');

    preload.classList.add('preload-finished');
});