import axios from 'axios';
import Swal from 'sweetalert2';

const backdrop = document.querySelector('[data-order-modal]');
const closeBtn = document.querySelector('[data-order-close]');
const petName = document.querySelector('.order-modal-pet-name');

/* =========================
   SUBMIT ELEMENTS
   ========================= */

const form = backdrop?.querySelector('[data-order-form]');
const submitBtn = form?.querySelector('button[type="submit"]');
const loader = backdrop?.querySelector('.order-loader');

/* =========================
   OPEN / CLOSE
   ========================= */

export function openOrderModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  // гарантія чистого UI при відкритті
  loader?.classList.add('is-hidden');
  if (submitBtn) submitBtn.disabled = false;

  const animal = JSON.parse(localStorage.getItem('animal'));
  if (animal && petName) {
    petName.textContent = `Ви хочете забрати: ${animal.name}`;
  }
}

function closeOrderModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
}

closeBtn?.addEventListener('click', closeOrderModal);

backdrop?.addEventListener('click', e => {
  if (e.target === backdrop) closeOrderModal();
});

window.addEventListener('keydown', e => {
  if (
    e.code === 'Escape' &&
    backdrop &&
    !backdrop.classList.contains('is-hidden') &&
    !Swal.isVisible()
  ) {
    closeOrderModal();
  }
});

/* =========================
   SUBMIT LOGIC
   ========================= */

if (form && submitBtn && loader) {
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const payload = {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      comment: form.elements.comment.value.trim(),
    };

    // UI start
    loader.classList.remove('is-hidden');
    submitBtn.disabled = true;

    try {
      await axios.post(
        'https://paw-hut.b.goit.study/api/orders',
        payload
      );

      await Swal.fire({
        icon: 'success',
        title: 'Готово!',
        text: 'Заявку успішно надіслано',
        confirmButtonText: 'Добре',
      });

      form.reset();
      closeOrderModal();

    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: 'Не вдалося надіслати заявку. Спробуйте ще раз.',
      });
    } finally {
      // UI end
      loader.classList.add('is-hidden');
      submitBtn.disabled = false;
    }
  });
}
