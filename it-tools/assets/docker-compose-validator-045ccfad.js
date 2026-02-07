import{d as N,a0 as C,r as O,i as _,o,c as a,k as l,w as c,a as k,l as e,m as b,a7 as w,a8 as T,a6 as i,G as m,a_ as B,j as L,ad as S}from"./index-0c1fde36.js";import{_ as V}from"./c-monaco-editor.vue_vue_type_script_setup_true_lang-735b1924.js";import{c as D}from"./composeverter-a96e10c8.js";import{N as E}from"./Alert-a9fb131b.js";import{_ as I}from"./a-07fc27a5.js";import"./editor.main-9e6d3164.js";import"./index-a6f01dde.js";import"./index-2709bfd9.js";import"./index-84e3bf78.js";import"./public-api-a830925a.js";import"./ajv-53acda87.js";const R={relative:"","w-full":""},A={key:0},P={key:1},W=N({__name:"docker-compose-validator",setup($){const{t}=C(),r=O(`version: '3.3'
services:
    nginx:
        ports:
            - '80:80'
        volumes:
            - '/var/run/docker.sock:/tmp/docker.sock:ro'
        restart: always
        logging:
            options:
                max-size: 1g
        image: nginx`),v=_(()=>{try{return D.validateDockerComposeToCommonSpec(r.value)}catch(u){return u.toString().split(`
`).map(s=>({line:-1,message:s,helpLink:""}))}}),p=_(()=>v.value),f={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(u,s)=>{const g=V,x=B,y=I,d=E;return o(),a("div",null,[l(x,{label:e(t)("tools.docker-compose-validator.texts.label-paste-your-docker-compose-file-content")},{default:c(()=>[k("div",R,[l(g,{value:e(r),"onUpdate:value":s[0]||(s[0]=n=>b(r)?r.value=n:null),theme:"vs-dark",language:"yaml",height:"250px",options:f},null,8,["value"])])]),_:1},8,["label"]),e(p).length>0?(o(),a("div",A,[l(d,{title:e(t)("tools.docker-compose-validator.texts.title-the-following-errors-occured"),type:"error","mt-5":""},{default:c(()=>[k("ul",null,[(o(!0),a(w,null,T(e(p),(n,h)=>(o(),a("li",{key:h},[i(m(n.message)+" (",1),n.helpLink?(o(),L(y,{key:0,target:"_blank",rel:"noreferer noopener"},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-see-docker-compose-help")),1)]),_:1})):S("",!0),i(m(e(t)("tools.docker-compose-validator.texts.tag-")),1)]))),128))])]),_:1},8,["title"])])):(o(),a("div",P,[l(d,{type:"success","mt-5":""},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-validation-successful")),1)]),_:1})]))])}}});export{W as default};
