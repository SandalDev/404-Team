import{S as d,A as p}from"./assets/vendor-Qu3clCs0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();new d(".about-swiper",{loop:!0,pagination:{el:".about-controls .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new p(".accordion-container");function u(){document.querySelectorAll(".feedback-rate").forEach(t=>{const r=parseFloat(t.dataset.score);t.querySelectorAll(".star").forEach((o,e)=>{o.classList.remove("filled","half"),e<Math.floor(r)?o.classList.add("filled"):e===Math.floor(r)&&r%1>=.5&&o.classList.add("half")})})}const c=document.querySelector(".slider .swiper-wrapper");let l=null;fetch("https://paw-hut.b.goit.study/api/feedbacks").then(t=>t.json()).then(t=>{c.innerHTML="",t.feedbacks.forEach(n=>{c.insertAdjacentHTML("beforeend",`
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${n.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${n.description}</p>
            <p class="feedback-author">— ${n.author}</p>
          </div>
        </div>
      `)}),u();const r=()=>{const n=window.innerWidth>=768?2:1;t.feedbacks.length,l&&l.destroy(!0,!0),l=new d(".slider .swiper",{slidesPerView:n,pagination:{el:".controls .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-but .swiper-button-next",prevEl:".swiper-but .swiper-button-prev"}})};r(),window.addEventListener("resize",r)}).catch(t=>{c.innerHTML='<div class="swiper-slide">Failed to load feedbacks</div>',console.error(t)});const f=document.querySelector(".burger-btn"),i=document.getElementById("mobile-menu"),m=document.getElementById("data-burger-close");f.addEventListener("click",()=>{i.classList.add("open")});m.addEventListener("click",()=>{i.classList.remove("open")});i.addEventListener("click",t=>{t.target===i&&i.classList.remove("open")});document.addEventListener("keydown",t=>{t.key==="Escape"&&i.classList.contains("open")&&i.classList.remove("open")});
//# sourceMappingURL=index.js.map
