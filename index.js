import{S as j,a as T,i as c,A as W}from"./assets/vendor-N-XT4TYG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new j(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let m;async function D(){return(await T.get("https://paw-hut.b.goit.study/api/categories")).data}async function f(e=1){m=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",i={page:e,limit:m};try{return(await T.get(a,{params:i})).data}catch(s){return console.error("Error:",s),[]}}async function k(e,t=1){m=window.innerWidth<1440?8:9;const i="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:m,categoryId:e};try{const o=await T.get(i,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let u=1,h,L="all",y,A,w=[];function R(e){const t=M(e);r.petsList.insertAdjacentHTML("beforeend",t)}async function G(){if(u++,q(),L==="all")try{const e=await f(u);w.push(...e.animals),R(e.animals),h=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(L==="category"){try{const e=await k(A,u);w.push(...e.animals),R(e.animals),h=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}H()}}r.showMore.addEventListener("click",G);document.addEventListener("DOMContentLoaded",async e=>{_(),q();try{const t=await D(),a=l=>Number(l._id.at(-1));t.sort((l,F)=>a(l)-a(F)),t.unshift({_id:0,name:"Всі"});const i=Q(t);r.categories.innerHTML=i,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L="all",u=1;try{const t=await f();w=t.animals;const a=M(t.animals);r.petsList.innerHTML=a,h=Math.ceil(t.totalItems/y),console.log(h),H(),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{_(),q(),L="category",u=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const i=a.dataset.id;if(A=i,i==="0")try{const s=await f(u);w=s.animals;const o=M(s.animals);h=Math.ceil(s.totalItems/y),r.petsList.innerHTML=o,v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await k(i,u);w=s.animals;const o=M(s.animals);h=Math.ceil(s.totalItems/y),r.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}v(),H()});function V(){r.showMore.classList.remove("is-hidden")}function K(){r.showMore.classList.add("is-hidden")}function v(){u<h?V():K()}function _(){r.petsList.innerHTML=""}function q(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function H(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function J(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function Q(e){return e.map(J).join("")}function U(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
     <li class="pet-card" data-id="${e._id||e.id||"invalid"}">
         <img src="${e.image}" alt="${e.shortDescription}" class="pet-image" >
         <div class="pet-description-container">
         <p class="pet-type">${e.species}</p>
         <h3 class="pet-name">${e.name}</h3>
         <div class="pet-categories-container">
         ${t}
         </div>
         <div class="age-gender">
         <p class="pet-age">${e.age}</p>
         <p class="pet-gender">${e.gender}</p>
         </div>
         <p class="pet-description">${e.shortDescription}</p>
         <button class="find-out-more" type="button">Дізнатись більше</button>
     </div>
     </li>`}function M(e){return e.map(U).join("")}new W(".accordion-container");function X(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((i,s)=>{i.classList.remove("filled","half"),s<Math.floor(t)?i.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&i.classList.add("half")})})}const E=document.querySelector(".slider .swiper-wrapper");let P=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{E.innerHTML="",e.feedbacks.forEach(a=>{E.insertAdjacentHTML("beforeend",`
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${a.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${a.description}</p>
            <p class="feedback-author">— ${a.author}</p>
          </div>
        </div>
      `)}),X();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,P&&P.destroy(!0,!0),P=new j(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{E.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const Y=document.querySelector(".burger-btn"),g=document.getElementById("mobile-menu"),Z=document.getElementById("data-burger-close"),ee=document.querySelectorAll(".menu-link-menu");Y.addEventListener("click",()=>{g.classList.add("open")});Z.addEventListener("click",()=>{g.classList.remove("open")});g.addEventListener("click",e=>{e.target===g&&g.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.contains("open")&&g.classList.remove("open")});ee.forEach(e=>{e.addEventListener("click",()=>{g.classList.remove("open")})});const n={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function C(e){const t=S(e);n.petsList.insertAdjacentHTML("beforeend",t)}function te(){n.showMore.classList.remove("is-hidden")}function se(){n.showMore.classList.add("is-hidden")}function b(e,t){e<t?te():se()}function O(){n.petsList.innerHTML=""}function I(){n.loader.classList.remove("hidden"),n.showMore.classList.add("hidden")}function B(){n.loader.classList.add("hidden"),n.showMore.classList.remove("hidden")}function ae(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function oe(e){return e.map(ae).join("")}function ie(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
     <li class="pet-card" data-id="${e._id}">
        <img src="${e.image}" alt="${e.shortDescription}" class="pet-image" width="392" height="309"> 
        <div class="pet-description-container">
        <div class="sub-description">
        <p class="pet-type">${e.species}</p>
        <h3 class="pet-name">${e.name}</h3>
        <div class="pet-categories-container">
        ${t}
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
    </li>`}function S(e){return e.map(ie).join("")}n.petsList.addEventListener("click",async e=>{const t=e.target.closest("li");console.log(t),console.log("something");const a=t.dataset.id;if(console.log(a),!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const i=w;console.log(i);const s=i.find(l=>l._id===a);if(console.log(s),!s){console.error("Pet not found");return}const o=ne(s);n.modal.innerHTML=o,re()});n.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&z()});n.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&z()});function x(e){if(e.code==="Escape")z();else return}function ne(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
    <div class="pet-content-wrapper">
    <div class="pet-main-details-container">

    <p class="pet-type-paragraph">${e.species}</p>
    <h3 class="modalpet-name">${e.name}</h3>
    <div class="modal-age-gender">
      <p class="modal-pet-age">${e.age}</p>
      <p class="modal-pet-gender">${e.gender}</p>
    </div>
    </div>
    

    <div class="pet-details-container">
    <span class="modal-descr-word">Опис:</span>
    <p class="modalpet-desc">${e.description}</p>
    </div>

    <div class="pet-details-container">
    <span class="modal-descr-word">Здоров’я:</span>
    <p class="modalpet-health-desc">${e.healthStatus}</p>
    </div>

    <div class="pet-details-container">
    <span class="modal-descr-word">Поведінка:</span>
    <p class="modalpet-behaviour-desc">${e.behavior}</p>
    </div>
    </div>`}function re(){n.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",x),document.body.style.overflow="hidden"}function z(){n.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",x),document.body.style.overflow=""}let d=1,p,$="all",N;async function ce(){if(d++,I(),$==="all")try{const e=await f(d);C(e.animals),p=Math.ceil(e.totalItems/m),b(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if($==="category")try{const e=await k(N,d);C(e.animals),p=Math.ceil(e.totalItems/m),b(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}B()}n.showMore.addEventListener("click",ce);document.addEventListener("DOMContentLoaded",async()=>{O(),I();try{const e=await D(),t=o=>Number(o._id.at(-1));e.sort((o,l)=>t(o)-t(l)),e.unshift({_id:0,name:"Всі"});const a=oe(e);n.categories.innerHTML=a,n.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}$="all",d=1;try{const e=await f(),t=S(e.animals);n.petsList.innerHTML=t,p=Math.ceil(e.totalItems/m),B(),b(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});n.categories.addEventListener("click",async e=>{O(),I(),$="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const i=a.dataset.id;if(N=i,i==="0")try{const s=await f(d),o=S(s.animals);p=Math.ceil(s.totalItems/m),n.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await k(i,d),o=S(s.animals);p=Math.ceil(s.totalItems/m),n.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}b(d,p),B()});
//# sourceMappingURL=index.js.map
