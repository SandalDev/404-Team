import { refs } from './petslist/pets-render';
import { petsData } from './petslist/pets-main';

// Перейменуємо функції для модалки з твариною, щоб уникнути конфліктів
function openPetModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', handleClosePetModal);
  document.body.style.overflow = 'hidden';
}

function closePetModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', handleClosePetModal);
  document.body.style.overflow = '';
}

function handleClosePetModal(e) {
  if (e.code === 'Escape') {
    closePetModal();
  }
}

refs.petsList.addEventListener('click', async e => {
  if (!e.target.classList.contains('find-out-more')) return;

  const petCard = e.target.closest('li');
  const id = petCard.dataset.id;
  if (!id || id === 'undefined') {
    console.error('Invalid data-id on pet card');
    return;
  }
  
  const allPets = petsData;
  const petItem = allPets.find(pet => pet._id === id);
  if (!petItem) {
    console.error('Pet not found');
    return;
  }
  
  const markup = renderPetModal(petItem);
  refs.modal.innerHTML = markup;
  openPetModal();
});

refs.modalCloseBtn.addEventListener('click', () => {
  closePetModal();
});

refs.backdrop.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  closePetModal();
});

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
  <span class="modal-descr-word">Здоров'я:</span>
  <p class="modalpet-health-desc">${pet.healthStatus}</p>
  </div>

  <div class="pet-details-container">
  <span class="modal-descr-word">Поведінка:</span>
  <p class="modalpet-behaviour-desc">${pet.behavior}</p>
   </div>

  <button type="button" class="modalpet-adopt-btn">
    Взяти додому
  </button>
 
  </div>`;
}