import{_ as i}from"./FormatTransformer-bc7b3ed5.js";import{d as p,a0 as c,aX as m,o as d,j as f,l as a}from"./index-0c1fde36.js";import{f as l}from"./index-64473eba.js";import{w as _}from"./defaults-4d6daddf.js";import"./TextareaCopyable-59231e95.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";import"./isPlainObject-1c699aec.js";function g({array:r}){const n=new Set;return r.forEach(t=>Object.keys(l(t)).forEach(o=>n.add(o))),Array.from(n)}function y(r){if(r===null)return"null";if(r===void 0)return"";const n=String(r).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return n.includes(",")?`"${n}"`:n}function h({arrayOrObject:r}){const n=Array.isArray(r)?r:[r],t=g({array:n}),o=n.map(e=>t.map(s=>y(l(e)[s])));return[t.join(","),...o].join(`
`)}const j=`[
   {
      "Age": 18,
      "Country": "Germany",
      "Gender": "Male",
      "Purchased": "N",
      "Salary": 20000
   },
   {
      "Age": 19,
      "Country": "France",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 22000
   },
   {
      "Age": 20,
      "Country": "England",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 24000
   }
]`,P=p({__name:"json-to-csv",setup(r){const{t:n}=c();function t(e){return _(()=>e===""?"":h({arrayOrObject:JSON.parseBigNum(e)}),"")}const o=[{validator:e=>e===""||m.parse(e),message:n("tools.json-to-csv.texts.message-provided-json-is-not-valid")}];return(e,s)=>{const u=i;return d(),f(u,{"input-label":a(n)("tools.json-to-csv.texts.input-label-your-raw-json"),"input-default":j,"input-placeholder":a(n)("tools.json-to-csv.texts.input-placeholder-paste-your-raw-json-here"),"output-label":a(n)("tools.json-to-csv.texts.output-label-csv-version-of-your-json"),"input-validation-rules":o,transformer:t,"download-file-name":"output.csv"},null,8,["input-label","input-placeholder","output-label"])}}});export{P as default};
