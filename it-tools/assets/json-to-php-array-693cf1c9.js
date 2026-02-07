import{_ as n}from"./FormatTransformer-bc7b3ed5.js";import{j as l}from"./index-3229e516.js";import{d as i,a0 as u,aX as a,o as m,j as c,l as r}from"./index-0c1fde36.js";import{w as f}from"./defaults-4d6daddf.js";import"./TextareaCopyable-59231e95.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";const d=`{
  a:"b", 
  arr: [1, "2"], 
  nested: {
    c:12, 
    d: "az"
  }
}`,E=i({__name:"json-to-php-array",setup(_){const{t}=u();function e(o){return f(()=>l.arrify(a.parse(o),{prettify:!0}),"")}const p=[{validator:o=>a.parse(o),message:t("tools.json-to-php-array.texts.message-provided-json-is-not-valid")}];return(o,h)=>{const s=n;return m(),c(s,{"input-label":r(t)("tools.json-to-php-array.texts.input-label-your-json"),"input-default":d,"input-placeholder":r(t)("tools.json-to-php-array.texts.input-placeholder-paste-your-json-here"),"output-label":r(t)("tools.json-to-php-array.texts.output-label-php-array-version"),"input-validation-rules":p,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{E as default};
