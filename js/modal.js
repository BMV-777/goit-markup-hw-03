(() => {

    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggLeModal);
    refs.closeModalBtn.addEventListener('click', toggLeModal);

    refs.backdrop.addEventListener('click', logBackdropClick);

    function toggLeModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();     



// (() => {
//     document
//         .querySelector('.js-speaker-form')
//         .addEventListener('submit', e => {
//             e.preventDefault();
//             new FormData(e.currentTarget).forEach((value, name) =>
//                 console.log(`${name}: ${value}`),
//             );
//         });
// })();