import{S as z,A as Y,i as u,a as x,b as $}from"./assets/vendor-B9J8T6PT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const T=new z(".about-swiper",{pagination:{el:".about-controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".section-about .swiper-button-next, .about-controls .swiper-button-next",prevEl:".section-about .swiper-button-prev, .about-controls .swiper-button-prev"}});function _(e){const t=document.querySelectorAll("#aboutus-a .swiper-button-next"),r=document.querySelectorAll("#aboutus-a .swiper-button-prev");!t.length||!r.length||(t.forEach(o=>{e.activeIndex>=4?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}),r.forEach(o=>{e.activeIndex===0?(o.style.opacity="0.5",o.style.cursor="not-allowed",o.disabled=!0):(o.style.opacity="1",o.style.cursor="pointer",o.disabled=!1)}))}T.on("slideChange",()=>{_(T)});_(T);const O=document.querySelectorAll(".about-swiper .swiper-slide");O.length>5&&(document.querySelector(".about-swiper .swiper-wrapper"),Array.from(O).slice(5).forEach(e=>e.remove()));new Y(".accordion-container");function G(){document.querySelectorAll(".feedback-rate").forEach(e=>{const t=parseFloat(e.dataset.score);e.querySelectorAll(".star").forEach((o,s)=>{o.classList.remove("filled","half"),s<Math.floor(t)?o.classList.add("filled"):s===Math.floor(t)&&t%1>=.5&&o.classList.add("half")})})}const q=document.querySelector(".slider .swiper-wrapper");let p=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(e=>e.json()).then(e=>{q.innerHTML="",e.feedbacks.forEach(o=>{q.insertAdjacentHTML("beforeend",`
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
      `)}),G();const t=()=>{const o=window.innerWidth>=768?2:1;e.feedbacks.length,p&&(p.destroy(!0,!0),p=null),p=new z(".slider .swiper",{slidesPerView:o,spaceBetween:16,loop:!1,watchOverflow:!0,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},320:{slidesPerView:1,spaceBetween:16}}}),r(p),p.on("slideChange",function(){r(p)})};function r(o){if(!o)return;const{isBeginning:s,isEnd:n}=o,c=document.querySelector(".swiper-but .swiper-button-prev"),h=document.querySelector(".swiper-but .swiper-button-next");c&&(c.classList.toggle("swiper-button-disabled",s),c.disabled=s),h&&(h.classList.toggle("swiper-button-disabled",n),h.disabled=n)}t(),window.addEventListener("resize",t)}).catch(e=>{q.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(e)});const J=document.querySelector(".burger-btn"),E=document.getElementById("mobile-menu"),Q=document.getElementById("data-burger-close"),U=document.querySelectorAll(".menu-link-menu"),X=document.querySelector(".btn-header-mobile");let B=0;function j(e){e.key==="Escape"&&v()}function Z(){B=window.scrollY,document.body.style.top=`-${B}px`,document.body.classList.add("no-scroll"),E.classList.add("open"),window.addEventListener("keydown",j)}function v(){E.classList.remove("open"),document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,B),window.removeEventListener("keydown",j)}J.addEventListener("click",Z);Q.addEventListener("click",v);X.addEventListener("click",v);E.addEventListener("click",e=>{e.target===E&&v()});U.forEach(e=>{e.addEventListener("click",v)});const a={categories:document.querySelector(".pets-categories"),petsList:document.querySelector(".pets-list"),showMore:document.querySelector(".show-more"),loader:document.querySelector(".js-loader"),backdrop:document.querySelector(".modalpet-backdrop"),modal:document.querySelector(".modal-window-pet"),modalCloseBtn:document.querySelector(".modalpet-close")};function H(e){const t=k(e);a.petsList.insertAdjacentHTML("beforeend",t)}function ee(){a.showMore.classList.remove("is-hidden")}function te(){a.showMore.classList.add("is-hidden")}function y(e,t){e<t?ee():(e=t)&&(te(),u.show({message:"Ви переглянули всіх тваринок у цій категорії.",color:"blue",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}))}function N(){a.petsList.innerHTML=""}function I(){a.loader.classList.remove("hidden"),a.showMore.classList.add("hidden")}function C(){a.loader.classList.add("hidden"),a.showMore.classList.remove("hidden")}function se(e){return`<li class="category-name">
    <button class="category-btn" data-id="${e._id}">${e.name}</button>
</li>`}function oe(e){return e.map(se).join("")}function re(e){const t=e.categories.map(r=>`<span class="pet-category">${r.name}</span>`).join(" ");return`
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
    </li>`}function k(e){return e.map(re).join("")}let d;async function ne(){return(await x.get("https://paw-hut.b.goit.study/api/categories")).data}async function A(e=1){d=window.innerWidth<1440?8:9;const r="https://paw-hut.b.goit.study/api/animals",o={page:e,limit:d};try{return(await x.get(r,{params:o})).data}catch{return[]}}async function V(e,t=1){d=window.innerWidth<1440?8:9;const o="https://paw-hut.b.goit.study/api/animals",s={page:t,limit:d,categoryId:e};try{return(await x.get(o,{params:s})).data}catch{return[]}}let i=1,l,b="all",F,w=[];async function ae(){if(i++,I(),b==="all")try{const e=await A(i);w.push(...e.animals),H(e.animals),l=Math.ceil(e.totalItems/d),y(i,l)}catch(e){console.error(e),u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}else if(b==="category")try{const e=await V(F,i);w.push(...e.animals),H(e.animals),l=Math.ceil(e.totalItems/d),y(i,l)}catch(e){console.error(e),u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}C()}a.showMore.addEventListener("click",ae);document.addEventListener("DOMContentLoaded",async()=>{N(),I();try{const e=await ne(),t=n=>Number(n._id.at(-1));e.sort((n,c)=>t(n)-t(c)),e.unshift({_id:0,name:"Всі"});const r=oe(e);a.categories.innerHTML=r,a.categories.firstElementChild.firstElementChild.classList.add("active")}catch{console.error(error),u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}b="all",i=1;try{const e=await A();w=e.animals;const t=k(e.animals);a.petsList.innerHTML=t,l=Math.ceil(e.totalItems/d),C(),y(i,l)}catch{console.error(error),u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}});a.categories.addEventListener("click",async e=>{N(),I(),b="category",i=1,document.querySelector(".active").classList.remove("active");const r=e.target.closest("button");r.classList.add("active");const o=r.dataset.id;if(F=o,o==="0"){b="all",i=1;try{const s=await A(i);w=s.animals;const n=k(s.animals);l=Math.ceil(s.totalItems/d),a.petsList.innerHTML=n,y(i,l)}catch{console.error(error),u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}}else try{const s=await V(o,i);w=s.animals;const n=k(s.animals);l=Math.ceil(s.totalItems/d),a.petsList.innerHTML=n}catch(s){console.error(s),u.show({message:"Something went wrong. Please try again later.",color:"red",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}y(i,l),C()});function ie(){a.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",W),document.body.style.overflow="hidden"}function L(){a.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",W),document.body.style.overflow=""}function W(e){e.code==="Escape"&&L()}a.petsList.addEventListener("click",async e=>{if(!e.target.classList.contains("find-out-more"))return;const r=e.target.closest("li").dataset.id;if(!r||r==="undefined"){console.error("Invalid data-id on pet card");return}const s=w.find(c=>c._id===r);if(!s){console.error("Pet not found");return}const n=ce(s);a.modal.innerHTML=n,ie()});a.modalCloseBtn.addEventListener("click",()=>{L()});a.backdrop.addEventListener("click",e=>{e.target===e.currentTarget&&L()});function ce(e){return`<img src="${e.image}" class="modalpet-img" alt="${e.shortDescription}" />

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
  <span class="modal-descr-word">Здоров'я:</span>
  <p class="modalpet-health-desc">${e.healthStatus}</p>
  </div>

  <div class="pet-details-container">
  <span class="modal-descr-word">Поведінка:</span>
  <p class="modalpet-behaviour-desc">${e.behavior}</p>
   </div>

  <button type="button" class="modalpet-adopt-btn">
    Взяти додому
  </button>
 
  </div>`}const P=document.querySelector("[data-order-close]"),g=document.querySelector("[data-order-modal]"),m=document.querySelector("[data-order-form]");document.querySelector(".modalpet-backdrop");let S=null;function K(e){e.key==="Escape"&&M(),L()}function le(){g.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",K)}function M(){g.classList.add("is-hidden"),document.body.style.overflow="",L(),document.removeEventListener("keydown",K)}document.addEventListener("click",e=>{var s;const t=e.target.closest(".find-out-more");if(!t)return;const r=t.closest("li[data-id]"),o=(s=r==null?void 0:r.dataset)==null?void 0:s.id;if(!o){console.warn("Не знайшов data-id на pet-card"),S=null;return}S=o});document.addEventListener("click",e=>{if(e.target.classList.contains("modalpet-adopt-btn")){if(!S){$.fire({icon:"error",title:"Не вдалося визначити тваринку",text:'ID тваринки не зчитався з картки. Натисни "Дізнатись більше" ще раз.',confirmButtonText:"Добре"});return}const t=document.querySelector(".modalpet-backdrop");t&&t.classList.add("is-hidden"),le()}});P==null||P.addEventListener("click",M);g==null||g.addEventListener("click",e=>{e.target===g&&M()});function D(e,t){const r=e.parentElement.querySelector(".order-form__error");e.classList.add("is-error"),r&&(r.textContent=t)}function R(e){const t=e.parentElement.querySelector(".order-form__error");e.classList.remove("is-error"),t&&(t.textContent="")}m==null||m.addEventListener("submit",e=>{e.preventDefault();const t=m.elements.name,r=m.elements.phone,o=m.elements.comment.value.trim(),s=t.value.trim();let n=!0;R(t),R(r),s.length<2&&(D(t,"Імʼя повинно містити мінімум 2 символи"),n=!1);const h=r.value.trim().replace(/\D/g,"");if(h.length!==12&&(D(r,"Номер повинен містити повний код країни та номер"),n=!1),!n){u.warning({title:"Упс!",message:"Введіть коректний номер телефону та імʼя."});return}fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({animalId:S,name:s,phone:h,comment:o})}).then(f=>{if(!f.ok)throw new Error("Помилка мережі");return f.json()}).then(f=>{console.log("Відповідь сервера:",f),$.fire({icon:"success",title:"Заявку надіслано!",text:"Ми звʼяжемося з вами найближчим часом",confirmButtonText:"Добре"}),m.reset(),M()}).catch(f=>{console.error("Помилка при відправці:",f),$.fire({icon:"error",title:"Не вдалося відправити заявку",text:"Спробуйте пізніше",confirmButtonText:"Добре"})})});
//# sourceMappingURL=index.js.map
