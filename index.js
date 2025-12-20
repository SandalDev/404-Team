import{S as G,a as z,i as d,A as te,b}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new G(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const V=document.querySelector("[data-order-modal]"),A=document.querySelector(".btn-header"),X=document.querySelector(".btn-header-mobile"),_=document.querySelector(".mobile-menu-section");A&&A.addEventListener("click",e=>{e.preventDefault(),V.classList.remove("is-hidden"),document.body.style.overflow="hidden"});X&&X.addEventListener("click",e=>{e.preventDefault(),V.classList.remove("is-hidden"),document.body.style.overflow="hidden",_&&_.classList.add("is-hidden")});let p;async function J(){return(await z.get("https://paw-hut.b.goit.study/api/categories")).data}async function f(e=1){p=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",n={page:e,limit:p};try{return(await z.get(a,{params:n})).data}catch(s){return console.error("Error:",s),[]}}async function P(e,t=1){p=window.innerWidth<1440?8:9;const n="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:p,categoryId:e};try{const o=await z.get(n,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let u=1,g,S="all",v,K,w=[];function N(e){const t=M(e);r.petsList.insertAdjacentHTML("beforeend",t)}async function se(){if(u++,C(),S==="all")try{const e=await f(u);w.push(...e.animals),N(e.animals),g=Math.ceil(e.totalItems/v),L()}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category"){try{const e=await P(K,u);w.push(...e.animals),N(e.animals),g=Math.ceil(e.totalItems/v),L()}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}R()}}r.showMore.addEventListener("click",se);document.addEventListener("DOMContentLoaded",async e=>{Q(),C();try{const t=await J(),a=c=>Number(c._id.at(-1));t.sort((c,ee)=>a(c)-a(ee)),t.unshift({_id:0,name:"Всі"});const n=ie(t);r.categories.innerHTML=n,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",u=1;try{const t=await f();w=t.animals;const a=M(t.animals);r.petsList.innerHTML=a,g=Math.ceil(t.totalItems/v),R(),L()}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{Q(),C(),S="category",u=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const n=a.dataset.id;if(K=n,n==="0")try{const s=await f(u);w=s.animals;const o=M(s.animals);g=Math.ceil(s.totalItems/v),r.petsList.innerHTML=o,L()}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await P(n,u);w=s.animals;const o=M(s.animals);g=Math.ceil(s.totalItems/v),r.petsList.innerHTML=o}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L(),R()});function ae(){r.showMore.classList.remove("is-hidden")}function oe(){r.showMore.classList.add("is-hidden")}function L(){u<g?ae():oe()}function Q(){r.petsList.innerHTML=""}function C(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function R(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function ne(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function ie(e){return e.map(ne).join("")}function re(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
     </li>`}function M(e){return e.map(re).join("")}new te(".accordion-container");function ce(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((n,s)=>{n.classList.remove("filled","half"),s<Math.floor(t)?n.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&n.classList.add("half")})})}const q=document.querySelector(".slider .swiper-wrapper");let H=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{q.innerHTML="",e.feedbacks.forEach(a=>{q.insertAdjacentHTML("beforeend",`
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
            <p class="feedback-author"> ${a.author}</p>
          </div>
        </div>
      `)}),ce();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,H&&H.destroy(!0,!0),H=new G(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{q.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const de=document.querySelector(".burger-btn"),h=document.getElementById("mobile-menu"),le=document.getElementById("data-burger-close"),me=document.querySelectorAll(".menu-link-menu");de.addEventListener("click",()=>{h.classList.add("open")});le.addEventListener("click",()=>{h.classList.remove("open")});h.addEventListener("click",e=>{e.target===h&&h.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&h.classList.remove("open")});me.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("open")})});const D=document.querySelector("[data-order-modal]"),pe=document.querySelector("[data-order-close]"),F=document.querySelector("[data-backdrop]"),y=document.querySelector("[data-order-form]"),I=document.querySelector(".modalpet-adopt-btn"),B=document.querySelector(".modalpet-backdrop");function ue(){D.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function T(){D.classList.add("is-hidden"),document.body.style.overflow=""}I==null||I.addEventListener("click",()=>{ue(),B==null||B.classList.add("is-hidden")});pe.addEventListener("click",T);F.addEventListener("click",e=>{e.target===F&&T()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!D.classList.contains("is-hidden")&&T()});y.addEventListener("submit",async e=>{e.preventDefault();const t=y.elements.name.value.trim(),a=y.elements.phone.value.trim(),n=y.elements.comment.value.trim();if(t.length<2){b.fire({icon:"warning",title:"Некоректне імʼя",text:"Імʼя повинно містити щонайменше 2 символи"});return}if(!/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(a)){b.fire({icon:"warning",title:"Некоректний номер",text:"Введіть номер у форматі +38 (0XX) XXX XX XX"});return}const o={name:t,phone:a,comment:n};try{await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),b.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом"}),y.reset(),T()}catch{b.fire({icon:"error",title:"Помилка",text:"Спробуйте ще раз пізніше"})}});const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function W(e){const t=$(e);i.petsList.insertAdjacentHTML("beforeend",t)}function he(){i.showMore.classList.remove("is-hidden")}function ge(){i.showMore.classList.add("is-hidden")}function k(e,t){e<t?he():ge()}function U(){i.petsList.innerHTML=""}function j(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function O(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function we(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function fe(e){return e.map(we).join("")}function ye(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function $(e){return e.map(ye).join("")}i.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const a=e.target.closest("li").dataset.id;if(!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const s=w.find(c=>c._id===a);if(!s){console.error("Pet not found");return}const o=ve(s);i.modal.innerHTML=o,Le()});i.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&x()});i.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&x()});function Y(e){if(e.code==="Escape")x();else return}function ve(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function Le(){i.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",Y),document.body.style.overflow="hidden"}function x(){i.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",Y),document.body.style.overflow=""}let l=1,m,E="all",Z;async function be(){if(l++,j(),E==="all")try{const e=await f(l);W(e.animals),m=Math.ceil(e.totalItems/p),k(l,m)}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(E==="category")try{const e=await P(Z,l);W(e.animals),m=Math.ceil(e.totalItems/p),k(l,m)}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}O()}i.showMore.addEventListener("click",be);document.addEventListener("DOMContentLoaded",async()=>{U(),j();try{const e=await J(),t=o=>Number(o._id.at(-1));e.sort((o,c)=>t(o)-t(c)),e.unshift({_id:0,name:"Всі"});const a=fe(e);i.categories.innerHTML=a,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E="all",l=1;try{const e=await f(),t=$(e.animals);i.petsList.innerHTML=t,m=Math.ceil(e.totalItems/p),O(),k(l,m)}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{U(),j(),E="category",l=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const n=a.dataset.id;if(Z=n,n==="0")try{const s=await f(l),o=$(s.animals);m=Math.ceil(s.totalItems/p),i.petsList.innerHTML=o}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await P(n,l),o=$(s.animals);m=Math.ceil(s.totalItems/p),i.petsList.innerHTML=o}catch{d.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k(l,m),O()});
//# sourceMappingURL=index.js.map
