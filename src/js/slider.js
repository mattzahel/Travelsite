const mainSiema = new Siema({
    selector: "#siema-header",
    duration: 700,
    draggable: true,
    loop: true
    // perPage: { 320: 3, 768: 5}
});

setInterval(() => mainSiema.next(), 5000);

document.querySelector('.prev').addEventListener('click', () => mainSiema.prev());
document.querySelector('.next').addEventListener('click', () => mainSiema.next());
