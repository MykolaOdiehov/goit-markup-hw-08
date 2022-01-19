(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-phone-open]'),
      closeModalBtn: document.querySelector('[data-modal-phone-close]'),
      modal: document.querySelector('[data-modal-phone]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-phone');
    }
  })();