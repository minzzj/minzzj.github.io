window.onload = function() {
    let index = 0;
    const images = document.querySelectorAll('.carousel img');
    setInterval(function() {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        index = (index + 1) % images.length;
    }, 3000);
};