/* ============================= */
/* ELEMENTS */
/* ============================= */

const backdrop = document.querySelector('[data-order-modal]');
const modal = document.querySelector('.order-modal');
const openBtns = document.querySelectorAll('[data-order-open]');
const closeBtn = document.querySelector('[data-order-close]');
const form = document.querySelector('[data-order-form]');

/* ============================= */
/* GUARD */
/* ============================= */

if (!backdrop || !modal || !closeBtn || !form) {
  console.warn('Order modal: required elements not found');
}

/* ============================= */
/* OPEN / CLOSE */
/* ============================= */

function openOrderModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
}

/* ============================= */
/* EVENTS — OPEN */
/* ============================= */

openBtns.forEach(btn => {
  btn.addEventListener('click', openOrderModal);
});

/* ============================= */
/* EVENTS — CLOSE */
/* ============================= */

closeBtn.addEventListener('click', closeOrderModal);

// Закриття по кліку на бекдроп
backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    closeOrderModal();
  }
});

// Esc — ГЛОБАЛЬНО, БЕЗ ДОДАВАННЯ / ЗНЯТТЯ
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (backdrop.classList.contains('is-hidden')) return;

  closeOrderModal();
});

/* ============================= */
/* FORM SUBMIT */
/* ============================= */

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get('name')?.trim(),
    phone: formData.get('phone')?.trim(),
    comment: formData.get('comment')?.trim() || '',
    animal: localStorage.getItem('animal') || null,
  };

  try {
    const response = await fetch('/orders3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    // SUCCESS
    alert('Заявку надіслано. Ми звʼяжемося з вами найближчим часом.');

    form.reset();
    closeOrderModal();

  } catch (error) {
    console.error('Order submit error:', error);

    alert('Помилка. Спробуйте ще раз пізніше.');
  }
});
