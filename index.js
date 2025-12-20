import{S as U,a as A,i as l,A as re,b as x}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const z=new U(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function X(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),a=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!a.length||(t.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),a.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}z.on("slideChange",()=>{X(z)});X(z);const N=document.querySelectorAll(".about-swiper .swiper-slide");N.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(N).slice(5).forEach(e=>e.remove()));const Y=document.querySelector("[data-order-modal]"),F=document.querySelector(".btn-header"),V=document.querySelector(".btn-header-mobile"),W=document.querySelector(".mobile-menu-section");F&&F.addEventListener("click",e=>{e.preventDefault(),Y.classList.remove("is-hidden"),document.body.style.overflow="hidden"});V&&V.addEventListener("click",e=>{e.preventDefault(),Y.classList.remove("is-hidden"),document.body.style.overflow="hidden",W&&W.classList.add("is-hidden")});let u;async function Z(){return(await A.get("https://paw-hut.b.goit.study/api/categories")).data}async function w(e=1){u=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:u};try{return(await A.get(a,{params:o})).data}catch{return[]}}async function q(e,t=1){u=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:u,categoryId:e};try{return(await A.get(o,{params:s})).data}catch{return[]}}const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let p=1,g,S="all",v,ee,f=[];function G(e){const t=M(e);i.petsList.insertAdjacentHTML("beforeend",t)}async function ie(){if(p++,R(),S==="all")try{const e=await w(p);f.push(...e.animals),G(e.animals),g=Math.ceil(e.totalItems/v),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category"){try{const e=await q(ee,p);f.push(...e.animals),G(e.animals),g=Math.ceil(e.totalItems/v),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}D()}}i.showMore.addEventListener("click",ie);document.addEventListener("DOMContentLoaded",async e=>{te(),R();try{const t=await Z(),a=c=>Number(c._id.at(-1));t.sort((c,ne)=>a(c)-a(ne)),t.unshift({_id:0,name:"Всі"});const o=me(t);i.categories.innerHTML=o,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",p=1;try{const t=await w();f=t.animals;const a=M(t.animals);i.petsList.innerHTML=a,g=Math.ceil(t.totalItems/v),D(),L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{te(),R(),S="category",p=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const o=a.dataset.id;if(ee=o,o==="0")try{const s=await w(p);f=s.animals;const n=M(s.animals);g=Math.ceil(s.totalItems/v),i.petsList.innerHTML=n,L()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await q(o,p);f=s.animals;const n=M(s.animals);g=Math.ceil(s.totalItems/v),i.petsList.innerHTML=n}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L(),D()});function ce(){i.showMore.classList.remove("is-hidden")}function le(){i.showMore.classList.add("is-hidden")}function L(){p<g?ce():le()}function te(){i.petsList.innerHTML=""}function R(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function D(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function de(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function me(e){return e.map(de).join("")}function ue(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
     </li>`}function M(e){return e.map(ue).join("")}new re(".accordion-container");function pe(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,s)=>{o.classList.remove("filled","half"),s<Math.floor(t)?o.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&o.classList.add("half")})})}const T=document.querySelector(".slider .swiper-wrapper");let H=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{T.innerHTML="",e.feedbacks.forEach(a=>{T.insertAdjacentHTML("beforeend",`
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
      `)}),pe();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,H&&H.destroy(!0,!0),H=new U(".slider .swiper",{slidesPerView:a,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{T.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const he=document.querySelector(".burger-btn"),h=document.getElementById("mobile-menu"),ge=document.getElementById("data-burger-close"),fe=document.querySelectorAll(".menu-link-menu");he.addEventListener("click",()=>{h.classList.add("open")});ge.addEventListener("click",()=>{h.classList.remove("open")});h.addEventListener("click",e=>{e.target===h&&h.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&h.classList.remove("open")});fe.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("open")})});const _=document.querySelector("[data-order-modal]"),we=document.querySelector("[data-order-close]"),J=document.querySelector("[data-backdrop]"),y=document.querySelector("[data-order-form]"),I=document.querySelector(".modalpet-adopt-btn"),C=document.querySelector(".modalpet-backdrop");function ye(){_.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function P(){_.classList.add("is-hidden"),document.body.style.overflow=""}I==null||I.addEventListener("click",()=>{ye(),C==null||C.classList.add("is-hidden")});we.addEventListener("click",P);J.addEventListener("click",e=>{e.target===J&&P()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!_.classList.contains("is-hidden")&&P()});function K(e,t){const a=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),a.textContent=t}function b(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t.textContent=""}y.addEventListener("submit",async e=>{e.preventDefault();const t=y.elements.name,a=y.elements.phone,o=y.elements.comment.value.trim();let s=!0;if(b(t),b(a),t.value.trim().length<2&&(K(t,"Імʼя повинно містити мінімум 2 символи"),s=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(a.value.trim())||(K(a,"Невірний формат номера"),s=!1),!s)return;const c={name:t.value.trim(),phone:a.value.trim(),comment:o};try{await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),x.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом"}),y.reset(),b(t),b(a),P()}catch{x.fire({icon:"error",title:"Помилка",text:"Спробуйте ще раз пізніше"})}});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function Q(e){const t=$(e);r.petsList.insertAdjacentHTML("beforeend",t)}function ve(){r.showMore.classList.remove("is-hidden")}function Le(){r.showMore.classList.add("is-hidden")}function k(e,t){e<t?ve():Le()}function se(){r.petsList.innerHTML=""}function j(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function B(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function be(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function Se(e){return e.map(be).join("")}function Me(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
    </li>`}function $(e){return e.map(Me).join("")}r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const a=e.target.closest("li").dataset.id;if(!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const s=f.find(c=>c._id===a);if(!s){console.error("Pet not found");return}const n=ke(s);r.modal.innerHTML=n,$e()});r.modalCloseBtn.addEventListener("click",e=>{O()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&O()});function ae(e){if(e.code==="Escape")O();else return}function ke(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function $e(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",ae),document.body.style.overflow="hidden"}function O(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",ae),document.body.style.overflow=""}let d=1,m,E="all",oe;async function Ee(){if(d++,j(),E==="all")try{const e=await w(d);Q(e.animals),m=Math.ceil(e.totalItems/u),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(E==="category")try{const e=await q(oe,d);Q(e.animals),m=Math.ceil(e.totalItems/u),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}B()}r.showMore.addEventListener("click",Ee);document.addEventListener("DOMContentLoaded",async()=>{se(),j();try{const e=await Z(),t=n=>Number(n._id.at(-1));e.sort((n,c)=>t(n)-t(c)),e.unshift({_id:0,name:"Всі"});const a=Se(e);r.categories.innerHTML=a,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E="all",d=1;try{const e=await w(),t=$(e.animals);r.petsList.innerHTML=t,m=Math.ceil(e.totalItems/u),B(),k(d,m)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{se(),j(),E="category",d=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const o=a.dataset.id;if(oe=o,o==="0")try{const s=await w(d),n=$(s.animals);m=Math.ceil(s.totalItems/u),r.petsList.innerHTML=n}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await q(o,d),n=$(s.animals);m=Math.ceil(s.totalItems/u),r.petsList.innerHTML=n}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}k(d,m),B()});
//# sourceMappingURL=index.js.map
