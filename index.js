import{S,A as q,a as w,i as u}from"./assets/vendor-CCHZgTyX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();new S(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new q(".accordion-container");function B(){document.querySelectorAll(".feedback-rate").forEach(e=>{const s=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((n,t)=>{n.classList.remove("filled","half"),t<Math.floor(s)?n.classList.add("filled"):t===Math.floor(s)&&s%1>=.5&&n.classList.add("half")})})}const f=document.querySelector(".slider .swiper-wrapper");let y=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{f.innerHTML="",e.feedbacks.forEach(o=>{f.insertAdjacentHTML("beforeend",`
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${o.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${o.description}</p>
            <p class="feedback-author">— ${o.author}</p>
          </div>
        </div>
      `)}),B();const s=()=>{const o=window.innerWidth>=768?2:1;e.feedbacks.length,y&&y.destroy(!0,!0),y=new S(".slider .swiper",{slidesPerView:o,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};s(),window.addEventListener("resize",s)}).catch(e=>{f.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const H=document.querySelector(".burger-btn"),p=document.getElementById("mobile-menu"),I=document.getElementById("data-burger-close");H.addEventListener("click",()=>{p.classList.add("open")});I.addEventListener("click",()=>{p.classList.remove("open")});p.addEventListener("click",e=>{e.target===p&&p.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.classList.contains("open")&&p.classList.remove("open")});let l;async function C(){return(await w.get("https://paw-hut.b.goit.study/api/categories")).data}async function L(e=1){l=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",n={page:e,limit:l};try{return(await w.get(o,{params:n})).data}catch(t){return console.error("Error:",t),[]}}async function E(e,s=1){l=window.innerWidth<1440?8:9;const n="https://paw-hut.b.goit.study/api/animals",t={page:s,limit:l,categoryId:e};try{const a=await w.get(n,{params:t});return console.log(a.data),a.data}catch(a){return console.error("Error:",a),[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function k(e){const s=g(e);r.petsList.insertAdjacentHTML("beforeend",s)}function z(){r.showMore.classList.remove("is-hidden")}function A(){r.showMore.classList.add("is-hidden")}function m(e,s){e<s?z():A()}function $(){r.petsList.innerHTML=""}function v(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function b(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function O(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function R(e){return e.map(O).join("")}function j(e){const s=e.categories.map(o=>`<span class="pet-category">${o.name}</span>`).join(" ");return`
     <li class="pet-card" data-id="${e._id}">
        <img src="${e.image}" alt="${e.shortDescription}" class="pet-image" width="392" height="309"> 
        <div class="pet-description-container">
        <div class="sub-description">
        <p class="pet-type">${e.species}</p>
        <h3 class="pet-name">${e.name}</h3>
        <div class="pet-categories-container">
        ${s}
        </div>
        </div>
        <div class="second-sub-descr">
        <div class="age-gender">
        <p class="pet-age">${e.age}</p>
        <p class="pet-gender">${e.gender}</p>
        </div>
        <p class="pet-description">${e.shortDescription}</p>
       
        <button class="find-out-more" type="button">Дізнатись більше</button>
        </div>
    </div>
    </li>`}function g(e){return e.map(j).join("")}r.petsList.addEventListener("click",async e=>{const s=e.target.closest("li");console.log(s),console.log("something");const o=s.dataset.id;console.log(o);const n=(await x()).animals;console.log(n);const t=n.find(d=>d._id===o);console.log(t);const a=D(t);r.modal.innerHTML=a,_()});r.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&M()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&M()});function P(e){if(e.code==="Escape")M();else return}async function x(){const e="https://paw-hut.b.goit.study/api/animals";try{return(await w.get(e)).data}catch(s){return console.error("Error:",s),[]}}function D(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />

    <p class="pet-type-paragraph">${e.species}</p>

    <h3 class="modalpet-name">${e.name}</h3>
    <div class="modal-age-gender">
      <p class="modal-pet-age">${e.age}</p>
      <p class="modal-pet-gender">${e.gender}</p>
    </div>
    <span class="modal-descr-word">Опис:</span>
    <p class="modalpet-desc">${e.description}</p>

    <span class="modal-descr-word">Здоров’я:</span>
    <p class="modalpet-health-desc">${e.healthStatus}</p>

    <span class="modal-descr-word">Поведінка:</span>
    <p class="modalpet-behaviour-desc">${e.behavior}</p>`}function _(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",P)}function M(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",P)}let i=1,c,h="all",T;async function N(){if(i++,v(),h==="all")try{const e=await L(i);k(e.animals),c=Math.ceil(e.totalItems/l),m(i,c)}catch{u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(h==="category")try{const e=await E(T,i);k(e.animals),c=Math.ceil(e.totalItems/l),m(i,c)}catch{u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}b()}r.showMore.addEventListener("click",N);document.addEventListener("DOMContentLoaded",async()=>{$(),v();try{const e=await C(),s=a=>Number(a._id.at(-1));e.sort((a,d)=>s(a)-s(d)),e.unshift({_id:0,name:"Всі"});const o=R(e);r.categories.innerHTML=o,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}h="all",i=1;try{const e=await L(),s=g(e.animals);r.petsList.innerHTML=s,c=Math.ceil(e.totalItems/l),b(),m(i,c)}catch{u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{$(),v(),h="category",i=1,document.querySelector(".active").classList.remove("active");const o=e.target.closest("button");o.classList.add("active");const n=o.dataset.id;if(T=n,n==="0")try{const t=await L(i),a=g(t.animals);c=Math.ceil(t.totalItems/l),r.petsList.innerHTML=a}catch{u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const t=await E(n,i),a=g(t.animals);c=Math.ceil(t.totalItems/l),r.petsList.innerHTML=a}catch{u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}m(i,c),b()});
//# sourceMappingURL=index.js.map
