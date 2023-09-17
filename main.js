//JavaScript
const selectElement = (element) => document.querySelector(element);


selectElement('.mobile-menu').addEventListener('click',() => {
selectElement('.nav-list-mobile').classList.toggle('active');
});
