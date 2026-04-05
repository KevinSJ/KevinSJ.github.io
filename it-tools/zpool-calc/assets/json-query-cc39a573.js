import{d as y,a0 as g,am as j,r as f,i as v,R as b,aX as q,o as x,c as h,k as a,w as u,l as e,m as c,a as N,a6 as k,G as w,x as V,af as S}from"./index-0c1fde36.js";import{b as B}from"./jsonquery-6c5d853a.js";import{_ as Y}from"./TextareaCopyable-59231e95.js";import{_ as A}from"./a-07fc27a5.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";const C={"mb-2":"",flex:"","justify-center":""},J=2,T=y({__name:"json-query",setup(R){const{t}=g(),s=j({tool:"json-query",name:"q",defaultValue:`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`}),n=f(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),p=v(()=>{try{const o=JSON.parseBigNum(n.value);return JSON.stringify(B(o,s.value),null,J)}catch(o){return o.toString()}}),_=b({source:n,rules:[{validator:o=>q.parse(o),message:t("tools.json-query.texts.message-provided-json-is-not-valid")}]});return(o,l)=>{const i=V,d=A,m=S;return x(),h("div",null,[a(m,{title:e(t)("tools.json-query.texts.title-input"),"mb-2":""},{default:u(()=>[a(i,{value:e(s),"onUpdate:value":l[0]||(l[0]=r=>c(s)?s.value=r:null),label:e(t)("tools.json-query.texts.label-json-query"),placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-query-string-here"),"mb-2":""},null,8,["value","label","placeholder"]),N("div",C,[a(d,{target:"_blank",href:"https://jsonquerylang.org/docs/"},{default:u(()=>[k(w(e(t)("tools.json-query.texts.tag-see-json-query-lang-documentation")),1)]),_:1})]),a(i,{value:e(n),"onUpdate:value":l[1]||(l[1]=r=>c(n)?n.value=r:null),label:e(t)("tools.json-query.texts.label-json"),multiline:"",placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-here"),rows:"5",validation:e(_),"mb-2":""},null,8,["value","label","placeholder","validation"])]),_:1},8,["title"]),a(m,{title:e(t)("tools.json-query.texts.title-result")},{default:u(()=>[a(Y,{value:e(p),language:"json"},null,8,["value"])]),_:1},8,["title"])])}}});export{T as default};
