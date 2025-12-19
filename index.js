import{S as C,a as $,i as c,A as F}from"./assets/vendor-N-XT4TYG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new C(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let m;async function j(){return(await $.get("https://paw-hut.b.goit.study/api/categories")).data}async function w(e=1){m=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",i={page:e,limit:m};try{return(await $.get(a,{params:i})).data}catch(s){return console.error("Error:",s),[]}}async function k(e,t=1){m=window.innerWidth<1440?8:9;const i="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:m,categoryId:e};try{const o=await $.get(i,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let u=1,h,L="all",f,A;function z(e){const t=v(e);r.petsList.insertAdjacentHTML("beforeend",t)}async function W(){if(u++,T(),L==="all")try{const e=await w(u);z(e.animals),h=Math.ceil(e.totalItems/f),y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(L==="category"){try{const e=await k(A,u);z(e.animals),h=Math.ceil(e.totalItems/f),y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}q()}}r.showMore.addEventListener("click",W);document.addEventListener("DOMContentLoaded",async e=>{D(),T();try{const t=await j(),a=l=>Number(l._id.at(-1));t.sort((l,N)=>a(l)-a(N)),t.unshift({_id:0,name:"Всі"});const i=J(t);r.categories.innerHTML=i,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L="all",u=1;try{const t=await w(),a=v(t.animals);r.petsList.innerHTML=a,h=Math.ceil(t.totalItems/f),console.log(h),q(),y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{D(),T(),L="category",u=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const i=a.dataset.id;if(A=i,i==="0")try{const s=await w(u),o=v(s.animals);h=Math.ceil(s.totalItems/f),r.petsList.innerHTML=o,y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await k(i,u),o=v(s.animals);h=Math.ceil(s.totalItems/f),r.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}y(),q()});function G(){r.showMore.classList.remove("is-hidden")}function V(){r.showMore.classList.add("is-hidden")}function y(){u<h?G():V()}function D(){r.petsList.innerHTML=""}function T(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function q(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function K(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function J(e){return e.map(K).join("")}function Q(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
     <li class="pet-card">
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
     </li>`}function v(e){return e.map(Q).join("")}new F(".accordion-container");function U(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((i,s)=>{i.classList.remove("filled","half"),s<Math.floor(t)?i.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&i.classList.add("half")})})}const E=document.querySelector(".slider .swiper-wrapper");let P=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{E.innerHTML="",e.feedbacks.forEach(a=>{E.insertAdjacentHTML("beforeend",`
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
      `)}),U();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,P&&P.destroy(!0,!0),P=new C(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{E.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const X=document.querySelector(".burger-btn"),g=document.getElementById("mobile-menu"),Y=document.getElementById("data-burger-close"),Z=document.querySelectorAll(".menu-link-menu");X.addEventListener("click",()=>{g.classList.add("open")});Y.addEventListener("click",()=>{g.classList.remove("open")});g.addEventListener("click",e=>{e.target===g&&g.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.contains("open")&&g.classList.remove("open")});Z.forEach(e=>{e.addEventListener("click",()=>{g.classList.remove("open")})});const n={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function R(e){const t=b(e);n.petsList.insertAdjacentHTML("beforeend",t)}function ee(){n.showMore.classList.remove("is-hidden")}function te(){n.showMore.classList.add("is-hidden")}function M(e,t){e<t?ee():te()}function O(){n.petsList.innerHTML=""}function H(){n.loader.classList.remove("hidden"),n.showMore.classList.add("hidden")}function I(){n.loader.classList.add("hidden"),n.showMore.classList.remove("hidden")}function se(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function ae(e){return e.map(se).join("")}function oe(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function b(e){return e.map(oe).join("")}n.petsList.addEventListener("click",async e=>{const t=e.target.closest("li");console.log(t),console.log("something");const a=t.dataset.id;console.log(a);const i=(await ie()).animals;console.log(i);const s=i.find(l=>l._id===a);console.log(s);const o=ne(s);n.modal.innerHTML=o,re()});n.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&B()});n.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&B()});function _(e){if(e.code==="Escape")B();else return}async function ie(){const e="https://paw-hut.b.goit.study/api/animals";try{return(await $.get(e)).data}catch(t){return console.error("Error:",t),[]}}function ne(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function re(){n.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",_),document.body.style.overflow="hidden"}function B(){n.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",_),document.body.style.overflow=""}let d=1,p,S="all",x;async function ce(){if(d++,H(),S==="all")try{const e=await w(d);R(e.animals),p=Math.ceil(e.totalItems/m),M(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category")try{const e=await k(x,d);R(e.animals),p=Math.ceil(e.totalItems/m),M(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}I()}n.showMore.addEventListener("click",ce);document.addEventListener("DOMContentLoaded",async()=>{O(),H();try{const e=await j(),t=o=>Number(o._id.at(-1));e.sort((o,l)=>t(o)-t(l)),e.unshift({_id:0,name:"Всі"});const a=ae(e);n.categories.innerHTML=a,n.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",d=1;try{const e=await w(),t=b(e.animals);n.petsList.innerHTML=t,p=Math.ceil(e.totalItems/m),I(),M(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});n.categories.addEventListener("click",async e=>{O(),H(),S="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const i=a.dataset.id;if(x=i,i==="0")try{const s=await w(d),o=b(s.animals);p=Math.ceil(s.totalItems/m),n.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await k(i,d),o=b(s.animals);p=Math.ceil(s.totalItems/m),n.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M(d,p),I()});
//# sourceMappingURL=index.js.map
