const mySiema = new Siema({
    duration: 700,
    draggable: true,
    loop: true
});

// setInterval(() => mySiema.next(), 5000);

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
