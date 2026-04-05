import{d as _,a0 as h,r as u,b0 as g,c2 as y,o as r,c as f,a as t,a6 as n,G as l,l as o,j as v,w,ad as p,a7 as b,b$ as k,s as C,bq as B}from"./index-0c1fde36.js";const E={class:"flex flex-col"},L=["title"],D=`
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      outline: none;
    }
  </style>
</head>
<body tabindex="0">
<script>
(function () {
  const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"];
  let i = 0;
  function setColor() {
    document.body.style.background = colors[i];
  }
  function next() {
    i = (i + 1) % colors.length;
    setColor();
  }
  function prev() {
    i = (i - 1 + colors.length) % colors.length;
    setColor();
  }
  function focusBody() {
    document.body.focus();
  }
  setColor();
  focusBody();
  document.body.addEventListener("click", () => {
    focusBody();
    next();
  });
  document.addEventListener("fullscreenchange", focusBody);
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        prev();
        break;
    }
  });
})();
<\/script>
</body>
</html>
`,A=_({__name:"dead-pixel",setup(F){const{t:e}=h(),a=u(!1),c=u(null);async function x(){a.value=!0,await k();const s=c.value;s&&(s.onload=async()=>{try{await s.requestFullscreen()}catch(i){console.warn("Fullscreen failed",i)}})}function d(){!document.fullscreenElement&&a.value&&(a.value=!1)}return g(()=>{document.addEventListener("fullscreenchange",d)}),y(()=>{document.removeEventListener("fullscreenchange",d)}),(s,i)=>{const m=C;return r(),f(b,null,[t("div",E,[t("p",null,[n(l(o(e)("tools.dead-pixel.texts.tag-keyboard-shortcuts")),1),t("ul",null,[t("li",null,[t("strong",null,l(o(e)("tools.dead-pixel.texts.tag-arrow-right-arrow-down-space")),1),n(l(o(e)("tools.dead-pixel.texts.tag-next-color")),1)]),t("li",null,[t("strong",null,l(o(e)("tools.dead-pixel.texts.tag-arrow-left-arrow-up")),1),n(l(o(e)("tools.dead-pixel.texts.tag-previous-color")),1)]),t("li",null,[t("strong",null,l(o(e)("tools.dead-pixel.texts.tag-esc")),1),n(l(o(e)("tools.dead-pixel.texts.tag-exit-dead-pixel-mode")),1)])])]),a.value?p("",!0):(r(),v(m,{key:0,class:"mx-auto",onClick:x},{default:w(()=>[n(l(o(e)("tools.dead-pixel.texts.tag-start-dead-pixel")),1)]),_:1}))]),a.value?(r(),f("iframe",{key:0,ref_key:"iframeRef",ref:c,title:o(e)("tools.dead-pixel.texts.title-dead-pixel-iframe"),class:"dead-pixel-iframe",srcdoc:D,allow:"fullscreen"},null,8,L)):p("",!0)],64)}}});const N=B(A,[["__scopeId","data-v-891b3be8"]]);export{N as default};
