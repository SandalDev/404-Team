import{S as O,A as J,a as R,i as m,b as I}from"./assets/vendor-Bo8-swJz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const T=new O(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function j(e){const s=document.querySelectorAll("#aboutus-a .swiper-button-next"),r=document.querySelectorAll("#aboutus-a .swiper-button-prev");!s.length||!r.length||(s.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),r.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}T.on("slideChange",()=>{j(T)});j(T);const z=document.querySelectorAll(".about-swiper .swiper-slide");z.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(z).slice(5).forEach(e=>e.remove()));new J(".accordion-container");function Q(){document.querySelectorAll(".feedback-rate").forEach(e=>{const s=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,t)=>{o.classList.remove("filled","half"),t<Math.floor(s)?o.classList.add("filled"):t===Math.floor(s)&&s%1>=.5&&o.classList.add("half")})})}const M=document.querySelector(".slider .swiper-wrapper");let u=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{M.innerHTML="",e.feedbacks.forEach(o=>{M.insertAdjacentHTML("beforeend",`
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
      `)}),Q();const s=()=>{const o=window.innerWidth>=768?2:1;e.feedbacks.length,u&&(u.destroy(!0,!0),u=null),u=new O(".slider .swiper",{slidesPerView:o,spaceBetween:16,loop:!1,watchOverflow:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},320:{slidesPerView:1,spaceBetween:16}}}),r(u),u.on("slideChange",function(){r(u)})};function r(o){if(!o)return;const{isBeginning:t,isEnd:n}=o,c=document.querySelector(".swiper-but .swiper-button-prev"),k=document.querySelector(".swiper-but .swiper-button-next");c&&(c.classList.toggle("swiper-button-disabled",t),c.disabled=t),k&&(k.classList.toggle("swiper-button-disabled",n),k.disabled=n)}s(),window.addEventListener("resize",s)}).catch(e=>{M.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const U=document.querySelector(".burger-btn"),v=document.getElementById("mobile-menu"),X=document.getElementById("data-burger-close"),Z=document.querySelectorAll(".menu-link-menu"),ee=document.querySelector(".btn-header-mobile");let B=0;function N(e){e.key==="Escape"&&w()}function te(){B=window.scrollY,document.body.style.top=`-${B}px`,document.body.classList.add("no-scroll"),v.classList.add("open"),window.addEventListener("keydown",N)}function w(){v.classList.remove("open"),document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,B),window.removeEventListener("keydown",N)}U.addEventListener("click",te);X.addEventListener("click",w);ee.addEventListener("click",w);v.addEventListener("click",e=>{e.target===v&&w()});Z.forEach(e=>{e.addEventListener("click",w)});const V=document.querySelector("[data-order-modal]"),q=document.querySelector("[data-order-close]"),y=document.querySelector("[data-backdrop]"),p=document.querySelector("[data-order-form]"),$=document.querySelector(".modalpet-backdrop"),P=document.querySelector(".modalpet-adopt-btn");let L=null;function F(e){e.key==="Escape"&&S()}function se(){V.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",F)}function S(){V.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",F)}document.addEventListener("click",e=>{var t;const s=e.target.closest(".find-out-more");if(!s)return;const r=s.closest("li[data-id]"),o=(t=r==null?void 0:r.dataset)==null?void 0:t.id;if(!o){console.warn("Не знайшов data-id на pet-card"),L=null;return}L=o});P==null||P.addEventListener("click",()=>{if(!L){R.fire({icon:"error",title:"Не вдалося визначити тваринку",text:"ID тваринки не зчитався з картки. Натисни “Дізнатись більше” ще раз.",confirmButtonText:"Добре"});return}se(),$==null||$.classList.add("is-hidden")});q==null||q.addEventListener("click",S);y==null||y.addEventListener("click",e=>{e.target===y&&S()});function _(e,s){const r=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),r&&(r.textContent=s)}function b(e){const s=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),s&&(s.textContent="")}p==null||p.addEventListener("submit",e=>{e.preventDefault();const s=p.elements.name,r=p.elements.phone,o=p.elements.comment.value.trim();let t=!0;b(s),b(r),s.value.trim().length<2&&(_(s,"Імʼя повинно містити мінімум 2 символи"),t=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(r.value.trim())||(_(r,"Невірний формат номера"),t=!1),t&&(console.log("animalId for order:",L),console.log("comment:",o),R.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),p.reset(),b(s),b(r),S())});const a={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function D(e){const s=E(e);a.petsList.insertAdjacentHTML("beforeend",s)}function oe(){a.showMore.classList.remove("is-hidden")}function re(){a.showMore.classList.add("is-hidden")}function f(e,s){e<s?oe():(e=s)&&(re(),m.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}))}function W(){a.petsList.innerHTML=""}function x(){a.loader.classList.remove("hidden"),a.showMore.classList.add("hidden")}function A(){a.loader.classList.add("hidden"),a.showMore.classList.remove("hidden")}function ne(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function ae(e){return e.map(ne).join("")}function ie(e){const s=e.categories.map(r=>`<span class="pet-category">${r.name}</span>`).join(" ");return`
     <li class="pet-card" data-id="${e._id}">
        <img src="${e.image}" alt="${e.shortDescription}" class="pet-image" width="392" height="309"> 
        <div class="pet-description-container">
        <div class="sub-description">
        <p class="pet-type">${e.species}</p>
        <h3 class="pet-name">${e.name}</h3>
        <div class="pet-categories-container">
        ${s}
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
    </li>`}function E(e){return e.map(ie).join("")}let d;async function ce(){return(await I.get("https://paw-hut.b.goit.study/api/categories")).data}async function C(e=1){d=window.innerWidth<1440?8:9;const r="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:d};try{return(await I.get(r,{params:o})).data}catch{return[]}}async function K(e,s=1){d=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",t={page:s,limit:d,categoryId:e};try{return(await I.get(o,{params:t})).data}catch{return[]}}let i=1,l,g="all",Y,h=[];async function le(){if(i++,x(),g==="all")try{const e=await C(i);h.push(...e.animals),D(e.animals),l=Math.ceil(e.totalItems/d),f(i,l)}catch(e){console.error(e),m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(g==="category")try{const e=await K(Y,i);h.push(...e.animals),D(e.animals),l=Math.ceil(e.totalItems/d),f(i,l)}catch(e){console.error(e),m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}A()}a.showMore.addEventListener("click",le);document.addEventListener("DOMContentLoaded",async()=>{W(),x();try{const e=await ce(),s=n=>Number(n._id.at(-1));e.sort((n,c)=>s(n)-s(c)),e.unshift({_id:0,name:"Всі"});const r=ae(e);a.categories.innerHTML=r,a.categories.firstElementChild.firstElementChild.classList.add("active")}catch{console.error(error),m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}g="all",i=1;try{const e=await C();h=e.animals;const s=E(e.animals);a.petsList.innerHTML=s,l=Math.ceil(e.totalItems/d),A(),f(i,l)}catch{console.error(error),m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});a.categories.addEventListener("click",async e=>{W(),x(),g="category",i=1,document.querySelector(".active").classList.remove("active");const r=e.target.closest("button");r.classList.add("active");const o=r.dataset.id;if(Y=o,o==="0"){g="all",i=1;try{const t=await C(i);h=t.animals;const n=E(t.animals);l=Math.ceil(t.totalItems/d),a.petsList.innerHTML=n,f(i,l)}catch{console.error(error),m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}}else try{const t=await K(o,i);h=t.animals;const n=E(t.animals);l=Math.ceil(t.totalItems/d),a.petsList.innerHTML=n}catch(t){console.error(t),m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}f(i,l),A()});a.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const r=e.target.closest("li").dataset.id;if(!r||r==="undefined"){console.error("Invalid data-id on pet card");return}const t=h.find(c=>c._id===r);if(!t){console.error("Pet not found");return}const n=de(t);a.modal.innerHTML=n,ue()});a.modalCloseBtn.addEventListener("click",e=>{H()});a.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&H()});function G(e){if(e.code==="Escape")H();else return}function de(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />

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

    <button type="button" class="modalpet-adopt-btn">
      Взяти додому
    </button>
   
    </div>`}function ue(){a.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",G),document.body.style.overflow="hidden"}function H(){a.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",G),document.body.style.overflow=""}
//# sourceMappingURL=index.js.map
