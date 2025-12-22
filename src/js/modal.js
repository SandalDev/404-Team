import Swal from 'sweetalert2';

const modal = document.querySelector('[data-order-modal]');
const closeBtn = document.querySelector('[data-order-close]');
const backdrop = document.querySelector('[data-backdrop]');
const form = document.querySelector('[data-order-form]');

const petModal = document.querySelector('.modalpet-backdrop');
const adoptBtn = document.querySelector('.modalpet-adopt-btn'); // кнопка "Взяти додому"

let currentAnimalId = null;

/* ================= ESC HANDLER ================= */

function onEscKeyPress(e) {
  if (e.key === 'Escape') closeModal();
}

/* ================= OPEN / CLOSE ================= */

function openModal() {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscKeyPress);
}

/* ================== 1) CAPTURE ID FROM CARD ==================
   Ловимо клік по "Дізнатись більше" на картці
   і зберігаємо data-id з <li class="pet-card" data-id="...">
=============================================================== */

document.addEventListener('click', e => {
  const moreBtn = e.target.closest('.find-out-more');
  if (!moreBtn) return;

  const petCard = moreBtn.closest('li[data-id]');
  const id = petCard?.dataset?.id;

  if (!id) {
    console.warn('Не знайшов data-id на pet-card');
    currentAnimalId = null;
    return;
  }

  currentAnimalId = id;
});

/* ================== 2) OPEN ORDER MODAL FROM ADOPT ================== */

adoptBtn?.addEventListener('click', () => {
  if (!currentAnimalId) {
    Swal.fire({
      icon: 'error',
      title: 'Не вдалося визначити тваринку',
      text: 'ID тваринки не зчитався з картки. Натисни “Дізнатись більше” ще раз.',
      confirmButtonText: 'Добре',
    });
    return;
  }

  openModal();
  petModal?.classList.add('is-hidden');
});

/* ================= EVENTS ================= */

closeBtn?.addEventListener('click', closeModal);

backdrop?.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

/* ================= VALIDATION HELPERS ================= */

function showError(input, message) {
  const errorEl = input.parentElement.querySelector('.order-form__error');
  input.classList.add('is-error');
  if (errorEl) errorEl.textContent = message;
}

function clearError(input) {
  const errorEl = input.parentElement.querySelector('.order-form__error');
  input.classList.remove('is-error');
  if (errorEl) errorEl.textContent = '';
}

/* ================= SUBMIT (FRONTEND ONLY) ================= */

form?.addEventListener('submit', e => {
  e.preventDefault();

  const nameInput = form.elements.name;
  const phoneInput = form.elements.phone;
  const comment = form.elements.comment.value.trim();

  let isValid = true;

  clearError(nameInput);
  clearError(phoneInput);

  if (nameInput.value.trim().length < 2) {
    showError(nameInput, 'Імʼя повинно містити мінімум 2 символи');
    isValid = false;
  }

  const phonePattern = /^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Невірний формат номера');
    isValid = false;
  }

  if (!isValid) return;

  // ✅ тут ID вже є і готовий для POST, якщо захочеш:
  console.log('animalId for order:', currentAnimalId);
  console.log('comment:', comment);

  Swal.fire({
    icon: 'success',
    title: 'Заявку надіслано!',
    text: 'Ми звʼяжемося з вами найближчим часом',
    confirmButtonText: 'Добре',
  });

  form.reset();
  clearError(nameInput);
  clearError(phoneInput);

  closeModal();
});
