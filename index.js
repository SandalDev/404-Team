import{S as K,a as _,i as c,A as se,b as ae}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const R=new K(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function J(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),s=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!s.length||(t.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),s.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}R.on("slideChange",()=>{J(R)});J(R);const F=document.querySelectorAll(".about-swiper .swiper-slide");F.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(F).slice(5).forEach(e=>e.remove()));let u;async function Q(){return(await _.get("https://paw-hut.b.goit.study/api/categories")).data}async function y(e=1){u=window.innerWidth<1440?8:9;const s="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:u};try{return(await _.get(s,{params:o})).data}catch{return[]}}async function q(e,t=1){u=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",a={page:t,limit:u,categoryId:e};try{return(await _.get(o,{params:a})).data}catch{return[]}}const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let p=1,w,M="all",v,U,f=[];function V(e){const t=$(e);i.petsList.insertAdjacentHTML("beforeend",t)}async function oe(){if(p++,j(),M==="all")try{const e=await y(p);f.push(...e.animals),V(e.animals),w=Math.ceil(e.totalItems/v),L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(M==="category"){try{const e=await q(U,p);f.push(...e.animals),V(e.animals),w=Math.ceil(e.totalItems/v),L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}D()}}i.showMore.addEventListener("click",oe);document.addEventListener("DOMContentLoaded",async e=>{X(),j();try{const t=await Q(),s=l=>Number(l._id.at(-1));t.sort((l,te)=>s(l)-s(te)),t.unshift({_id:0,name:"Всі"});const o=ce(t);i.categories.innerHTML=o,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M="all",p=1;try{const t=await y();f=t.animals;const s=$(t.animals);i.petsList.innerHTML=s,w=Math.ceil(t.totalItems/v),D(),L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{X(),j(),M="category",p=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const s=e.target.closest("button");s.classList.add("active");const o=s.dataset.id;if(U=o,o==="0")try{const a=await y(p);f=a.animals;const n=$(a.animals);w=Math.ceil(a.totalItems/v),i.petsList.innerHTML=n,L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const a=await q(o,p);f=a.animals;const n=$(a.animals);w=Math.ceil(a.totalItems/v),i.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L(),D()});function ne(){i.showMore.classList.remove("is-hidden")}function re(){i.showMore.classList.add("is-hidden")}function L(){p<w?ne():re()}function X(){i.petsList.innerHTML=""}function j(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function D(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function ie(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function ce(e){return e.map(ie).join("")}function le(e){const t=e.categories.map(s=>`<span class="pet-category">${s.name}</span>`).join(" ");return`
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
     </li>`}function $(e){return e.map(le).join("")}new se(".accordion-container");function de(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,a)=>{o.classList.remove("filled","half"),a<Math.floor(t)?o.classList.add("filled"):a===Math.floor(t)&&t%1>=.5&&o.classList.add("half")})})}const I=document.querySelector(".slider .swiper-wrapper");let H=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{I.innerHTML="",e.feedbacks.forEach(s=>{I.insertAdjacentHTML("beforeend",`
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${s.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${s.description}</p>
            <p class="feedback-author"> ${s.author}</p>
          </div>
        </div>
      `)}),de();const t=()=>{const s=window.innerWidth>=768?2:1;e.feedbacks.length,H&&H.destroy(!0,!0),H=new K(".slider .swiper",{slidesPerView:s,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{I.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const me=document.querySelector(".burger-btn"),h=document.getElementById("mobile-menu"),ue=document.getElementById("data-burger-close"),pe=document.querySelectorAll(".menu-link-menu");me.addEventListener("click",()=>{h.classList.add("open")});ue.addEventListener("click",()=>{h.classList.remove("open")});h.addEventListener("click",e=>{e.target===h&&h.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&h.classList.remove("open")});pe.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("open")})});const x=document.querySelector("[data-order-modal]"),C=document.querySelector("[data-order-close]"),b=document.querySelector("[data-backdrop]"),g=document.querySelector("[data-order-form]"),z=document.querySelector(".modalpet-adopt-btn"),A=document.querySelector(".modalpet-backdrop");function he(){x.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function T(){x.classList.add("is-hidden"),document.body.style.overflow=""}z==null||z.addEventListener("click",()=>{he(),A==null||A.classList.add("is-hidden")});C==null||C.addEventListener("click",T);b==null||b.addEventListener("click",e=>{e.target===b&&T()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!x.classList.contains("is-hidden")&&T()});function W(e,t){const s=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),s.textContent=t}function S(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t.textContent=""}g==null||g.addEventListener("submit",e=>{e.preventDefault();const t=g.elements.name,s=g.elements.phone;g.elements.comment.value.trim();let o=!0;S(t),S(s),t.value.trim().length<2&&(W(t,"Імʼя повинно містити мінімум 2 символи"),o=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(s.value.trim())||(W(s,"Невірний формат номера"),o=!1),o&&(ae.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),g.reset(),S(t),S(s),T())});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function G(e){const t=E(e);r.petsList.insertAdjacentHTML("beforeend",t)}function ge(){r.showMore.classList.remove("is-hidden")}function we(){r.showMore.classList.add("is-hidden")}function k(e,t){e<t?ge():we()}function Y(){r.petsList.innerHTML=""}function B(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function O(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function fe(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function ye(e){return e.map(fe).join("")}function ve(e){const t=e.categories.map(s=>`<span class="pet-category">${s.name}</span>`).join(" ");return`
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
    </li>`}function E(e){return e.map(ve).join("")}r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const s=e.target.closest("li").dataset.id;if(!s||s==="undefined"){console.error("Invalid data-id on pet card");return}const a=f.find(l=>l._id===s);if(!a){console.error("Pet not found");return}const n=Le(a);r.modal.innerHTML=n,be()});r.modalCloseBtn.addEventListener("click",e=>{N()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&N()});function Z(e){if(e.code==="Escape")N();else return}function Le(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function be(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",Z),document.body.style.overflow="hidden"}function N(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",Z),document.body.style.overflow=""}let d=1,m,P="all",ee;async function Se(){if(d++,B(),P==="all")try{const e=await y(d);G(e.animals),m=Math.ceil(e.totalItems/u),k(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(P==="category")try{const e=await q(ee,d);G(e.animals),m=Math.ceil(e.totalItems/u),k(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}O()}r.showMore.addEventListener("click",Se);document.addEventListener("DOMContentLoaded",async()=>{Y(),B();try{const e=await Q(),t=n=>Number(n._id.at(-1));e.sort((n,l)=>t(n)-t(l)),e.unshift({_id:0,name:"Всі"});const s=ye(e);r.categories.innerHTML=s,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}P="all",d=1;try{const e=await y(),t=E(e.animals);r.petsList.innerHTML=t,m=Math.ceil(e.totalItems/u),O(),k(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{Y(),B(),P="category",d=1,document.querySelector(".active").classList.remove("active");const s=e.target.closest("button");s.classList.add("active");const o=s.dataset.id;if(ee=o,o==="0")try{const a=await y(d),n=E(a.animals);m=Math.ceil(a.totalItems/u),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const a=await q(o,d),n=E(a.animals);m=Math.ceil(a.totalItems/u),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k(d,m),O()});
//# sourceMappingURL=index.js.map
