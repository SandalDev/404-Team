// pets-render.js

export const refs = {
  categories: document.querySelector('.pets-categories'),
  petsList: document.querySelector('.pets-list'),
  showMore: document.querySelector('.show-more'),
  loader: document.querySelector('.js-loader'),

  // pet modal refs (використовує modalpet.js)
  backdrop: document.querySelector('.modalpet-backdrop'),
  modal: document.querySelector('.modal-window-pet'),
  modalCloseBtn: document.querySelector('.modalpet-close'),
};

/* ===============================
  RENDER MORE
================================ */
export function renderMore(pets) {
  const markup = petsTemplate(pets);
  refs.petsList.insertAdjacentHTML('beforeend', markup);
}

/* ===============================
  SHOW MORE BTN VISIBILITY
  pets-main.js викликає: handleShowMoreBtn(currentPage, totalPages)
================================ */
export function handleShowMoreBtn(currentPage, totalPages) {
  if (currentPage < totalPages) {
    showShowMoreBtn();
  } else {
    hideShowMoreBtn();
  }
}

function showShowMoreBtn() {
  refs.showMore?.classList.remove('is-hidden');
}

function hideShowMoreBtn() {
  refs.showMore?.classList.add('is-hidden');
}

/* ===============================
  CLEAR
================================ */
export function clearGallery() {
  refs.petsList.innerHTML = '';
}

/* ===============================
  LOADER
  pets-main.js викликає: showLoader(); hideLoader();
================================ */
export function showLoader() {
  refs.loader?.classList.remove('hidden');
  refs.showMore?.classList.add('hidden');
}

export function hideLoader() {
  refs.loader?.classList.add('hidden');
  refs.showMore?.classList.remove('hidden');
}

/* ===============================
  CATEGORIES TEMPLATE
================================ */
function categoryTemplate(category) {
  return `
    <li class="category-name">
      <button class="category-btn" data-id="${category._id}">
        ${category.name}
      </button>
    </li>
  `;
}

export function categoriesTemplate(categories) {
  return categories.map(categoryTemplate).join('');
}

/* ===============================
  PETS TEMPLATE
  ВАЖЛИВО: додаємо data-pet, щоб modalpet.js НЕ робив зайвих API запитів
================================ */
function petTemplate(pet) {
  const categoriesHTML = (pet.categories || [])
    .map(cat => `<span class="pet-category">${cat.name}</span>`)
    .join(' ');

  return `
    <li class="pet-card"
        data-id="${pet._id}"
        data-pet="${escapeJsonForAttr(pet)}">

      <img
        src="${pet.image}"
        alt="${pet.shortDescription || pet.name}"
        class="pet-image"
        width="392"
        height="309"
        loading="lazy"
      />

      <div class="pet-description-container">
        <div class="sub-description">
          <p class="pet-type">${pet.species}</p>
          <h3 class="pet-name">${pet.name}</h3>

          <div class="pet-categories-container">
            ${categoriesHTML}
          </div>
        </div>

        <div class="second-sub-descr">
          <div class="age-gender">
            <p class="pet-age">${pet.age}</p>
            <p class="pet-gender">${pet.gender}</p>
          </div>

          <p class="pet-description">${pet.shortDescription}</p>

          <button class="find-out-more" type="button">
            Дізнатись більше
          </button>
        </div>
      </div>
    </li>
  `;
}

export function petsTemplate(pets) {
  return pets.map(petTemplate).join('');
}

/* ===============================
  HELPERS
  Екрануємо JSON для безпечного запису в data-атрибут
================================ */
function escapeJsonForAttr(obj) {
  return JSON.stringify(obj)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
