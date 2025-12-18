
import axios from "axios";

let limit;

async function getCategoriesList() {
    const url = 'https://paw-hut.b.goit.study/api/categories';
    const res = await axios.get(url);
    return res.data;
};


async function getPetsList(currentPage = 1) {
    const width = window.innerWidth;
    limit = width < 1440 ? 8 : 9;
    const url = 'https://paw-hut.b.goit.study/api/animals';

    const params = {
        page: currentPage,
        limit,
    }

    try {
        const res = await axios.get(url, { params });
        return res.data;
      } catch (error) {
        console.error('Error:', error);
        return []; 
      }
};


async function getPetsByCategory(categoryId, currentPage = 1) {
    const width = window.innerWidth;
    limit = width < 1440 ? 8 : 9;
    const url = 'https://paw-hut.b.goit.study/api/animals';

    const params = {
        page: currentPage,
        limit,
        categoryId,
    }

    try {
        const res = await axios.get(url, { params });
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error('Error:', error);
        return []; 
      }
};


export {
    getCategoriesList,
    getPetsList,
    getPetsByCategory,
    limit
};
