!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"clearPageContent",(function(){return c})),n.d(t,"createHeader",(function(){return u}));const a=function(){function e(e,t,n,a){this.picture_url=e,this.name=t,this.description=n,this.price=a}let t=[new e("styles/food-images/burger.jpeg","Burger","Not gonna lie to you, this is a pretty average burger","18.95"),new e("styles/food-images/hotdog.jpeg","Hot Dog","Our intern Richard found this on the sidewalk outside!","3.95"),new e("styles/food-images/macandcheese.jpg","Mac and Cheese","More like Mac and Please am I right?","99.95"),new e("styles/food-images/pizza.jpeg","Pizza","This pizza tastes like chalk.","33.95"),new e("styles/food-images/gummybears.jpg","Gummy Bears","This is literally just Haribo Gummy Bears","0.95"),new e("styles/food-images/cheese.jpg","American Cheese","A single slice of American Cheese.","87.75")];return{populateMenuContent:()=>{c();let e=document.querySelector(".pageContent"),n=document.createElement("div");n.className="menu-container";let a=document.createElement("h2");a.innerHTML="MENU",a.className="menu-title",n.appendChild(a),u.toggleTab(u.tabs[1]),document.querySelector(".homepage-background").style.backgroundImage="url('styles/images/cloris-ying-1Qt-W4BGrgc-unsplash.jpg')";for(let e of t){let t=document.createElement("div");t.className="menu-cell";let a=document.createElement("div");a.className="food-info";let o=document.createElement("h3");o.className="food-name",o.innerHTML=e.name;let r=document.createElement("p");r.className="food-description",r.innerHTML=e.description;let l=document.createElement("div");l.className="food-price",l.innerHTML="$"+e.price;let u=document.createElement("IMG");u.className="food-img",u.src=e.picture_url,a.appendChild(o),a.appendChild(r),a.appendChild(l),t.appendChild(a),t.appendChild(u),n.appendChild(t)}e.appendChild(n)}}}(),o=function(){let e=document.getElementById("content");return{setBackgroundImage:()=>{let t=document.createElement("div");t.className="homepage-background",e.appendChild(t)},populatePageContent:()=>{c(),u.toggleTab(u.tabs[0]);let e=document.querySelector(".pageContent");document.querySelector(".homepage-background").style.backgroundImage="url('styles/images/andrew-seaman-sQopSb2K0CU-unsplash.jpg')";let t=document.createElement("div");t.innerHTML="Fake Restaurant",t.className="homepage-content";let n=document.createElement("div");n.innerHTML="It's simply not real - Guy Fieri",n.className="home-sub";let o=document.createElement("div"),r=document.createElement("button");r.innerHTML="See Menu",r.className="menu-button",r.addEventListener("click",a.populateMenuContent),o.appendChild(r),n.appendChild(o),t.appendChild(n),e.appendChild(t)}}}(),r={populateAboutContent:()=>{let e=document.querySelector(".pageContent");document.querySelector(".homepage-background").style.backgroundImage="url('styles/images/daan-evers-tKN1WXrzQ3s-unsplash.jpg')",c(),u.toggleTab(u.tabs[3]);let t=document.createElement("div");t.className="aboutInfo";let n=document.createElement("h2");n.innerHTML="ABOUT",n.className="about-header",t.appendChild(n);let a=document.createElement("p");a.innerHTML="Here at Fake Restaurant we have always prided ourselves on nothing because we do not exist. We are not famous for having food         but this is only due to the fact that we are not a real restaurant. Had we been an actual restaurant we definitely would have food. But we are not so we do not.",a.className="about-content",t.appendChild(a),e.appendChild(t)}},l={populateContactContent:()=>{c(),u.toggleTab(u.tabs[2]),document.querySelector(".homepage-background").style.backgroundImage="url('styles/images/petr-sevcovic-fyQr1T3GE34-unsplash.jpg')"}},u=function(){let e=document.querySelector("#content"),t=[];const n=e=>{let t=document.createElement("div");return t.innerHTML=e,t},u={HOME:o.populatePageContent,MENU:a.populateMenuContent,CONTACT:l.populateContactContent,ABOUT:r.populateAboutContent};return{populateHeader:()=>{let a=document.createElement("div");a.className="header";let o=document.createElement("div");o.innerHTML="Fake Restaurant",o.className="title";let r=document.createElement("div");r.className="headerContent";let l=n("HOME");t.push(l);let c=n("MENU");t.push(c);let s=n("CONTACT");t.push(s);let d=n("ABOUT");t.push(d);for(let e of t)e.className="tab "+e.innerHTML.toLowerCase(),e.addEventListener("click",u[e.innerHTML]),r.appendChild(e);a.appendChild(o),a.appendChild(r),e.appendChild(a)},tabs:t,toggleTab:e=>{for(let n of t)n.style.fontWeight=n===e?"900":"normal"}}}(),c=()=>{document.querySelector(".pageContent").innerHTML=""};o.setBackgroundImage(),(()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.className="pageContent",e.appendChild(t)})(),u.populateHeader(),o.populatePageContent()}]);