import{S as C,a as $,i as c,A as F}from"./assets/vendor-N-XT4TYG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new C(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let m;async function j(){return(await $.get("https://paw-hut.b.goit.study/api/categories")).data}async function w(e=1){m=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",r={page:e,limit:m};try{return(await $.get(a,{params:r})).data}catch(s){return console.error("Error:",s),[]}}async function k(e,t=1){m=window.innerWidth<1440?8:9;const r="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:m,categoryId:e};try{const o=await $.get(r,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const n={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let u=1,h,L="all",f,A;function z(e){const t=v(e);n.petsList.insertAdjacentHTML("beforeend",t)}async function W(){if(u++,T(),L==="all")try{const e=await w(u);z(e.animals),h=Math.ceil(e.totalItems/f),y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(L==="category"){try{const e=await k(A,u);z(e.animals),h=Math.ceil(e.totalItems/f),y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}q()}}n.showMore.addEventListener("click",W);document.addEventListener("DOMContentLoaded",async e=>{D(),T();try{const t=await j(),a=l=>Number(l._id.at(-1));t.sort((l,N)=>a(l)-a(N)),t.unshift({_id:0,name:"Всі"});const r=J(t);n.categories.innerHTML=r,n.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L="all",u=1;try{const t=await w(),a=v(t.animals);n.petsList.innerHTML=a,h=Math.ceil(t.totalItems/f),console.log(h),q(),y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});n.categories.addEventListener("click",async e=>{D(),T(),L="category",u=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const r=a.dataset.id;if(A=r,r==="0")try{const s=await w(u),o=v(s.animals);h=Math.ceil(s.totalItems/f),n.petsList.innerHTML=o,y()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await k(r,u),o=v(s.animals);h=Math.ceil(s.totalItems/f),n.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}y(),q()});function G(){n.showMore.classList.remove("is-hidden")}function V(){n.showMore.classList.add("is-hidden")}function y(){u<h?G():V()}function D(){n.petsList.innerHTML=""}function T(){n.loader.classList.remove("hidden"),n.showMore.classList.add("hidden")}function q(){n.loader.classList.add("hidden"),n.showMore.classList.remove("hidden")}function K(e){return`<li class="category-name">
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
     </li>`}function v(e){return e.map(Q).join("")}new F(".accordion-container");function U(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((r,s)=>{r.classList.remove("filled","half"),s<Math.floor(t)?r.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&r.classList.add("half")})})}const E=document.querySelector(".slider .swiper-wrapper");let P=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{E.innerHTML="",e.feedbacks.forEach(a=>{E.insertAdjacentHTML("beforeend",`
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
      `)}),U();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,P&&P.destroy(!0,!0),P=new C(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{E.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const X=document.querySelector(".burger-btn"),g=document.getElementById("mobile-menu"),Y=document.getElementById("data-burger-close");X.addEventListener("click",()=>{g.classList.add("open")});Y.addEventListener("click",()=>{g.classList.remove("open")});g.addEventListener("click",e=>{e.target===g&&g.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.contains("open")&&g.classList.remove("open")});const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function R(e){const t=b(e);i.petsList.insertAdjacentHTML("beforeend",t)}function Z(){i.showMore.classList.remove("is-hidden")}function ee(){i.showMore.classList.add("is-hidden")}function M(e,t){e<t?Z():ee()}function O(){i.petsList.innerHTML=""}function H(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function I(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function te(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function se(e){return e.map(te).join("")}function ae(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function b(e){return e.map(ae).join("")}i.petsList.addEventListener("click",async e=>{const t=e.target.closest("li");console.log(t),console.log("something");const a=t.dataset.id;console.log(a);const r=(await oe()).animals;console.log(r);const s=r.find(l=>l._id===a);console.log(s);const o=re(s);i.modal.innerHTML=o,ie()});i.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&B()});i.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&B()});function _(e){if(e.code==="Escape")B();else return}async function oe(){const e="https://paw-hut.b.goit.study/api/animals";try{return(await $.get(e)).data}catch(t){return console.error("Error:",t),[]}}function re(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />

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
    <p class="modalpet-behaviour-desc">${e.behavior}</p>`}function ie(){i.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",_)}function B(){i.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",_)}let d=1,p,S="all",x;async function ne(){if(d++,H(),S==="all")try{const e=await w(d);R(e.animals),p=Math.ceil(e.totalItems/m),M(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category")try{const e=await k(x,d);R(e.animals),p=Math.ceil(e.totalItems/m),M(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}I()}i.showMore.addEventListener("click",ne);document.addEventListener("DOMContentLoaded",async()=>{O(),H();try{const e=await j(),t=o=>Number(o._id.at(-1));e.sort((o,l)=>t(o)-t(l)),e.unshift({_id:0,name:"Всі"});const a=se(e);i.categories.innerHTML=a,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",d=1;try{const e=await w(),t=b(e.animals);i.petsList.innerHTML=t,p=Math.ceil(e.totalItems/m),I(),M(d,p)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{O(),H(),S="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const r=a.dataset.id;if(x=r,r==="0")try{const s=await w(d),o=b(s.animals);p=Math.ceil(s.totalItems/m),i.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await k(r,d),o=b(s.animals);p=Math.ceil(s.totalItems/m),i.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M(d,p),I()});
//# sourceMappingURL=index.js.map
