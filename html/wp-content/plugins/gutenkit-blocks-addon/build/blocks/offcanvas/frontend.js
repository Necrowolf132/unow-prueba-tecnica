(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;e.n(t)()((()=>{document.querySelectorAll(".wp-block-gutenkit-offcanvas").forEach((e=>{const t=e.querySelectorAll(".gkit_offcanvas-sidebar"),i=e.querySelectorAll(".gkit_close-side-widget"),s=e.querySelector(".gkit-sidebar-group"),r=e.querySelectorAll(".gkit-overlay"),a=e.querySelector(".gkit-disabled"),c=e.querySelector(".gkit-sidebar-widget"),o=e.querySelector(".gkit-sidebar-group"),l=document.querySelector("body"),n=e.getAttribute("data-wrapper"),d=e.getAttribute("data-settings"),g=JSON.parse(d).size,k=c.classList[1],u=o.classList[2],v=e=>{"Escape"!==e.key&&"Esc"!==e.key||y()},y=()=>{s.classList.remove("gkit_isActive"),l.classList.remove("gkit-offcanvas-container",k,u),setTimeout((()=>{l.classList.remove(`gkit-container-${n}`)}),1e3*g),l.classList.remove("gkit-disable-scroll"),document.removeEventListener("keydown",v)};t.forEach((e=>{e.addEventListener("click",(()=>{s.classList.contains("gkit_isActive")?y():(s.classList.add("gkit_isActive"),l.classList.add("gkit-offcanvas-container","gkit-container_isActive",k,u,`gkit-container-${n}`),a&&l.classList.add("gkit-disable-scroll"),document.addEventListener("keydown",v))}))})),i.forEach((e=>{e.addEventListener("click",y)})),r.forEach((e=>{e.addEventListener("click",y)}))}))}))})();