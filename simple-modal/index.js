// get modal element
let  modal = document.getElementById('simple-modal');
// get open modal button
let modalBtn = document.getElementById('modal-btn');
// get close button
let closeBtn = document.getElementsByClassName('close-btn')[0];

//add event listeners

//add event listener to open modal button
modalBtn.addEventListener('click', openModal);

// add event listener to close button
closeBtn.addEventListener('click', closeModal);

//add event listener to close modal if user clicks outside of modal
window.addEventListener('click', outsideClick);

// function to open modal
function openModal() {
    modal.style.display = 'block';
} 

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}
// function to close modal if user clicks outside of modal
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}