import{S as O,A as J,a as R,b as I,i as m}from"./assets/vendor-Bo8-swJz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const T=new O(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function j(e){const o=document.querySelectorAll("#aboutus-a .swiper-button-next"),n=document.querySelectorAll("#aboutus-a .swiper-button-prev");!o.length||!n.length||(o.forEach(t=>{e.activeIndex>=4?(t.style.opacity="0.5",t.style.cursor="not-allowed",t.disabled=!0):(t.style.opacity="1",t.style.cursor="pointer",t.disabled=!1)}),n.forEach(t=>{e.activeIndex===0?(t.style.opacity="0.5",t.style.cursor="not-allowed",t.disabled=!0):(t.style.opacity="1",t.style.cursor="pointer",t.disabled=!1)}))}T.on("slideChange",()=>{j(T)});j(T);const z=document.querySelectorAll(".about-swiper .swiper-slide");z.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(z).slice(5).forEach(e=>e.remove()));new J(".accordion-container");function Q(){document.querySelectorAll(".feedback-rate").forEach(e=>{const o=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((t,s)=>{t.classList.remove("filled","half"),s<Math.floor(o)?t.classList.add("filled"):s===Math.floor(o)&&o%1>=.5&&t.classList.add("half")})})}const M=document.querySelector(".slider .swiper-wrapper");let u=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{M.innerHTML="",e.feedbacks.forEach(t=>{M.insertAdjacentHTML("beforeend",`
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${t.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${t.description}</p>
            <p class="feedback-author"> ${t.author}</p>
          </div>
        </div>
      `)}),Q();const o=()=>{const t=window.innerWidth>=768?2:1;e.feedbacks.length,u&&(u.destroy(!0,!0),u=null),u=new O(".slider .swiper",{slidesPerView:t,spaceBetween:16,loop:!1,watchOverflow:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},320:{slidesPerView:1,spaceBetween:16}}}),n(u),u.on("slideChange",function(){n(u)})};function n(t){if(!t)return;const{isBeginning:s,isEnd:a}=t,i=document.querySelector(".swiper-but .swiper-button-prev"),k=document.querySelector(".swiper-but .swiper-button-next");i&&(i.classList.toggle("swiper-button-disabled",s),i.disabled=s),k&&(k.classList.toggle("swiper-button-disabled",a),k.disabled=a)}o(),window.addEventListener("resize",o)}).catch(e=>{M.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const U=document.querySelector(".burger-btn"),y=document.getElementById("mobile-menu"),X=document.getElementById("data-burger-close"),Z=document.querySelectorAll(".menu-link-menu"),ee=document.querySelector(".btn-header-mobile");let B=0;function N(e){e.key==="Escape"&&f()}function te(){B=window.scrollY,document.body.style.top=`-${B}px`,document.body.classList.add("no-scroll"),y.classList.add("open"),window.addEventListener("keydown",N)}function f(){y.classList.remove("open"),document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,B),window.removeEventListener("keydown",N)}U.addEventListener("click",te);X.addEventListener("click",f);ee.addEventListener("click",f);y.addEventListener("click",e=>{e.target===y&&f()});Z.forEach(e=>{e.addEventListener("click",f)});const V=document.querySelector("[data-order-modal]"),$=document.querySelector("[data-order-close]"),g=document.querySelector("[data-backdrop]"),p=document.querySelector("[data-order-form]"),q=document.querySelector(".modalpet-backdrop"),P=document.querySelector(".modalpet-adopt-btn");let b=null;function F(e){e.key==="Escape"&&S()}function se(){V.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",F)}function S(){V.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",F)}document.addEventListener("click",e=>{var s;const o=e.target.closest(".find-out-more");if(!o)return;const n=o.closest("li[data-id]"),t=(s=n==null?void 0:n.dataset)==null?void 0:s.id;if(!t){console.warn("Не знайшов data-id на pet-card"),b=null;return}b=t});P==null||P.addEventListener("click",()=>{if(!b){R.fire({icon:"error",title:"Не вдалося визначити тваринку",text:"ID тваринки не зчитався з картки. Натисни “Дізнатись більше” ще раз.",confirmButtonText:"Добре"});return}se(),q==null||q.classList.add("is-hidden")});$==null||$.addEventListener("click",S);g==null||g.addEventListener("click",e=>{e.target===g&&S()});function _(e,o){const n=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),n&&(n.textContent=o)}function w(e){const o=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),o&&(o.textContent="")}p==null||p.addEventListener("submit",e=>{e.preventDefault();const o=p.elements.name,n=p.elements.phone,t=p.elements.comment.value.trim();let s=!0;w(o),w(n),o.value.trim().length<2&&(_(o,"Імʼя повинно містити мінімум 2 символи"),s=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(n.value.trim())||(_(n,"Невірний формат номера"),s=!1),s&&(console.log("animalId for order:",b),console.log("comment:",t),R.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),p.reset(),w(o),w(n),S())});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function D(e){const o=L(e);r.petsList.insertAdjacentHTML("beforeend",o)}function oe(){r.showMore.classList.remove("is-hidden")}function ne(){r.showMore.classList.add("is-hidden")}function v(e,o){e<o?oe():(ne(),iziToast.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}))}function W(){r.petsList.innerHTML=""}function x(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function A(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function ae(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function re(e){return e.map(ae).join("")}function ie(e){const o=e.categories.map(n=>`<span class="pet-category">${n.name}</span>`).join(" ");return`
     <li class="pet-card" data-id="${e._id}">
        <img src="${e.image}" alt="${e.shortDescription}" class="pet-image" width="392" height="309"> 
        <div class="pet-description-container">
        <div class="sub-description">
        <p class="pet-type">${e.species}</p>
        <h3 class="pet-name">${e.name}</h3>
        <div class="pet-categories-container">
        ${o}
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
    </li>`}function L(e){return e.map(ie).join("")}let d;async function ce(){return(await I.get("https://paw-hut.b.goit.study/api/categories")).data}async function C(e=1){d=window.innerWidth<1440?8:9;const n="https://paw-hut.b.goit.study/api/animals",t={page:e,limit:d};try{return(await I.get(n,{params:t})).data}catch{return[]}}async function K(e,o=1){d=window.innerWidth<1440?8:9;const t="https://paw-hut.b.goit.study/api/animals",s={page:o,limit:d,categoryId:e};try{return(await I.get(t,{params:s})).data}catch{return[]}}let c=1,l,E="all",Y,h=[];async function le(){if(c++,x(),E==="all")try{const e=await C(c);h.push(...e.animals),D(e.animals),l=Math.ceil(e.totalItems/d),v(c,l)}catch{m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(E==="category")try{const e=await K(Y,c);h.push(...e.animals),D(e.animals),l=Math.ceil(e.totalItems/d),v(c,l)}catch{m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}A()}r.showMore.addEventListener("click",le);document.addEventListener("DOMContentLoaded",async()=>{W(),x();try{const e=await ce(),o=a=>Number(a._id.at(-1));e.sort((a,i)=>o(a)-o(i)),e.unshift({_id:0,name:"Всі"});const n=re(e);r.categories.innerHTML=n,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}E="all",c=1;try{const e=await C();h=e.animals;const o=L(e.animals);r.petsList.innerHTML=o,l=Math.ceil(e.totalItems/d),A(),v(c,l)}catch{m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{W(),x(),E="category",c=1,document.querySelector(".active").classList.remove("active");const n=e.target.closest("button");n.classList.add("active");const t=n.dataset.id;if(Y=t,t==="0")try{const s=await C(c);h=s.animals;const a=L(s.animals);l=Math.ceil(s.totalItems/d),r.petsList.innerHTML=a}catch{m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await K(t,c);h=s.animals;const a=L(s.animals);l=Math.ceil(s.totalItems/d),r.petsList.innerHTML=a}catch{m.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}v(c,l),A()});r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const n=e.target.closest("li").dataset.id;if(!n||n==="undefined"){console.error("Invalid data-id on pet card");return}const s=h.find(i=>i._id===n);if(!s){console.error("Pet not found");return}const a=de(s);r.modal.innerHTML=a,ue()});r.modalCloseBtn.addEventListener("click",e=>{H()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&H()});function G(e){if(e.code==="Escape")H();else return}function de(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />

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
   
    </div>`}function ue(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",G),document.body.style.overflow="hidden"}function H(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",G),document.body.style.overflow=""}
//# sourceMappingURL=index.js.map
