 import axios from "axios";
 import iziToast from "izitoast";
 import "izitoast/dist/css/iziToast.min.css";
 import { getCategoriesList } from './petslist/pets-api';
 import { getPetsByCategory } from './petslist/pets-api';
 import { getPetsList } from './petslist/pets-api';


 const refs = {
     categories: document.querySelector('.pets-categories'),
     petsList: document.querySelector('.pets-list'),
     showMore: document.querySelector('.show-more'),
     loader: document.querySelector('.js-loader') 
 }

 let currentPage = 1; 
 let totalPages;
 let mode = 'all';
 let limit;
 let categoryId;
 let petsData = [];


 function renderMore(pets) {
     const markup = petsTemplate(pets);
     refs.petsList.insertAdjacentHTML('beforeend', markup);
 }

 async function loadMorePets() {
     currentPage++;
     showLoader();

     if(mode === 'all') {
         try{
             const result = await getPetsList(currentPage); 
             petsData.push(...result.animals);
             renderMore(result.animals);
             totalPages = Math.ceil(result.totalItems / limit);
             handleShowMoreBtn();
         } catch {
             iziToast.show({
                 message: `Something went wrong. Please try again later.`,
                 color: 'red',
                 position: 'topRight',
                 messageSize: '20',
                 timeout: '4000',
                 theme: 'dark',
               });
         }
     } else if(mode === 'category') {
         try{
             const result = await getPetsByCategory(categoryId, currentPage);
             petsData.push(...result.animals);
             renderMore(result.animals);
             totalPages = Math.ceil(result.totalItems / limit);
             handleShowMoreBtn();
         } catch {
             iziToast.show({
                 message: `Something went wrong. Please try again later.`,
                 color: 'red',
                 position: 'topRight',
                 messageSize: '20',
                 timeout: '4000',
                 theme: 'dark',
               });     
     }
     hideLoader();
     }
 }

 refs.showMore.addEventListener('click', loadMorePets);







 document.addEventListener('DOMContentLoaded', async e => {
     clearGallery();
     showLoader();
     try{
         const res = await getCategoriesList();
         const getLastDigit = item => Number(item._id.at(-1));
         res.sort((a, b) => getLastDigit(a) - getLastDigit(b));
         res.unshift({_id: 0, name: 'Всі'});
      
         const markup = categoriesTemplate(res);
         refs.categories.innerHTML = markup;
         const elem = refs.categories.firstElementChild;
         const allElem = elem.firstElementChild;
         allElem.classList.add('active');
     } catch {
         iziToast.show({
             message: `Something went wrong. Please try again later.`,
             color: 'red',
             position: 'topRight',
             messageSize: '20',
             timeout: '4000',
             theme: 'dark',
           }); 
     }

     mode = 'all';
     currentPage = 1;
     try{
         const petsResult = await getPetsList();
         petsData = petsResult.animals;
         const petsMarkup = petsTemplate(petsResult.animals);
         refs.petsList.innerHTML = petsMarkup;
         totalPages = Math.ceil(petsResult.totalItems / limit);
         console.log(totalPages);
         hideLoader();
         handleShowMoreBtn();
     } catch {
         iziToast.show({
             message: `Something went wrong. Please try again later.`,
             color: 'red',
             position: 'topRight',
             messageSize: '20',
             timeout: '4000',
             theme: 'dark',
           }); 
     }

 }
 )

 refs.categories.addEventListener('click', async e => {
     clearGallery();
      showLoader();
     mode = 'category';
     currentPage = 1;
     const active = document.querySelector('.active');
     active.classList.remove('active');
     console.log(active);
     const category = e.target.closest('button');
     category.classList.add('active');
     const id = category.dataset.id;
     categoryId = id;
     if(id === '0') {
         try{
             const res = await getPetsList(currentPage);
             petsData = res.animals;
             const markup = petsTemplate(res.animals);
             totalPages = Math.ceil(res.totalItems / limit);
             refs.petsList.innerHTML = markup;
             handleShowMoreBtn();
         } catch {
             iziToast.show({
                 message: `Something went wrong. Please try again later.`,
                 color: 'red',
                 position: 'topRight',
                 messageSize: '20',
                 timeout: '4000',
                 theme: 'dark',
               }); 
         }
      
     } else {
         try{
             const res = await getPetsByCategory(id, currentPage);
             petsData = res.animals;
             const markup = petsTemplate(res.animals);
             totalPages = Math.ceil(res.totalItems / limit);
             refs.petsList.innerHTML = markup;
         } catch {
             iziToast.show({
                 message: `Something went wrong. Please try again later.`,
                 color: 'red',
                 position: 'topRight',
                 messageSize: '20',
                 timeout: '4000',
                 theme: 'dark',
               }); 
         }
     };
     handleShowMoreBtn();
     hideLoader();
 });







 function showShowMoreBtn() {
     refs.showMore.classList.remove('is-hidden');
 };

 function hideShowMoreBtn() {
     refs.showMore.classList.add('is-hidden');
 };

 function handleShowMoreBtn() {
     if(currentPage < totalPages) {
         showShowMoreBtn();
     } else {
         hideShowMoreBtn();
     }

 }



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
 }

 function categoriesTemplate(categories) {
     return categories.map(categoryTemplate).join('');
 }

 function petTemplate(pet) {
     const categoriesHTML = pet.categories
     .map(cat => `<span class="pet-category">${cat.name}</span>`)
     .join(' '); 

     return `
     <li class="pet-card" data-id="${pet._id || pet.id || 'invalid'}">
         <img src="${pet.image}" alt="${pet.shortDescription}" class="pet-image" >
         <div class="pet-description-container">
         <p class="pet-type">${pet.species}</p>
         <h3 class="pet-name">${pet.name}</h3>
         <div class="pet-categories-container">
         ${categoriesHTML}
         </div>
         <div class="age-gender">
         <p class="pet-age">${pet.age}</p>
         <p class="pet-gender">${pet.gender}</p>
         </div>
         <p class="pet-description">${pet.shortDescription}</p>
         <button class="find-out-more" type="button">Дізнатись більше</button>
     </div>
     </li>`
 };

 function petsTemplate(pets) {
     return pets.map(petTemplate).join('');
 }

 export { petsData };

  

