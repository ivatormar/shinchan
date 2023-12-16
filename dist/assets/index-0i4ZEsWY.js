var h=Object.defineProperty;var g=(a,e,i)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var n=(a,e,i)=>(g(a,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();class t{static formatAmount(e){if(e<1e3)return e.toFixed(2);if(e<1e6)return(e/1e3).toFixed(2)+"K";if(e<1e9)return(e/1e6).toFixed(2)+"M";if(e<1e12)return(e/1e9).toFixed(2)+"B";if(e<1e15)return(e/1e12).toFixed(2)+"T";if(e<1e18)return(e/1e15).toFixed(2)+"Q";if(e<1e21)return(e/1e18).toFixed(2)+"Qi";if(e<1e24)return(e/1e21).toFixed(2)+"Sx";if(e<1e27)return(e/1e24).toFixed(2)+"Sp";if(e<1e30)return(e/1e27).toFixed(2)+"Oc";if(e<1e33)return(e/1e30).toFixed(2)+"No"}}n(t,"MsgBankSubtract","clicker:bank-subtract"),n(t,"MsgBankAdd","clicker:bank-add"),n(t,"MsgBankUpdate","clicker:bank-savings"),n(t,"MsgGeneratorUpgrade","clicker:generator-upgrade");const p='@font-face{font-family:Secret;src:url(/media/Chiclet-Personal-Used.ttf) format("truetype")}body{font-family:Roboto,Ubuntu,Oxygen,Open Sans,Helvetica Neue,sans-serif,system-ui}*,*:before,*:after{box-sizing:border-box}*{margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}.hidden{display:none!important}.clicker-generator-img{text-align:center}:host{height:fit-content;grid-row:1;display:flex;flex-direction:row-reverse;text-align:center;color:#fff;font-size:2rem;-webkit-text-stroke:1px #ffffff;padding-right:2rem}';class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.bankSavings=0}connectedCallback(){document.addEventListener(t.MsgBankAdd,this),document.addEventListener(t.MsgBankSubtract,this),this.render()}handleEvent(e){e.type===t.MsgBankAdd&&(this.bankSavings+=e.detail.quantity,this.dispatchCustomEventAddBankSavings(this.bankSavings),this.updateSavings()),e.type===t.MsgBankSubtract&&(this.bankSavings-=e.detail.quantity,this.dispatchCustomEventAddBankSavings(this.bankSavings),this.updateSavings())}dispatchCustomEventAddBankSavings(e){const i=new CustomEvent(t.MsgBankUpdate,{detail:{bankSavings:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){this.shadowRoot.innerHTML=`
      <style>
        ${p}
      </style>
      <p class="clicker-bank-savings">💵 ${t.formatAmount(this.bankSavings)}</p>
    `}updateSavings(){const e=this.shadowRoot.querySelector(".clicker-bank-savings");e.innerHTML=`💵 ${t.formatAmount(this.bankSavings)}`}}customElements.define("clicker-bank",f);const m='@font-face{font-family:Secret;src:url(/media/Chiclet-Personal-Used.ttf) format("truetype")}body{font-family:Roboto,Ubuntu,Oxygen,Open Sans,Helvetica Neue,sans-serif,system-ui}*,*:before,*:after{box-sizing:border-box}*{margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}.hidden{display:none!important}.clicker-generator-img{text-align:center}:host{padding:.5rem}h3{text-align:center}.clicker-generator-progress-bar{width:100%;height:2px;background-color:#666}.clicker-generator-progress{width:0%;height:100%;background-color:#00cc5b}.clicker-generators{display:grid;grid-template-columns:repeat(4,1fr)}.clicker-generator-level{font-weight:700}.buttonn{text-align:center}button{position:relative;padding:10px 25px;background:#ffffff;font-size:20px;font-weight:600;color:#000;box-shadow:0 0 10px #fff;border-radius:100px;border:none;transition:all .3s ease-in-out;cursor:pointer}.star-1{position:absolute;top:20%;left:20%;width:25px;height:auto;filter:drop-shadow(0 0 0 #fffdef);z-index:-5;transition:all .8s cubic-bezier(.05,.83,.43,.96)}.star-2{position:absolute;top:45%;left:45%;width:15px;height:auto;filter:drop-shadow(0 0 0 #fffdef);z-index:-5;transition:all .8s cubic-bezier(0,.4,0,1.01)}.star-3{position:absolute;top:40%;left:40%;width:5px;height:auto;filter:drop-shadow(0 0 0 #fffdef);z-index:-5;transition:all .8s cubic-bezier(0,.4,0,1.01)}.star-4{position:absolute;top:20%;left:40%;width:8px;height:auto;filter:drop-shadow(0 0 0 #fffdef);z-index:-5;transition:all .8s cubic-bezier(0,.4,0,1.01)}.star-5{position:absolute;top:25%;left:45%;width:15px;height:auto;filter:drop-shadow(0 0 0 #fffdef);z-index:-5;transition:all .8s cubic-bezier(0,.4,0,1.01)}.star-6{position:absolute;top:5%;left:50%;width:5px;height:auto;filter:drop-shadow(0 0 0 #fffdef);z-index:-5;transition:all .8s cubic-bezier(0,.4,0,1.01)}button:hover{background:rgb(0,0,0);color:#fff;box-shadow:0 0 80px #ffffff8c}button:hover .star-1{position:absolute;top:-20%;left:-20%;width:20px;height:auto;filter:drop-shadow(0 0 10px #fffdef);z-index:2}button:hover .star-2{position:absolute;top:35%;left:-25%;width:15px;height:auto;filter:drop-shadow(0 0 10px #fffdef);z-index:2}button:hover .star-3{position:absolute;top:80%;left:-10%;width:10px;height:auto;filter:drop-shadow(0 0 10px #fffdef);z-index:2}button:hover .star-4{position:absolute;top:-25%;left:105%;width:20px;height:auto;filter:drop-shadow(0 0 10px #fffdef);z-index:2}button:hover .star-5{position:absolute;top:30%;left:115%;width:15px;height:auto;filter:drop-shadow(0 0 10px #fffdef);z-index:2}button:hover .star-6{position:absolute;top:80%;left:105%;width:10px;height:auto;filter:drop-shadow(0 0 10px #fffdef);z-index:2}.fil0{fill:#fffdef}',r=class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.gId=this.getAttribute(r.G_ID),this.gImg=this.getAttribute(r.G_IMG),this.gTitle=this.getAttribute(r.G_TITLE),this.gPrice=parseInt(this.getAttribute(r.G_PRICE)),this.gLevel=parseInt(this.getAttribute(r.G_LEVEL)),this.gMps=parseInt(this.getAttribute(r.G_MPS)),this.gCooldown=parseInt(this.getAttribute(r.G_COOLDOWN)),this.bankSavings=0}connectedCallback(){this.render(),this.classList.add("hidden"),this.gLevel>0&&this.resetProgressBar(),document.addEventListener(t.MsgBankUpdate,this)}handleEvent(e){e.type===t.MsgBankUpdate&&(this.bankSavings=e.detail.bankSavings,this.updateGeneratorVisibility(),this.updateUpgradeButtonAvailable())}sendQuantityToBank(){const e=new CustomEvent(t.MsgBankAdd,{detail:{quantity:this.gMps*this.gLevel},bubbles:!0,composed:!0});this.dispatchEvent(e),this.resetProgressBar()}spendFromTheBank(e){const i=new CustomEvent(t.MsgBankSubtract,{detail:{quantity:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){this.shadowRoot.innerHTML=`
      <style>
        ${m}
      </style>
      <div>
        <h3>${this.gTitle}</h3>
        <div  class="clicker-generator-img">
        <img src="${this.gImg}" alt="${this.gTitle}">
        </div>
        <p class="clicker-generator-level">Level ${this.gLevel}</p>
        <div class="clicker-generator-progress-bar">
          <div class="clicker-generator-progress"></div>
        </div>
        <p class="clicker-generator-mps">Income ${t.formatAmount(this.gMps*this.gLevel)} 💰/s</p>
        <div class="buttonn">
        
        <button  disabled>
         Improve 💲${t.formatAmount(this.getCurrentCost())}
  <div class="star-1">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-2">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-3">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-4">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-5">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-6">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
</button>
</div>
      
      </div>
    `,this.shadowRoot.querySelector(".clicker-generator-add-btn").addEventListener("click",()=>this.upgrade())}updateGeneratorVisibility(){this.bankSavings>=this.gPrice&&this.classList.remove("hidden")}updateUpgradeButtonAvailable(){const e=this.shadowRoot.querySelector(".clicker-generator-add-btn");this.bankSavings>=this.getCurrentCost()?e.removeAttribute("disabled"):e.setAttribute("disabled","")}upgrade(){this.spendFromTheBank(this.getCurrentCost()),this.gLevel++,this.shadowRoot.querySelector(".clicker-generator-level").textContent=`Level ${this.gLevel}`,this.shadowRoot.querySelector(".clicker-generator-mps").textContent=`Income ${t.formatAmount(this.gMps*this.gLevel)} 💰/s`,this.shadowRoot.querySelector(".clicker-generator-add-btn").textContent=`Improve 💲 ${t.formatAmount(this.getCurrentCost())}`,this.resetProgressBar()}getCurrentCost(){return this.gPrice*1.3**this.gLevel}resetProgressBar(){clearInterval(this.cooldownTimer),this.cooldownTimer=null,this.currentCooldownTime=0,this.cooldownTimer=setInterval(()=>{this.updateProgressBar(),this.currentCooldownTime+=30},30)}updateProgressBar(){const e=this.shadowRoot.querySelector(".clicker-generator-progress");let i=this.currentCooldownTime/this.gCooldown;i>=1&&(i=1),e.style.width=`${i*100}%`,i>=1&&this.sendQuantityToBank()}};n(r,"G_ID","data-id"),n(r,"G_IMG","data-img"),n(r,"G_TITLE","data-title"),n(r,"G_PRICE","data-price"),n(r,"G_LEVEL","data-level"),n(r,"G_MPS","data-mps"),n(r,"G_COOLDOWN","data-cooldown");let d=r;customElements.define("clicker-generator",d);const u='@charset "UTF-8";@font-face{font-family:Secret;src:url(/media/Chiclet-Personal-Used.ttf) format("truetype")}body{font-family:Roboto,Ubuntu,Oxygen,Open Sans,Helvetica Neue,sans-serif,system-ui}*,*:before,*:after{box-sizing:border-box}*{margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}.hidden{display:none!important}.clicker-generator-img{text-align:center}@font-face{font-family:Secret;src:url(/media/secret-come-demo.regular.ttf) format("truetype")}:host{border-radius:5px;padding:.5rem;grid-column:2;grid-row:2;grid-template-rows:1fr auto 1fr;background-color:#538437b3;overflow-y:scroll;max-height:660px;height:fit-content}:host::-webkit-scrollbar{display:none}.clicker-generators{gap:15px;height:fit-content;display:grid;grid-template-columns:repeat(5,1fr);grid-auto-rows:minmax(100px,auto);grid-auto-flow:row dense;width:100%}@media only screen and (max-width: 768px){.clicker-generators{grid-template-columns:repeat(3,1fr)}}@media only screen and (max-width: 480px){.clicker-generators{grid-template-columns:repeat(2,1fr)}}clicker-generator{margin:2px;height:100%;width:100%;background:rgba(255,255,255,.28);border-radius:16px;box-shadow:0 4px 30px #0000004d;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}@media only screen and (max-width: 768px){clicker-generator{width:90%;max-width:none}}.title{font-family:Secret,sans-serif;grid-row:1;text-align:center;font-size:2.5rem;color:#fff;-webkit-text-stroke:1px rgb(0,0,0)}',v=[{id:1,img:"/media/shinChanimg/1.png",title:"Basic Shin Chan",price:1,level:1,mps:1,cooldown:500},{id:2,img:"/media/shinChanimg/2.png",title:"Novice Shin Chan",price:10,level:0,mps:3,cooldown:20},{id:3,img:"/media/shinChanimg/3.png",title:"Entry-Level Shin Chan",price:100,level:0,mps:10,cooldown:700},{id:4,img:"/media/shinChanimg/4.png",title:"Foundational Shin Chan",price:1e3,level:0,mps:100,cooldown:800},{id:5,img:"/media/shinChanimg/5.png",title:"Intermediate Shin Chan",price:1e4,level:0,mps:1e3,cooldown:900},{id:6,img:"/media/shinChanimg/6.png",title:"Standard Shin Chan",price:1e5,level:0,mps:1e4,cooldown:1e3},{id:7,img:"/media/shinChanimg/7.png",title:"Proficient Shin Chan",price:1e6,level:0,mps:1e5,cooldown:10},{id:8,img:"/media/shinChanimg/8.png",title:"Advanced Shin Chan",price:1e7,level:0,mps:1e6,cooldown:1200},{id:9,img:"/media/shinChanimg/9.png",title:"Expert Shin Chan",price:1e8,level:0,mps:1e7,cooldown:1300},{id:10,img:"/media/shinChanimg/10.png",title:"Master Shin Chan",price:1e9,level:0,mps:1e8,cooldown:1400},{id:11,img:"/media/shinChanimg/11.png",title:"Elite Shin Chan",price:1e10,level:0,mps:1e9,cooldown:1500},{id:12,img:"/media/shinChanimg/12.png",title:"Pro Shin Chan",price:1e11,level:0,mps:1e10,cooldown:1600},{id:13,img:"/media/shinChanimg/13.png",title:"Guru Shin Chan",price:1e12,level:0,mps:1e11,cooldown:1700},{id:14,img:"/media/shinChanimg/15.png",title:"Innovator Shin Chan",price:1e13,level:0,mps:1e12,cooldown:1800},{id:15,img:"/media/shinChanimg/16.png",title:"Visionary Shin Chan",price:1e14,level:0,mps:1e13,cooldown:1800}];class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.generators=[...v]}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${u}
      </style>
      <div class="title"><h2>Shin Chan Clicker</h2></div>
        <clicker-bank class="clicker-bank"></clicker-bank>
        <div class="clicker-generators">
          ${this.generators.map(e=>`
                <clicker-generator
                  ${d.G_TITLE} = "${e.title}"
                  ${d.G_IMG}="${e.img}"
                  ${d.G_PRICE} = "${e.price}"
                  ${d.G_LEVEL} = "${e.level}"
                  ${d.G_MPS}   = "${e.mps}"
                  ${d.G_COOLDOWN} = "${e.cooldown}">
                </clicker-generator>
              `).join("")}
        </div>
    `}}customElements.define("clicker-app",w);
