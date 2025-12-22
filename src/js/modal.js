import iziToast from 'izitoast';
import Swal from 'sweetalert2';
import { handleCloseModal } from './modalpet';
import { closeModal } from './modalpet';

const closeBtn = document.querySelector('[data-order-close]');
const backdrop = document.querySelector('[data-order-modal]');
const form = document.querySelector('[data-order-form]');

const petModal = document.querySelector('.modalpet-backdrop');
let currentAnimalId = null;

function onEscKeyPress(e) {
  if (e.key !== 'Escape') return;

  if (!backdrop.classList.contains('is-hidden')) {
    closeOrderModal();
    closeModal();
  }
}

function openOrderModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscKeyPress);
}

function closeOrderModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  closeModal();
  window.removeEventListener('keydown', onEscKeyPress);
}


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


document.addEventListener('click', e => {
  if (
    e.target.classList.contains('modalpet-adopt-btn') &&
    petModal &&
    !petModal.classList.contains('is-hidden')
  ) {
    if (!currentAnimalId) {
      Swal.fire({
        icon: 'error',
        title: 'Не вдалося визначити тваринку',
        text: 'ID тваринки не зчитався з картки. Натисни "Дізнатись більше" ще раз.',
        confirmButtonText: 'Добре',
      });
      return;
    }
    
    const petModalBackdrop = document.querySelector('.modalpet-backdrop');
    if (petModalBackdrop) {
      petModalBackdrop.classList.add('is-hidden');
      currentAnimalId = null; 
    }
    
    openOrderModal();
  }
});


closeBtn?.addEventListener('click', closeOrderModal);

backdrop?.addEventListener('click', e => {
  if (e.target === backdrop) closeOrderModal();
});


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

form?.addEventListener('submit', e => {
  e.preventDefault();

  const nameInput = form.elements.name;
  const phoneInput = form.elements.phone;
  const comment = form.elements.comment.value.trim();
  const userName = nameInput.value.trim();
  let isValid = true;

  clearError(nameInput);
  clearError(phoneInput);

  if (userName.length < 2) {
    showError(nameInput, 'Імʼя повинно містити мінімум 2 символи');
    isValid = false;
  }

  const phone = phoneInput.value.trim();
  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 12) {
    showError(phoneInput, 'Номер повинен містити повний код країни та номер');
    isValid = false;
  }

  if (!isValid) {
    iziToast.warning({
      title: 'Упс!',
      message: 'Введіть коректний номер телефону та імʼя.',
    });
    return;
  }

  const payload = {
    animalId: currentAnimalId,
    name: userName,
    phone: phone,
    comment: comment,
  };

  fetch('https://paw-hut.b.goit.study/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(res => {
      if (!res.ok) throw new Error('Помилка мережі');
      return res.json();
    })
    .then(data => {
      console.log('Відповідь сервера:', data);
      Swal.fire({
        icon: 'success',
        title: 'Заявку надіслано!',
        text: 'Ми звʼяжемося з вами найближчим часом',
        confirmButtonText: 'Добре',
      });
      form.reset();
      closeOrderModal();
    })
    .catch(err => {
      console.error('Помилка при відправці:', err);
      Swal.fire({
        icon: 'error',
        title: 'Не вдалося відправити заявку',
        text: 'Спробуйте пізніше',
        confirmButtonText: 'Добре',
      });
    });
});