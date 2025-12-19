// pets-main.js
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {
  getCategoriesList,
  getPetsList,
  getPetsByCategory,
  limit
} from "./pets-api";

import {
  refs,
  renderMore,
  handleShowMoreBtn,
  clearGallery,
  showLoader,
  hideLoader,
  categoriesTemplate,
  petsTemplate
} from "./pets-render";

let currentPage = 1;
let totalPages;
let mode = "all";
let categoryId;

async function loadMorePets() {
  currentPage++;
  showLoader();

  if (mode === "all") {
    try {
      const result = await getPetsList(currentPage);
      renderMore(result.animals);
      totalPages = Math.ceil(result.totalItems / limit);
      handleShowMoreBtn(currentPage, totalPages);
    } catch {
      iziToast.show({
        message: `Something went wrong. Please try again later.`,
        color: "red",
        position: "topRight",
        messageSize: "20",
        timeout: "4000",
        theme: "dark",
      });
    }
  } else if (mode === "category") {
    try {
      const result = await getPetsByCategory(categoryId, currentPage);
      renderMore(result.animals);
      totalPages = Math.ceil(result.totalItems / limit);
      handleShowMoreBtn(currentPage, totalPages);
    } catch {
      iziToast.show({
        message: `Something went wrong. Please try again later.`,
        color: "red",
        position: "topRight",
        messageSize: "20",
        timeout: "4000",
        theme: "dark",
      });
    }
  }
  hideLoader();
}


refs.showMore.addEventListener("click", loadMorePets);


document.addEventListener("DOMContentLoaded", async () => {
  clearGallery();
  showLoader();

  try {
    const res = await getCategoriesList();
    const getLastDigit = item => Number(item._id.at(-1));
    res.sort((a, b) => getLastDigit(a) - getLastDigit(b));
    res.unshift({ _id: 0, name: "Всі" });

    const markup = categoriesTemplate(res);
    refs.categories.innerHTML = markup;
    const elem = refs.categories.firstElementChild;
    const allElem = elem.firstElementChild;
    allElem.classList.add("active");
  } catch {
    iziToast.show({
      message: `Something went wrong. Please try again later.`,
      color: "red",
      position: "topRight",
      messageSize: "20",
      timeout: "4000",
      theme: "dark",
    });
  }

  mode = "all";
  currentPage = 1;

  try {
    const petsResult = await getPetsList();
    const petsMarkup = petsTemplate(petsResult.animals);
    refs.petsList.innerHTML = petsMarkup;
    totalPages = Math.ceil(petsResult.totalItems / limit);
    hideLoader();
    handleShowMoreBtn(currentPage, totalPages);
  } catch {
    iziToast.show({
      message: `Something went wrong. Please try again later.`,
      color: "red",
      position: "topRight",
      messageSize: "20",
      timeout: "4000",
      theme: "dark",
    });
  }
});


refs.categories.addEventListener("click", async e => {
  clearGallery();
  showLoader();

  mode = "category";
  currentPage = 1;

  const active = document.querySelector(".active");
  active.classList.remove("active");

  const category = e.target.closest("button");
  category.classList.add("active");

  const id = category.dataset.id;
  categoryId = id;

  if (id === "0") {
    try {
      const res = await getPetsList(currentPage);
      const markup = petsTemplate(res.animals);
      totalPages = Math.ceil(res.totalItems / limit);
      refs.petsList.innerHTML = markup;
    } catch {
      iziToast.show({
        message: `Something went wrong. Please try again later.`,
        color: "red",
        position: "topRight",
        messageSize: "20",
        timeout: "4000",
        theme: "dark",
      });
    }
  } else {
    try {
      const res = await getPetsByCategory(id, currentPage);
      const markup = petsTemplate(res.animals);
      totalPages = Math.ceil(res.totalItems / limit);
      refs.petsList.innerHTML = markup;
    } catch {
      iziToast.show({
        message: `Something went wrong. Please try again later.`,
        color: "red",
        position: "topRight",
        messageSize: "20",
        timeout: "4000",
        theme: "dark",
      });
    }
  }
  handleShowMoreBtn(currentPage, totalPages);
  hideLoader();
});



