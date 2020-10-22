const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.individual-card');

for (let individualCard of cards) {
    individualCard.addEventListener("click", function() {
        const videoId = individualCard.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src= `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=""
})
    

