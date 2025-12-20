import{S as J,a as A,i as l,A as oe,b}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const z=new J(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function K(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),a=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!a.length||(t.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),a.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}z.on("slideChange",()=>{K(z)});K(z);const X=document.querySelectorAll(".about-swiper .swiper-slide");X.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(X).slice(5).forEach(e=>e.remove()));const Q=document.querySelector("[data-order-modal]"),_=document.querySelector(".btn-header"),N=document.querySelector(".btn-header-mobile"),F=document.querySelector(".mobile-menu-section");_&&_.addEventListener("click",e=>{e.preventDefault(),Q.classList.remove("is-hidden"),document.body.style.overflow="hidden"});N&&N.addEventListener("click",e=>{e.preventDefault(),Q.classList.remove("is-hidden"),document.body.style.overflow="hidden",F&&F.classList.add("is-hidden")});let u;async function U(){return(await A.get("https://paw-hut.b.goit.study/api/categories")).data}async function f(e=1){u=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:u};try{return(await A.get(a,{params:o})).data}catch{return[]}}async function q(e,t=1){u=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:u,categoryId:e};try{return(await A.get(o,{params:s})).data}catch{return[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let p=1,g,S="all",v,Y,w=[];function W(e){const t=M(e);r.petsList.insertAdjacentHTML("beforeend",t)}async function ne(){if(p++,R(),S==="all")try{const e=await f(p);w.push(...e.animals),W(e.animals),g=Math.ceil(e.totalItems/v),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category"){try{const e=await q(Y,p);w.push(...e.animals),W(e.animals),g=Math.ceil(e.totalItems/v),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}D()}}r.showMore.addEventListener("click",ne);document.addEventListener("DOMContentLoaded",async e=>{Z(),R();try{const t=await U(),a=c=>Number(c._id.at(-1));t.sort((c,ae)=>a(c)-a(ae)),t.unshift({_id:0,name:"Всі"});const o=le(t);r.categories.innerHTML=o,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",p=1;try{const t=await f();w=t.animals;const a=M(t.animals);r.petsList.innerHTML=a,g=Math.ceil(t.totalItems/v),D(),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{Z(),R(),S="category",p=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const o=a.dataset.id;if(Y=o,o==="0")try{const s=await f(p);w=s.animals;const n=M(s.animals);g=Math.ceil(s.totalItems/v),r.petsList.innerHTML=n,L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await q(o,p);w=s.animals;const n=M(s.animals);g=Math.ceil(s.totalItems/v),r.petsList.innerHTML=n}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L(),D()});function ie(){r.showMore.classList.remove("is-hidden")}function re(){r.showMore.classList.add("is-hidden")}function L(){p<g?ie():re()}function Z(){r.petsList.innerHTML=""}function R(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function D(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function ce(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function le(e){return e.map(ce).join("")}function de(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
     </li>`}function M(e){return e.map(de).join("")}new oe(".accordion-container");function me(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,s)=>{o.classList.remove("filled","half"),s<Math.floor(t)?o.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&o.classList.add("half")})})}const T=document.querySelector(".slider .swiper-wrapper");let H=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{T.innerHTML="",e.feedbacks.forEach(a=>{T.insertAdjacentHTML("beforeend",`
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
      `)}),me();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,H&&H.destroy(!0,!0),H=new J(".slider .swiper",{slidesPerView:a,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{T.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const ue=document.querySelector(".burger-btn"),h=document.getElementById("mobile-menu"),pe=document.getElementById("data-burger-close"),he=document.querySelectorAll(".menu-link-menu");ue.addEventListener("click",()=>{h.classList.add("open")});pe.addEventListener("click",()=>{h.classList.remove("open")});h.addEventListener("click",e=>{e.target===h&&h.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&h.classList.remove("open")});he.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("open")})});const j=document.querySelector("[data-order-modal]"),ge=document.querySelector("[data-order-close]"),G=document.querySelector("[data-backdrop]"),y=document.querySelector("[data-order-form]"),I=document.querySelector(".modalpet-adopt-btn"),C=document.querySelector(".modalpet-backdrop");function we(){j.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function P(){j.classList.add("is-hidden"),document.body.style.overflow=""}I==null||I.addEventListener("click",()=>{we(),C==null||C.classList.add("is-hidden")});ge.addEventListener("click",P);G.addEventListener("click",e=>{e.target===G&&P()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!j.classList.contains("is-hidden")&&P()});y.addEventListener("submit",async e=>{e.preventDefault();const t=y.elements.name.value.trim(),a=y.elements.phone.value.trim(),o=y.elements.comment.value.trim();if(t.length<2){b.fire({icon:"warning",title:"Некоректне імʼя",text:"Імʼя повинно містити щонайменше 2 символи"});return}if(!/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(a)){b.fire({icon:"warning",title:"Некоректний номер",text:"Введіть номер у форматі +38 (0XX) XXX XX XX"});return}const n={name:t,phone:a,comment:o};try{await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),b.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом"}),y.reset(),P()}catch{b.fire({icon:"error",title:"Помилка",text:"Спробуйте ще раз пізніше"})}});const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function V(e){const t=$(e);i.petsList.insertAdjacentHTML("beforeend",t)}function fe(){i.showMore.classList.remove("is-hidden")}function ye(){i.showMore.classList.add("is-hidden")}function k(e,t){e<t?fe():ye()}function ee(){i.petsList.innerHTML=""}function B(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function O(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function ve(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function Le(e){return e.map(ve).join("")}function be(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function $(e){return e.map(be).join("")}i.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const a=e.target.closest("li").dataset.id;if(!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const s=w.find(c=>c._id===a);if(!s){console.error("Pet not found");return}const n=Se(s);i.modal.innerHTML=n,Me()});i.modalCloseBtn.addEventListener("click",e=>{x()});i.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&x()});function te(e){if(e.code==="Escape")x();else return}function Se(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function Me(){i.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",te),document.body.style.overflow="hidden"}function x(){i.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",te),document.body.style.overflow=""}let d=1,m,E="all",se;async function ke(){if(d++,B(),E==="all")try{const e=await f(d);V(e.animals),m=Math.ceil(e.totalItems/u),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(E==="category")try{const e=await q(se,d);V(e.animals),m=Math.ceil(e.totalItems/u),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}O()}i.showMore.addEventListener("click",ke);document.addEventListener("DOMContentLoaded",async()=>{ee(),B();try{const e=await U(),t=n=>Number(n._id.at(-1));e.sort((n,c)=>t(n)-t(c)),e.unshift({_id:0,name:"Всі"});const a=Le(e);i.categories.innerHTML=a,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E="all",d=1;try{const e=await f(),t=$(e.animals);i.petsList.innerHTML=t,m=Math.ceil(e.totalItems/u),O(),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{ee(),B(),E="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const o=a.dataset.id;if(se=o,o==="0")try{const s=await f(d),n=$(s.animals);m=Math.ceil(s.totalItems/u),i.petsList.innerHTML=n}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await q(o,d),n=$(s.animals);m=Math.ceil(s.totalItems/u),i.petsList.innerHTML=n}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k(d,m),O()});
//# sourceMappingURL=index.js.map
