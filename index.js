import{S as U,a as D,i as c,A as re,b as ie}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const R=new U(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function X(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),s=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!s.length||(t.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),s.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}R.on("slideChange",()=>{X(R)});X(R);const F=document.querySelectorAll(".about-swiper .swiper-slide");F.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(F).slice(5).forEach(e=>e.remove()));const Y=document.querySelector("[data-order-modal]"),V=document.querySelector(".btn-header"),W=document.querySelector(".btn-header-mobile"),G=document.querySelector(".mobile-menu-section");V&&V.addEventListener("click",e=>{e.preventDefault(),Y.classList.remove("is-hidden"),document.body.style.overflow="hidden"});W&&W.addEventListener("click",e=>{e.preventDefault(),Y.classList.remove("is-hidden"),document.body.style.overflow="hidden",G&&G.classList.add("is-hidden")});let u;async function Z(){return(await D.get("https://paw-hut.b.goit.study/api/categories")).data}async function y(e=1){u=window.innerWidth<1440?8:9;const s="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:u};try{return(await D.get(s,{params:o})).data}catch{return[]}}async function P(e,t=1){u=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",a={page:t,limit:u,categoryId:e};try{return(await D.get(o,{params:a})).data}catch{return[]}}const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let p=1,f,M="all",v,ee,w=[];function K(e){const t=k(e);i.petsList.insertAdjacentHTML("beforeend",t)}async function ce(){if(p++,_(),M==="all")try{const e=await y(p);w.push(...e.animals),K(e.animals),f=Math.ceil(e.totalItems/v),L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(M==="category"){try{const e=await P(ee,p);w.push(...e.animals),K(e.animals),f=Math.ceil(e.totalItems/v),L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}j()}}i.showMore.addEventListener("click",ce);document.addEventListener("DOMContentLoaded",async e=>{te(),_();try{const t=await Z(),s=l=>Number(l._id.at(-1));t.sort((l,ne)=>s(l)-s(ne)),t.unshift({_id:0,name:"Всі"});const o=ue(t);i.categories.innerHTML=o,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M="all",p=1;try{const t=await y();w=t.animals;const s=k(t.animals);i.petsList.innerHTML=s,f=Math.ceil(t.totalItems/v),j(),L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{te(),_(),M="category",p=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const s=e.target.closest("button");s.classList.add("active");const o=s.dataset.id;if(ee=o,o==="0")try{const a=await y(p);w=a.animals;const n=k(a.animals);f=Math.ceil(a.totalItems/v),i.petsList.innerHTML=n,L()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const a=await P(o,p);w=a.animals;const n=k(a.animals);f=Math.ceil(a.totalItems/v),i.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L(),j()});function le(){i.showMore.classList.remove("is-hidden")}function de(){i.showMore.classList.add("is-hidden")}function L(){p<f?le():de()}function te(){i.petsList.innerHTML=""}function _(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function j(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function me(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function ue(e){return e.map(me).join("")}function pe(e){const t=e.categories.map(s=>`<span class="pet-category">${s.name}</span>`).join(" ");return`
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
     </li>`}function k(e){return e.map(pe).join("")}new re(".accordion-container");function he(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,a)=>{o.classList.remove("filled","half"),a<Math.floor(t)?o.classList.add("filled"):a===Math.floor(t)&&t%1>=.5&&o.classList.add("half")})})}const H=document.querySelector(".slider .swiper-wrapper");let I=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{H.innerHTML="",e.feedbacks.forEach(s=>{H.insertAdjacentHTML("beforeend",`
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
      `)}),he();const t=()=>{const s=window.innerWidth>=768?2:1;e.feedbacks.length,I&&I.destroy(!0,!0),I=new U(".slider .swiper",{slidesPerView:s,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{H.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const ge=document.querySelector(".burger-btn"),h=document.getElementById("mobile-menu"),fe=document.getElementById("data-burger-close"),we=document.querySelectorAll(".menu-link-menu");ge.addEventListener("click",()=>{h.classList.add("open")});fe.addEventListener("click",()=>{h.classList.remove("open")});h.addEventListener("click",e=>{e.target===h&&h.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&h.classList.remove("open")});we.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("open")})});const x=document.querySelector("[data-order-modal]"),C=document.querySelector("[data-order-close]"),b=document.querySelector("[data-backdrop]"),g=document.querySelector("[data-order-form]"),z=document.querySelector(".modalpet-adopt-btn"),A=document.querySelector(".modalpet-backdrop");function ye(){x.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function T(){x.classList.add("is-hidden"),document.body.style.overflow=""}z==null||z.addEventListener("click",()=>{ye(),A==null||A.classList.add("is-hidden")});C==null||C.addEventListener("click",T);b==null||b.addEventListener("click",e=>{e.target===b&&T()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!x.classList.contains("is-hidden")&&T()});function J(e,t){const s=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),s.textContent=t}function S(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t.textContent=""}g==null||g.addEventListener("submit",e=>{e.preventDefault();const t=g.elements.name,s=g.elements.phone;g.elements.comment.value.trim();let o=!0;S(t),S(s),t.value.trim().length<2&&(J(t,"Імʼя повинно містити мінімум 2 символи"),o=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(s.value.trim())||(J(s,"Невірний формат номера"),o=!1),o&&(ie.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),g.reset(),S(t),S(s),T())});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function Q(e){const t=E(e);r.petsList.insertAdjacentHTML("beforeend",t)}function ve(){r.showMore.classList.remove("is-hidden")}function Le(){r.showMore.classList.add("is-hidden")}function $(e,t){e<t?ve():Le()}function se(){r.petsList.innerHTML=""}function B(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function O(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function be(e){return`<li class="category-name">
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
    </li>`}function E(e){return e.map(Me).join("")}r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const s=e.target.closest("li").dataset.id;if(!s||s==="undefined"){console.error("Invalid data-id on pet card");return}const a=w.find(l=>l._id===s);if(!a){console.error("Pet not found");return}const n=ke(a);r.modal.innerHTML=n,$e()});r.modalCloseBtn.addEventListener("click",e=>{N()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&N()});function ae(e){if(e.code==="Escape")N();else return}function ke(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function $e(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",ae),document.body.style.overflow="hidden"}function N(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",ae),document.body.style.overflow=""}let d=1,m,q="all",oe;async function Ee(){if(d++,B(),q==="all")try{const e=await y(d);Q(e.animals),m=Math.ceil(e.totalItems/u),$(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(q==="category")try{const e=await P(oe,d);Q(e.animals),m=Math.ceil(e.totalItems/u),$(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}O()}r.showMore.addEventListener("click",Ee);document.addEventListener("DOMContentLoaded",async()=>{se(),B();try{const e=await Z(),t=n=>Number(n._id.at(-1));e.sort((n,l)=>t(n)-t(l)),e.unshift({_id:0,name:"Всі"});const s=Se(e);r.categories.innerHTML=s,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}q="all",d=1;try{const e=await y(),t=E(e.animals);r.petsList.innerHTML=t,m=Math.ceil(e.totalItems/u),O(),$(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{se(),B(),q="category",d=1,document.querySelector(".active").classList.remove("active");const s=e.target.closest("button");s.classList.add("active");const o=s.dataset.id;if(oe=o,o==="0")try{const a=await y(d),n=E(a.animals);m=Math.ceil(a.totalItems/u),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const a=await P(o,d),n=E(a.animals);m=Math.ceil(a.totalItems/u),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}$(d,m),O()});
//# sourceMappingURL=index.js.map
