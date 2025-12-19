<<<<<<< Updated upstream
import { refs } from './petslist/pets-render';
import { petsData } from './partials.js';

refs.petsList.addEventListener('click', async e => {
    const petCard = e.target.closest('li');
    console.log(petCard);
    console.log('something');
    const id = petCard.dataset.id;
    console.log(id);
    if (!id || id === 'undefined') {
        console.error('Invalid data-id on pet card');
        return;
    }
    const allPets = petsData;
    console.log(allPets);
    const petItem = allPets.find(pet => pet._id === id);
    console.log(petItem);
    if (!petItem) {
        console.error('Pet not found');
        return;
    }
    const markup = renderPetModal(petItem);
    refs.modal.innerHTML = markup;
    openModal();
});

refs.modalCloseBtn.addEventListener('click', (e) => {
  if(e.target !== e.currentTarget) return;
  closeModal();
});

refs.backdrop.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget) return;
    closeModal();
});

function handleCloseModal(e) {
    if(e.code === 'Escape') {
        closeModal(); 
    } else {
        return;
    }
};

function renderPetModal(pet) {
    return `<img src="${pet.image}" class="modalpet-img" alt="${pet.shortDescription}" />
    <div class="pet-content-wrapper">
    <div class="pet-main-details-container">

    <p class="pet-type-paragraph">${pet.species}</p>
    <h3 class="modalpet-name">${pet.name}</h3>
    <div class="modal-age-gender">
      <p class="modal-pet-age">${pet.age}</p>
      <p class="modal-pet-gender">${pet.gender}</p>
    </div>
    </div>
    

    <div class="pet-details-container">
    <span class="modal-descr-word">Опис:</span>
    <p class="modalpet-desc">${pet.description}</p>
    </div>

    <div class="pet-details-container">
    <span class="modal-descr-word">Здоров’я:</span>
    <p class="modalpet-health-desc">${pet.healthStatus}</p>
    </div>

    <div class="pet-details-container">
    <span class="modal-descr-word">Поведінка:</span>
    <p class="modalpet-behaviour-desc">${pet.behavior}</p>
    </div>
    </div>`
};

function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', handleCloseModal);
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', handleCloseModal);
  document.body.style.overflow = '';
};







=======
import { getPetsList } from './petslist/pets-api';
import { refs } from './petslist/pets-render';
import axios from 'axios';
import { openOrderModal } from './modal';

// ==========================
// STATE
// ==========================
let currentPet = null;

// ==========================
// OPEN PET MODAL
// ==========================
refs.petsList.addEventListener('click', async e => {
  const petCard = e.target.closest('li');
  if (!petCard) return;

  const id = petCard.dataset.id;
  if (!id) return;

  try {
    const allPets = (await getAllPetsList()).animals;
    const petItem = allPets.find(pet => pet._id === id);
    if (!petItem) return;

    currentPet = petItem;

    // 🔑 РЕНДЕРИМО ТІЛЬКИ КОНТЕНТ (БЕЗ КНОПКИ)
    refs.modal.innerHTML = renderPetModal(petItem);

    openModal();
  } catch (error) {
    console.error(error);
  }
});

// ==========================
// ADOPT BUTTON LOGIC (DELEGATION)
// ==========================
refs.backdrop.addEventListener('click', e => {
  // закриття по бекдропу
  if (e.target === e.currentTarget) {
    closeModal();
    return;
  }

  // 🔑 КНОПКА "ВЗЯТИ ДОДОМУ"
  const adoptBtn = e.target.closest('.modalpet-adopt-btn');
  if (!adoptBtn) return;

  if (!currentPet) return;

  localStorage.setItem('animal', JSON.stringify(currentPet));

  closeModal();
  openOrderModal();
});

// ==========================
// CLOSE BUTTON
// ==========================
refs.modalCloseBtn.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  closeModal();
});

// ==========================
// ESC KEY
// ==========================
function handleCloseModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

// ==========================
// API
// ==========================
async function getAllPetsList() {
  const url = 'https://paw-hut.b.goit.study/api/animals';

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    return { animals: [] };
  }
}

// ==========================
// RENDER (БЕЗ КНОПКИ)
// ==========================
function renderPetModal(pet) {
  return `
    <img src="${pet.image}" class="modalpet-img" alt="${pet.shortDescription}" />

    <div class="pet-content-wrapper">
      <div class="pet-main-details-container">
        <p class="pet-type-paragraph">${pet.species}</p>
        <h3 class="modalpet-name">${pet.name}</h3>

        <div class="modal-age-gender">
          <p class="modal-pet-age">${pet.age}</p>
          <p class="modal-pet-gender">${pet.gender}</p>
        </div>
      </div>

      <div class="pet-details-container">
        <span class="modal-descr-word">Опис:</span>
        <p class="modalpet-desc">${pet.description}</p>
      </div>

      <div class="pet-details-container">
        <span class="modal-descr-word">Здоров’я:</span>
        <p class="modalpet-health-desc">${pet.healthStatus}</p>
      </div>

      <div class="pet-details-container">
        <span class="modal-descr-word">Поведінка:</span>
        <p class="modalpet-behaviour-desc">${pet.behavior}</p>
      </div>
    </div>
  `;
}

// ==========================
// MODAL CONTROLS
// ==========================
function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', handleCloseModal);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', handleCloseModal);
  document.body.style.overflow = '';
  refs.modal.innerHTML = '';
  currentPet = null;
}
>>>>>>> Stashed changes
