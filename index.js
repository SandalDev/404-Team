import{S as D,A as G,a as R,b as I,i as p}from"./assets/vendor-Bo8-swJz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const P=new D(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function O(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),o=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!o.length||(t.forEach(a=>{e.activeIndex>=4?(a.style.opacity="0.5",a.style.cursor="not-allowed",a.disabled=!0):(a.style.opacity="1",a.style.cursor="pointer",a.disabled=!1)}),o.forEach(a=>{e.activeIndex===0?(a.style.opacity="0.5",a.style.cursor="not-allowed",a.disabled=!0):(a.style.opacity="1",a.style.cursor="pointer",a.disabled=!1)}))}P.on("slideChange",()=>{O(P)});O(P);const z=document.querySelectorAll(".about-swiper .swiper-slide");z.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(z).slice(5).forEach(e=>e.remove()));new G(".accordion-container");function J(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((a,s)=>{a.classList.remove("filled","half"),s<Math.floor(t)?a.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&a.classList.add("half")})})}const k=document.querySelector(".slider .swiper-wrapper");let S=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{k.innerHTML="",e.feedbacks.forEach(o=>{k.insertAdjacentHTML("beforeend",`
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
      `)}),J();const t=()=>{const o=window.innerWidth>=768?2:1;e.feedbacks.length,S&&S.destroy(!0,!0),S=new D(".slider .swiper",{slidesPerView:o,loop:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};t(),window.addEventListener("resize",t)}).catch(e=>{k.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const Q=document.querySelector(".burger-btn"),w=document.getElementById("mobile-menu"),U=document.getElementById("data-burger-close"),X=document.querySelectorAll(".menu-link-menu"),Z=document.querySelector(".btn-header-mobile");let T=0;function j(e){e.key==="Escape"&&h()}function ee(){T=window.scrollY,document.body.style.top=`-${T}px`,document.body.classList.add("no-scroll"),w.classList.add("open"),window.addEventListener("keydown",j)}function h(){w.classList.remove("open"),document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,T),window.removeEventListener("keydown",j)}Q.addEventListener("click",ee);U.addEventListener("click",h);Z.addEventListener("click",h);w.addEventListener("click",e=>{e.target===w&&h()});X.forEach(e=>{e.addEventListener("click",h)});const N=document.querySelector("[data-order-modal]"),M=document.querySelector("[data-order-close]"),f=document.querySelector("[data-backdrop]"),u=document.querySelector("[data-order-form]"),$=document.querySelector(".modalpet-backdrop"),q=document.querySelector(".modalpet-adopt-btn");let y=null;function F(e){e.key==="Escape"&&E()}function te(){N.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",F)}function E(){N.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",F)}document.addEventListener("click",e=>{var s;const t=e.target.closest(".find-out-more");if(!t)return;const o=t.closest("li[data-id]"),a=(s=o==null?void 0:o.dataset)==null?void 0:s.id;if(!a){console.warn("Не знайшов data-id на pet-card"),y=null;return}y=a});q==null||q.addEventListener("click",()=>{if(!y){R.fire({icon:"error",title:"Не вдалося визначити тваринку",text:"ID тваринки не зчитався з картки. Натисни “Дізнатись більше” ще раз.",confirmButtonText:"Добре"});return}te(),$==null||$.classList.add("is-hidden")});M==null||M.addEventListener("click",E);f==null||f.addEventListener("click",e=>{e.target===f&&E()});function B(e,t){const o=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),o&&(o.textContent=t)}function g(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t&&(t.textContent="")}u==null||u.addEventListener("submit",e=>{e.preventDefault();const t=u.elements.name,o=u.elements.phone,a=u.elements.comment.value.trim();let s=!0;g(t),g(o),t.value.trim().length<2&&(B(t,"Імʼя повинно містити мінімум 2 символи"),s=!1),/^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(o.value.trim())||(B(o,"Невірний формат номера"),s=!1),s&&(console.log("animalId for order:",y),console.log("comment:",a),R.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),u.reset(),g(t),g(o),E())});const r={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function _(e){const t=b(e);r.petsList.insertAdjacentHTML("beforeend",t)}function se(){r.showMore.classList.remove("is-hidden")}function oe(){r.showMore.classList.add("is-hidden")}function v(e,t){e<t?se():(oe(),iziToast.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}))}function W(){r.petsList.innerHTML=""}function A(){r.loader.classList.remove("hidden"),r.showMore.classList.add("hidden")}function x(){r.loader.classList.add("hidden"),r.showMore.classList.remove("hidden")}function ae(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function ne(e){return e.map(ae).join("")}function re(e){const t=e.categories.map(o=>`<span class="pet-category">${o.name}</span>`).join(" ");return`
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
    </li>`}function b(e){return e.map(re).join("")}let l;async function ie(){return(await I.get("https://paw-hut.b.goit.study/api/categories")).data}async function C(e=1){l=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",a={page:e,limit:l};try{return(await I.get(o,{params:a})).data}catch{return[]}}async function V(e,t=1){l=window.innerWidth<1440?8:9;const a="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:l,categoryId:e};try{return(await I.get(a,{params:s})).data}catch{return[]}}let i=1,c,L="all",K,m=[];async function ce(){if(i++,A(),L==="all")try{const e=await C(i);m.push(...e.animals),_(e.animals),c=Math.ceil(e.totalItems/l),v(i,c)}catch{p.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(L==="category")try{const e=await V(K,i);m.push(...e.animals),_(e.animals),c=Math.ceil(e.totalItems/l),v(i,c)}catch{p.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}x()}r.showMore.addEventListener("click",ce);document.addEventListener("DOMContentLoaded",async()=>{W(),A();try{const e=await ie(),t=n=>Number(n._id.at(-1));e.sort((n,d)=>t(n)-t(d)),e.unshift({_id:0,name:"Всі"});const o=ne(e);r.categories.innerHTML=o,r.categories.firstElementChild.firstElementChild.classList.add("active")}catch{p.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}L="all",i=1;try{const e=await C();m=e.animals;const t=b(e.animals);r.petsList.innerHTML=t,c=Math.ceil(e.totalItems/l),x(),v(i,c)}catch{p.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});r.categories.addEventListener("click",async e=>{W(),A(),L="category",i=1,document.querySelector(".active").classList.remove("active");const o=e.target.closest("button");o.classList.add("active");const a=o.dataset.id;if(K=a,a==="0")try{const s=await C(i);m=s.animals;const n=b(s.animals);c=Math.ceil(s.totalItems/l),r.petsList.innerHTML=n}catch{p.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else try{const s=await V(a,i);m=s.animals;const n=b(s.animals);c=Math.ceil(s.totalItems/l),r.petsList.innerHTML=n}catch{p.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}v(i,c),x()});r.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const o=e.target.closest("li").dataset.id;if(!o||o==="undefined"){console.error("Invalid data-id on pet card");return}const s=m.find(d=>d._id===o);if(!s){console.error("Pet not found");return}const n=le(s);r.modal.innerHTML=n,de()});r.modalCloseBtn.addEventListener("click",e=>{H()});r.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&H()});function Y(e){if(e.code==="Escape")H();else return}function le(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />

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
   
    </div>`}function de(){r.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",Y),document.body.style.overflow="hidden"}function H(){r.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",Y),document.body.style.overflow=""}
//# sourceMappingURL=index.js.map
