import { openOrderModal } from './modal';

const backdrop = document.querySelector('[data-pet-modal]');
const modalContent = backdrop.querySelector('.modalpet-content');
const closeBtn = backdrop.querySelector('[data-pet-close]');
const adoptBtn = backdrop.querySelector('.modalpet-adopt-btn');
const petsList = document.querySelector('.pets-list');

let currentPet = null;

/* ===============================
  OPEN PET MODAL (NO API CALLS)
================================ */
petsList.addEventListener('click', e => {
  const btn = e.target.closest('.find-out-more');
  if (!btn) return;

  const card = btn.closest('.pet-card');
  if (!card) return;

  try {
    currentPet = JSON.parse(card.dataset.pet);
    modalContent.innerHTML = renderPetModal(currentPet);
    openPetModal();
  } catch (err) {
    console.error('Invalid pet data', err);
  }
});

/* ===============================
  CLOSE PET MODAL
================================ */
closeBtn.addEventListener('click', closePetModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closePetModal();
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') closePetModal();
});

/* ===============================
  ADOPT → ORDER MODAL
================================ */
adoptBtn.addEventListener('click', () => {
  if (!currentPet) return;

  localStorage.setItem('animal', JSON.stringify(currentPet));

  closePetModal();
  openOrderModal();
});

/* ===============================
  HELPERS
================================ */
function openPetModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closePetModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  modalContent.innerHTML = '';
  currentPet = null;
}

function renderPetModal(pet) {
  return `
    <img src="${pet.image}" alt="${pet.name}" class="modalpet-img"/>

    <h3 class="modalpet-name">${pet.name}</h3>

    <p class="modalpet-desc">${pet.description}</p>

    <p><strong>Вік:</strong> ${pet.age}</p>
    <p><strong>Стать:</strong> ${pet.gender}</p>
    <p><strong>Здоровʼя:</strong> ${pet.healthStatus}</p>
  `;
}
