// scriptmodal.js - modal para depoimentos (clique nas imagens)
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.testimonial-img').forEach(img => {
      img.addEventListener('click', () => {
          modalImage.src = img.src;
          modal.classList.add('show');
      });
  });

  closeBtn && closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  modal && modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) modal.classList.remove('show');
  });
  window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) modal.classList.remove('show');
  });
});
