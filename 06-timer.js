import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */const o={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")};class r{constructor({onTick:t}){this.intervalId=null,this.isActive=!1,this.onTick=t,this.init()}init(){const t=this.getTimeComponents(0);this.onTick(t)}start(){if(this.isActive)return;const t=Date.now();this.isActive=!0,this.intervalId=setInterval(()=>{const i=Date.now()-t,s=this.getTimeComponents(i);this.onTick(s)},1e3)}stop(){clearInterval(this.intervalId),this.isActive=!1;const t=this.getTimeComponents(0);this.onTick(t)}getTimeComponents(t){const e=this.pad(Math.floor(t%864e5/36e5)),i=this.pad(Math.floor(t%(1e3*60*60)/(1e3*60))),s=this.pad(Math.floor(t%(1e3*60)/1e3));return{hours:e,mins:i,secs:s}}pad(t){return String(t).padStart(2,"0")}}const n=new r({onTick:a});o.startBtn.addEventListener("click",n.start.bind(n));o.stopBtn.addEventListener("click",n.stop.bind(n));function a({hours:c,mins:t,secs:e}){o.clockface.textContent=`${c}:${t}:${e}`}
//# sourceMappingURL=06-timer.js.map
