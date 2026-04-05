import{_}from"./TextareaCopyable-59231e95.js";import{d as v,a0 as f,r as d,i as k,o as x,c as y,k as p,l as c,m as u,w as b,x as h}from"./index-0c1fde36.js";import{Y as S}from"./index-84e3bf78.js";import{_ as O}from"./Card-7ba5ce79.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";import"./public-api-a830925a.js";function g(m){const n=S.parse(m),t=[];for(const[r,a]of Object.entries(n?.services||{})){const e=a.environment;if(e===null)continue;const o=[];if(Array.isArray(e))for(const s of e){const[l,i=""]=s.split("=");o.push(`${l.trim()}=${i.trim()}`)}else if(typeof e=="object")for(const[s,l]of Object.entries(e))o.push(`${s.trim()}=${(l??"").toString().trim()}`);o.length&&(t.push(`# ${r}`),t.push(...o),t.push(""))}return t.join(`
`)}const D=v({__name:"docker-compose-to-env-file",setup(m){const{t:n}=f(),t=d(`services:
  web:
    environment:
      PORT: 3000
      DEBUG: true
  db:
    environment:
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=secret
`),r=k(()=>{try{return g(t.value)}catch(a){return a.toString()}});return(a,e)=>{const o=h,s=_,l=O;return x(),y("div",null,[p(o,{value:c(t),"onUpdate:value":e[0]||(e[0]=i=>u(t)?t.value=i:null),label:c(n)("tools.docker-compose-to-env-file.texts.label-docker-compose-file"),multiline:"",placeholder:c(n)("tools.docker-compose-to-env-file.texts.placeholder-paste-your-docker-compose-yaml-here"),rows:"10","mb-2":""},null,8,["value","label","placeholder"]),p(l,{title:c(n)("tools.docker-compose-to-env-file.texts.title-extract-env")},{default:b(()=>[p(s,{value:c(r),"onUpdate:value":e[1]||(e[1]=i=>u(r)?r.value=i:null),rows:"3","download-file-name":".env",multiline:""},null,8,["value"])]),_:1},8,["title"])])}}});export{D as default};
