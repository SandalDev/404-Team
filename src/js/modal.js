import Swal from 'sweetalert2';

const modal = document.querySelector('[data-order-modal]');
const closeBtn = document.querySelector('[data-order-close]');
const backdrop = document.querySelector('[data-backdrop]');
const form = document.querySelector('[data-order-form]');
const openBtn = document.querySelector('.modalpet-adopt-btn');
const petModal = document.querySelector('.modalpet-backdrop');

/* ================= OPEN / CLOSE ================= */

function openModal() {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
}

openBtn?.addEventListener('click', () => {
  openModal();
  petModal?.classList.add('is-hidden');
});

closeBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    closeModal();
  }
});

/* ================= VALIDATION HELPERS ================= */

function showError(input, message) {
  const errorEl = input.parentElement.querySelector('.order-form__error');
  input.classList.add('is-error');
  errorEl.textContent = message;
}

function clearError(input) {
  const errorEl = input.parentElement.querySelector('.order-form__error');
  input.classList.remove('is-error');
  errorEl.textContent = '';
}

/* ================= SUBMIT ================= */

form.addEventListener('submit', async e => {
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

  const phonePattern =
    /^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/;

  if (!phonePattern.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Невірний формат номера');
    isValid = false;
  }

  if (!isValid) return;

  const data = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    comment,
  };

  try {
    await fetch('/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    Swal.fire({
      icon: 'success',
      title: 'Заявку надіслано!',
      text: 'Ми звʼяжемося з вами найближчим часом',
    });

    form.reset();
    clearError(nameInput);
    clearError(phoneInput);
    closeModal();
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Спробуйте ще раз пізніше',
    });
  }
});
