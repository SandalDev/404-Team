import{S as A,a as T,i as c,A as Q}from"./assets/vendor-N-XT4TYG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new A(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const N=document.querySelector("[data-order-modal]"),z=document.querySelector(".btn-header"),R=document.querySelector(".btn-header-mobile"),D=document.querySelector(".mobile-menu-section");z&&z.addEventListener("click",e=>{e.preventDefault(),N.classList.remove("is-hidden"),document.body.style.overflow="hidden"});R&&R.addEventListener("click",e=>{e.preventDefault(),N.classList.remove("is-hidden"),document.body.style.overflow="hidden",D&&D.classList.add("is-hidden")});let p;async function O(){return(await T.get("https://paw-hut.b.goit.study/api/categories")).data}async function f(e=1){p=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",n={page:e,limit:p};try{return(await T.get(a,{params:n})).data}catch(s){return console.error("Error:",s),[]}}async function $(e,t=1){p=window.innerWidth<1440?8:9;const n="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:p,categoryId:e};try{const o=await T.get(n,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let u=1,g,L="all",y,x,w=[];function j(e){const t=b(e);r.petsList.insertAdjacentHTML("beforeend",t)}async function U(){if(u++,q(),L==="all")try{const e=await f(u);w.push(...e.animals),j(e.animals),g=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(L==="category"){try{const e=await $(x,u);w.push(...e.animals),j(e.animals),g=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}H()}}r.showMore.addEventListener("click",U);document.addEventListener("DOMContentLoaded",async e=>{F(),q();try{const t=await O(),a=l=>Number(l._id.at(-1));t.sort((l,J)=>a(l)-a(J)),t.unshift({_id:0,name:"Всі"});const n=ee(t);r.categories.innerHTML=n,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L="all",u=1;try{const t=await f();w=t.animals;const a=b(t.animals);r.petsList.innerHTML=a,g=Math.ceil(t.totalItems/y),H(),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{F(),q(),L="category",u=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const n=a.dataset.id;if(x=n,n==="0")try{const s=await f(u);w=s.animals;const o=b(s.animals);g=Math.ceil(s.totalItems/y),r.petsList.innerHTML=o,v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await $(n,u);w=s.animals;const o=b(s.animals);g=Math.ceil(s.totalItems/y),r.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}v(),H()});function X(){r.showMore.classList.remove("is-hidden")}function Y(){r.showMore.classList.add("is-hidden")}function v(){u<g?X():Y()}function F(){r.petsList.innerHTML=""}function q(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function H(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function Z(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function ee(e){return e.map(Z).join("")}function te(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
     </li>`}function b(e){return e.map(te).join("")}new Q(".accordion-container");function se(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((n,s)=>{n.classList.remove("filled","half"),s<Math.floor(t)?n.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&n.classList.add("half")})})}const E=document.querySelector(".slider .swiper-wrapper");let P=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{E.innerHTML="",e.feedbacks.forEach(a=>{E.insertAdjacentHTML("beforeend",`
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
      `)}),se();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,P&&P.destroy(!0,!0),P=new A(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{E.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const ae=document.querySelector(".burger-btn"),h=document.getElementById("mobile-menu"),oe=document.getElementById("data-burger-close"),ne=document.querySelectorAll(".menu-link-menu");ae.addEventListener("click",()=>{h.classList.add("open")});oe.addEventListener("click",()=>{h.classList.remove("open")});h.addEventListener("click",e=>{e.target===h&&h.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&h.classList.remove("open")});ne.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("open")})});const ie=document.getElementsByClassName("order-modal__close")[0],W=document.querySelector("[data-order-modal]"),re=document.getElementsByClassName("modalpet-backdrop")[0],ce=document.getElementsByClassName("modalpet-adopt-btn")[0];ie.addEventListener("click",()=>{W.classList.add("is-hidden"),document.body.style.overflow=""});ce.addEventListener("click",()=>{W.classList.remove("is-hidden"),re.classList.add("is-hidden"),document.body.style.overflow="hidden"});const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function _(e){const t=S(e);i.petsList.insertAdjacentHTML("beforeend",t)}function le(){i.showMore.classList.remove("is-hidden")}function de(){i.showMore.classList.add("is-hidden")}function M(e,t){e<t?le():de()}function G(){i.petsList.innerHTML=""}function B(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function I(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function me(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function pe(e){return e.map(me).join("")}function ue(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function S(e){return e.map(ue).join("")}i.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const a=e.target.closest("li").dataset.id;if(!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const s=w.find(l=>l._id===a);if(!s){console.error("Pet not found");return}const o=he(s);i.modal.innerHTML=o,ge()});i.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&C()});i.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&C()});function V(e){if(e.code==="Escape")C();else return}function he(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function ge(){i.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",V),document.body.style.overflow="hidden"}function C(){i.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",V),document.body.style.overflow=""}let d=1,m,k="all",K;async function we(){if(d++,B(),k==="all")try{const e=await f(d);_(e.animals),m=Math.ceil(e.totalItems/p),M(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(k==="category")try{const e=await $(K,d);_(e.animals),m=Math.ceil(e.totalItems/p),M(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}I()}i.showMore.addEventListener("click",we);document.addEventListener("DOMContentLoaded",async()=>{G(),B();try{const e=await O(),t=o=>Number(o._id.at(-1));e.sort((o,l)=>t(o)-t(l)),e.unshift({_id:0,name:"Всі"});const a=pe(e);i.categories.innerHTML=a,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k="all",d=1;try{const e=await f(),t=S(e.animals);i.petsList.innerHTML=t,m=Math.ceil(e.totalItems/p),I(),M(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{G(),B(),k="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const n=a.dataset.id;if(K=n,n==="0")try{const s=await f(d),o=S(s.animals);m=Math.ceil(s.totalItems/p),i.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await $(n,d),o=S(s.animals);m=Math.ceil(s.totalItems/p),i.petsList.innerHTML=o}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M(d,m),I()});
//# sourceMappingURL=index.js.map
