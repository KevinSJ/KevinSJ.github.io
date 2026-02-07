import{_ as s}from"./FormatTransformer-bc7b3ed5.js";import{j as a}from"./index-3229e516.js";import{w as l}from"./defaults-4d6daddf.js";import{d as u,a0 as i,o as m,j as c,l as o}from"./index-0c1fde36.js";import"./TextareaCopyable-59231e95.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";const d=`array(
  "a" => "b",
  "arr" => array(
    1,
    "2"
  ),
  "nested" => array(
    "c" => 12,
    "d" => "az"
  )
);`,C=u({__name:"php-array-to-json",setup(f){const{t:r}=i();function e(t){return l(()=>JSON.stringify(a.parse(t),null,2),"")}const p=[{validator:t=>t===""||a.parse(t),message:r("tools.php-array-to-json.texts.message-provided-php-array-is-not-valid")}];return(t,_)=>{const n=s;return m(),c(n,{"input-label":o(r)("tools.php-array-to-json.texts.input-label-your-php-array"),"input-default":d,"input-placeholder":o(r)("tools.php-array-to-json.texts.input-placeholder-paste-your-php-array-here"),"output-label":o(r)("tools.php-array-to-json.texts.output-label-json-version"),"output-language":"json","input-validation-rules":p,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{C as default};
