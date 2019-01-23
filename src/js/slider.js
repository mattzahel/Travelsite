const mainSiema = new Siema({
    selector: "#siema-header",
    duration: 700,
    draggable: true,
    loop: true
});
setInterval(() => mainSiema.next(), 5000);
document.querySelector('#main-prev').addEventListener('click', () => mainSiema.prev());
document.querySelector('#main-next').addEventListener('click', () => mainSiema.next());


const exploreSiema = new Siema({
    selector: "#siema-explore",
    draggable: true,
    loop: true,
    startIndex: 0,
    perPage: { 320: 2, 768: 4, 1200: 5}
})
document.querySelector('#explore-prev').addEventListener('click', () => exploreSiema.prev());
document.querySelector('#explore-next').addEventListener('click', () => exploreSiema.next());