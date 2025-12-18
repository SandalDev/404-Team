
const refs = {
    categories: document.querySelector('.pets-categories'),
    petsList: document.querySelector('.pets-list'),
    showMore: document.querySelector('.show-more'),
    loader: document.querySelector('.js-loader'), 
    backdrop: document.querySelector('.modalpet-backdrop'),
    modal: document.querySelector('.modal-window-pet'),
    modalCloseBtn: document.querySelector('.modalpet-close'),
};

function renderMore(pets) {
    const markup = petsTemplate(pets);
    refs.petsList.insertAdjacentHTML('beforeend', markup);
};

function showShowMoreBtn() {
    refs.showMore.classList.remove('is-hidden');
};

function hideShowMoreBtn() {
    refs.showMore.classList.add('is-hidden');
};

function handleShowMoreBtn(currentPage, totalPages) {
    if(currentPage < totalPages) {
        showShowMoreBtn();
    } else {
        hideShowMoreBtn();
    }
};

function clearGallery() {
    refs.petsList.innerHTML = '';
};

function showLoader() {
    refs.loader.classList.remove('hidden');
    refs.showMore.classList.add('hidden');
};

function hideLoader() {
    refs.loader.classList.add('hidden');
    refs.showMore.classList.remove('hidden');
};

function categoryTemplate(category) {
    return `<li class="category-name">
    <button class="category-btn" data-id="${category._id}">${category.name}</button>
</li>`
};

function categoriesTemplate(categories) {
    return categories.map(categoryTemplate).join('');
};

function petTemplate(pet) {
    const categoriesHTML = pet.categories
    .map(cat => `<span class="pet-category">${cat.name}</span>`)
    .join(' '); 

    return `
     <li class="pet-card" data-id="${pet._id}">
        <img src="${pet.image}" alt="${pet.shortDescription}" class="pet-image" width="392" height="309"> 
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
       
        <button class="find-out-more" type="button">Дізнатись більше</button>
        </div>
    </div>
    </li>`
};


function petsTemplate(pets) {
    return pets.map(petTemplate).join('');
};


export {
    refs,
    renderMore,
    handleShowMoreBtn,
    clearGallery,
    showLoader,
    hideLoader,
    categoriesTemplate,
    petsTemplate
};
