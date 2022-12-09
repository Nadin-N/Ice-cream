(() => {
  const refs = {
    openFranchiseModalBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseModalBtn: document.querySelector(
      '[data-franchise-modal-close]'
    ),
    modal: document.querySelector('[data-franchise-modal]'),
    body: document.querySelector('body'),
  };

  refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);
  refs.openFranchiseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-franchise-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
