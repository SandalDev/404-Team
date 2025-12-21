import{S as J,a as j,i as c,A as ce,b as Q}from"./assets/vendor-BcoNkyus.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const x=new J(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function U(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),o=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!o.length||(t.forEach(a=>{e.activeIndex>=4?(a.style.opacity="0.5",a.style.cursor="not-allowed",a.disabled=!0):(a.style.opacity="1",a.style.cursor="pointer",a.disabled=!1)}),o.forEach(a=>{e.activeIndex===0?(a.style.opacity="0.5",a.style.cursor="not-allowed",a.disabled=!0):(a.style.opacity="1",a.style.cursor="pointer",a.disabled=!1)}))}x.on("slideChange",()=>{U(x)});U(x);const W=document.querySelectorAll(".about-swiper .swiper-slide");W.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(W).slice(5).forEach(e=>e.remove()));let u;async function X(){return(await j.get("https://paw-hut.b.goit.study/api/categories")).data}async function f(e=1){u=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",a={page:e,limit:u};try{return(await j.get(o,{params:a})).data}catch{return[]}}async function T(e,t=1){u=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:u,categoryId:e};try{return(await j.get(a,{params:s})).data}catch{return[]}}const i={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader")};let p=1,g,S="all",y,Z,w=[];function G(e){const t=M(e);i.petsList.insertAdjacentHTML("beforeend",t)}async function le(){if(p++,B(),S==="all")try{const e=await f(p);w.push(...e.animals),G(e.animals),g=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(S==="category"){try{const e=await T(Z,p);w.push(...e.animals),G(e.animals),g=Math.ceil(e.totalItems/y),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}O()}}i.showMore.addEventListener("click",le);document.addEventListener("DOMContentLoaded",async e=>{ee(),B();try{const t=await X(),o=l=>Number(l._id.at(-1));t.sort((l,ie)=>o(l)-o(ie)),t.unshift({_id:0,name:"Всі"});const a=pe(t);i.categories.innerHTML=a,i.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S="all",p=1;try{const t=await f();w=t.animals;const o=M(t.animals);i.petsList.innerHTML=o,g=Math.ceil(t.totalItems/y),O(),v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});i.categories.addEventListener("click",async e=>{ee(),B(),S="category",p=1;const t=document.querySelector(".active");t.classList.remove("active"),console.log(t);const o=e.target.closest("button");o.classList.add("active");const a=o.dataset.id;if(Z=a,a==="0")try{const s=await f(p);w=s.animals;const n=M(s.animals);g=Math.ceil(s.totalItems/y),i.petsList.innerHTML=n,v()}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await T(a,p);w=s.animals;const n=M(s.animals);g=Math.ceil(s.totalItems/y),i.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}v(),O()});function de(){i.showMore.classList.remove("is-hidden")}function me(){i.showMore.classList.add("is-hidden")}function v(){p<g?de():me()}function ee(){i.petsList.innerHTML=""}function B(){i.loader.classList.remove("hidden"),i.showMore.classList.add("hidden")}function O(){i.loader.classList.add("hidden"),i.showMore.classList.remove("hidden")}function ue(e){return`<li class="category-name">
     <button class="category-btn" data-id="${e._id}">${e.name}</button>
 </li>`}function pe(e){return e.map(ue).join("")}function he(e){const t=e.categories.map(o=>`<span class="pet-category">${o.name}</span>`).join(" ");return`
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
     </li>`}function M(e){return e.map(he).join("")}new ce(".accordion-container");function ge(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((a,s)=>{a.classList.remove("filled","half"),s<Math.floor(t)?a.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&a.classList.add("half")})})}const A=document.querySelector(".slider .swiper-wrapper");let C=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{A.innerHTML="",e.feedbacks.forEach(o=>{A.insertAdjacentHTML("beforeend",`
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${o.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${o.description}</p>
            <p class="feedback-author"> ${o.author}</p>
          </div>
        </div>
      `)}),ge();const t=()=>{const o=window.innerWidth>=768?2:1;e.feedbacks.length,C&&C.destroy(!0,!0),C=new J(".slider .swiper",{slidesPerView:o,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{A.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const we=document.querySelector(".burger-btn"),k=document.getElementById("mobile-menu"),fe=document.getElementById("data-burger-close"),ye=document.querySelectorAll(".menu-link-menu");let D=0;function te(e){e.key==="Escape"&&I()}function ve(){D=window.scrollY,document.body.style.top=`-${D}px`,document.body.classList.add("no-scroll"),k.classList.add("open"),window.addEventListener("keydown",te)}function I(){k.classList.remove("open"),document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,D),window.removeEventListener("keydown",te)}we.addEventListener("click",ve);fe.addEventListener("click",I);k.addEventListener("click",e=>{e.target===k&&I()});ye.forEach(e=>{e.addEventListener("click",I)});const se=document.querySelector("[data-order-modal]"),z=document.querySelector("[data-order-close]"),L=document.querySelector("[data-backdrop]"),h=document.querySelector("[data-order-form]"),R=document.querySelector(".modalpet-backdrop"),_=document.querySelector(".modalpet-adopt-btn");let $=null;function oe(e){e.key==="Escape"&&H()}function Le(){se.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",oe)}function H(){se.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",oe)}document.addEventListener("click",e=>{var s;const t=e.target.closest(".find-out-more");if(!t)return;const o=t.closest("li[data-id]"),a=(s=o==null?void 0:o.dataset)==null?void 0:s.id;if(!a){console.warn("Не знайшов data-id на pet-card"),$=null;return}$=a});_==null||_.addEventListener("click",()=>{if(!$){Q.fire({icon:"error",title:"Не вдалося визначити тваринку",text:"ID тваринки не зчитався з картки. Натисни “Дізнатись більше” ще раз.",confirmButtonText:"Добре"});return}Le(),R==null||R.classList.add("is-hidden")});z==null||z.addEventListener("click",H);L==null||L.addEventListener("click",e=>{e.target===L&&H()});function K(e,t){const o=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),o&&(o.textContent=t)}function b(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t&&(t.textContent="")}h==null||h.addEventListener("submit",e=>{e.preventDefault();const t=h.elements.name,o=h.elements.phone,a=h.elements.comment.value.trim();let s=!0;b(t),b(o),t.value.trim().length<2&&(K(t,"Імʼя повинно містити мінімум 2 символи"),s=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(o.value.trim())||(K(o,"Невірний формат номера"),s=!1),s&&(console.log("animalId for order:",$),console.log("comment:",a),Q.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),h.reset(),b(t),b(o),H())});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function Y(e){const t=P(e);r.petsList.insertAdjacentHTML("beforeend",t)}function be(){r.showMore.classList.remove("is-hidden")}function Se(){r.showMore.classList.add("is-hidden")}function E(e,t){e<t?be():Se()}function ae(){r.petsList.innerHTML=""}function N(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function F(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function Me(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function ke(e){return e.map(Me).join("")}function $e(e){const t=e.categories.map(o=>`<span class="pet-category">${o.name}</span>`).join(" ");return`
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
    </li>`}function P(e){return e.map($e).join("")}r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const o=e.target.closest("li").dataset.id;if(!o||o==="undefined"){console.error("Invalid data-id on pet card");return}const s=w.find(l=>l._id===o);if(!s){console.error("Pet not found");return}const n=Ee(s);r.modal.innerHTML=n,Pe()});r.modalCloseBtn.addEventListener("click",e=>{V()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&V()});function ne(e){if(e.code==="Escape")V();else return}function Ee(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />
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
    </div>`}function Pe(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",ne),document.body.style.overflow="hidden"}function V(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",ne),document.body.style.overflow=""}let d=1,m,q="all",re;async function qe(){if(d++,N(),q==="all")try{const e=await f(d);Y(e.animals),m=Math.ceil(e.totalItems/u),E(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(q==="category")try{const e=await T(re,d);Y(e.animals),m=Math.ceil(e.totalItems/u),E(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}F()}r.showMore.addEventListener("click",qe);document.addEventListener("DOMContentLoaded",async()=>{ae(),N();try{const e=await X(),t=n=>Number(n._id.at(-1));e.sort((n,l)=>t(n)-t(l)),e.unshift({_id:0,name:"Всі"});const o=ke(e);r.categories.innerHTML=o,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}q="all",d=1;try{const e=await f(),t=P(e.animals);r.petsList.innerHTML=t,m=Math.ceil(e.totalItems/u),F(),E(d,m)}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{ae(),N(),q="category",d=1,document.querySelector(".active").classList.remove("active");const o=e.target.closest("button");o.classList.add("active");const a=o.dataset.id;if(re=a,a==="0")try{const s=await f(d),n=P(s.animals);m=Math.ceil(s.totalItems/u),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await T(a,d),n=P(s.animals);m=Math.ceil(s.totalItems/u),r.petsList.innerHTML=n}catch{c.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E(d,m),F()});
//# sourceMappingURL=index.js.map
