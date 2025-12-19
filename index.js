import{S as A,a as I,i as l,A as K}from"./assets/vendor-Cw8gnIhn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new A(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let p;async function _(){return(await I.get("https://paw-hut.b.goit.study/api/categories")).data}async function y(e=1){p=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",n={page:e,limit:p};try{return(await I.get(a,{params:n})).data}catch(s){return console.error("Error:",s),[]}}async function T(e,t=1){p=window.innerWidth<1440?8:9;const n="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:p,categoryId:e};try{const o=await I.get(n,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const c={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let u=1,h,M="all",v,N,w=[];function D(e){const t=S(e);c.petsList.insertAdjacentHTML("beforeend",t)}async function Q(){if(u++,B(),M==="all")try{const e=await y(u);w.push(...e.animals),D(e.animals),h=Math.ceil(e.totalItems/v),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(M==="category"){try{const e=await T(N,u);w.push(...e.animals),D(e.animals),h=Math.ceil(e.totalItems/v),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}z()}}c.showMore.addEventListener("click",Q);document.addEventListener("DOMContentLoaded",async e=>{x(),B();try{const t=await _(),a=i=>Number(i._id.at(-1));t.sort((i,J)=>a(i)-a(J)),t.unshift({_id:0,name:"Всі"});const n=Z(t);c.categories.innerHTML=n,c.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M="all",u=1;try{const t=await y();w=t.animals;const a=S(t.animals);c.petsList.innerHTML=a,h=Math.ceil(t.totalItems/v),console.log(h),z(),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});c.categories.addEventListener("click",async e=>{x(),B(),M="category",u=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const n=a.dataset.id;if(N=n,n==="0")try{const s=await y(u);w=s.animals;const o=S(s.animals);h=Math.ceil(s.totalItems/v),c.petsList.innerHTML=o,L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await T(n,u);w=s.animals;const o=S(s.animals);h=Math.ceil(s.totalItems/v),c.petsList.innerHTML=o}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L(),z()});function U(){c.showMore.classList.remove("is-hidden")}function X(){c.showMore.classList.add("is-hidden")}function L(){u<h?U():X()}function x(){c.petsList.innerHTML=""}function B(){c.loader.classList.remove("hidden"),c.showMore.classList.add("hidden")}function z(){c.loader.classList.add("hidden"),c.showMore.classList.remove("hidden")}function Y(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function Z(e){return e.map(Y).join("")}function ee(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
     </li>`}function S(e){return e.map(ee).join("")}new K(".accordion-container");function te(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((n,s)=>{n.classList.remove("filled","half"),s<Math.floor(t)?n.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&n.classList.add("half")})})}const q=document.querySelector(".slider .swiper-wrapper");let H=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{q.innerHTML="",e.feedbacks.forEach(a=>{q.insertAdjacentHTML("beforeend",`
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
      `)}),te();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,H&&H.destroy(!0,!0),H=new A(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{q.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const se=document.querySelector(".burger-btn"),g=document.getElementById("mobile-menu"),ae=document.getElementById("data-burger-close"),oe=document.querySelectorAll(".menu-link-menu");se.addEventListener("click",()=>{g.classList.add("open")});ae.addEventListener("click",()=>{g.classList.remove("open")});g.addEventListener("click",e=>{e.target===g&&g.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.contains("open")&&g.classList.remove("open")});oe.forEach(e=>{e.addEventListener("click",()=>{g.classList.remove("open")})});const f=document.querySelector("[data-order-modal]"),ne=document.querySelector(".order-modal"),re=document.querySelectorAll("[data-order-open]"),F=document.querySelector("[data-order-close]"),b=document.querySelector("[data-order-form]");(!f||!ne||!F||!b)&&console.warn("Order modal: required elements not found");function ie(){f.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function P(){f.classList.add("is-hidden"),document.body.style.overflow=""}re.forEach(e=>{e.addEventListener("click",ie)});F.addEventListener("click",P);f.addEventListener("click",e=>{e.target===f&&P()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(f.classList.contains("is-hidden")||P())});b.addEventListener("submit",async e=>{var n,s,o;e.preventDefault();const t=new FormData(b),a={name:(n=t.get("name"))==null?void 0:n.trim(),phone:(s=t.get("phone"))==null?void 0:s.trim(),comment:((o=t.get("comment"))==null?void 0:o.trim())||"",animal:localStorage.getItem("animal")||null};try{const i=await fetch("/orders3",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw new Error(`HTTP error ${i.status}`);alert("Заявку надіслано. Ми звʼяжемося з вами найближчим часом."),b.reset(),P()}catch(i){console.error("Order submit error:",i),alert("Помилка. Спробуйте ще раз пізніше.")}});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function j(e){const t=$(e);r.petsList.insertAdjacentHTML("beforeend",t)}function ce(){r.showMore.classList.remove("is-hidden")}function le(){r.showMore.classList.add("is-hidden")}function k(e,t){e<t?ce():le()}function W(){r.petsList.innerHTML=""}function O(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function R(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function de(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function me(e){return e.map(de).join("")}function pe(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function $(e){return e.map(pe).join("")}r.petsList.addEventListener("click",async e=>{const t=e.target.closest("li");console.log(t),console.log("something");const a=t.dataset.id;if(console.log(a),!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const n=w;console.log(n);const s=n.find(i=>i._id===a);if(console.log(s),!s){console.error("Pet not found");return}const o=ue(s);r.modal.innerHTML=o,ge()});r.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&C()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&C()});function G(e){if(e.code==="Escape")C();else return}function ue(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function ge(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",G),document.body.style.overflow="hidden"}function C(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",G),document.body.style.overflow=""}let d=1,m,E="all",V;async function he(){if(d++,O(),E==="all")try{const e=await y(d);j(e.animals),m=Math.ceil(e.totalItems/p),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(E==="category")try{const e=await T(V,d);j(e.animals),m=Math.ceil(e.totalItems/p),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}R()}r.showMore.addEventListener("click",he);document.addEventListener("DOMContentLoaded",async()=>{W(),O();try{const e=await _(),t=o=>Number(o._id.at(-1));e.sort((o,i)=>t(o)-t(i)),e.unshift({_id:0,name:"Всі"});const a=me(e);r.categories.innerHTML=a,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E="all",d=1;try{const e=await y(),t=$(e.animals);r.petsList.innerHTML=t,m=Math.ceil(e.totalItems/p),R(),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{W(),O(),E="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const n=a.dataset.id;if(V=n,n==="0")try{const s=await y(d),o=$(s.animals);m=Math.ceil(s.totalItems/p),r.petsList.innerHTML=o}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await T(n,d),o=$(s.animals);m=Math.ceil(s.totalItems/p),r.petsList.innerHTML=o}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k(d,m),R()});
//# sourceMappingURL=index.js.map
