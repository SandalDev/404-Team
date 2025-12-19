import{S as F,a as T,i as l,A as X,b as C}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();new F(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let g;async function V(){return(await T.get("https://paw-hut.b.goit.study/api/categories")).data}async function v(e=1){g=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",i={page:e,limit:g};try{return(await T.get(a,{params:i})).data}catch(s){return console.error("Error:",s),[]}}async function P(e,t=1){g=window.innerWidth<1440?8:9;const i="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:g,categoryId:e};try{const o=await T.get(i,{params:s});return console.log(o.data),o.data}catch(o){return console.error("Error:",o),[]}}const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let h=1,f,M="all",L,W,y=[];function x(e){const t=S(e);r.petsList.insertAdjacentHTML("beforeend",t)}async function Y(){if(h++,j(),M==="all")try{const e=await v(h);y.push(...e.animals),x(e.animals),f=Math.ceil(e.totalItems/L),b()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(M==="category"){try{const e=await P(W,h);y.push(...e.animals),x(e.animals),f=Math.ceil(e.totalItems/L),b()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}D()}}r.showMore.addEventListener("click",Y);document.addEventListener("DOMContentLoaded",async e=>{G(),j();try{const t=await V(),a=d=>Number(d._id.at(-1));t.sort((d,U)=>a(d)-a(U)),t.unshift({_id:0,name:"Всі"});const i=se(t);r.categories.innerHTML=i,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}M="all",h=1;try{const t=await v();y=t.animals;const a=S(t.animals);r.petsList.innerHTML=a,f=Math.ceil(t.totalItems/L),console.log(f),D(),b()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{G(),j(),M="category",h=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const a=e.target.closest("button");a.classList.add("active");const i=a.dataset.id;if(W=i,i==="0")try{const s=await v(h);y=s.animals;const o=S(s.animals);f=Math.ceil(s.totalItems/L),r.petsList.innerHTML=o,b()}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await P(i,h);y=s.animals;const o=S(s.animals);f=Math.ceil(s.totalItems/L),r.petsList.innerHTML=o}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}b(),D()});function Z(){r.showMore.classList.remove("is-hidden")}function ee(){r.showMore.classList.add("is-hidden")}function b(){h<f?Z():ee()}function G(){r.petsList.innerHTML=""}function j(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function D(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function te(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function se(e){return e.map(te).join("")}function ae(e){const t=e.categories.map(a=>`<span class="pet-category">${a.name}</span>`).join(" ");return`
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
     </li>`}function S(e){return e.map(ae).join("")}new X(".accordion-container");function oe(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((i,s)=>{i.classList.remove("filled","half"),s<Math.floor(t)?i.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&i.classList.add("half")})})}const H=document.querySelector(".slider .swiper-wrapper");let I=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{H.innerHTML="",e.feedbacks.forEach(a=>{H.insertAdjacentHTML("beforeend",`
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
      `)}),oe();const t=()=>{const a=window.innerWidth>=768?2:1;e.feedbacks.length,I&&I.destroy(!0,!0),I=new F(".slider .swiper",{slidesPerView:a,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{H.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const ie=document.querySelector(".burger-btn"),w=document.getElementById("mobile-menu"),ne=document.getElementById("data-burger-close"),re=document.querySelectorAll(".menu-link-menu");ie.addEventListener("click",()=>{w.classList.add("open")});ne.addEventListener("click",()=>{w.classList.remove("open")});w.addEventListener("click",e=>{e.target===w&&w.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&w.classList.contains("open")&&w.classList.remove("open")});re.forEach(e=>{e.addEventListener("click",()=>{w.classList.remove("open")})});const c=document.querySelector("[data-order-modal]"),B=document.querySelector("[data-order-close]");document.querySelector(".order-modal-pet-name");const p=c==null?void 0:c.querySelector("[data-order-form]"),z=p==null?void 0:p.querySelector('button[type="submit"]'),R=c==null?void 0:c.querySelector(".order-loader");function q(){c.classList.add("is-hidden"),document.body.style.overflow=""}B==null||B.addEventListener("click",q);c==null||c.addEventListener("click",e=>{e.target===c&&q()});window.addEventListener("keydown",e=>{e.code==="Escape"&&c&&!c.classList.contains("is-hidden")&&!C.isVisible()&&q()});p&&z&&R&&p.addEventListener("submit",async e=>{e.preventDefault();const t={name:p.elements.name.value.trim(),phone:p.elements.phone.value.trim(),comment:p.elements.comment.value.trim()};R.classList.remove("is-hidden"),z.disabled=!0;try{await T.post("https://paw-hut.b.goit.study/api/orders",t),await C.fire({icon:"success",title:"Готово!",text:"Заявку успішно надіслано",confirmButtonText:"Добре"}),p.reset(),q()}catch{await C.fire({icon:"error",title:"Помилка",text:"Не вдалося надіслати заявку. Спробуйте ще раз."})}finally{R.classList.add("is-hidden"),z.disabled=!1}});const n={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function N(e){const t=k(e);n.petsList.insertAdjacentHTML("beforeend",t)}function ce(){n.showMore.classList.remove("is-hidden")}function le(){n.showMore.classList.add("is-hidden")}function $(e,t){e<t?ce():le()}function K(){n.petsList.innerHTML=""}function A(){n.loader.classList.remove("hidden"),n.showMore.classList.add("hidden")}function O(){n.loader.classList.add("hidden"),n.showMore.classList.remove("hidden")}function de(e){return`<li class="category-name">
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
    </li>`}function k(e){return e.map(pe).join("")}n.petsList.addEventListener("click",async e=>{const t=e.target.closest("li");console.log(t),console.log("something");const a=t.dataset.id;if(console.log(a),!a||a==="undefined"){console.error("Invalid data-id on pet card");return}const i=y;console.log(i);const s=i.find(d=>d._id===a);if(console.log(s),!s){console.error("Pet not found");return}const o=ue(s);n.modal.innerHTML=o,ge()});n.modalCloseBtn.addEventListener("click",e=>{e.target===e.currentTarget&&_()});n.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&_()});function J(e){if(e.code==="Escape")_();else return}function ue(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function ge(){n.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",J),document.body.style.overflow="hidden"}function _(){n.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",J),document.body.style.overflow=""}let m=1,u,E="all",Q;async function he(){if(m++,A(),E==="all")try{const e=await v(m);N(e.animals),u=Math.ceil(e.totalItems/g),$(m,u)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(E==="category")try{const e=await P(Q,m);N(e.animals),u=Math.ceil(e.totalItems/g),$(m,u)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}O()}n.showMore.addEventListener("click",he);document.addEventListener("DOMContentLoaded",async()=>{K(),A();try{const e=await V(),t=o=>Number(o._id.at(-1));e.sort((o,d)=>t(o)-t(d)),e.unshift({_id:0,name:"Всі"});const a=me(e);n.categories.innerHTML=a,n.categories.firstElementChild.firstElementChild.classList.add("active")}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E="all",m=1;try{const e=await v(),t=k(e.animals);n.petsList.innerHTML=t,u=Math.ceil(e.totalItems/g),O(),$(m,u)}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});n.categories.addEventListener("click",async e=>{K(),A(),E="category",m=1,document.querySelector(".active").classList.remove("active");const a=e.target.closest("button");a.classList.add("active");const i=a.dataset.id;if(Q=i,i==="0")try{const s=await v(m),o=k(s.animals);u=Math.ceil(s.totalItems/g),n.petsList.innerHTML=o}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await P(i,m),o=k(s.animals);u=Math.ceil(s.totalItems/g),n.petsList.innerHTML=o}catch{l.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}$(m,u),O()});
//# sourceMappingURL=index.js.map
