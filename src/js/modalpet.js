import {  getPetsList } from './petslist/pets-api';
import { refs } from './petslist/pets-render';
import axios from 'axios';

refs.petsList.addEventListener('click', async e => {
    const petCard = e.target.closest('li');
    console.log(petCard);
    console.log('something');
    const id = petCard.dataset.id;
    console.log(id);
    const allPets = (await getAllPetsList()).animals;
    console.log(allPets);
    const petItem = allPets.find(pet => pet._id === id);
    console.log(petItem);
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

async function getAllPetsList() {
    const url = 'https://paw-hut.b.goit.study/api/animals';


    try {
        const res = await axios.get(url);
        return res.data;
      } catch (error) {
        console.error('Error:', error);
        return []; 
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







