(() => {
  const refs = {
    openMapModalBtn: document.querySelector('[data-map-open]'),
    closeMapModalBtn: document.querySelector('[data-map-modal-close]'),
    modal: document.querySelector('[data-map-modal]'),
    body: document.querySelector('body'),
  };

  refs.closeMapModalBtn.addEventListener('click', toggleModal);
  refs.openMapModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-map-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
