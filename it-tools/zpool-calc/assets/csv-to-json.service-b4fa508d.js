import{d as l}from"./index-4d6d007b.js";function p(e,t){return e.trim()===""?[]:e.split(`
`)[0].split(new RegExp(`[${t}]`)).map(n=>n.trim())}function f(e,t){if(e==="null")return null;if(e===""||typeof e>"u")return;const r=e.replace(/\\n/g,`
`).replace(/\\r/g,"\r").replace(/\\"/g,'"');if(r.startsWith('"')&&r.endsWith('"'))return r.slice(1,-1);if(!t)return r;try{return JSON.parseBigNum(r)}catch{return r}}function d(e,t=!1){const r=l(e)?.delimiter||",",n=p(e,r);return e.split(`
`).slice(1).map(s=>{const u=s.split(new RegExp(`[${r}](?=(?:(?:[^"]*"){2})*[^"]*$)`)).map(i=>i.trim());return n.reduce((i,a,c)=>(i[a]=f(u[c],t),i),{})})}export{d as c};
