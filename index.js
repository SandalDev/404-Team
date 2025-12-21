import{S as J,a as D,i as c,A as ne,b as re}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const _=new J(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function Q(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),s=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!s.length||(t.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),s.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}_.on("slideChange",()=>{Q(_)});Q(_);const W=document.querySelectorAll(".about-swiper .swiper-slide");W.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(W).slice(5).forEach(e=>e.remove()));let m;async function U(){return(await D.get("https://paw-hut.b.goit.study/api/categories")).data}async function f(e=1){m=window.innerWidth<1440?8:9;const s="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:m};try{return(await D.get(s,{params:o})).data}catch{return[]}}async function q(e,t=1){m=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",a={page:t,limit:m,categoryId:e};try{return(await D.get(o,{params:a})).data}catch{return[]}}const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let p=1,g,S="all",y,X,w=[];function G(e){const t=M(e);i.petsList.insertAdjacentHTML("beforeend",t)}async function ie(){if(p++,x(),S==="all")try{const e=await f(p);w.push(...e.animals),G(e.animals),g=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category"){try{const e=await q(X,p);w.push(...e.animals),G(e.animals),g=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}B()}}i.showMore.addEventListener("click",ie);document.addEventListener("DOMContentLoaded",async e=>{Z(),x();try{const t=await U(),s=l=>Number(l._id.at(-1));t.sort((l,oe)=>s(l)-s(oe)),t.unshift({_id:0,name:"Всі"});const o=ue(t);i.categories.innerHTML=o,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",p=1;try{const t=await f();w=t.animals;const s=M(t.animals);i.petsList.innerHTML=s,g=Math.ceil(t.totalItems/y),B(),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{Z(),x(),S="category",p=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const s=e.target.closest("button");s.classList.add("active");const o=s.dataset.id;if(X=o,o==="0")try{const a=await f(p);w=a.animals;const n=M(a.animals);g=Math.ceil(a.totalItems/y),i.petsList.innerHTML=n,v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const a=await q(o,p);w=a.animals;const n=M(a.animals);g=Math.ceil(a.totalItems/y),i.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}v(),B()});function ce(){i.showMore.classList.remove("is-hidden")}function le(){i.showMore.classList.add("is-hidden")}function v(){p<g?ce():le()}function Z(){i.petsList.innerHTML=""}function x(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function B(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function de(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function ue(e){return e.map(de).join("")}function me(e){const t=e.categories.map(s=>`<span class="pet-category">${s.name}</span>`).join(" ");return`
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
     </li>`}function M(e){return e.map(me).join("")}new ne(".accordion-container");function pe(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,a)=>{o.classList.remove("filled","half"),a<Math.floor(t)?o.classList.add("filled"):a===Math.floor(t)&&t%1>=.5&&o.classList.add("half")})})}const H=document.querySelector(".slider .swiper-wrapper");let C=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{H.innerHTML="",e.feedbacks.forEach(s=>{H.insertAdjacentHTML("beforeend",`
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
      `)}),pe();const t=()=>{const s=window.innerWidth>=768?2:1;e.feedbacks.length,C&&C.destroy(!0,!0),C=new J(".slider .swiper",{slidesPerView:s,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{H.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const he=document.querySelector(".burger-btn"),$=document.getElementById("mobile-menu"),ge=document.getElementById("data-burger-close"),we=document.querySelectorAll(".menu-link-menu");let j=0;function ee(e){e.key==="Escape"&&T()}function fe(){j=window.scrollY,document.body.style.top=`-${j}px`,document.body.classList.add("no-scroll"),$.classList.add("open"),window.addEventListener("keydown",ee)}function T(){$.classList.remove("open"),document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,j),window.removeEventListener("keydown",ee)}he.addEventListener("click",fe);ge.addEventListener("click",T);$.addEventListener("click",e=>{e.target===$&&T()});we.forEach(e=>{e.addEventListener("click",T)});const O=document.querySelector("[data-order-modal]"),z=document.querySelector("[data-order-close]"),L=document.querySelector("[data-backdrop]"),h=document.querySelector("[data-order-form]"),A=document.querySelector(".modalpet-adopt-btn"),R=document.querySelector(".modalpet-backdrop");function ye(){O.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function I(){O.classList.add("is-hidden"),document.body.style.overflow=""}A==null||A.addEventListener("click",()=>{ye(),R==null||R.classList.add("is-hidden")});z==null||z.addEventListener("click",I);L==null||L.addEventListener("click",e=>{e.target===L&&I()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!O.classList.contains("is-hidden")&&I()});function Y(e,t){const s=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),s.textContent=t}function b(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t.textContent=""}h==null||h.addEventListener("submit",e=>{e.preventDefault();const t=h.elements.name,s=h.elements.phone;h.elements.comment.value.trim();let o=!0;b(t),b(s),t.value.trim().length<2&&(Y(t,"Імʼя повинно містити мінімум 2 символи"),o=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(s.value.trim())||(Y(s,"Невірний формат номера"),o=!1),o&&(re.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),h.reset(),b(t),b(s),I())});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function K(e){const t=E(e);r.petsList.insertAdjacentHTML("beforeend",t)}function ve(){r.showMore.classList.remove("is-hidden")}function Le(){r.showMore.classList.add("is-hidden")}function k(e,t){e<t?ve():Le()}function te(){r.petsList.innerHTML=""}function N(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function F(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function be(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function Se(e){return e.map(be).join("")}function Me(e){const t=e.categories.map(s=>`<span class="pet-category">${s.name}</span>`).join(" ");return`
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
    </li>`}function E(e){return e.map(Me).join("")}r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const s=e.target.closest("li").dataset.id;if(!s||s==="undefined"){console.error("Invalid data-id on pet card");return}const a=w.find(l=>l._id===s);if(!a){console.error("Pet not found");return}const n=$e(a);r.modal.innerHTML=n,ke()});r.modalCloseBtn.addEventListener("click",e=>{V()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&V()});function se(e){if(e.code==="Escape")V();else return}function $e(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function ke(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",se),document.body.style.overflow="hidden"}function V(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",se),document.body.style.overflow=""}let d=1,u,P="all",ae;async function Ee(){if(d++,N(),P==="all")try{const e=await f(d);K(e.animals),u=Math.ceil(e.totalItems/m),k(d,u)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(P==="category")try{const e=await q(ae,d);K(e.animals),u=Math.ceil(e.totalItems/m),k(d,u)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}F()}r.showMore.addEventListener("click",Ee);document.addEventListener("DOMContentLoaded",async()=>{te(),N();try{const e=await U(),t=n=>Number(n._id.at(-1));e.sort((n,l)=>t(n)-t(l)),e.unshift({_id:0,name:"Всі"});const s=Se(e);r.categories.innerHTML=s,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}P="all",d=1;try{const e=await f(),t=E(e.animals);r.petsList.innerHTML=t,u=Math.ceil(e.totalItems/m),F(),k(d,u)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{te(),N(),P="category",d=1,document.querySelector(".active").classList.remove("active");const s=e.target.closest("button");s.classList.add("active");const o=s.dataset.id;if(ae=o,o==="0")try{const a=await f(d),n=E(a.animals);u=Math.ceil(a.totalItems/m),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const a=await q(o,d),n=E(a.animals);u=Math.ceil(a.totalItems/m),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k(d,u),F()});
//# sourceMappingURL=index.js.map
