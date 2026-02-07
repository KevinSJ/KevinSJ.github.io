import{r as a,M as c,_ as f}from"./index-0c1fde36.js";function l(t,u,n=!1){const e=a(t);return c((o,s)=>({get(){return o(),e.value},set:f.debounce(r=>{e.value=r,s()},u,{leading:n})}))}export{l as u};
