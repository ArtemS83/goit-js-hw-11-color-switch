(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r=null,c=document.querySelector("#start"),i=document.querySelector("#stop"),l=document.querySelector("body");function u(e){return e[function(e,t){void 0===t&&(t=0);return Math.floor(Math.random()*(e-t+1)+t)}(e.length-1)]}c.addEventListener("click",(function(){c.setAttribute("disabled","disabled"),r=setInterval((function(){l.style.backgroundColor=u(o),console.log(u(o))}),1e3)})),i.addEventListener("click",(function(){c.removeAttribute("disabled"),clearInterval(r),console.log("STOP setInterval")}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.78c601f6e457e14b2652.js.map